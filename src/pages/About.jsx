import { Link } from 'react-router-dom'
import { FiArrowRight, FiCheck } from 'react-icons/fi'
import { GiLeafSkeleton } from 'react-icons/gi'
import SectionReveal from '../components/SectionReveal'
import './About.css'

const values = [
  { title: 'Authentic Recipes', desc: 'Traditional Thai recipes prepared fresh daily with authentic ingredients and techniques passed down through generations.' },
  { title: 'Pork-Free Dining', desc: 'All our dishes are 100% pork-free, making our restaurant welcoming for Chinese, Malay, and all communities.' },
  { title: 'Nature First', desc: "We believe dining should be an escape. Our location at the foot of Broga Hill provides fresh air, greenery, and stunning views." },
  { title: 'Family Experience', desc: 'From our petting zoo to kayaking, we create memorable moments for families and groups of all sizes.' },
  { title: 'Community Spirit', desc: 'Proudly serving guests from Semenyih, Broga, Kajang, Bangi, and Nilai — we are your neighborhood Thai kitchen.' },
  { title: 'Fresh & Quality', desc: 'We source the freshest ingredients and prepare every dish to order, ensuring quality in every bite.' },
]

const timeline = [
  { year: 'The Beginning', text: 'Born from a love of Thai cuisine and the beautiful Broga landscape, OUTBACK was envisioned as a place where food and nature come together.' },
  { year: 'Growing Roots', text: 'We expanded our space to include outdoor dining areas, a private pond for kayaking, and a mini petting zoo for families.' },
  { year: 'Community Favorite', text: 'Today, we serve hundreds of happy guests weekly from across the Semenyih-Kajang-Nilai region, known for our authentic flavors and unique experience.' },
  { year: 'Looking Forward', text: 'We continue to innovate with seasonal menus, live music nights, and new recreational activities while staying true to our roots.' },
]

export default function About() {
  return (
    <div className="about-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero__overlay" />
        <div className="container page-hero__content">
          <span className="section-label" style={{ color: 'var(--clr-accent-light)' }}>Our Story</span>
          <h1 className="page-hero__title">About OUTBACK Broga</h1>
          <p className="page-hero__subtitle">
            More than a restaurant — a Thai dining experience nestled in the heart of Malaysian nature.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section about-story">
        <div className="container about-story__grid">
          <SectionReveal className="about-story__content">
            <span className="section-label">Welcome</span>
            <h2 className="section-title">A Taste of Thailand, A Touch of Nature</h2>
            <div className="divider" />
            <p>
              OUTBACK Broga Thai Dining & Recreation is a unique Thai restaurant located in Semenyih, 
              just minutes from the famous Broga Hill. We are more than just a place to eat — we are a 
              destination where families, friends, and nature lovers come together to enjoy authentic 
              Thai cuisine surrounded by breathtaking greenery.
            </p>
            <p>
              Our menu features freshly prepared Thai dishes loved by both Chinese and Malay communities. 
              Every recipe is crafted with care, using traditional techniques and the freshest ingredients 
              to deliver an authentic taste of Thailand right here in Malaysia.
            </p>
            <p>
              What makes us truly special is the complete experience we offer. Dine outdoors with Broga 
              Hill views, let the kids enjoy our mini petting zoo with horses and goats, take a free 
              kayak ride on our private pond, and on select evenings, enjoy live music and karaoke with 
              your loved ones.
            </p>
            <div className="about-story__checklist">
              <div className="about-story__check"><FiCheck /> Pork-free dining for all</div>
              <div className="about-story__check"><FiCheck /> Authentic Thai recipes</div>
              <div className="about-story__check"><FiCheck /> Outdoor nature dining</div>
              <div className="about-story__check"><FiCheck /> Free kayaking & petting zoo</div>
              <div className="about-story__check"><FiCheck /> Live music & karaoke nights</div>
              <div className="about-story__check"><FiCheck /> Family-friendly atmosphere</div>
            </div>
          </SectionReveal>
          <SectionReveal className="about-story__visual" delay={0.2}>
            <div className="about-story__image-stack">
              <div className="about-story__img-box about-story__img-box--1">
                <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80" alt="Nature Dining Experience" />
              </div>
              <div className="about-story__img-box about-story__img-box--2">
                <img src="https://images.unsplash.com/photo-1548943487-a2e4e43b4853?w=600&q=80" alt="Authentic Thai Cuisine" />
              </div>
              <div className="about-story__accent-box">
                <GiLeafSkeleton />
                <span>Est. in Broga</span>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Values */}
      <section className="section about-values">
        <div className="container">
          <SectionReveal>
            <div className="text-center">
              <span className="section-label">Our Values</span>
              <h2 className="section-title">What We Stand For</h2>
            </div>
          </SectionReveal>
          <div className="about-values__grid">
            {values.map((v, i) => (
              <SectionReveal key={i} delay={i * 0.08}>
                <div className="value-card">
                  <div className="value-card__number">0{i + 1}</div>
                  <h3 className="value-card__title">{v.title}</h3>
                  <p className="value-card__desc">{v.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="section about-journey">
        <div className="container">
          <SectionReveal>
            <div className="text-center">
              <span className="section-label">Our Journey</span>
              <h2 className="section-title">How We Got Here</h2>
            </div>
          </SectionReveal>
          <div className="about-timeline">
            {timeline.map((item, i) => (
              <SectionReveal key={i} delay={i * 0.15}>
                <div className="timeline-item">
                  <div className="timeline-item__marker" />
                  <div className="timeline-item__content">
                    <h3 className="timeline-item__year">{item.year}</h3>
                    <p className="timeline-item__text">{item.text}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="container text-center">
          <SectionReveal>
            <h2 className="about-cta__title">Come Experience Our Story</h2>
            <p className="about-cta__desc">
              We'd love to welcome you and your family. Come taste Thailand and enjoy nature at OUTBACK Broga.
            </p>
            <div className="about-cta__actions">
              <a
                href="https://wa.me/60182883111?text=Hi%2C%20I%20would%20like%20to%20make%20a%20reservation."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary btn--lg"
              >
                Reserve a Table <FiArrowRight />
              </a>
              <Link to="/menu" className="btn btn--outline btn--lg">
                Explore Menu
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  )
}
