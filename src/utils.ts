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
    name: 'markdown',
    title: '📝 Markdown Example',
    color: '#D7CCC8',
    text: `---
# Table of Contents
---

# h1 Heading 8-)
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading

## Badges

https://img.shields.io/badge/-READ-blue - Read this text.
![Watch](httpsields.io/badge/-WATCH-blueviolet - Watch this vídeo.
![Success](https:ds.io/badge/-SUCCESS-success - Finished with success.
https://img.shields.io/badge/-WARN-yellow - Warning: pay attention on this.
https://img.shields.io/badge/-ERROR-red - Error: finished with errors.
[![Create](.shields.io/badge/-CREATE%20YOUR%20OWN-FF69B4](https://shields.io/) - Click this to create your own customized badges.

## Horizontal Rules

### With underscores
___

### With dashes
---

### With stars
***

## CheckLists

* [x] List item checked
* [x] List item checked
* [ ] List item unchecked
* [x] List item checked
* [ ] List item unchecked
* [x] List item checked

## Emphasis

**This is bold text**

__This is bold text__

*This is italic text*

_This is italic text_

~~Strikethrough~~

## Blockquotes

> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.

## Lists

Unordered

+ Create a list by starting a line with \`+\`, \`-\`, or \`*\`
+ Sub-lists are made by indenting 2 spaces:
>  - Marker character change forces new list start:
>>    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa

1. You can use sequential numbers...
1. ...or keep all the numbers as \`1.\`

Start numbering with offset:

57. foo
1. bar

## Code

Inline \`code\`

Indented code

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code

Block code "fences"

\`\`\`
Sample text here...
\`\`\`

Syntax highlighting

\`\`\`js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
\`\`\`

## Tables

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

\\
Right aligned columns

| Option | Description |
| ------:| -----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

## Links

[link text](https://github.com/regisdantas/roadmap-me)

[link with title](https://github.com/regisdantas/roadmap-me)

Common: https://github.com/regisdantas/roadmap-me

## Images

https://octodex.github.com/images/minion.png

### Emojies

> Classic markup: :wink: :crush: :cry: :tear: :laughing: :yum:
>
> Shortcuts (emoticons): :-) :-( 8-) ;)

### Footnotes

Footnote 1 link[^first].

Footnote 2 link[^second].

Inline footnote^[Text of inline footnote] definition.

Duplicated footnote reference[^second].

[^first]: Footnote **can have markup**

    and multiple paragraphs.

[^second]: Footnote text.
`,
  },
  {
    id: 1,
    name: 'socratic-questioning',
    title: '🧠 Socratic Questioning',
    color: '#BBDEFB',
    text: `# 🧠 Socratic Questioning

## 📍 Situation
What happened?

---

## 💭 Automatic Thought
What thought came to mind?

---

## ✅ Evidence Supporting the Thought
-

---

## ❌ Evidence Against the Thought
-

---

## 🔄 Alternative Perspectives
What else could be true?

---

## ⚖️ Balanced Conclusion
What is a more realistic interpretation?

---

## 🚶 Next Action
What will I do next?
`,
  },
  {
    id: 2,
    name: 'daily-reflection',
    title: '✨ Daily Reflection',
    color: '#F8F9FA',
    text: `# 📖 Daily Reflection

## 📅 Date
-

---

## 🌟 Highlights
What went well today?

-

---

## 🧗 Challenges
What was difficult?

-

---

## 🎓 Lessons Learned
What did I learn?

-

---

## 🙏 Gratitude
What am I grateful for?

-

---

## 🎯 Tomorrow's Focus
What is the most important thing for tomorrow?

-
`,
  },
  {
    id: 3,
    name: 'gratitude-journal',
    title: '🙏 Gratitude Journal',
    color: '#FFF4B5',
    text: `# 🙏 Gratitude Journal

## ☀️ Today I Am Grateful For

1.
2.
3.

---

## 💝 Someone Who Made My Day Better

-

---

## 🏡 Something I Usually Take For Granted

-

---

## 🌈 Positive Memory

-

---

## 😊 How I Feel After Reflecting

-
`,
  },
  {
    id: 4,
    name: 'goal-planning',
    title: '🎯 SMART Goal Planning',
    color: '#FFDCC8',
    text: `# 🎯 SMART Goal Planning

## 🎯 Specific Goal
What exactly do I want to achieve?

-

---

## 📏 Measurable Outcome
How will I measure success?

-

---

## ✅ Achievable
Why is this realistic?

-

---

## ❤️ Relevant
Why does this matter to me?

-

---

## 📅 Time-Bound
What is the target date?

-

---

## 📝 Milestones

- [ ]
- [ ]
- [ ]

---

## 🚧 Potential Obstacles

-

---

## 🛡️ Mitigation Plan
How will I overcome obstacles?

-

---

## 👣 Next Action
What is the very next step?

-

---

## 🎉 Definition of Success

-
`,
  },
  {
    id: 5,
    name: 'weekly-review',
    title: '🏆 Weekly Review',
    color: '#B2DFDB',
    text: `# 🗓️ Weekly Review

## 🏆 Wins

-
-
-

---

## ⚡ Challenges

-
-
-

---

## 🎓 Lessons Learned

-

---

## 📈 Progress Toward Goals

-

---

## 🔧 What To Improve Next Week

-

---

## 🚀 Priorities For Next Week

1.
2.
3.
`,
  },
  {
    id: 6,
    name: 'habit-tracker',
    title: '✅ Habit Tracker',
    color: '#C8E6C9',
    text: `# 📈 Habit Tracker

## ✅ Habits

| Habit | Mon | Tue | Wed | Thu | Fri | Sat | Sun |
| ------ | --- | --- | --- | --- | --- | --- | --- |
| 💪 Exercise | | | | | | | |
| 🚶 Walk 10,000 Steps | | | | | | | |
| 🏃 Run | | | | | | | |
| 🧘 Meditation | | | | | | | |
| 📖 Read 30 Minutes | | | | | | | |
| ✍️ Journal | | | | | | | |
| 💧 Drink 2L Water | | | | | | | |
| 🛏️ Sleep 8 Hours | | | | | | | |
| 🌅 Wake Up Early | | | | | | | |
| 🦷 Floss | | | | | | | |
| 🍎 Eat Healthy | | | | | | | |
| 🥗 Eat Vegetables | | | | | | | |
| 🚫 No Junk Food | | | | | | | |
| 🚫 No Alcohol | | | | | | | |
| 🚭 No Smoking | | | | | | | |
| 📵 Limit Social Media | | | | | | | |
| 📚 Study | | | | | | | |
| 💻 Side Project | | | | | | | |
| 🎯 Deep Work | | | | | | | |
| 💰 Track Expenses | | | | | | | |
| 🧹 Clean Workspace | | | | | | | |
| 🏠 House Chores | | | | | | | |
| ☎️ Contact Family | | | | | | | |
| 🙏 Gratitude Practice | | | | | | | |
| 🌙 Evening Review | | | | | | | |

---

## 🔥 Streaks

| Habit | Current Streak | Best Streak |
| ------ | ------ | ------ |
| | | |
| | | |
| | | |

---

## 📊 Weekly Summary

### ✅ Habits Completed Well

-

### ⚠️ Habits That Need Attention

-

### 🎯 Focus Habits For Next Week

1.
2.
3.

---

## 📝 Notes

-
`,
  },
  {
    id: 7,
    name: 'decision-journal',
    title: '🤔 Decision Journal',
    color: '#CED4DA',
    text: `# ⚖️ Decision Journal

## 🎯 Decision

-

---

## 📚 Context

-

---

## 🛣️ Options

1.
2.
3.

---

## ✅ Pros

-

---

## ❌ Cons

-

---

## 🔮 Expected Outcome

-

---

## 🏁 Final Decision

-

---

## 📅 Review Later

What actually happened?
`,
  },
  {
    id: 8,
    name: 'cbt-thought-record',
    title: '💭 Thought Record (CBT)',
    color: '#DCCCFB',
    text: `# 💭 Thought Record

## 📍 Situation

-

---

## ❤️ Emotion

| Emotion | Intensity (0-100) |
| -------- | ---------------- |
| | |

---

## 💬 Automatic Thought

-

---

## 🧠 Cognitive Distortions

- Catastrophizing
- Mind Reading
- All-or-Nothing Thinking
- Overgeneralization
- Emotional Reasoning

---

## 🌱 Alternative Thought

-

---

## 😊 New Emotion

| Emotion | Intensity (0-100) |
| -------- | ---------------- |
| | |
`,
  },
  {
    id: 9,
    name: 'emotional-processing',
    title: '❤️ Emotional Processing',
    color: '#FADCE6',
    text: `# ❤️ Emotional Processing

## 🎭 What Am I Feeling?

-

---

## ⚡ What Triggered It?

-

---

## 🫀 Where Do I Feel It In My Body?

-

---

## 🌱 What Does This Emotion Need?

-

---

## 🎮 What Can I Control?

-

---

## 🍃 What Must I Accept?

-

---

## 🤗 Self-Compassion

What would I say to a close friend in this situation?

-
`,
  },
  {
    id: 10,
    name: 'morning-planning',
    title: '🚀 Morning Planning',
    color: '#FFF4B5',
    text: `# 🌅 Morning Planning

## 😊 How Do I Feel Today?

-

---

## 🎯 Top 3 Priorities

1.
2.
3.

---

## ⭐ One Thing That Would Make Today Successful

-

---

## 🚧 Potential Distractions

-

---

## 💪 Personal Commitment

Today I will:
`,
  },
  {
    id: 11,
    name: 'evening-review',
    title: '🌙 Evening Review',
    color: '#D7CCC8',
    text: `# 🌙 Evening Review

## 🏆 Today's Wins

-
-
-

---

## 🤔 Challenges

-

---

## 🎓 What Did I Learn?

-

---

## 🧭 Did I Live According To My Values?

-

---

## 🌱 What Will I Improve Tomorrow?

-

---

## 🙏 Gratitude

1.
2.
3.
`,
  },
]
