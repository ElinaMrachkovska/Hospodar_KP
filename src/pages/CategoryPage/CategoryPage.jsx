import { useEffect } from 'react'
import { useParams, useLocation, Link, Navigate } from 'react-router-dom'
import ServiceCard from '../../components/ServiceCard/ServiceCard'
import SeasonStrip from '../../components/SeasonStrip/SeasonStrip'
import MediaGallery from '../../components/MediaGallery/MediaGallery'
import Icon from '../../components/Icon'
import { getCategory, categories, contact } from '../../data/categories'
import styles from './CategoryPage.module.css'

export default function CategoryPage() {
  const { slug } = useParams()
  const { hash } = useLocation()
  const category = getCategory(slug)

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 60)
      }
    }
  }, [hash])

  if (!category) {
    return <Navigate to="/poslugy" replace />
  }

  const otherCategories = categories.filter((c) => c.slug !== slug)

  return (
    <div className={styles.page}>
      <section className={styles.intro}>
        <div className="container">
          <Link to="/poslugy" className={styles.back}>
            <Icon name="arrow" size={14} className={styles.backIcon} /> Усі напрямки
          </Link>
          <div className={styles.introRow}>
            <div className={styles.iconWrap}>
              <Icon name={category.icon} size={34} strokeWidth={1.4} />
            </div>
            <div>
              <span className="eyebrow">{contact.region}</span>
              <h1 className={styles.title}>{category.title}</h1>
            </div>
          </div>
          <p className={styles.lead}>{category.intro}</p>
        </div>
      </section>

      <section className={styles.mediaSection}>
        <div className="container">
          <MediaGallery
            photos={category.media?.photos || []}
            videos={category.media?.videos || []}
            title={category.title}
          />
        </div>
      </section>

      {category.hasSeasonStrip && (
        <section className={styles.section}>
          <div className="container">
            <span className="eyebrow">Коли що робити</span>
            <h2 className={styles.sectionTitle}>Сезонний календар робіт</h2>
            <SeasonStrip services={category.services} />
          </div>
        </section>
      )}

      <section className={styles.list}>
        <div className={`container ${styles.stack}`}>
          {category.services.map((s) => (
            <ServiceCard service={s} expanded key={s.id} />
          ))}
        </div>
      </section>

      <section className={styles.otherSection}>
        <div className="container">
          <span className="eyebrow">Інші напрямки</span>
          <div className={styles.otherGrid}>
            {otherCategories.map((cat) => (
              <Link to={`/poslugy/${cat.slug}`} className={styles.otherCard} key={cat.slug}>
                <Icon name={cat.icon} size={22} />
                <span>{cat.title}</span>
                <Icon name="arrow" size={14} className={styles.otherArrow} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={`container ${styles.ctaInner}`}>
          <h2 className={styles.ctaTitle}>Готові домовитись?</h2>
          <p className={styles.ctaText}>Зателефонуйте — скажу чесно, чи можу допомогти саме з вашим випадком.</p>
          <div className={styles.ctaActions}>
            <a href={`tel:${contact.phones[0].raw}`} className="btn btn-primary">
              <Icon name="phone" size={17} /> {contact.phones[0].display}
            </a>
            <Link to="/kontakty" className="btn btn-outline">Залишити заявку</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
