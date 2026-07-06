import { Link } from 'react-router-dom'
import Icon from '../Icon'
import styles from './ServiceCard.module.css'

export default function ServiceCard({ service, expanded = false }) {
  return (
    <article className={`${styles.card} ${expanded ? styles.cardExpanded : ''}`} id={service.id}>
      <div className={styles.iconWrap}>
        <Icon name={service.icon} size={26} strokeWidth={1.4} />
      </div>
      <h3 className={styles.title}>{service.title}</h3>
      <p className={styles.text}>{expanded ? service.description : service.short}</p>
      {service.season && <span className={styles.season}>{service.season}</span>}
      {!expanded && (
        <Link to={`/poslugy#${service.id}`} className={styles.link}>
          Детальніше <Icon name="arrow" size={14} />
        </Link>
      )}
    </article>
  )
}
