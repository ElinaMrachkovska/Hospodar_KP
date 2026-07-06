import { useState } from 'react'
import { categories } from '../../data/categories'
import { GOOGLE_SHEETS_ENDPOINT } from '../../config'
import Icon from '../Icon'
import styles from './ContactForm.module.css'

const firstService = categories[0].services[0]

const initial = {
  name: '',
  phone: '',
  service: `${categories[0].slug}::${firstService.id}`,
  message: '',
}

export default function ContactForm() {
  const [values, setValues] = useState(initial)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  function handleChange(e) {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  function validate() {
    const next = {}
    if (values.name.trim().length < 2) next.name = "Вкажіть ім'я"
    if (!/^[\d+()\s-]{7,}$/.test(values.phone.trim())) next.phone = 'Перевірте номер телефону'
    return next
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length > 0) return

    const [categorySlug, serviceId] = values.service.split('::')
    const category = categories.find((c) => c.slug === categorySlug)
    const service = category?.services.find((s) => s.id === serviceId)

    const payload = {
      name: values.name.trim(),
      phone: values.phone.trim(),
      message: values.message.trim(),
      categoryTitle: category?.title || '',
      serviceTitle: service?.title || '',
      page: typeof window !== 'undefined' ? window.location.href : '',
    }

    if (!GOOGLE_SHEETS_ENDPOINT) {
      // No backend configured yet — see google-apps-script/README.md
      console.warn('GOOGLE_SHEETS_ENDPOINT is not set in src/config.js — form data was not sent anywhere.')
      setStatus('sent')
      return
    }

    setStatus('sending')
    try {
      // Apps Script Web Apps don't return usable CORS headers for client-side
      // fetch, so we send in no-cors mode and treat a resolved request as success.
      await fetch(GOOGLE_SHEETS_ENDPOINT, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload),
      })
      setStatus('sent')
    } catch (err) {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className={styles.success}>
        <Icon name="tree" size={30} />
        <h3>Заявку прийнято</h3>
        <p>Передзвоню найближчим часом, щоб домовитися про огляд і деталі роботи.</p>
        <button className="btn btn-outline" onClick={() => { setValues(initial); setStatus('idle') }}>
          Надіслати ще одну заявку
        </button>
      </div>
    )
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.field}>
        <label htmlFor="name">Ім'я</label>
        <input id="name" name="name" value={values.name} onChange={handleChange} placeholder="Як до вас звертатись" />
        {errors.name && <span className={styles.error}>{errors.name}</span>}
      </div>

      <div className={styles.field}>
        <label htmlFor="phone">Телефон</label>
        <input id="phone" name="phone" value={values.phone} onChange={handleChange} placeholder="+380 __ ___ __ __" />
        {errors.phone && <span className={styles.error}>{errors.phone}</span>}
      </div>

      <div className={styles.field}>
        <label htmlFor="service">Що потрібно зробити</label>
        <select id="service" name="service" value={values.service} onChange={handleChange}>
          {categories.map((cat) => (
            <optgroup label={cat.title} key={cat.slug}>
              {cat.services.map((s) => (
                <option value={`${cat.slug}::${s.id}`} key={s.id}>{s.title}</option>
              ))}
            </optgroup>
          ))}
        </select>
      </div>

      <div className={styles.field}>
        <label htmlFor="message">Коментар (необов'язково)</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={values.message}
          onChange={handleChange}
          placeholder="Опишіть, що саме потрібно зробити"
        />
      </div>

      {status === 'error' && (
        <p className={styles.error}>
          Не вдалося надіслати заявку. Зателефонуйте, будь ласка, напряму — або спробуйте ще раз.
        </p>
      )}

      <button type="submit" className={`btn btn-primary ${styles.submit}`} disabled={status === 'sending'}>
        {status === 'sending' ? 'Надсилаю…' : 'Залишити заявку'}
      </button>
    </form>
  )
}
