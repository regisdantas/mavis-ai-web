import React from 'react'
import { BodyContainer, DataContainer, IconButton } from '../../styles/global'
import { IoMdAddCircleOutline } from 'react-icons/io'
import { MdOutlineClear } from 'react-icons/md'
import { FiStar, FiArchive, FiTrash2 } from 'react-icons/fi'
import { IoMdSearch } from 'react-icons/io'

import Card from '../../components/Card'
import uuid from 'react-uuid'
import {
  EntryList,
  MenuContainer,
  MenuBarContainer,
  DateContainer,
  ActionsContainer,
  SearchContainer,
  SelectedPage,
} from './styles'
import { database } from '../../services/firebase'
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  addDoc,
  setDoc,
  deleteDoc,
} from 'firebase/firestore'

import { FiLock } from 'react-icons/fi'

import { UserAuth } from '../../contexts/AuthContext'
import { isJsonString } from '../../utils'
import { useDashboard } from '../../contexts/DashboardContext'
import { HeaderPortal } from '../../components/HeaderPortal'
import userImg from '../../assets/user.png'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import { FiEye } from 'react-icons/fi'
import { IoMdArrowDropdown, IoMdArrowDropleft } from 'react-icons/io'
import VerticalBar from '../../components/VerticalBar'
import { BsJournalBookmark } from 'react-icons/bs'
import { LiaProjectDiagramSolid } from 'react-icons/lia'

interface IEntry {
  uid: string
  id: string
  content: string
  date: string
  createdAt: string
}

const pages = [
  { name: 'Favorites', icon: FiStar, items: undefined },
  { name: 'All', icon: FiEye, items: undefined },
  { name: 'Journal', icon: BsJournalBookmark, items: undefined },
  {
    name: 'Projects',
    icon: LiaProjectDiagramSolid,
    items: ['Personal', 'Work', 'Projects', 'Ideas', 'Important'],
  },
  { name: 'Archive', icon: FiArchive, items: undefined },
  { name: 'Trash', icon: FiTrash2, items: undefined },
]

