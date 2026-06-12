import {
  SiPython,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiGit,
  SiVite,
  SiPostman,
  SiC
} from 'react-icons/si'
import './TechStackMarquee.css'

const row1 = [
  { name: 'Python',     icon: <SiPython     color="#3776AB" /> },
  { name: 'JavaScript', icon: <SiJavascript color="#F7DF1E" /> },
  { name: 'React',      icon: <SiReact      color="#61DAFB" /> },
  { name: 'Node.js',    icon: <SiNodedotjs  color="#339933" /> },
  { name: 'Express',    icon: <SiExpress    color="#FFFFFF" /> },
  { name: 'TypeScript', icon: <SiTypescript color="#3178C6" /> },
]

const row2 = [
  { name: 'HTML5',    icon: <SiHtml5   color="#E34F26" /> },
  { name: 'CSS3',     icon: <SiCss3    color="#1572B6" /> },
  { name: 'Git',      icon: <SiGit     color="#F05032" /> },
  { name: 'Vite',     icon: <SiVite    color="#646CFF" /> },
  { name: 'Postman',  icon: <SiPostman color="#FF6C37" /> },
  { name: 'C',        icon: <SiC       color="#A8B9CC" /> },
]

/* Render each card */
function TechCard({ tech, keyPrefix }) {
  return (
    <div className="ts-card" key={keyPrefix}>
      <div className="ts-icon">{tech.icon}</div>
      <span className="ts-name">{tech.name}</span>
    </div>
  )
}

/* One scrolling track — duplicated 3x for seamless infinite loop */
function MarqueeTrack({ items, reverse = false }) {
  const repeated = [...items, ...items, ...items]
  return (
    <div className={`ts-track-outer${reverse ? ' reverse' : ''}`}>
      <div className={`ts-track${reverse ? ' reverse' : ''}`}>
        {repeated.map((tech, i) => (
          <TechCard tech={tech} keyPrefix={`t-${i}`} key={i} />
        ))}
      </div>
    </div>
  )
}

export default function TechStackMarquee() {
  return (
    <section className="ts-section">
      <div className="container">
        <h2 className="ts-title">Tech Stack</h2>
      </div>

      <div className="ts-marquee-wrapper">
        <MarqueeTrack items={row1} />
        <MarqueeTrack items={row2} reverse />
      </div>
    </section>
  )
}
