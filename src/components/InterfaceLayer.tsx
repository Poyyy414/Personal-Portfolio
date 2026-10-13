import { useEffect } from 'react'

export function InterfaceLayer() {
  useEffect(() => {
    const root = document.documentElement

    const updatePointer = (event: PointerEvent) => {
      root.style.setProperty('--pointer-x', `${event.clientX}px`)
      root.style.setProperty('--pointer-y', `${event.clientY}px`)
    }

    const updateScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0
      root.style.setProperty('--page-progress', `${Math.min(progress, 1)}`)
    }

    window.addEventListener('pointermove', updatePointer, { passive: true })
    window.addEventListener('scroll', updateScroll, { passive: true })
    updateScroll()

    return () => {
      window.removeEventListener('pointermove', updatePointer)
      window.removeEventListener('scroll', updateScroll)
    }
  }, [])

  return (
    <div className="interface-layer" aria-hidden="true">
      <div className="pointer-aura" />
      <div className="screen-noise" />
      <div className="page-progress"><span /></div>
    </div>
  )
}
