export type MacrosContext = {
  weather?: string
  temperature?: string
  city?: string
  country?: string
}

export const processMacros = (text: string, context: MacrosContext = {}): string => {
  const now = new Date()

  return text
    .replace(/\/date\b/g, () => now.toLocaleDateString())

    .replace(/\/time\b/g, () =>
      now.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      })
    )

    .replace(/\/datetime\b/g, () => now.toLocaleString())

    .replace(/\/dayofweek\b/g, () =>
      now.toLocaleDateString(undefined, {
        weekday: 'long',
      })
    )

    .replace(/\/week\b/g, () => {
      const start = new Date(now.getFullYear(), 0, 1)

      const week = Math.ceil(
        ((now.getTime() - start.getTime()) / 86400000 + start.getDay() + 1) / 7
      )

      return String(week)
    })

    .replace(/\/month\b/g, () => String(now.getMonth() + 1))

    .replace(/\/monthname\b/g, () =>
      now.toLocaleDateString(undefined, {
        month: 'long',
      })
    )

    .replace(/\/year\b/g, () => String(now.getFullYear()))

    .replace(/\/today\b/g, () => now.toLocaleDateString())

    .replace(/\/yesterday\b/g, () => {
      const d = new Date(now)
      d.setDate(d.getDate() - 1)
      return d.toLocaleDateString()
    })

    .replace(/\/tomorrow\b/g, () => {
      const d = new Date(now)
      d.setDate(d.getDate() + 1)
      return d.toLocaleDateString()
    })

    .replace(/\/weather\b/g, () => context.weather || '/weather')

    .replace(/\/temperature\b/g, () => context.temperature || '/temperature')

    .replace(/\/city\b/g, () => context.city || '/city')

    .replace(/\/country\b/g, () => context.country || '/country')

    .replace(/\/moon\b/g, () => {
      const lp = 2551443

      const current = now.getTime() / 1000

      const newMoon = new Date('2001-01-24').getTime() / 1000

      const phase = ((current - newMoon) % lp) / lp

      if (phase < 0.03) return '🌑 New Moon'
      if (phase < 0.22) return '🌒 Waxing Crescent'
      if (phase < 0.28) return '🌓 First Quarter'
      if (phase < 0.47) return '🌔 Waxing Gibbous'
      if (phase < 0.53) return '🌕 Full Moon'
      if (phase < 0.72) return '🌖 Waning Gibbous'
      if (phase < 0.78) return '🌗 Last Quarter'

      return '🌘 Waning Crescent'
    })

    .replace(/\/season\b/g, () => {
      const month = now.getMonth() + 1

      if ([12, 1, 2].includes(month)) {
        return '☀️ Summer'
      }

      if ([3, 4, 5].includes(month)) {
        return '🍂 Autumn'
      }

      if ([6, 7, 8].includes(month)) {
        return '❄️ Winter'
      }

      return '🌸 Spring'
    })

    .replace(/\/guid\b/g, () => crypto.randomUUID())

    .replace(/\/uuid\b/g, () => crypto.randomUUID())

    .replace(/\/random\((\d+),(\d+)\)/g, (_, min, max) => {
      const a = Number(min)
      const b = Number(max)

      return String(Math.floor(Math.random() * (b - a + 1)) + a)
    })

    .replace(/\/random\((\d+)\)/g, (_, max) => String(Math.floor(Math.random() * Number(max)) + 1))

    .replace(/\/random\b/g, () => String(Math.floor(Math.random() * 100) + 1))

    .replace(/\/password\((\d+)\)/g, (_, length) => {
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*'

      const len = Number(length)

      return Array.from(
        { length: len },
        () => chars[Math.floor(Math.random() * chars.length)]
      ).join('')
    })

    .replace(/\/password\b/g, () => {
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*'

      return Array.from({ length: 12 }, () => chars[Math.floor(Math.random() * chars.length)]).join(
        ''
      )
    })

    .replace(
      /\/barcode\((.*?)\)/g,
      (_, value) =>
        `https://bwipjs-api.metafloor.com/?bcid=code128&text=${encodeURIComponent(value)}`
    )

    .replace(
      /\/qrcode\((.*?)\)/g,
      (_, value) =>
        `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(value)}`
    )

    .replace(/\/upper\((.*?)\)/g, (_, value) => value.toUpperCase())

    .replace(/\/lower\((.*?)\)/g, (_, value) => value.toLowerCase())

    .replace(/\/stars\((\d+)\)/g, (_, count) =>
      '⭐'.repeat(Math.max(0, Math.min(Number(count), 10)))
    )

    .replace(/\/age\((.*?)\)/g, (_, birthDate) => {
      const birth = new Date(birthDate)

      let age = now.getFullYear() - birth.getFullYear()

      const m = now.getMonth() - birth.getMonth()

      if (m < 0 || (m === 0 && now.getDate() < birth.getDate())) {
        age--
      }

      return String(age)
    })

    .replace(/\/countdown\((.*?)\)/g, (_, targetDate) => {
      const target = new Date(targetDate)

      const diff = target.getTime() - now.getTime()

      return String(Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24))))
    })

    .replace(/\/lorem\((\d+)\)/g, (_, words) => {
      const lorem =
        'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'

      const list = lorem.split(' ')

      return Array.from({ length: Number(words) }, (_, i) => list[i % list.length]).join(' ')
    })

    .replace(/\/lorem\b/g, () => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.')

    .replace(/\/eval\(([^()]*(?:\([^()]*\)[^()]*)*)\)/g, (_, expr) => {
      try {
        const fn = Function(...Object.keys(context), `return (${expr})`)

        return String(fn(...Object.values(context)))
      } catch {
        return '[Expression error]'
      }
    })
}
