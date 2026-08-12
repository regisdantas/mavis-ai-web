import React from 'react'

export function useCardMeasurements(dependencies: React.DependencyList = []) {
  const cardRefs = React.useRef<Record<string, HTMLDivElement | null>>({})

  const [cardHeights, setCardHeights] = React.useState<Record<string, number>>({})

  const refreshCardHeights = React.useCallback(() => {
    const heights: Record<string, number> = {}

    Object.entries(cardRefs.current).forEach(([id, element]) => {
      if (element) {
        heights[id] = element.offsetHeight
      }
    })

    setCardHeights(heights)
  }, [])

  React.useEffect(() => {
    const observer = new ResizeObserver(() => {
      refreshCardHeights()
    })

    Object.values(cardRefs.current).forEach((element) => {
      if (element) {
        observer.observe(element)
      }
    })

    return () => observer.disconnect()
  }, [refreshCardHeights])

  React.useEffect(() => {
    refreshCardHeights()
  }, [...dependencies, refreshCardHeights])

  const totalHeight = React.useMemo(
    () => Object.values(cardHeights).reduce((a, b) => a + b, 0),
    [cardHeights]
  )

  return {
    cardRefs,
    cardHeights,
    totalHeight,
    refreshCardHeights,
  }
}
