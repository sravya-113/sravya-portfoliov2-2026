import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MapPin, Briefcase, Mail, GraduationCap, BookOpen } from 'lucide-react'
import './About.css'

/* ── Tech stack for the marquee ── */
const allTech = [
  { name: 'Python',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'React',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Node.js',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Express',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', invert: true },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'HTML5',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'Git',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Vite',       icon: 'https://vitejs.dev/logo.svg' },
  { name: 'Postman',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
  { name: 'C',          icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
  { name: 'MongoDB',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Pandas',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
]

const marqueeItems = [...allTech, ...allTech]

function fadeUp(delay = 0) {
  return {
    hidden: { opacity: 0, y: 32 },
    show:   { opacity: 1, y: 0, transition: { duration: .65, delay, ease: [.4, 0, .2, 1] } },
  }
}

export default function About() {
  const [ref, inView] = useInView({ threshold: 0.08, triggerOnce: true })

  return (
    <>
      <section className="about section" id="about">
        <div className="container">

          <motion.div
            className="sec-header"
            ref={ref}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            variants={fadeUp()}
          >
            <p className="sec-tag">Who I Am</p>
            <h2 className="sec-title">About <span className="grad">Me</span></h2>
            <p className="sec-sub">Turning ideas into elegant digital realities</p>
          </motion.div>

          {/* ── Two-column grid ── */}
          <div className="about-grid">

            {/* LEFT — // My Story + bio paragraphs + edu cards */}
            <motion.div
              className="about-left"
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              variants={fadeUp(.1)}
            >
              <div className="story-label">
                <span className="story-slash">// </span>
                <span className="story-title">My Story</span>
              </div>

              <p className="bio">
                I'm <strong>Sravya Varanasi</strong>, a B.Tech Computer Science student at{' '}
                <strong>Andhra University College of Engineering</strong>, Visakhapatnam,
                graduating in 2027. My journey started with a curiosity for how data can be
                transformed into meaningful decisions — that curiosity evolved into a deep
                passion for full-stack development and data-driven applications.
              </p>

              <p className="bio">
                I specialise in building responsive, production-grade web applications with
                <strong> React</strong> and <strong>Node.js</strong>, designing clean RESTful APIs,
                and leveraging <strong>Python</strong> for data pipelines, ML workflows, and
                automation — always with a security-first mindset.
              </p>

              <p className="bio">
                With internship experience in both data science and software development, I thrive
                at bridging the gap between backend logic and beautiful user experiences.
                Currently seeking roles where I can contribute to impactful products and grow
                alongside exceptional teams.
              </p>

              {/* Education cards */}
              <div className="edu-cards">
                <div className="edu-row">
                  <div className="edu-row-icon"><GraduationCap size={18} /></div>
                  <div className="edu-row-body">
                    <div className="edu-row-top">
                      <span className="edu-row-title">B.Tech in Computer Science &amp; Engineering</span>
                      <span className="edu-row-year">2024 – 2027</span>
                    </div>
                    <span className="edu-row-sub">Andhra University College of Engineering, Visakhapatnam</span>
                  </div>
                </div>

                <div className="edu-row">
                  <div className="edu-row-icon"><BookOpen size={18} /></div>
                  <div className="edu-row-body">
                    <div className="edu-row-top">
                      <span className="edu-row-title">Diploma in Computer Science</span>
                      <span className="edu-row-year">2021 – 2024</span>
                    </div>
                    <span className="edu-row-sub">Government Polytechnic for Women, Srikakulam &nbsp;<span className="edu-grade">🏆 92.4%</span></span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT — Experience */}
            <motion.div
              className="about-right"
              initial="hidden"
              animate={inView ? 'show' : 'hidden'}
              variants={fadeUp(.2)}
            >
              <h3 className="col-heading">Experience</h3>

              <div className="exp-list">

                {/* ISKCON HUBLI — Ongoing (top) */}
                <div className="exp-card glass">
                  <div className="exp-icon exp-icon--active"><Briefcase size={20} /></div>
                  <div className="exp-body">
                    <div className="exp-title-row">
                      <h4>Software Developer Intern</h4>
                      <span className="exp-badge">Ongoing</span>
                    </div>
                    <p className="exp-org">ISKCON HUBLI</p>
                    <p className="exp-meta">Apr 2025 – Present</p>
                    <ul className="exp-bullets">
                      <li>Building responsive web solutions for temple management</li>
                      <li>Developing REST APIs and integrating React frontends</li>
                      <li>Implementing event scheduling &amp; donor management features</li>
                      <li>Optimising application performance and reducing load times</li>
                      <li>Collaborating with cross-functional teams for UI/UX improvements</li>
                      <li>Shipping production-ready code in agile sprints</li>
                    </ul>
                  </div>
                </div>

                {/* Nlite Asian — bottom */}
                <div className="exp-card glass">
                  <div className="exp-icon"><Briefcase size={20} /></div>
                  <div className="exp-body">
                    <div className="exp-title-row">
                      <h4>Data Science Intern</h4>
                    </div>
                    <p className="exp-org">Nlite Asian Pvt Ltd</p>
                    <p className="exp-meta">Nov 2023 – Apr 2024</p>
                    <ul className="exp-bullets">
                      <li>Built placement prediction pipelines with scikit-learn &amp; Pandas</li>
                      <li>Designed REST endpoints for ML model inference</li>
                      <li>Automated data cleaning and feature engineering workflows</li>
                      <li>Improved data throughput by 40% via vectorised processing</li>
                      <li>Conducted EDA &amp; visualisation with Matplotlib &amp; Seaborn</li>
                      <li>Documented model architectures and API integrations</li>
                    </ul>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>

          {/* ── TECH STACK — single large bordered rectangle, cards scroll inside ── */}
          <motion.div
            className="ts-container"
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: .65, delay: .3, ease: [.4,0,.2,1] }}
          >
            <div className="ts-header">
              <span className="ts-label">Tech Stack</span>
            </div>

            {/* Scrolling strip INSIDE the rectangle */}
            <div className="ts-viewport">
              <div className="ts-track">
                {marqueeItems.map((s, i) => (
                  <div key={i} className="ts-item">
                    <img
                      src={s.icon}
                      alt={s.name}
                      style={s.invert ? { filter: 'invert(1) brightness(.75)' } : {}}
                    />
                    <span>{s.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  )
}
