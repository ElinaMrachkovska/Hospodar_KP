import { Link } from 'react-router-dom'
import Icon from '../Icon'
import { contact } from '../../data/categories'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.glowA} aria-hidden="true" />
      <div className={styles.glowB} aria-hidden="true" />
      <div className={`container ${styles.grid}`}>
        <div className={styles.text}>
          <span className="eyebrow">{contact.region}</span>
          <h1 className={styles.title}>
            Сад, демонтаж, вивіз — <em>усе в одних руках</em>
          </h1>
       <p className={styles.lead}>
            Я — Господар Кам'янця-Подільського, і моя робота там, де потрібні реальні руки, а не
            обіцянки в оголошенні. Доглядаю сади: обрізаю плодові й декоративні дерева, формую туї
            та самшит, кошу траву й прибираю ділянки, якими давно не займалися. Скуповую дорого стару електроніку, радіодеталі й металобрухт часів СРСР —
            приїжджаю сам, оцінюю на місці, розраховуюсь одразу. Вивожу сміття, стару побутову
            техніку й меблі, а з деревини після обрізки чи демонтажу — продаю дрова, щепу та гілля.
            Працюю без посередників, тому кожен дзвінок — це розмова напряму зі
            мною. Приїжджаю, дивлюсь на місці, кажу чесно, що варто робити зараз, а що може
            почекати, і скільки це реально коштуватиме. Кам'янець-Подільський та область — мій
            постійний район роботи, тож я знаю особливості місцевих ділянок, старих дворів і
            приватного сектору.
          </p>
          <div className={styles.actions}>
            <a href={`tel:${contact.phones[0].raw}`} className="btn btn-primary">
              <Icon name="phone" size={17} /> {contact.phones[0].display}
            </a>
            <Link to="/poslugy" className="btn btn-outline">
              Переглянути послуги
            </Link>
          </div>
          <div className={styles.meta}>
            <span><Icon name="clock" size={16} /> Заявки щодня, 8:00–20:00</span>
            <span><Icon name="pin" size={16} /> Виїзд по місту й області</span>
          </div>

          <div className={styles.messengers}>
            {contact.messengers.map((m) => (
              <a
                href={m.url}
                target="_blank"
                rel="noopener noreferrer"
                key={m.name}
                className={styles.messengerLink}
                aria-label={m.name}
              >
                <Icon name={m.icon} size={18} />
                {m.name}
              </a>
            ))}
          </div>
        </div>

        <div className={styles.imageWrap}>
          <img
            src={`${import.meta.env.BASE_URL}media/collage.png`}
            alt="Господар Кам'янця-Подільського — сад, скупка металу, демонтаж, вивіз сміття"
            className={styles.image}
          />
          <div className={styles.card}>
            <span className={styles.cardNum}>4</span>
            <span className={styles.cardLabel}>напрямки роботи<br />в одних руках</span>
          </div>
        </div>
      </div>
    </section>
  )
}