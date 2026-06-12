import { useEffect, useRef } from 'react'
import './CustomCursor.css'

export default function CustomCursor() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const dot  = dotRef.current
    const ring = ringRef.current
    let mx = 0, my = 0, rx = 0, ry = 0

    const move = (e) => { mx = e.clientX; my = e.clientY }
    window.addEventListener('mousemove', move)

    const loop = () => {
      rx += (mx - rx) * 0.14
      ry += (my - ry) * 0.14
      dot.style.transform  = `translate(${mx - 4}px, ${my - 4}px)`
      ring.style.transform = `translate(${rx - 16}px, ${ry - 16}px)`
      requestAnimationFrame(loop)
    }
    loop()

    const addHover  = () => ring.classList.add('hover')
    const removeHover = () => ring.classList.remove('hover')
    const interactables = document.querySelectorAll('a,button,[data-cursor]')
    interactables.forEach(el => {
      el.addEventListener('mouseenter', addHover)
      el.addEventListener('mouseleave', removeHover)
    })

    return () => {
      window.removeEventListener('mousemove', move)
    }
  }, [])

  return (
    <>
      <div className="c-dot"  ref={dotRef}  aria-hidden="true" />
      <div className="c-ring" ref={ringRef} aria-hidden="true" />
    </>
  )
}
