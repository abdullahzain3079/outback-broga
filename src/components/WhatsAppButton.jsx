import { FaWhatsapp } from 'react-icons/fa'
import './WhatsAppButton.css'

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/60182883111?text=Hi%2C%20I%20would%20like%20to%20make%20a%20reservation%20at%20OUTBACK%20Broga."
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-btn"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp />
      <span className="whatsapp-btn__text">Book Now</span>
    </a>
  )
}
