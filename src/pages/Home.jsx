import { Link } from 'react-router-dom'
import { FiArrowRight, FiMapPin, FiStar, FiUsers } from 'react-icons/fi'
import { GiCanoe, GiGoat, GiMusicalNotes, GiMountainRoad } from 'react-icons/gi'
import { MdOutlineRestaurantMenu, MdOutlineFamilyRestroom } from 'react-icons/md'
import SectionReveal from '../components/SectionReveal'
import { menuCategories } from '../data/menuData'
import './Home.css'

const highlights = [
  { icon: <MdOutlineRestaurantMenu />, title: 'Authentic Thai', desc: 'Freshly prepared traditional recipes' },
  { icon: <GiCanoe />, title: 'Free Kayaking', desc: 'Complimentary for all diners' },
  { icon: <GiGoat />, title: 'Petting Zoo', desc: 'Horses & goats for the kids' },
  { icon: <GiMusicalNotes />, title: 'Live Music', desc: 'Evening entertainment & karaoke' },
  { icon: <GiMountainRoad />, title: 'Broga Views', desc: 'Stunning hillside scenery' },
  { icon: <MdOutlineFamilyRestroom />, title: 'Family Friendly', desc: 'Pork-free, all are welcome' },
]

const popularItems = menuCategories
  .flatMap(cat => cat.items.filter(item => item.popular))
  .slice(0, 6)

const testimonials = [
  { name: 'Ahmad R.', text: 'Best Thai food in Semenyih! The Tom Yum is incredible and the kids loved the petting zoo. A perfect family outing.', rating: 5 },
  { name: 'Michelle T.', text: 'Such a unique experience — great food with beautiful nature views. The kayaking was a wonderful bonus!', rating: 5 },
  { name: 'Lim W.K.', text: 'We celebrated my parents\' anniversary here. The Grand Celebration Set was amazing. Highly recommend!', rating: 5 },
  { name: 'Siti N.', text: 'Love that it\'s pork-free and family-friendly. The green curry is the best I\'ve had outside Thailand.', rating: 5 },
]

