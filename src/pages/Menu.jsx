import { useState } from 'react'
import { FiSearch, FiDownload } from 'react-icons/fi'
import SectionReveal from '../components/SectionReveal'
import { menuCategories, festiveMenus } from '../data/menuData'
import './Menu.css'

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredCategories = activeCategory === 'all'
    ? menuCategories
    : menuCategories.filter(cat => cat.id === activeCategory)

  const searchFilter = (item) => {
    if (!searchQuery) return true
    const q = searchQuery.toLowerCase()
    return item.name.toLowerCase().includes(q) || item.description.toLowerCase().includes(q)
  }

  return (
    <div className="menu-page">
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero__overlay" />
        <div className="container page-hero__content">
          <span className="section-label" style={{ color: 'var(--clr-accent-light)' }}>Our Menu</span>
          <h1 className="page-hero__title">Authentic Thai Flavors</h1>
          <p className="page-hero__subtitle">
            Every dish is crafted with love using traditional Thai recipes and the freshest ingredients.
            Pork-free and family-friendly.
          </p>
          <a
            href="/menu.pdf"
            download="OUTBACK-Broga-Menu.pdf"
            className="btn btn--primary btn--lg menu-download-btn"
          >
            <FiDownload /> Download Menu (PDF)
          </a>
        </div>
      </section>

      {/* Menu Content */}
      <section className="section">
        <div className="container">
          {/* Search & Filter */}
          <SectionReveal>
            <div className="menu-controls">
              <div className="menu-search">
                <FiSearch />
                <input
                  type="text"
                  placeholder="Search dishes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="menu-tabs">
                <button
                  className={`menu-tab ${activeCategory === 'all' ? 'menu-tab--active' : ''}`}
                  onClick={() => setActiveCategory('all')}
                >
                  All
                </button>
                {menuCategories.map(cat => (
                  <button
                    key={cat.id}
                    className={`menu-tab ${activeCategory === cat.id ? 'menu-tab--active' : ''}`}
                    onClick={() => setActiveCategory(cat.id)}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>
          </SectionReveal>

          {/* Menu Categories */}
          {filteredCategories.map(cat => {
            const items = cat.items.filter(searchFilter)
            if (items.length === 0) return null
            return (
              <SectionReveal key={cat.id}>
                <div className="menu-category" id={cat.id}>
                  <div className="menu-category__header">
                    <div>
                      <h2 className="menu-category__title">{cat.name}</h2>
                      <span className="menu-category__thai">{cat.nameThai}</span>
                    </div>
                    <p className="menu-category__desc">{cat.description}</p>
                  </div>
                  <div className="menu-items">
                    {items.map((item, i) => (
                      <div key={i} className="menu-item">
                        <div className="menu-item__left">
                          <div className="menu-item__header">
                            <h3 className="menu-item__name">
                              {item.name}
                              {item.popular && <span className="menu-item__popular">Popular</span>}
                            </h3>
                            <div className="menu-item__dots" />
                            <span className="menu-item__price">RM {item.price}</span>
                          </div>
                          <p className="menu-item__desc">{item.description}</p>
                          {item.spicy > 0 && (
                            <span className="menu-item__spicy">
                              {'🌶️'.repeat(item.spicy)} {item.spicy === 1 ? 'Mild' : 'Spicy'}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </SectionReveal>
            )
          })}

          {/* Festive Sets */}
          <SectionReveal>
            <div className="festive-section">
              <div className="text-center">
                <span className="section-label">Special Sets</span>
                <h2 className="section-title">Festive & Group Menus</h2>
                <p className="section-subtitle" style={{ margin: '0 auto var(--space-xl)' }}>
                  Perfect for celebrations, family gatherings, and group dinners. Pre-order via WhatsApp.
                </p>
              </div>
              <div className="festive-grid">
                {festiveMenus.map((set, i) => (
                  <div key={i} className={`festive-card ${set.popular ? 'festive-card--featured' : ''}`}>
                    {set.popular && <span className="festive-card__ribbon">Most Popular</span>}
                    <h3 className="festive-card__name">{set.name}</h3>
                    <p className="festive-card__serves">{set.serves}</p>
                    <p className="festive-card__price">
                      <span className="festive-card__currency">RM</span>
                      {set.price}
                    </p>
                    <ul className="festive-card__items">
                      {set.items.map((item, j) => (
                        <li key={j}>{item}</li>
                      ))}
                    </ul>
                    <a
                      href={`https://wa.me/60182883111?text=Hi%2C%20I%20would%20like%20to%20order%20the%20${encodeURIComponent(set.name)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn--primary"
                      style={{ width: '100%', justifyContent: 'center' }}
                    >
                      Order via WhatsApp
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>

          {/* Note */}
          <SectionReveal>
            <div className="menu-note">
              <p>🌿 All dishes are <strong>pork-free</strong>. We serve guests from Semenyih, Broga, Kajang, Bangi & Nilai.</p>
              <p>Prices are in Malaysian Ringgit (RM) and are subject to change. Please contact us for current prices and seasonal specials.</p>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  )
}
