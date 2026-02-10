import { useState } from 'react'
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import SectionReveal from '../components/SectionReveal'
import './Gallery.css'

const galleryCategories = ['All', 'Food', 'Dining', 'Nature', 'Activities', 'Events']

const galleryItems = [
  { id: 1, category: 'Food', title: 'Tom Yum Goong', image: 'https://images.unsplash.com/photo-1548943487-a2e4e43b4853?w=600&q=80' },
  { id: 2, category: 'Nature', title: 'Broga Hill Views', image: 'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=600&q=80' },
  { id: 3, category: 'Food', title: 'Green Curry', image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600&q=80' },
  { id: 4, category: 'Activities', title: 'Kayaking Fun', image: 'https://images.unsplash.com/photo-1472745433479-4556f22e32c2?w=600&q=80' },
  { id: 5, category: 'Dining', title: 'Outdoor Seating', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80' },
  { id: 6, category: 'Food', title: 'Pad Thai', image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=600&q=80' },
  { id: 7, category: 'Activities', title: 'Petting Zoo', image: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=600&q=80' },
  { id: 8, category: 'Food', title: 'Mango Sticky Rice', image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&q=80' },
  { id: 9, category: 'Events', title: 'Live Music Night', image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=600&q=80' },
  { id: 10, category: 'Nature', title: 'Garden Pathway', image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=600&q=80' },
  { id: 11, category: 'Food', title: 'Chicken Satay', image: 'https://images.unsplash.com/photo-1529563021893-cc83c992d75d?w=600&q=80' },
  { id: 12, category: 'Dining', title: 'Family Gathering', image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80' },
  { id: 13, category: 'Nature', title: 'Private Pond', image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&q=80' },
  { id: 14, category: 'Food', title: 'Som Tum Salad', image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&q=80' },
  { id: 15, category: 'Events', title: 'Birthday Celebration', image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80' },
  { id: 16, category: 'Dining', title: 'Evening Ambiance', image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80' },
]

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const filtered = activeFilter === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter)

  const currentIndex = lightbox ? filtered.findIndex(item => item.id === lightbox.id) : -1

  const navigate = (dir) => {
    if (currentIndex === -1) return
    const next = dir === 'next'
      ? (currentIndex + 1) % filtered.length
      : (currentIndex - 1 + filtered.length) % filtered.length
    setLightbox(filtered[next])
  }

  return (
    <div className="gallery-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero__overlay" />
        <div className="container page-hero__content">
          <span className="section-label" style={{ color: 'var(--clr-accent-light)' }}>Gallery</span>
          <h1 className="page-hero__title">Moments at OUTBACK</h1>
          <p className="page-hero__subtitle">
            A glimpse into the food, nature, activities, and unforgettable moments at our restaurant.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="section">
        <div className="container">
          {/* Filter */}
          <SectionReveal>
            <div className="gallery-filters">
              {galleryCategories.map(cat => (
                <button
                  key={cat}
                  className={`gallery-filter ${activeFilter === cat ? 'gallery-filter--active' : ''}`}
                  onClick={() => setActiveFilter(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </SectionReveal>

          {/* Grid */}
          <div className="gallery-grid">
            {filtered.map((item, i) => (
              <SectionReveal key={item.id} delay={i * 0.05}>
                <div
                  className="gallery-item"
                  onClick={() => setLightbox(item)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && setLightbox(item)}
                >
                  <div className="gallery-item__image">
                    <img src={item.image} alt={item.title} loading="lazy" />
                  </div>
                  <div className="gallery-item__overlay">
                    <span className="gallery-item__category">{item.category}</span>
                    <h3 className="gallery-item__title">{item.title}</h3>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>

          {/* Instagram CTA */}
          <SectionReveal>
            <div className="gallery-instagram">
              <h3 className="gallery-instagram__title">Follow Us on Instagram</h3>
              <p className="gallery-instagram__desc">
                Stay updated with our latest dishes, events, and behind-the-scenes moments.
              </p>
              <a
                href="https://www.instagram.com/outback.dining"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary"
              >
                @outback.dining
              </a>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button className="lightbox__close" onClick={() => setLightbox(null)}>
            <FiX />
          </button>
          <button
            className="lightbox__nav lightbox__nav--prev"
            onClick={(e) => { e.stopPropagation(); navigate('prev'); }}
          >
            <FiChevronLeft />
          </button>
          <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox__image">
              <img src={lightbox.image} alt={lightbox.title} />
            </div>
            <div className="lightbox__info">
              <span className="lightbox__category">{lightbox.category}</span>
              <h3 className="lightbox__title">{lightbox.title}</h3>
            </div>
          </div>
          <button
            className="lightbox__nav lightbox__nav--next"
            onClick={(e) => { e.stopPropagation(); navigate('next'); }}
          >
            <FiChevronRight />
          </button>
        </div>
      )}
    </div>
  )
}
