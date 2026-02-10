import { useState } from 'react'
import { FiMapPin, FiPhone, FiClock, FiMail, FiInstagram, FiSend, FiArrowRight } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import SectionReveal from '../components/SectionReveal'
import './Contact.css'

const contactInfo = [
  {
    icon: <FiMapPin />,
    title: 'Location',
    lines: ['315, Kampung Sri Broga,', '71750 Lenggeng,', 'Negeri Sembilan, Malaysia'],
    link: 'https://maps.google.com/?q=315+Kampung+Sri+Broga+71750+Lenggeng+Negeri+Sembilan',
    linkText: 'Get Directions',
  },
  {
    icon: <FiPhone />,
    title: 'Phone',
    lines: ['+60 18-288 3111'],
    link: 'tel:+60182883111',
    linkText: 'Call Now',
  },
  {
    icon: <FaWhatsapp />,
    title: 'WhatsApp',
    lines: ['+60 18-288 3111'],
    link: 'https://wa.me/60182883111?text=Hi%2C%20I%20would%20like%20to%20make%20a%20reservation.',
    linkText: 'Chat with Us',
  },
  {
    icon: <FiClock />,
    title: 'Operating Hours',
    lines: ['Tuesday – Sunday', '11:00 AM – 10:00 PM', 'Monday: Closed'],
  },
  {
    icon: <FiInstagram />,
    title: 'Instagram',
    lines: ['@outback.dining'],
    link: 'https://www.instagram.com/outback.dining',
    linkText: 'Follow Us',
  },
]

const faq = [
  { q: 'Do I need a reservation?', a: 'Walk-ins are welcome, but we recommend reserving via WhatsApp for weekends and public holidays to guarantee your table.' },
  { q: 'Is the food halal / pork-free?', a: 'Yes! All our dishes are 100% pork-free and prepared in a pork-free kitchen. We welcome guests from all communities.' },
  { q: 'Is kayaking really free?', a: 'Yes, kayaking on our private pond is complimentary for all dining guests. Life jackets are provided.' },
  { q: 'Do you cater for events?', a: 'Absolutely! We cater for birthdays, anniversaries, corporate events, and festive celebrations. Contact us on WhatsApp to discuss your requirements.' },
  { q: 'How do I get there?', a: 'We are located at 315, Kampung Sri Broga, just minutes from Broga Hill. Search "OUTBACK Broga" on Google Maps or Waze for the easiest directions.' },
  { q: 'Is there parking available?', a: 'Yes, we have ample free parking space for cars and motorcycles.' },
]

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', guests: '', date: '', message: '' })
  const [openFaq, setOpenFaq] = useState(null)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const msg = `Hi, I'd like to make a reservation.%0A%0AName: ${formData.name}%0APhone: ${formData.phone}%0AGuests: ${formData.guests}%0ADate: ${formData.date}%0AMessage: ${formData.message}`
    window.open(`https://wa.me/60182883111?text=${msg}`, '_blank')
  }

  return (
    <div className="contact-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero__overlay" />
        <div className="container page-hero__content">
          <span className="section-label" style={{ color: 'var(--clr-accent-light)' }}>Get In Touch</span>
          <h1 className="page-hero__title">Contact & Reservations</h1>
          <p className="page-hero__subtitle">
            Book your table, ask a question, or get directions. We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section">
        <div className="container">
          <div className="contact-cards">
            {contactInfo.map((info, i) => (
              <SectionReveal key={i} delay={i * 0.08}>
                <div className="contact-card">
                  <div className="contact-card__icon">{info.icon}</div>
                  <h3 className="contact-card__title">{info.title}</h3>
                  {info.lines.map((line, j) => (
                    <p key={j} className="contact-card__line">{line}</p>
                  ))}
                  {info.link && (
                    <a href={info.link} target="_blank" rel="noopener noreferrer" className="contact-card__link">
                      {info.linkText} <FiArrowRight />
                    </a>
                  )}
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Form & Map */}
      <section className="section contact-main">
        <div className="container contact-main__grid">
          {/* Form */}
          <SectionReveal>
            <div className="contact-form-wrapper">
              <span className="section-label">Make a Reservation</span>
              <h2 className="section-title">Book Your Table</h2>
              <p className="contact-form__desc">
                Fill in the form below and we'll send your reservation request directly via WhatsApp for instant confirmation.
              </p>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form__row">
                  <div className="contact-form__group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="contact-form__group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="+60..."
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="contact-form__row">
                  <div className="contact-form__group">
                    <label htmlFor="guests">Number of Guests</label>
                    <select id="guests" name="guests" value={formData.guests} onChange={handleChange}>
                      <option value="">Select</option>
                      <option value="1-2">1–2 guests</option>
                      <option value="3-4">3–4 guests</option>
                      <option value="5-8">5–8 guests</option>
                      <option value="9-15">9–15 guests</option>
                      <option value="15+">15+ guests</option>
                    </select>
                  </div>
                  <div className="contact-form__group">
                    <label htmlFor="date">Preferred Date</label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="contact-form__group">
                  <label htmlFor="message">Special Requests</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Any special requests, dietary needs, or occasion details..."
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button type="submit" className="btn btn--primary btn--lg" style={{ width: '100%', justifyContent: 'center' }}>
                  <FaWhatsapp /> Send via WhatsApp
                </button>
              </form>
            </div>
          </SectionReveal>

          {/* Map */}
          <SectionReveal delay={0.2}>
            <div className="contact-map-wrapper">
              <span className="section-label">Find Us</span>
              <h2 className="section-title">Our Location</h2>
              <p className="contact-map__desc">
                We're located in Kampung Sri Broga, just minutes from Broga Hill.
                Easy to find via Google Maps or Waze.
              </p>
              <div className="contact-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.5!2d101.9!3d2.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMsKwNTQnMDAuMCJOIDEwMcKwNTQnMDAuMCJF!5e0!3m2!1sen!2smy!4v1"
                  width="100%"
                  height="400"
                  style={{ border: 0, borderRadius: 'var(--border-radius-lg)' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="OUTBACK Broga Location"
                ></iframe>
              </div>
              <div className="contact-directions">
                <h4>Coming from:</h4>
                <ul>
                  <li><strong>Semenyih:</strong> 15 min drive via Jalan Broga</li>
                  <li><strong>Kajang:</strong> 25 min via Lebuhraya Kajang-Seremban</li>
                  <li><strong>Bangi:</strong> 30 min via LEKAS Highway</li>
                  <li><strong>Nilai:</strong> 20 min via Lebuhraya Nilai</li>
                </ul>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section contact-faq">
        <div className="container container--narrow">
          <SectionReveal>
            <div className="text-center">
              <span className="section-label">FAQ</span>
              <h2 className="section-title">Frequently Asked Questions</h2>
            </div>
          </SectionReveal>
          <div className="faq-list">
            {faq.map((item, i) => (
              <SectionReveal key={i} delay={i * 0.05}>
                <div className={`faq-item ${openFaq === i ? 'faq-item--open' : ''}`}>
                  <button className="faq-item__question" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    <span>{item.q}</span>
                    <span className="faq-item__toggle">{openFaq === i ? '−' : '+'}</span>
                  </button>
                  <div className="faq-item__answer">
                    <p>{item.a}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
