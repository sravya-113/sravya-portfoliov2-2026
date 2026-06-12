import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Send, User, AtSign, Tag, MessageSquare } from 'lucide-react'
import { GitHubIcon, LinkedInIcon } from '../SocialIcons/SocialIcons'
import './Contact.css'

const SOCIAL = [
  { Icon: Mail,         label:'Email',    sub:'sravyavaranasi2005@gmail.com', href:'mailto:sravyavaranasi2005@gmail.com' },
  { Icon: GitHubIcon,   label:'GitHub',   sub:'github.com/sravya-113',         href:'https://github.com/sravya-113'       },
  { Icon: LinkedInIcon, label:'LinkedIn', sub:'sravya-varanasi19',             href:'https://www.linkedin.com/in/sravya-varanasi19/' },
]

export default function Contact() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [form, setForm]     = useState({ name:'', email:'', subject:'', message:'' })
  const [status, setStatus] = useState(null)  // null | 'sending' | 'ok' | 'err'
  const formRef = useRef(null)

  const onChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_KEY',   // replace with real key
          ...form,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('ok')
        setForm({ name:'', email:'', subject:'', message:'' })
      } else {
        setStatus('err')
      }
    } catch {
      setStatus('err')
    }
  }

  const fields = [
    { name:'name',    label:'Your Name',  Icon:User,        type:'text',  placeholder:'John Doe'           },
    { name:'email',   label:'Your Email', Icon:AtSign,      type:'email', placeholder:'john@example.com'   },
    { name:'subject', label:'Subject',    Icon:Tag,         type:'text',  placeholder:'Project Inquiry'     },
  ]

  return (
    <section className="contact section" id="contact" ref={ref}>
      <div className="container">
        <motion.div
          className="sec-header"
          initial={{ opacity:0, y:30 }}
          animate={inView ? { opacity:1, y:0 } : {}}
          transition={{ duration:.6 }}
        >
          <p className="sec-tag">Let's Work Together</p>
          <h2 className="sec-title">Get In <span className="grad">Touch</span></h2>
          <p className="sec-sub">Have a project in mind? Let's build something great.</p>
        </motion.div>

        <div className="ct-grid">
          {/* Info */}
          <motion.div
            className="ct-info"
            initial={{ opacity:0, x:-30 }}
            animate={inView ? { opacity:1, x:0 } : {}}
            transition={{ duration:.6, delay:.1 }}
          >
            <h3>Let's Connect</h3>
            <p className="ct-intro">
              I'm open to full-stack, frontend, and data science opportunities — freelance, 
              internship, or collaboration. I'd love to hear from you!
            </p>

            <div className="ct-links">
              {SOCIAL.map(({ Icon, label, sub, href }) => (
                <a key={label} href={href} target={label !== 'Email' ? '_blank' : undefined} rel="noopener" className="ct-link">
                  <div className="ct-link-icon"><Icon size={18} /></div>
                  <div>
                    <span className="ct-link-label">{label}</span>
                    <span className="ct-link-val">{sub}</span>
                  </div>
                </a>
              ))}
            </div>

            {/* Code snippet */}
            <div className="code-card glass">
              <div className="code-bar">
                <span className="cd r"/><span className="cd y"/><span className="cd g"/>
                <span className="code-fname">sravya.js</span>
              </div>
              <pre className="code-body"><code>
{`const `}<span className="c-var">sravya</span>{` = {
  `}<span className="c-key">role</span>{`:    `}<span className="c-str">"Full-Stack Dev"</span>{`,
  `}<span className="c-key">available</span>{`: `}<span className="c-bool">true</span>{`,
  `}<span className="c-key">skills</span>{`:  [`}<span className="c-str">"React"</span>{`,`}<span className="c-str">"Node"</span>{`,`}<span className="c-str">"Python"</span>{`],
  `}<span className="c-key">hire</span>{`:    () `}{`=>`} <span className="c-str">"Let's build!"</span>{`
};`}
              </code></pre>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity:0, x:30 }}
            animate={inView ? { opacity:1, x:0 } : {}}
            transition={{ duration:.6, delay:.2 }}
          >
            <form className="ct-form glass" ref={formRef} onSubmit={onSubmit}>
              {fields.map(({ name, label, Icon, type, placeholder }) => (
                <div key={name} className="fg">
                  <label htmlFor={`ct-${name}`}>{label}</label>
                  <div className="fi-wrap">
                    <Icon size={15} className="fi-icon" />
                    <input
                      id={`ct-${name}`}
                      type={type}
                      name={name}
                      value={form[name]}
                      onChange={onChange}
                      placeholder={placeholder}
                      required={name !== 'subject'}
                    />
                  </div>
                </div>
              ))}
              <div className="fg">
                <label htmlFor="ct-message">Message</label>
                <div className="fi-wrap textarea-w">
                  <MessageSquare size={15} className="fi-icon" />
                  <textarea
                    id="ct-message"
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    placeholder="Tell me about your project..."
                    rows={5}
                    required
                  />
                </div>
              </div>

              <button type="submit" className="btn-primary w-full" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : <><Send size={15} /> Send Message</>}
              </button>

              {status === 'ok'  && <p className="st-ok">✅ Message sent! I'll get back to you soon.</p>}
              {status === 'err' && <p className="st-err">❌ Something went wrong. Try emailing me directly.</p>}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
