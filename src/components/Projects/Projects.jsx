import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GitBranch, ExternalLink, Briefcase, GraduationCap, FileText, Building, Car, Brain } from 'lucide-react'
import './Projects.css'

const PROJECTS = [
  {
    id: 1,
    title: 'Job Portal',
    desc: 'Full-stack job platform with job search, listing management, and user auth. Modular client-server-API architecture with responsive CSS and secure database integration.',
    tags: ['JavaScript','HTML/CSS','Node.js','REST API','Auth'],
    category: 'fullstack',
    Icon: Briefcase,
    github: 'https://github.com/sravya-113/job-portal',
    demo:   'https://job-portal-new-server-mu-orcin.vercel.app',
    num:    '01',
  },
  {
    id: 2,
    title: 'Educity',
    desc: 'Responsive single-page college promo site built with React & Vite. Smooth scrolling, gallery, testimonials, Web3Forms integration, and lazy-loaded media for top mobile UX.',
    tags: ['React','Vite','CSS3','Web3Forms','Lazy Load'],
    category: 'frontend',
    Icon: GraduationCap,
    github: 'https://github.com/sravya-113/Educity',
    demo:   'https://educity-livid-tau.vercel.app',
    num:    '02',
  },
  {
    id: 3,
    title: 'Resume Builder',
    desc: 'Interactive resume builder with real-time live preview and PDF export. Built with React featuring dynamic form state management across education, experience, and skills sections.',
    tags: ['React','JavaScript','PDF Gen','Real-time Preview'],
    category: 'frontend',
    Icon: FileText,
    github: 'https://github.com/sravya-113/portofolio',
    demo:   'https://portofolio-silk-zeta.vercel.app',
    num:    '03',
  },
  {
    id: 4,
    title: 'HKM Services',
    desc: 'Professional services platform in TypeScript. Modern UI, service listings, and optimized performance with clean component architecture deployed live on Vercel.',
    tags: ['TypeScript','React','Vercel','Responsive'],
    category: 'fullstack',
    Icon: Building,
    github: 'https://github.com/sravya-113/hkm-services',
    demo:   'https://hkm-services.vercel.app',
    num:    '04',
  },
  {
    id: 5,
    title: 'Ride Sharing System',
    desc: 'TypeScript-powered ride-sharing backend with real-time route matching, user management, and booking logic. Clean API design with modular scalable architecture.',
    tags: ['TypeScript','Node.js','REST API','Algorithm'],
    category: 'data',
    Icon: Car,
    github: 'https://github.com/sravya-113/Ride-Sharing-System',
    demo:   'https://github.com/sravya-113/Ride-Sharing-System',
    demoLabel: 'View Repo',
    num:    '05',
  },
  {
    id: 6,
    title: 'Placement Prediction Pipeline',
    desc: 'Python & Pandas ML pipeline for student placement prediction — data cleaning, feature engineering, model evaluation automation, and vectorized processing for speed (built during internship).',
    tags: ['Python','Pandas','ML','REST API','Automation'],
    category: 'data',
    Icon: Brain,
    github: 'https://github.com/sravya-113',
    demo:   'https://github.com/sravya-113',
    demoLabel: 'Profile',
    num:    '06',
  },
]

const FILTERS = [
  { label:'All',         value:'all'       },
  { label:'Full-Stack',  value:'fullstack'  },
  { label:'Frontend',    value:'frontend'   },
  { label:'Data / Back', value:'data'       },
]

export default function Projects() {
  const [active, setActive] = useState('all')
  const [ref, inView] = useInView({ threshold: 0.08, triggerOnce: true })

  const visible = active === 'all'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === active)

  return (
    <section className="projects section" id="projects" ref={ref}>
      <div className="container">
        <motion.div
          className="sec-header"
          initial={{ opacity:0, y:30 }}
          animate={inView ? { opacity:1, y:0 } : {}}
          transition={{ duration:.6 }}
        >
          <p className="sec-tag">What I've Built</p>
          <h2 className="sec-title">Featured <span className="grad">Projects</span></h2>
          <p className="sec-sub">A curated selection of my best work</p>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="filters"
          initial={{ opacity:0, y:20 }}
          animate={inView ? { opacity:1, y:0 } : {}}
          transition={{ duration:.5, delay:.15 }}
        >
          {FILTERS.map(f => (
            <button
              key={f.value}
              className={`filter-btn ${active === f.value ? 'active' : ''}`}
              onClick={() => setActive(f.value)}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div className="proj-grid" layout>
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity:0, scale:.96, y:20 }}
                animate={{ opacity:1, scale:1, y:0 }}
                exit={{ opacity:0, scale:.94, y:10 }}
                transition={{ duration:.4, delay: i * 0.06, ease:[.4,0,.2,1] }}
              >
                <ProjectCard p={p} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="proj-cta"
          initial={{ opacity:0 }}
          animate={inView ? { opacity:1 } : {}}
          transition={{ duration:.5, delay:.4 }}
        >
          <a href="https://github.com/sravya-113" target="_blank" rel="noopener" className="btn-outline">
            <GitBranch size={16} /> View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}

function ProjectCard({ p }) {
  const { title, desc, tags, Icon, github, demo, demoLabel = 'Live Demo', num } = p
  return (
    <div className="proj-card glass">
      <div className="pc-glow" aria-hidden />
      <div className="pc-head">
        <div className="pc-icon"><Icon size={22} /></div>
        <span className="pc-num">{num}</span>
      </div>
      <h3 className="pc-title">{title}</h3>
      <p className="pc-desc">{desc}</p>
      <div className="pc-tags">
        {tags.map(t => <span key={t} className="tag-pill">{t}</span>)}
      </div>
      <div className="pc-actions">
        <a href={github} target="_blank" rel="noopener" className="pc-btn ghost">
          <GitBranch size={14} /> GitHub
        </a>
        <a href={demo} target="_blank" rel="noopener" className="pc-btn glow">
          <ExternalLink size={14} /> {demoLabel}
        </a>
      </div>
    </div>
  )
}
