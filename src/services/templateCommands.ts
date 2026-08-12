export const createCommandContext = (data: Record<string, any> = {}): Record<string, any> => {
  const now = new Date()

  return {
    now,
    year: now.getFullYear(),
    month: now.getMonth() + 1,

    week: Math.ceil(
      ((now.getTime() - new Date(now.getFullYear(), 0, 1).getTime()) / 86400000 +
        new Date(now.getFullYear(), 0, 1).getDay() +
        1) /
        7
    ),

    countDates: (value: string) =>
      new Set(
        String(value || '')
          .split(',')
          .map((x) => x.trim())
          .filter(Boolean)
      ).size,

    hasDate: (value: string, date: string) => String(value || '').includes(date),

    ...data,
  }
}

export const processCommands = (
  text: string,
  context: Record<string, any> = {},
  isMobile: boolean = false,
  nested = 0
): string => {
  const now = new Date()

  text = text
    .replace(/@date\b/g, () => now.toLocaleDateString())

    .replace(/@time\b/g, () =>
      now.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      })
    )

    .replace(/@datetime\b/g, () => now.toLocaleString())

    .replace(/@dayofweek\b/g, () =>
      now.toLocaleDateString(undefined, {
        weekday: 'long',
      })
    )

    .replace(/@week\b/g, () => String(context.week))

    .replace(/@month\b/g, () => String(now.getMonth() + 1))

    .replace(/@monthname\b/g, () =>
      now.toLocaleDateString(undefined, {
        month: 'long',
      })
    )

    .replace(/@year\b/g, () => String(now.getFullYear()))

    .replace(/@today\b/g, () => now.toLocaleDateString())

    .replace(/@weather\b/g, () => context.weather || '@weather')

    .replace(/@temperature\b/g, () => context.temperature || '@temperature')

    .replace(/@city\b/g, () => context.city || '@city')

    .replace(/@country\b/g, () => context.country || '@country')

    .replace(/@upper\((.*?)\)/g, (_, v) => v.toUpperCase())

    .replace(/@lower\((.*?)\)/g, (_, v) => v.toLowerCase())

    .replace(/@select\[(.*?)\|(.*?)\]/g, (_, selected) => selected.trim())

    .replace(/@bmi\(([\d.]+),([\d.]+)\)/g, (_, weight, height) => {
      const w = Number(weight)
      const h = Number(height)

      if (!w || !h) {
        return '[BMI error]'
      }

      return (w / (h * h)).toFixed(1)
    })

    .replace(/@calculate\((.*?)\)/g, (_, expr) => {
      try {
        return String(Function(`return (${expr})`)())
      } catch {
        return '[Calculation error]'
      }
    })

    .replace(/@countdown\((.*?)\)/g, (_, targetDate) => {
      const target = new Date(targetDate)

      const diff = target.getTime() - now.getTime()

      return String(Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24))))
    })

    .replace(/@rating\((\d+)\)/g, (_, value) => {
      const v = Math.max(0, Math.min(5, Number(value)))

      return `${'★'.repeat(v)}${'☆'.repeat(5 - v)}`
    })

    .replace(/@progress\((-?[\d.]+)\)/g, (_, value) => {
      const ratio = Math.max(-1, Math.min(1, Number(value)))

      const width = context.isMobile ? 5 : 10

      const absRatio = Math.abs(ratio)

      const percent = Math.round(ratio * 100)
      const label = `${percent}%`

      const filled = Math.round(absRatio * width)

      let bar =
        ratio >= 0
          ? '█'.repeat(filled) + '░'.repeat(width - filled)
          : '░'.repeat(width - filled) + '█'.repeat(filled)

      const start = Math.max(0, Math.floor((width - label.length) / 2))

      return bar.slice(0, start) + label + bar.slice(start + label.length)
    })

    .replace(/@eval\(([^()]*(?:\([^()]*\)[^()]*)*)\)/g, (_, expr) => {
      try {
        const fn = Function(...Object.keys(context), `return (${expr})`)

        return String(fn(...Object.values(context)))
      } catch {
        return '[Expression error]'
      }
    })

  if (text.includes('@') && nested < 5) {
    return processCommands(text, context, isMobile, nested + 1)
  }

  return text
}
