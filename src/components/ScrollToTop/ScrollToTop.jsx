import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'
import './ScrollToTop.css'

export default function ScrollToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const fn = () => setShow(window.scrollY > 400)
    window.addEventListener('scroll', fn, { passive:true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <button
      className={`stt ${show ? 'visible' : ''}`}
      onClick={() => window.scrollTo({ top:0, behavior:'smooth' })}
      aria-label="Back to top"
    >
      <ArrowUp size={18} />
    </button>
  )
}
