import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import { GiCanoe, GiGoat, GiMusicalNotes, GiMountainRoad, GiCampfire } from 'react-icons/gi'
import { MdOutlineFamilyRestroom, MdOutlineRestaurant } from 'react-icons/md'
import SectionReveal from '../components/SectionReveal'
import './Activities.css'

const activities = [
  {
    icon: <GiCanoe />,
    title: 'Free Kayaking',
    subtitle: 'Paddle & Play',
    desc: 'Enjoy complimentary kayaking on our private pond — exclusively for dining guests. A refreshing way to spend time with family and friends while your food is being prepared, or as a post-meal adventure.',
    highlights: ['Private pond', 'Complimentary for diners', 'Life jackets provided', 'Suitable for all ages'],
    color: 'blue',
    image: 'https://images.unsplash.com/photo-1472745433479-4556f22e32c2?w=600&q=80',
  },
  {
    icon: <GiGoat />,
    title: 'Mini Petting Zoo',
    subtitle: 'Meet Our Friends',
    desc: "Children love our mini petting zoo featuring friendly horses and goats. It's a wonderful way for kids to connect with animals in a safe, supervised environment while parents enjoy their meal.",
    highlights: ['Horses & goats', 'Safe & supervised', 'Kid-friendly', 'Free for guests'],
    color: 'green',
    image: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=600&q=80',
  },
  {
    icon: <GiMusicalNotes />,
    title: 'Live Music & Karaoke',
    subtitle: 'Evening Entertainment',
    desc: 'Unwind with live music performances and karaoke sessions during our evening dining hours. Perfect for group gatherings, celebrations, and anyone who loves to sing under the stars.',
    highlights: ['Live performances', 'Karaoke available', 'Evening sessions', 'Great for groups'],
    color: 'gold',
    image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&q=80',
  },
  {
    icon: <GiMountainRoad />,
    title: 'Broga Hill Views',
    subtitle: 'Nature at Your Table',
    desc: 'Our restaurant is nestled at the foot of the iconic Broga Hill, offering stunning hillside views. Dine outdoors and take in the fresh air, lush greenery, and the peaceful sounds of nature.',
    highlights: ['Hillside panorama', 'Outdoor dining', 'Fresh mountain air', 'Photo opportunities'],
    color: 'warm',
    image: 'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=600&q=80',
  },
  {
    icon: <MdOutlineRestaurant />,
    title: 'Outdoor Nature Dining',
    subtitle: 'Al Fresco Experience',
    desc: 'Experience dining the way it should be — surrounded by nature. Our outdoor seating areas offer a unique ambiance with natural canopy, garden settings, and the gentle breeze of the Malaysian countryside.',
    highlights: ['Garden seating', 'Natural canopy', 'Peaceful ambiance', 'Scenic surroundings'],
    color: 'green',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80',
  },
  {
    icon: <MdOutlineFamilyRestroom />,
    title: 'Group & Family Events',
    subtitle: 'Celebrate with Us',
    desc: 'Whether it\'s a birthday, anniversary, festive celebration, or corporate gathering — our space is perfect for events. We offer special set menus and personalized arrangements for groups.',
    highlights: ['Birthday parties', 'Festive celebrations', 'Corporate events', 'Custom set menus'],
    color: 'gold',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80',
  },
]

const dayPlan = [
  { time: '11:00 AM', activity: 'Arrive & settle in', desc: 'Choose your outdoor table with Broga Hill views' },
  { time: '11:30 AM', activity: 'Order & explore', desc: 'Browse our menu while kids visit the petting zoo' },
  { time: '12:00 PM', activity: 'Lunch is served', desc: 'Enjoy fresh authentic Thai cuisine' },
  { time: '1:00 PM', activity: 'Kayaking time', desc: 'Take a kayak ride on our private pond' },
  { time: '2:00 PM', activity: 'Dessert & relax', desc: 'Enjoy Mango Sticky Rice and Thai iced tea' },
  { time: 'Evening', activity: 'Live music', desc: 'Return for dinner with live music & karaoke' },
]

export default function Activities() {
  return (
    <div className="activities-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero__overlay" />
        <div className="container page-hero__content">
          <span className="section-label" style={{ color: 'var(--clr-accent-light)' }}>Dine & Play</span>
          <h1 className="page-hero__title">Activities & Recreation</h1>
          <p className="page-hero__subtitle">
            More than food — we offer a complete experience with kayaking, a petting zoo, live music, and the beauty of nature.
          </p>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="section">
        <div className="container">
          <SectionReveal>
            <div className="text-center">
              <span className="section-label">What We Offer</span>
              <h2 className="section-title">Experiences for Everyone</h2>
              <p className="section-subtitle" style={{ margin: '0 auto' }}>
                At OUTBACK Broga, every visit is more than a meal — it's an adventure.
              </p>
            </div>
          </SectionReveal>

          <div className="activities__list">
            {activities.map((act, i) => (
              <SectionReveal key={i} delay={0.1}>
                <div className={`activity-card activity-card--${act.color}`}>
                  <div className="activity-card__image-wrap">
                    <img src={act.image} alt={act.title} className="activity-card__image" loading="lazy" />
                  </div>
                  <div className="activity-card__icon">{act.icon}</div>
                  <div className="activity-card__content">
                    <span className="activity-card__subtitle">{act.subtitle}</span>
                    <h3 className="activity-card__title">{act.title}</h3>
                    <p className="activity-card__desc">{act.desc}</p>
                    <div className="activity-card__highlights">
                      {act.highlights.map((h, j) => (
                        <span key={j} className="activity-card__tag">{h}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Plan Your Day */}
      <section className="section plan-day">
        <div className="container">
          <SectionReveal>
            <div className="text-center">
              <span className="section-label">Plan Your Visit</span>
              <h2 className="section-title">A Perfect Day at OUTBACK</h2>
              <p className="section-subtitle" style={{ margin: '0 auto' }}>
                Here's how you can make the most of your visit to OUTBACK Broga.
              </p>
            </div>
          </SectionReveal>

          <div className="plan-day__timeline">
            {dayPlan.map((item, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className="plan-day__item">
                  <div className="plan-day__time">{item.time}</div>
                  <div className="plan-day__dot" />
                  <div className="plan-day__content">
                    <h4 className="plan-day__activity">{item.activity}</h4>
                    <p className="plan-day__desc">{item.desc}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="activities-cta">
        <div className="activities-cta__overlay" />
        <div className="container text-center" style={{ position: 'relative', zIndex: 2 }}>
          <SectionReveal>
            <h2 className="activities-cta__title">Ready for an Adventure?</h2>
            <p className="activities-cta__desc">
              Book your table today and experience the full OUTBACK Broga adventure — delicious food, 
              exciting activities, and the beauty of nature all in one place.
            </p>
            <div className="activities-cta__actions">
              <a
                href="https://wa.me/60182883111?text=Hi%2C%20I%20would%20like%20to%20visit%20OUTBACK%20Broga%20and%20try%20the%20activities."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary btn--lg"
              >
                Book via WhatsApp <FiArrowRight />
              </a>
              <Link to="/contact" className="btn btn--outline btn--lg" style={{ borderColor: 'rgba(255,255,255,0.4)', color: '#fff' }}>
                Get Directions
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  )
}
