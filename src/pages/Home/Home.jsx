import { Link } from 'react-router-dom'
import Hero from '../../components/Hero/Hero'
import Icon from '../../components/Icon'
import { categories, contact } from '../../data/categories'
import styles from './Home.module.css'

const steps = [
  {
    n: '1',
    title: 'Дзвінок і опис завдання',
    text: 'Розповідаєте, що потрібно: сад, демонтаж, вивіз сміття чи скупка металу. Орієнтовно оцінюю обсяг робіт.',
  },
  {
    n: '2',
    title: 'Виїзд і огляд',
    text: 'Приїжджаю, дивлюся на місці, кажу чесно, що варто робити зараз, а що може почекати.',
  },
  {
    n: '3',
    title: 'Виконання роботи',
    text: 'Працюю зі своїм інструментом і технікою — від секатора до дробарки, нічого орендувати додатково.',
  },
  {
    n: '4',
    title: 'Прибирання після себе',
    text: 'Ділянку чи приміщення залишаю чистими: сміття, гілки й залишки роботи вивезені.',
  },
]

export default function Home() {
  return (
    <>
      <Hero />

      <section className={styles.section}>
        <div className="container">
          <span className="eyebrow">Напрямки роботи</span>
          <h2 className={styles.sectionTitle}>Чотири справи одного господаря</h2>
          <div className={styles.grid}>
            {categories.map((cat) => (
              <Link to={`/poslugy/${cat.slug}`} className={styles.card} key={cat.slug}>
                <div className={styles.cardIcon}>
                  <Icon name={cat.icon} size={28} strokeWidth={1.4} />
                </div>
                <h3 className={styles.cardTitle}>{cat.title}</h3>
                <p className={styles.cardText}>{cat.short}</p>
                <span className={styles.cardLink}>
                  Детальніше <Icon name="arrow" size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className="container">
          <span className="eyebrow">Як це відбувається</span>
          <h2 className={styles.sectionTitle}>Від дзвінка до результату</h2>
          <div className={styles.steps}>
            {steps.map((step) => (
              <div className={styles.step} key={step.n}>
                <span className={styles.stepNum}>{step.n}</span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepText}>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={`container ${styles.whyGrid}`}>
          <div>
            <span className="eyebrow">Чому саме я</span>
            <h2 className={styles.sectionTitle}>Один майстер, а не колцентр</h2>
            <p className={styles.sectionLead}>
              Дзвоните напряму мені, а не менеджеру. Я сам оглядаю об'єкт, сам виконую роботу і сам
              відповідаю за результат — без посередників і накруток за "координацію бригади".
            </p>
          </div>
          <ul className={styles.whyList}>
            <li>
              <Icon name="shears" size={22} />
              <span>Свій інструмент і техніка — нічого орендувати додатково</span>
            </li>
            <li>
              <Icon name="clock" size={22} />
              <span>Приїжджаю у домовлений час, без переносів "на завтра"</span>
            </li>
            <li>
              <Icon name="truck" size={22} />
              <span>Вивезу і утилізую все, що лишається після роботи</span>
            </li>
            <li>
              <Icon name="pin" size={22} />
              <span>{contact.region} — без націнки "за виїзд"</span>
            </li>
          </ul>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={`container ${styles.ctaInner}`}>
          <div>
            <h2 className={styles.ctaTitle}>Є робота, яку давно відкладали?</h2>
            <p className={styles.ctaText}>Зателефонуйте — домовимось про огляд і скажу чесно, що робити.</p>
          </div>
          <div className={styles.ctaActions}>
            <a href={`tel:${contact.phones[0].raw}`} className="btn btn-primary">
              <Icon name="phone" size={17} /> {contact.phones[0].display}
            </a>
            <Link to="/kontakty" className="btn btn-outline">Залишити заявку</Link>
          </div>
        </div>
      </section>
    </>
  )
}