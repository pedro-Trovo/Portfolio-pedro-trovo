import { useEffect, useRef } from 'react'

export function useMouseGlow() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      el.style.setProperty('--glow-x', `${x}%`)
      el.style.setProperty('--glow-y', `${y}%`)
    }

    const handleMouseLeave = () => {
      el.style.removeProperty('--glow-x')
      el.style.removeProperty('--glow-y')
    }

    el.addEventListener('mousemove', handleMouseMove)
    el.addEventListener('mouseleave', handleMouseLeave)
    return () => {
      el.removeEventListener('mousemove', handleMouseMove)
      el.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return ref
}
