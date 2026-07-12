import { Link } from 'react-router-dom'
import Icon from '../Icon'
import { contact } from '../../data/categories'
import styles from './LandscapeBanner.module.css'

export default function LandscapeBanner() {
  return (
    <section className={styles.banner}>
      <img
        src={`${import.meta.env.BASE_URL}media/sad/baner-land.jpg`}
        alt="Ландшафтний дизайн ділянки"
        className={styles.bg}
      />
      <div className={styles.overlay} />
      <div className={`container ${styles.inner}`}>
        <span className={styles.eyebrow}>Ландшафтний дизайн</span>
        <h2 className={styles.title}>
          Ділянка, якою хочеться<br />милуватися щодня
        </h2>
        <p className={styles.text}>
          Декоративна засипка, композиції з хвойників, фігурна стрижка туй і самшиту —
          продумую вигляд ділянки на роки вперед, а не на один сезон.
        </p>
        <div className={styles.actions}>
          <a href={`tel:${contact.phones[0].raw}`} className="btn btn-primary">
            <Icon name="phone" size={17} /> Обговорити ділянку
          </a>
          <Link to="/kontakty" className={`btn btn-outline ${styles.btnOnDark}`}>Залишити заявку</Link>
        </div>
      </div>
    </section>
  )
}