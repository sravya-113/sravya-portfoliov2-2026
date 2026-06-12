import { Mail, ArrowUpRight } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from '../SocialIcons/SocialIcons'
import './Footer.css'

const NAV = ['Home','About','Projects','Services','Contact']
const SOCIAL = [
  { Icon: GitHubIcon,   href:'https://github.com/sravya-113',                     label:'GitHub'   },
  { Icon: LinkedInIcon, href:'https://www.linkedin.com/in/sravya-varanasi19/',    label:'LinkedIn' },
  { Icon: Mail,         href:'mailto:sravyavaranasi2005@gmail.com',               label:'Email'    },
]

export default function Footer() {
  const scrollTo = (id) =>
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior:'smooth' })

  return (
    <footer className="footer">
      <div className="container">

        {/* ── Main grid: logo+nav LEFT | quote RIGHT ── */}
        <div className="ft-grid">

          {/* LEFT block */}
          <div className="ft-left">
            <a
              href="#home"
              className="ft-logo"
              onClick={e => { e.preventDefault(); scrollTo('home') }}
            >
              sravya<span className="ft-dot">.</span>
            </a>

            <p className="ft-desc">
              Full-Stack Developer &amp; Data Science enthusiast.<br />
              Building things that work, look good, and last.
            </p>

            <nav className="ft-nav" aria-label="Footer navigation">
              {NAV.map(n => (
                <button key={n} className="ft-link" onClick={() => scrollTo(n)}>{n}</button>
              ))}
            </nav>

            <div className="ft-socials">
              {SOCIAL.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== 'Email' ? '_blank' : undefined}
                  rel="noopener"
                  aria-label={label}
                  className="ft-social"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT block — quote pushed to right edge */}
          <div className="ft-right">
            <div className="ft-quote-wrap">
              <span className="ft-quote-mark">"</span>
              <blockquote className="ft-quote">
                The most powerful person in the world is the storyteller.
                The storyteller sets the vision, values, and agenda
                of an entire generation that is to come.
              </blockquote>
              <p className="ft-quote-attr">— Steve Jobs</p>
            </div>
          </div>

        </div>

        <div className="ft-divider" />

        <div className="ft-bottom">
          <p className="ft-copy">
            © {new Date().getFullYear()} Sravya Varanasi. All rights reserved.
          </p>
          <a
            href="#home"
            className="ft-back-top"
            onClick={e => { e.preventDefault(); scrollTo('home') }}
          >
            Back to top <ArrowUpRight size={14} />
          </a>
        </div>

      </div>
    </footer>
  )
}
