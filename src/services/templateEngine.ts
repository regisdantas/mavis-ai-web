import { createCommandContext, processCommands } from './templateCommands'

export const VARIABLE_REGEX = /^\$\{([a-zA-Z_]\w*)\}=(.*)$/gm

export type TemplateContext = {
  temperature?: string
  weather?: string
  city?: string
  country?: string
}

export const extractVariables = (
  text: string,
  context?: TemplateContext
): Record<string, string> => {
  const variables: Record<string, string> = {}

  text.replace(VARIABLE_REGEX, (_, name, value) => {
    variables[name] = value.trim()
    return ''
  })

  let changed = true

  while (changed) {
    changed = false

    for (const [name, value] of Object.entries(variables)) {
      if (!value.includes('@')) continue

      const processed = processCommands(
        resolveVariables(value, variables),
        createCommandContext({
          ...context,
          ...variables,
        })
      )

      if (processed !== value) {
        variables[name] = processed
        changed = true
      }
    }
  }

  return variables
}

export const removeVariableDeclarations = (text: string): string =>
  text.replace(/^\$\{([a-zA-Z_]\w*)\}=(.*)$/gm, '')

export const resolveVariables = (text: string, variables: Record<string, string>): string =>
  text.replace(/\$\{([a-zA-Z_]\w*)\}/g, (_, name) => variables[name] ?? '')

export const processButtons = (text: string): string =>
  text.replace(
    /@button\(\s*([^,]+?)\s*,\s*(.+?)\s*\)/g,
    (_, label, expression) =>
      `<button data-expression="${encodeURIComponent(expression.trim())}">${label}</button>`
  )

export const renderTemplate = (
  text: string,
  context: TemplateContext,
  isMobile: boolean
): string => {
  const variables = extractVariables(text)

  const evalContext = createCommandContext({
    ...context,

    ...Object.fromEntries(
      Object.entries(variables).map(([key, value]) => {
        if (value === '') {
          return [key, '']
        }

        const num = Number(value)

        return [key, Number.isNaN(num) ? value : num]
      })
    ),
  })

  return processCommands(
    resolveVariables(removeVariableDeclarations(processButtons(text)), variables),
    evalContext,
    isMobile
  )
}

export const executeExpression = (
  text: string,
  expression: string,
  context: TemplateContext
): string => {
  const match = expression.match(/^\$\{(\w+)\}=(.*)$/)

  if (!match) return text

  const variable = match[1]

  let js = match[2]

  const vars = extractVariables(text)

  js = processCommands(
    js,
    createCommandContext({
      ...context,
      ...vars,
    })
  )

  js = js.replace(/\$\{([a-zA-Z_]\w*)\}/g, (_, name) => JSON.stringify(vars[name] ?? ''))

  const result = Function(`return (${js})`)()

  const replacement = '${' + variable + '}=' + result

  const regex = new RegExp(`^\\$\\{${variable}\\}\\s*=([^\\r\\n]*)`, 'm')

  if (regex.test(text)) {
    return text.replace(regex, replacement)
  }

  return text.trimEnd() + '\n' + replacement
}
