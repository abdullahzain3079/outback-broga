import { Link } from 'react-router-dom'
import { FiMapPin, FiPhone, FiClock, FiInstagram } from 'react-icons/fi'
import { FaWhatsapp, FaFacebookF, FaTiktok } from 'react-icons/fa'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo">
              <span className="footer__logo-icon">🌿</span>
              <div>
                <h3 className="footer__logo-main">OUTBACK</h3>
                <p className="footer__logo-sub">Broga Thai Dining & Recreation</p>
              </div>
            </div>
            <p className="footer__desc">
              A unique Thai dining experience nestled in nature, just minutes from Broga Hill.
              Enjoy authentic Thai cuisine, kayaking, and family-friendly recreation.
            </p>
            <div className="footer__socials">
              <a href="https://www.instagram.com/outback.dining" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FiInstagram /></a>
              <a href="https://wa.me/60182883111" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
              <a href="#" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#" aria-label="TikTok"><FaTiktok /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__col">
            <h4 className="footer__heading">Quick Links</h4>
            <ul className="footer__links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/menu">Our Menu</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/activities">Activities</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer__col">
            <h4 className="footer__heading">Contact Us</h4>
            <ul className="footer__info">
              <li>
                <FiMapPin />
                <span>315, Kampung Sri Broga,<br/>71750 Lenggeng,<br/>Negeri Sembilan, Malaysia</span>
              </li>
              <li>
                <FiPhone />
                <a href="tel:+60182883111">+60 18-288 3111</a>
              </li>
              <li>
                <FiClock />
                <span>Tue – Sun: 11:00 AM – 10:00 PM<br/>Monday: Closed</span>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div className="footer__col footer__col--map">
            <h4 className="footer__heading">Find Us</h4>
            <div className="footer__map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.5!2d101.9!3d2.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMsKwNTQnMDAuMCJOIDEwMcKwNTQnMDAuMCJF!5e0!3m2!1sen!2smy!4v1"
                width="100%"
                height="180"
                style={{ border: 0, borderRadius: 'var(--border-radius)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="OUTBACK Broga Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>&copy; {new Date().getFullYear()} OUTBACK Broga Thai Dining & Recreation. All rights reserved.</p>
          <p className="footer__tagline">Pork-free • Family-friendly • Nature dining</p>
        </div>
      </div>
    </footer>
  )
}
