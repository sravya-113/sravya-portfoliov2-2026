import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Monitor, Server, BarChart3, ShieldCheck, Check } from 'lucide-react'
import './Services.css'

const SERVICES = [
  {
    id:'frontend',
    Icon: Monitor,
    title: 'Frontend Development',
    desc: 'Blazing-fast, pixel-perfect UIs with React, Vite, and modern JavaScript. Responsive layouts, smooth animations, and accessibility-first design that converts.',
    features: ['React & TypeScript Apps','Responsive CSS Layouts','Performance Optimization','Interactive Animations'],
    featured: false,
  },
  {
    id:'fullstack',
    Icon: Server,
    title: 'Full-Stack Web Development',
    desc: 'End-to-end development from React frontends to Node.js/Express backends. Clean REST APIs, database integration, and secure authentication.',
    features: ['REST API Design','Node.js & Express','Database Integration','User Authentication'],
    featured: true,
    featuredLabel: 'Most Popular',
  },
  {
    id:'data',
    Icon: BarChart3,
    title: 'Data Science & Automation',
    desc: 'Python-powered data pipelines, automated scripts, and ML model integration. From data cleaning to feature engineering and model evaluation.',
    features: ['Python Pipelines','Data Cleaning & Engineering','ML Model Integration','Process Automation'],
    featured: false,
  },
  {
    id:'security',
    Icon: ShieldCheck,
    title: 'Security Consulting',
    desc: 'Security-first development with hands-on experience in Wireshark, Nmap, John the Ripper, and Hashcat. Vulnerability assessment and secure coding.',
    features: ['Vulnerability Assessment','Secure API Design','Network Analysis','Security Code Reviews'],
    featured: false,
  },
]

export default function Services() {
  const [ref, inView] = useInView({ threshold: 0.08, triggerOnce: true })

  return (
    <section className="services section" id="services" ref={ref}>
      <div className="container">
        <motion.div
          className="sec-header"
          initial={{ opacity:0, y:30 }}
          animate={inView ? { opacity:1, y:0 } : {}}
          transition={{ duration:.6 }}
        >
          <p className="sec-tag">What I Offer</p>
          <h2 className="sec-title">My <span className="grad">Services</span></h2>
          <p className="sec-sub">Expert solutions tailored to your needs</p>
        </motion.div>

        <div className="svc-grid">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity:0, y:30 }}
              animate={inView ? { opacity:1, y:0 } : {}}
              transition={{ duration:.55, delay: .1 + i * 0.1, ease:[.4,0,.2,1] }}
            >
              <ServiceCard s={s} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ s }) {
  const { Icon, title, desc, features, featured, featuredLabel } = s
  return (
    <div className={`svc-card glass ${featured ? 'featured' : ''}`}>
      {featured && <span className="svc-badge">{featuredLabel}</span>}
      <div className="svc-icon-wrap">
        <div className="svc-icon"><Icon size={24} /></div>
      </div>
      <h3>{title}</h3>
      <p>{desc}</p>
      <ul className="svc-list">
        {features.map(f => (
          <li key={f}><Check size={13} className="svc-check" /> {f}</li>
        ))}
      </ul>
    </div>
  )
}
