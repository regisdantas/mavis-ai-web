export const isJsonString = (myString: string) => {
  try {
    JSON.parse(myString)
  } catch (e) {
    return false
  }
  return true
}

export const formatDate = (date: string): string => {
  const parts = date.split('-')
  if (parts.length !== 3) {
    return date
  }
  return `${parts[2]}/${parts[1]}/${parts[0]}`
}

export const limitInputLength = (e: any, maxLength: number) => {
  const el = e.currentTarget
  if (el.innerText.length > maxLength) {
    el.innerText = el.innerText.slice(0, maxLength)
    const range = document.createRange()
    const sel = window.getSelection()
    range.selectNodeContents(el)
    range.collapse(false)
    sel?.removeAllRanges()
    sel?.addRange(range)
  }
}

export type TemplateOption = {
  id: number
  name: string
  title: string
  text: string
  color: string
}

export const templateOptions: TemplateOption[] = [
  {
    id: 0,
    name: 'habits',
    title: '🔁 Habits - /year',
    color: '#BBDEFB',
    text: String.raw`<div style="display:flex; gap:8px; align-items:flex-start;">

<div style="flex:1">

| Action | Habit | Count | Target | Progress | Done |
|---------|---------|---------|---------|---------|---------|
| @button(Done, \${follow_diet_done_dates}=\${follow_diet_done_dates} + "@date" + "," ) | 🍽️ Follow Diet | @eval(countDates(follow_diet_done_dates)) | 120 | @progress(@eval(countDates(follow_diet_done_dates) / 120)) | @eval(follow_diet_done_dates.includes("@date") ? '✅' : '⬜') |
| @button(Done, \${drink_water_done_dates}=\${drink_water_done_dates} + "@date" + "," ) | 🚰 Drink 3L Water | @eval(countDates(drink_water_done_dates)) | 120 | @progress(@eval(countDates(drink_water_done_dates) / 120)) | @eval(drink_water_done_dates.includes("@date") ? '✅' : '⬜') |
| @button(Done, \${exercise_done_dates}=\${exercise_done_dates} + "@date" + "," ) | 💪 Exercise | @eval(countDates(exercise_done_dates)) | 90 | @progress(@eval(countDates(exercise_done_dates) / 90)) | @eval(exercise_done_dates.includes("@date") ? '✅' : '⬜') |
| @button(Done, \${no_alcohol_done_dates}=\${no_alcohol_done_dates} + "@date" + "," ) | 🚱 No Alcohol | @eval(countDates(no_alcohol_done_dates)) | 120 | @progress(@eval(countDates(no_alcohol_done_dates) / 120)) | @eval(no_alcohol_done_dates.includes("@date") ? '✅' : '⬜') |
| @button(Done, \${no_porn_done_dates}=\${no_porn_done_dates} + "@date" + "," ) | 🔞 No Porn | @eval(countDates(no_porn_done_dates)) | 120 | @progress(@eval(countDates(no_porn_done_dates) / 120)) | @eval(no_porn_done_dates.includes("@date") ? '✅' : '⬜') |
| @button(Done, \${no_fap_done_dates}=\${no_fap_done_dates} + "@date" + "," ) | 🚯 No FAP | @eval(countDates(no_fap_done_dates)) | 120 | @progress(@eval(countDates(no_fap_done_dates) / 120)) | @eval(no_fap_done_dates.includes("@date") ? '✅' : '⬜') |
| @button(Done, \${study_done_dates}=\${study_done_dates} + "@date" + "," ) | 📖 Study | @eval(countDates(study_done_dates)) | 100 | @progress(@eval(countDates(study_done_dates) / 100)) | @eval(study_done_dates.includes("@date") ? '✅' : '⬜') |
| @button(Done, \${read_done_dates}=\${read_done_dates} + "@date" + "," ) | 📙 Read | @eval(countDates(read_done_dates)) | 100 | @progress(@eval(countDates(read_done_dates) / 100)) | @eval(read_done_dates.includes("@date") ? '✅' : '⬜') |
| @button(Done, \${meditation_done_dates}=\${meditation_done_dates} + "@date" + "," ) | 🧘 Meditation | @eval(countDates(meditation_done_dates)) | 100 | @progress(@eval(countDates(meditation_done_dates) / 100)) | @eval(meditation_done_dates.includes("@date") ? '✅' : '⬜') |
| @button(Done, \${gratitude_done_dates}=\${gratitude_done_dates} + "@date" + "," ) | 🙏 Gratitude | @eval(countDates(gratitude_done_dates)) | 100 | @progress(@eval(countDates(gratitude_done_dates) / 100)) | @eval(gratitude_done_dates.includes("@date") ? '✅' : '⬜') |
| @button(Done, \${journal_done_dates}=\${journal_done_dates} + "@date" + "," ) | ✍🏼 Journal | @eval(countDates(journal_done_dates)) | 100 | @progress(@eval(countDates(journal_done_dates) / 100)) | @eval(journal_done_dates.includes("@date") ? '✅' : '⬜') |
| @button(Done, \${track_mood_done_dates}=\${track_mood_done_dates} + "@date" + "," ) | 😃 Track Mood | @eval(countDates(track_mood_done_dates)) | 120 | @progress(@eval(countDates(track_mood_done_dates) / 120)) | @eval(track_mood_done_dates.includes("@date") ? '✅' : '⬜') |
| @button(Done, \${good_work_done_dates}=\${good_work_done_dates} + "@date" + "," ) | 👷 Good Work | @eval(countDates(good_work_done_dates)) | 120 | @progress(@eval(countDates(good_work_done_dates) / 120)) | @eval(good_work_done_dates.includes("@date") ? '✅' : '⬜') |

</div>

<div style="flex:1">

| Action | Habit | Count | Target | Progress | Done |
|---------|---------|---------|---------|---------|---------|
| @button(Done, \${projects_done_dates}=\${projects_done_dates} + "@date" + "," ) | 🏗️ Projects | @eval(countDates(projects_done_dates)) | 80 | @progress(@eval(countDates(projects_done_dates) / 80)) | @eval(projects_done_dates.includes("@date") ? '✅' : '⬜') |
| @button(Done, \${organization_done_dates}=\${organization_done_dates} + "@date" + "," ) | 🗂️ Organization | @eval(countDates(organization_done_dates)) | 60 | @progress(@eval(countDates(organization_done_dates) / 60)) | @eval(organization_done_dates.includes("@date") ? '✅' : '⬜') |
| @button(Done, \${fun_done_dates}=\${fun_done_dates} + "@date" + "," ) | 🎉 Fun | @eval(countDates(fun_done_dates)) | 60 | @progress(@eval(countDates(fun_done_dates) / 60)) | @eval(fun_done_dates.includes("@date") ? '✅' : '⬜') |
| @button(Done, \${run_done_dates}=\${run_done_dates} + "@date" + "," ) | 🏃 Run | @eval(countDates(run_done_dates)) | 60 | @progress(@eval(countDates(run_done_dates) / 60)) | @eval(run_done_dates.includes("@date") ? '✅' : '⬜') |
| @button(Done, \${meal_prep_done_dates}=\${meal_prep_done_dates} + "@date" + "," ) | 🍱 Meal Prep | @eval(countDates(meal_prep_done_dates)) | 40 | @progress(@eval(countDates(meal_prep_done_dates) / 40)) | @eval(meal_prep_done_dates.includes("@date") ? '✅' : '⬜') |
| @button(Done, \${measure_weight_done_dates}=\${measure_weight_done_dates} + "@date" + "," ) | ⚖️ Measure Weight | @eval(countDates(measure_weight_done_dates)) | 120 | @progress(@eval(countDates(measure_weight_done_dates) / 120)) | @eval(measure_weight_done_dates.includes("@date") ? '✅' : '⬜') |
| @button(Done, \${cold_shower_done_dates}=\${cold_shower_done_dates} + "@date" + "," ) | 🛀 Cold Shower | @eval(countDates(cold_shower_done_dates)) | 90 | @progress(@eval(countDates(cold_shower_done_dates) / 90)) | @eval(cold_shower_done_dates.includes("@date") ? '✅' : '⬜') |
| @button(Done, \${wim_hof_done_dates}=\${wim_hof_done_dates} + "@date" + "," ) | 🫁 Wim Hof | @eval(countDates(wim_hof_done_dates)) | 90 | @progress(@eval(countDates(wim_hof_done_dates) / 90)) | @eval(wim_hof_done_dates.includes("@date") ? '✅' : '⬜') |
| @button(Done, \${body_scan_done_dates}=\${body_scan_done_dates} + "@date" + "," ) | 👃 Body Scan | @eval(countDates(body_scan_done_dates)) | 90 | @progress(@eval(countDates(body_scan_done_dates) / 90)) | @eval(body_scan_done_dates.includes("@date") ? '✅' : '⬜') |
| @button(Done, \${dev_challenge_done_dates}=\${dev_challenge_done_dates} + "@date" + "," ) | 👨‍💻 Dev Challenge | @eval(countDates(dev_challenge_done_dates)) | 100 | @progress(@eval(countDates(dev_challenge_done_dates) / 100)) | @eval(dev_challenge_done_dates.includes("@date") ? '✅' : '⬜') |
| @button(Done, \${family_activity_done_dates}=\${family_activity_done_dates} + "@date" + "," ) | 👨‍👩‍👦 Family Activity | @eval(countDates(family_activity_done_dates)) | 50 | @progress(@eval(countDates(family_activity_done_dates) / 50)) | @eval(family_activity_done_dates.includes("@date") ? '✅' : '⬜') |
| @button(Done, \${nature_time_done_dates}=\${nature_time_done_dates} + "@date" + "," ) | 🌿 Nature Time | @eval(countDates(nature_time_done_dates)) | 50 | @progress(@eval(countDates(nature_time_done_dates) / 50)) | @eval(nature_time_done_dates.includes("@date") ? '✅' : '⬜') |
| @button(Done, \${music_creation_done_dates}=\${music_creation_done_dates} + "@date" + "," ) | 🎵 Music Creation | @eval(countDates(music_creation_done_dates)) | 60 | @progress(@eval(countDates(music_creation_done_dates) / 60)) | @eval(music_creation_done_dates.includes("@date") ? '✅' : '⬜') |

</div>

</div>

\${follow_diet_done_dates}=
\${drink_water_done_dates}=
\${exercise_done_dates}=
\${no_alcohol_done_dates}=
\${no_porn_done_dates}=
\${no_fap_done_dates}=
\${study_done_dates}=
\${read_done_dates}=
\${meditation_done_dates}=
\${gratitude_done_dates}=
\${journal_done_dates}=
\${track_mood_done_dates}=
\${good_work_done_dates}=
\${projects_done_dates}=
\${organization_done_dates}=
\${fun_done_dates}=
\${run_done_dates}=
\${meal_prep_done_dates}=
\${measure_weight_done_dates}=
\${cold_shower_done_dates}=
\${wim_hof_done_dates}=
\${body_scan_done_dates}=
\${dev_challenge_done_dates}=
\${family_activity_done_dates}=
\${nature_time_done_dates}=
\${music_creation_done_dates}=`,
  },
  {
    id: 1,
    name: 'journal',
    title: '✍🏼 Journal - /date',
    color: '#F3E5C8',
    text: String.raw`📍 /city - /country, /dayofweek, /datetime
🌤️ Weather: /weather /temperature
🌙 Moon: /moon
🍂 Season: /season

⚖️ Weight: \${weight} kg
📏 BMI: @bmi(\${weight},\${height})
🎂 Age: /age(1991-12-21)

💤 Sleep: \${sleep}h
🎭 Mood: @select[ | happy 😄, joyful 😊 , excited 🤩 , calm 😌 , neutral 😐 , tired 😪 , sleepy 😴 , worried 😟 , anxious 😰 , sad 😢 ]
⚡ Energy: @select[ | High 🚀, Medium ⚡, Low 🔋 ]
🧠 Focus: @select[ | High 🚀, Medium ⚡, Low 😐, Poor 👎 ]

\${sleep}=
\${weight}=
\${height}=

📝 Day Summary:



🗓️ Schedule:

-

🎯 Top priority:

-

❤️ Gratitude:

-

🤝 Commitments:

-

✅ Main achievement:

-

💭 Notes:

- `,
  },
]