const Dashboard: React.FC = () => {
  const { selectedDate, setSelectedDate } = useDashboard()
  const [collapsed, setCollapsed] = React.useState(false)
  const [searchContent, setSearchContent] = React.useState(String)
  const [entries, setEntries] = React.useState<IEntry[]>([])
  const { user, logOut } = UserAuth()
  const startDate = new Date().toISOString().split('T')[0]
  const dateRef = React.useRef<HTMLInputElement>(null)
  const [selectedPage, setSelectedPage] = React.useState(pages[0])

  const handleCollapseExpand = async (state: boolean) => {
    setCollapsed(state)
    entries.map((entry) => {
      const objContent = JSON.parse(entry.content)
      handleChangeEntry(entry.id, JSON.stringify({ ...objContent, collapsed: state }))
    })
  }

  const handleLockAll = async () => {
    entries.map((entry) => {
      const objContent = JSON.parse(entry.content)
      handleChangeEntry(entry.id, JSON.stringify({ ...objContent, locked: true }))
    })
  }

  const handleLogout = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error)
    }
  }

  const handleDateIncDec = (days: number) => {
    const date = new Date(selectedDate)
    date.setDate(date.getDate() + days)
    const dateStr = date.toISOString().split('T')[0]
    setSelectedDate(dateStr)
    if (dateRef !== null && dateRef.current !== null) {
      dateRef.current.value = dateStr
    }
  }

  const handleDateChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value)
  }

  const search = async (value: string) => {
    setSearchContent(value)
  }

  async function handleAddNewEntry(event: any) {
    const newEntry: IEntry = {
      uid: user.uid,
      id: uuid(),
      content: '',
      date: selectedDate,
      createdAt: new Date().toISOString(),
    }
    scrollToTop()
    const newEntries = [...entries, newEntry]
    newEntries.sort((a, b) => {
      if (a.date > b.date) return -1
      if (a.date < b.date) return 1
      if (a.createdAt > b.createdAt) return -1
      if (a.createdAt < b.createdAt) return 1
      return 0
    })
    setEntries(newEntries)
    const userDocRef = doc(database, 'users', user.uid)
    const entriesRef = collection(userDocRef, 'entries')
    await addDoc(entriesRef, newEntry)
    setSelectedPage(pages[1])
  }

  async function fetchEntries() {
    const userDocRef = doc(database, 'users', user.uid)
    const entriesRef = collection(userDocRef, 'entries')
    const querySnapshot = await getDocs(entriesRef)
    const entries: IEntry[] = []
    querySnapshot.forEach((doc) => {
      let newEntry = doc.data() as IEntry
      if (!newEntry.createdAt) {
        newEntry.createdAt = newEntry.date
      }
      entries.push(newEntry)
    })
    entries.sort((a, b) => {
      if (a.date > b.date) return -1
      if (a.date < b.date) return 1
      if (a.createdAt > b.createdAt) return -1
      if (a.createdAt < b.createdAt) return 1
      return 0
    })
    setEntries(entries)
  }

  React.useEffect(() => {
    fetchEntries()
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const handleDeleteEntry = async (id: string) => {
    const newEntries = entries.filter((entry) => entry.id !== id)
    setEntries(newEntries)

    const userDocRef = doc(database, 'users', user.uid)
    const entriesRef = collection(userDocRef, 'entries')
    const userQuery = query(entriesRef, where('id', '==', id))
    const querySnapshot = await getDocs(userQuery)
    querySnapshot.forEach((document) => {
      deleteDoc(doc(database, `users/${user.uid}/entries`, document.id))
    })
  }

  const handleChangeEntry = async (id: string, content: string) => {
    const newEntries = entries.map((entry) => {
      if (entry.id === id) {
        entry.content = content
      }
      return entry
    })
    setEntries(newEntries)

    const changedEntry = entries.find((entry) => entry.id === id)
    if (changedEntry) {
      changedEntry.content = content
      const userDocRef = doc(database, 'users', user.uid)
      const entriesRef = collection(userDocRef, 'entries')
      const userQuery = query(entriesRef, where('id', '==', id))
      const querySnapshot = await getDocs(userQuery)
      querySnapshot.forEach((document) => {
        setDoc(doc(database, `users/${user.uid}/entries`, document.id), changedEntry)
      })
    }
  }

  let count = 0
  const isLoggedIn =
    user !== null &&
    user.displayName !== undefined &&
    user.photoURL !== null &&
    user.photoURL !== undefined

  const SelectedPageIcon = searchContent.trim() === '' ? selectedPage.icon : IoMdSearch
  return (
    <BodyContainer>
      <HeaderPortal>
        {isLoggedIn && (
          <MenuContainer>
            <SelectedPage>
              <SelectedPageIcon />
              {searchContent.trim() === '' ? selectedPage.name : 'Search'}
            </SelectedPage>
            {selectedPage.name == 'Journal' ? (
              <DateContainer>
                <IconButton title="Previous day" onClick={() => handleDateIncDec(-1)}>
                  <FiArrowLeft />
                </IconButton>

                <input
                  title="Select date"
                  ref={dateRef}
                  type="date"
                  defaultValue={startDate}
                  onChange={handleDateChanged}
                />

                <IconButton title="Next day" onClick={() => handleDateIncDec(1)}>
                  <FiArrowRight />
                </IconButton>
              </DateContainer>
            ) : (
              <></>
            )}

            <SearchContainer>
              <input
                placeholder="Search"
                value={searchContent}
                onChange={(e) => search(e.target.value)}
              />

              <IconButton title="Clear search" onClick={() => setSearchContent('')}>
                <MdOutlineClear />
              </IconButton>
            </SearchContainer>

            <ActionsContainer>
              <IconButton title="Lock all notes" onClick={handleLockAll}>
                <FiLock />
              </IconButton>

              {collapsed ? (
                <IconButton title="Expand all notes" onClick={() => handleCollapseExpand(false)}>
                  <IoMdArrowDropleft />
                </IconButton>
              ) : (
                <IconButton title="Collapse all notes" onClick={() => handleCollapseExpand(true)}>
                  <IoMdArrowDropdown />
                </IconButton>
              )}

              <IconButton title="Add note" onClick={handleAddNewEntry}>
                <IoMdAddCircleOutline />
              </IconButton>
            </ActionsContainer>
          </MenuContainer>
        )}

        {isLoggedIn && (
          <MenuBarContainer>
            <img
              title="Logout"
              src={user.photoURL ? user.photoURL : userImg}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null
                currentTarget.src = userImg
              }}
              alt="User photograph"
              onClick={() => handleLogout()}
            />
          </MenuBarContainer>
        )}
      </HeaderPortal>

      <VerticalBar pages={pages} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />

      <DataContainer>
        <EntryList>
          {entries.map((entry) => {
            const visible =
              searchContent.trim() === ''
                ? selectedPage.name === 'All' ||
                  (selectedPage.name === 'Journal' && entry.date === selectedDate) ||
                  (selectedPage.name === 'Favorites' &&
                    isJsonString(entry.content) &&
                    JSON.parse(entry.content).favorite === true)
                : entry.content.toLowerCase().includes(searchContent.toLowerCase())

            return visible ? (
              <Card
                key={entry.id}
                id={entry.id}
                date={entry.date}
                number={(count = count + 1)}
                content={entry.content}
                onDeleteCard={handleDeleteEntry}
                onChangeContent={handleChangeEntry}
              />
            ) : (
              <div key={entry.id} />
            )
          })}
        </EntryList>
      </DataContainer>
    </BodyContainer>
  )
}

export default Dashboard
