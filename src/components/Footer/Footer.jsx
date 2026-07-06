import { Link } from 'react-router-dom'
import Icon from '../Icon'
import { contact, categories } from '../../data/categories'
import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brandCol}>
          <div className={styles.brandRow}>
            <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Господар Кам'янця-Подільського — емблема" className={styles.logoMark} />
            <div className={styles.logo}>{contact.fullName}</div>
          </div>
          <p className={styles.region}>
            <Icon name="pin" size={16} /> {contact.region}
          </p>
          <div className={styles.socialRow}>
            {contact.social.map((s) => (
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                key={s.name}
                aria-label={s.name}
                className={styles.socialLink}
              >
                <Icon name={s.icon} size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className={styles.col}>
          <p className={styles.colTitle}>Напрямки роботи</p>
          <ul>
            {categories.map((cat) => (
              <li key={cat.slug}>
                <Link to={`/poslugy/${cat.slug}`}>{cat.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.col}>
          <p className={styles.colTitle}>Контакти</p>
          <ul>
            {contact.phones.map((p) => (
              <li key={p.raw}>
               <a href={`tel:${p.raw}`} className={styles.phoneLink}>
  <Icon name={p.icon} size={15} />
  {p.display}
</a>
              </li>
            ))}
          </ul>
          <Link to="/kontakty" className={styles.contactLink}>
            Форма заявки <Icon name="arrow" size={14} />
          </Link>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <span>© {year} {contact.fullName}.</span>
        <span className={styles.mono}>Приймаю заявки щодня, 8:00–20:00</span>
      </div>
    </footer>
  )
}
