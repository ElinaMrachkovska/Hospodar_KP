import ContactForm from '../../components/ContactForm/ContactForm'
import Icon from '../../components/Icon'
import { contact } from '../../data/categories'
import styles from './Contacts.module.css'

export default function Contacts() {
  return (
    <div className={styles.page}>
      <section className={styles.intro}>
        <div className="container">
          <span className="eyebrow">Контакти</span>
          <h1 className={styles.title}>Домовимось про огляд ділянки</h1>
          <p className={styles.lead}>
            Найшвидше — зателефонувати напряму. Якщо зручніше залишити заявку, заповніть форму нижче
            і передзвоню, щойно звільнюся.
          </p>
        </div>
      </section>

      <section className={styles.body}>
        <div className={`container ${styles.grid}`}>
          <div className={styles.info}>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}><Icon name="phone" size={17} /> Телефони</span>
              <div className={styles.phones}>
                {contact.phones.map((p) => (
                  <a href={`tel:${p.raw}`} key={p.raw} className={styles.phone}>{p.display}</a>
                ))}
              </div>
            </div>

            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}><Icon name="pin" size={17} /> Зона виїзду</span>
              <p>{contact.region}</p>
            </div>

            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}><Icon name="clock" size={17} /> Заявки</span>
              <p>Щодня, 8:00–20:00</p>
            </div>

            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Соцмережі</span>
              <div className={styles.socialRow}>
                {contact.social.map((s) => (
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={s.name}
                    className={styles.socialLink}
                  >
                    <Icon name={s.icon} size={18} />
                    {s.name}
                  </a>
                ))}
              </div>
            </div>

            <div className={styles.map}>
              <iframe
                title="Кам'янець-Подільський на мапі"
                src="https://www.google.com/maps?q=Кам'янець-Подільський&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className={styles.formCol}>
            <h2 className={styles.formTitle}>Залишити заявку</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}