export default function Home() {
  return (
    <div className="home">
      {/* ==================== HERO ==================== */}
      <section className="hero">
        <div className="hero__overlay" />
        <div className="hero__content container">
          <span className="hero__label">Thai Dining & Recreation • Semenyih</span>
          <h1 className="hero__title">
            Dine in Nature,<br />
            <span className="hero__title-accent">Taste Thailand</span>
          </h1>
          <p className="hero__subtitle">
            Authentic Thai cuisine nestled at the foot of Broga Hill — where family dining meets nature, adventure, and unforgettable flavors.
          </p>
          <div className="hero__actions">
            <a
              href="https://wa.me/60182883111?text=Hi%2C%20I%20would%20like%20to%20make%20a%20reservation."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary btn--lg"
            >
              Reserve a Table <FiArrowRight />
            </a>
            <Link to="/menu" className="btn btn--outline btn--lg hero__btn-outline">
              Explore Menu
            </Link>
          </div>
          <div className="hero__badges">
            <div className="hero__badge">
              <FiMapPin /> Semenyih, Malaysia
            </div>
            <div className="hero__badge">
              <FiStar /> 4.8 ★ on Google
            </div>
            <div className="hero__badge">
              <FiUsers /> Family Friendly
            </div>
          </div>
        </div>
        <div className="hero__scroll-indicator">
          <span>Scroll to explore</span>
          <div className="hero__scroll-line" />
        </div>
      </section>

      {/* ==================== HIGHLIGHTS ==================== */}
      <section className="section highlights">
        <div className="container">
          <SectionReveal>
            <div className="text-center">
              <span className="section-label">Why Choose Us</span>
              <h2 className="section-title">More Than Just a Restaurant</h2>
              <p className="section-subtitle" style={{ margin: '0 auto' }}>
                Experience an unforgettable dining adventure with authentic Thai flavors, outdoor recreation, and the beauty of nature.
              </p>
            </div>
          </SectionReveal>
          <div className="highlights__grid">
            {highlights.map((item, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className="highlight-card">
                  <div className="highlight-card__icon">{item.icon}</div>
                  <h3 className="highlight-card__title">{item.title}</h3>
                  <p className="highlight-card__desc">{item.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== ABOUT PREVIEW ==================== */}
      <section className="section about-preview">
        <div className="container about-preview__grid">
          <SectionReveal className="about-preview__images">
            <div className="about-preview__img about-preview__img--1">
              <img src="https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?w=600&q=80" alt="Thai Cuisine" />
            </div>
            <div className="about-preview__img about-preview__img--2">
              <img src="https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=600&q=80" alt="Nature Dining" />
            </div>
          </SectionReveal>
          <SectionReveal className="about-preview__content" delay={0.2}>
            <span className="section-label">Our Story</span>
            <h2 className="section-title">Where Thai Flavors Meet Malaysian Nature</h2>
            <div className="divider" />
            <p>
              Nestled in the lush greenery of Kampung Sri Broga, just minutes from the iconic Broga Hill, 
              OUTBACK Broga Thai Dining & Recreation offers a one-of-a-kind dining experience that brings 
              together authentic Thai cuisine and the tranquility of nature.
            </p>
            <p>
              Whether you're a family seeking a memorable outing, nature lovers looking for a peaceful retreat, 
              or food enthusiasts craving genuine Thai flavors — we've created the perfect destination for you.
            </p>
            <div className="about-preview__stats">
              <div className="about-preview__stat">
                <span className="about-preview__stat-number">50+</span>
                <span className="about-preview__stat-label">Thai Dishes</span>
              </div>
              <div className="about-preview__stat">
                <span className="about-preview__stat-number">4.8</span>
                <span className="about-preview__stat-label">Google Rating</span>
              </div>
              <div className="about-preview__stat">
                <span className="about-preview__stat-number">5+</span>
                <span className="about-preview__stat-label">Activities</span>
              </div>
            </div>
            <Link to="/about" className="btn btn--dark">
              Learn More <FiArrowRight />
            </Link>
          </SectionReveal>
        </div>
      </section>

      {/* ==================== POPULAR MENU ==================== */}
      <section className="section menu-preview">
        <div className="container">
          <SectionReveal>
            <div className="text-center">
              <span className="section-label">Our Menu</span>
              <h2 className="section-title">Most Loved Dishes</h2>
              <p className="section-subtitle" style={{ margin: '0 auto' }}>
                Handcrafted with love using traditional Thai recipes and the freshest ingredients.
              </p>
            </div>
          </SectionReveal>
          <div className="menu-preview__grid">
            {popularItems.map((item, i) => (
              <SectionReveal key={i} delay={i * 0.08}>
                <div className="menu-card">
                  <div className="menu-card__image">
                    {item.image ? (
                      <img src={item.image} alt={item.name} className="menu-card__img" loading="lazy" />
                    ) : (
                      <div className="menu-card__placeholder">🍽️</div>
                    )}
                    {item.popular && <span className="menu-card__badge">Popular</span>}
                    {item.spicy > 0 && (
                      <span className="menu-card__spicy">
                        {'🌶️'.repeat(item.spicy)}
                      </span>
                    )}
                  </div>
                  <div className="menu-card__content">
                    <h3 className="menu-card__name">{item.name}</h3>
                    <p className="menu-card__desc">{item.description}</p>
                    <p className="menu-card__price">RM {item.price}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
          <SectionReveal>
            <div className="text-center" style={{ marginTop: 'var(--space-xl)' }}>
              <Link to="/menu" className="btn btn--primary">
                View Full Menu <FiArrowRight />
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ==================== EXPERIENCE BANNER ==================== */}
      <section className="experience-banner">
        <div className="experience-banner__overlay" />
        <div className="container experience-banner__content">
          <SectionReveal>
            <span className="section-label" style={{ color: 'var(--clr-accent-light)' }}>Dine & Play</span>
            <h2 className="experience-banner__title">
              More Than Food — <br />It's an Experience
            </h2>
            <p className="experience-banner__desc">
              Enjoy FREE kayaking on our private pond, let the kids play in our mini petting zoo 
              with horses and goats, relax with stunning Broga Hill views, and unwind with 
              live music and karaoke during our evening sessions.
            </p>
            <div className="experience-banner__features">
              <div className="experience-banner__feature">
                <GiCanoe />
                <span>Free Kayaking</span>
              </div>
              <div className="experience-banner__feature">
                <GiGoat />
                <span>Petting Zoo</span>
              </div>
              <div className="experience-banner__feature">
                <GiMusicalNotes />
                <span>Live Music</span>
              </div>
              <div className="experience-banner__feature">
                <GiMountainRoad />
                <span>Hill Views</span>
              </div>
            </div>
            <Link to="/activities" className="btn btn--primary btn--lg">
              Explore Activities <FiArrowRight />
            </Link>
          </SectionReveal>
        </div>
      </section>

      {/* ==================== TESTIMONIALS ==================== */}
      <section className="section testimonials">
        <div className="container">
          <SectionReveal>
            <div className="text-center">
              <span className="section-label">Testimonials</span>
              <h2 className="section-title">What Our Guests Say</h2>
            </div>
          </SectionReveal>
          <div className="testimonials__grid">
            {testimonials.map((t, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className="testimonial-card">
                  <div className="testimonial-card__stars">
                    {'★'.repeat(t.rating)}
                  </div>
                  <p className="testimonial-card__text">"{t.text}"</p>
                  <p className="testimonial-card__name">— {t.name}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="cta-section">
        <div className="container cta-section__content text-center">
          <SectionReveal>
            <h2 className="cta-section__title">Ready for an Unforgettable Experience?</h2>
            <p className="cta-section__desc">
              Book your table today and enjoy authentic Thai cuisine surrounded by nature.
              Perfect for families, groups, and celebrations.
            </p>
            <div className="cta-section__actions">
              <a
                href="https://wa.me/60182883111?text=Hi%2C%20I%20would%20like%20to%20make%20a%20reservation."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary btn--lg"
              >
                Book via WhatsApp <FiArrowRight />
              </a>
              <a href="tel:+60182883111" className="btn btn--outline btn--lg">
                Call Us
              </a>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  )
}
