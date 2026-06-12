import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import avatarImg from '../../assets/avatar.png'
import './Hero.css'

const WORDS = [
  'stunning web apps.',
  'clean REST APIs.',
  'data pipelines.',
  'responsive UIs.',
  'full-stack solutions.',
]

function useTypewriter(words) {
  const [display, setDisplay]   = useState('')
  const [wordIdx, setWordIdx]   = useState(0)
  const [charIdx, setCharIdx]   = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[wordIdx]
    const delay = deleting ? 40 : (charIdx === word.length ? 1800 : 65)

    const t = setTimeout(() => {
      if (!deleting) {
        if (charIdx < word.length) {
          setDisplay(word.slice(0, charIdx + 1))
          setCharIdx(c => c + 1)
        } else {
          setDeleting(true)
        }
      } else {
        if (charIdx > 0) {
          setDisplay(word.slice(0, charIdx - 1))
          setCharIdx(c => c - 1)
        } else {
          setDeleting(false)
          setWordIdx(i => (i + 1) % words.length)
        }
      }
    }, delay)
    return () => clearTimeout(t)
  }, [charIdx, deleting, wordIdx, words])

  return display
}

export default function Hero() {
  const typed = useTypewriter(WORDS)

  const stats = [
    { num: '6+',  label: 'Projects'     },
    { num: '6mo', label: 'Internship'   },
    { num: '10+', label: 'Tech Stack'   },
  ]

  const floatBadges = [
    { icon: '⚛️', label: 'React',   cls: 'fb1' },
    { icon: '🐍', label: 'Python',  cls: 'fb2' },
    { icon: '🗄️', label: 'SQL',     cls: 'fb3' },
    { icon: '🟢', label: 'Node.js', cls: 'fb4' },
  ]

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  }
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show:   { opacity: 1, y: 0, transition: { duration: .65, ease: [.4,0,.2,1] } },
  }

  return (
    <section className="hero" id="home">
      <div className="hero-grid-bg" aria-hidden="true" />

      <div className="hero-wrap container">
        {/* LEFT — text */}
        <motion.div
          className="hero-content"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div className="hero-badge" variants={fadeUp}>
            <span className="badge-dot" />
            Available for opportunities
          </motion.div>

          <motion.h1 className="hero-title" variants={fadeUp}>
            Hi, I'm{' '}
            <span className="grad">Sravya</span>
            <br />
            <span className="hero-sub-name">Varanasi</span>
          </motion.h1>

          <motion.div className="hero-tw" variants={fadeUp}>
            <span className="tw-prefix">I build </span>
            <span className="tw-word">{typed}</span>
            <span className="tw-cursor">|</span>
          </motion.div>

          <motion.p className="hero-desc" variants={fadeUp}>
            A passionate Software Developer skilled in React, Node.js, Python, and 
            data-driven pipelines. I craft secure, performant, and delightful digital experiences.
          </motion.p>

          <motion.div className="hero-cta" variants={fadeUp}>
            <a
              href="#projects"
              className="btn-outline"
              onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}
            >
              Explore Projects <ArrowRight size={15} />
            </a>
          </motion.div>

          <motion.div className="hero-stats" variants={fadeUp}>
            {stats.map((s, i) => (
              <>
                {i > 0 && <div key={`d${i}`} className="stat-div" />}
                <div key={s.label} className="stat">
                  <span className="stat-n">{s.num}</span>
                  <span className="stat-l">{s.label}</span>
                </div>
              </>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT — avatar */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8, delay: .25, ease: [.4,0,.2,1] }}
        >
          <div className="av-wrap">
            <div className="av-ring ring-a" />
            <div className="av-ring ring-b" />
            <div className="av-ring ring-c" />
            <div className="av-frame">
              <img src={avatarImg} alt="Sravya Varanasi" />
            </div>
            {floatBadges.map(b => (
              <div key={b.label} className={`fb ${b.cls}`}>
                <span>{b.icon}</span> {b.label}
              </div>
            ))}
            <div className="orbit-track">
              <div className="orbit-dot" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        className="scroll-cue"
        onClick={e => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }) }}
        aria-label="Scroll down"
      >
        <div className="sc-line" />
        <ChevronDown size={16} className="sc-icon" />
      </a>
    </section>
  )
}
