import styles from './SeasonStrip.module.css'

const months = ['С', 'Л', 'Б', 'К', 'Т', 'Ч', 'Л', 'С', 'В', 'Ж', 'Л', 'Г']
const monthFull = [
  'Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень',
  'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень',
]

const monthIndex = {
  'січень': 1, 'лютий': 2, 'березень': 3, 'квітень': 4, 'травень': 5, 'червень': 6,
  'липень': 7, 'серпень': 8, 'вересень': 9, 'жовтень': 10, 'листопад': 11, 'грудень': 12,
}

function parseRange(season) {
  if (!season) return null
  if (/цілий рік/i.test(season)) return 'all'
  const parts = season.toLowerCase().split('–').map((s) => s.trim())
  if (parts.length !== 2) return null
  const start = monthIndex[parts[0]]
  const end = monthIndex[parts[1]]
  if (!start || !end) return null
  return [start, end]
}

export default function SeasonStrip({ services }) {
  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <span className={styles.headMonths} aria-hidden="true">
          {months.map((m, i) => (
            <span key={i} title={monthFull[i]}>{m}</span>
          ))}
        </span>
      </div>

      {services.map((s) => {
        const range = parseRange(s.season)
        if (!range) return null
        const isAll = range === 'all'
        const style = isAll
          ? { gridColumn: '1 / 13' }
          : { gridColumn: `${range[0]} / ${range[1] + 1}` }

        return (
          <div className={styles.row} key={s.id}>
            <span className={styles.rowLabel}>{s.title}</span>
            <span className={styles.track}>
              <span className={`${styles.bar} ${isAll ? styles.barAll : ''}`} style={style} />
            </span>
          </div>
        )
      })}
    </div>
  )
}
