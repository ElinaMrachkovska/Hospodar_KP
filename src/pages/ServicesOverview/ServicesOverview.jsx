import { Link } from 'react-router-dom'
import Icon from '../../components/Icon'
import { categories, contact } from '../../data/categories'
import styles from './ServicesOverview.module.css'

export default function ServicesOverview() {
  return (
    <div className={styles.page}>
      <section className={styles.intro}>
        <div className="container">
          <span className="eyebrow">Напрямки роботи</span>
          <h1 className={styles.title}>Чотири справи одного господаря</h1>
          <p className={styles.lead}>
            Від догляду за садом до демонтажу старої будівлі — обери напрямок, щоб побачити повний
            перелік послуг, фото прикладів і найкращий час для звернення.
          </p>
        </div>
      </section>

      <section className={styles.grid}>
        <div className={`container ${styles.gridInner}`}>
          {categories.map((cat) => (
            <Link to={`/poslugy/${cat.slug}`} className={styles.card} key={cat.slug}>
              <div className={styles.iconWrap}>
                <Icon name={cat.icon} size={30} strokeWidth={1.4} />
              </div>
              <h2 className={styles.cardTitle}>{cat.title}</h2>
              <p className={styles.cardText}>{cat.short}</p>
              <span className={styles.cardCount}>{cat.services.length} послуг</span>
              <span className={styles.cardLink}>
                Детальніше <Icon name="arrow" size={14} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.cta}>
        <div className={`container ${styles.ctaInner}`}>
          <h2 className={styles.ctaTitle}>Не знайшли потрібну роботу?</h2>
          <p className={styles.ctaText}>Зателефонуйте — скажу, чи можу допомогти саме з вашим випадком.</p>
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
