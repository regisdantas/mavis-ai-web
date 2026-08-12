// src/pages/Dashboard/utils/getNoteColor.ts

export const getNoteColor = (content: string) => {
  try {
    const parsed = JSON.parse(content)

    return parsed.color || '#cccccc'
  } catch {
    return '#cccccc'
  }
}
