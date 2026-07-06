import { NavLink, Link, useLocation } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'
import Icon from '../Icon'
import { contact, categories } from '../../data/categories'
import styles from './Header.module.css'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const { pathname } = useLocation()
  const dropdownRef = useRef(null)

  const onServicesPage = pathname.startsWith('/poslugy')

  useEffect(() => {
    setOpen(false)
    setServicesOpen(false)
  }, [pathname])

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header className={styles.header}>
      <div className={`container ${styles.bar}`}>
        <NavLink to="/" className={styles.logo} onClick={() => setOpen(false)}>
          <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Господар Кам'янця-Подільського — емблема" className={styles.logoMark} />
          <span className={styles.logoText}>
            {contact.brand}
            <span className={styles.logoSub}>{contact.tagline}</span>
          </span>
        </NavLink>

        <nav className={`${styles.nav} ${open ? styles.navOpen : ''}`}>
          <NavLink to="/" end className={({ isActive }) => `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}>
            Головна
          </NavLink>

          <div className={styles.dropdown} ref={dropdownRef}>
            <button
              type="button"
              className={`${styles.navLink} ${styles.navLinkButton} ${onServicesPage ? styles.navLinkActive : ''}`}
              onClick={() => setServicesOpen((v) => !v)}
              aria-expanded={servicesOpen}
            >
              Послуги
              <Icon name="arrow" size={13} className={styles.dropdownCaret} />
            </button>
            <div className={`${styles.dropdownMenu} ${servicesOpen ? styles.dropdownMenuOpen : ''}`}>
              <Link to="/poslugy" className={styles.dropdownItem} onClick={() => setServicesOpen(false)}>
                <Icon name="landscape" size={18} />
                Усі напрямки
              </Link>
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  to={`/poslugy/${cat.slug}`}
                  className={styles.dropdownItem}
                  onClick={() => setServicesOpen(false)}
                >
                  <Icon name={cat.icon} size={18} />
                  {cat.title}
                </Link>
              ))}
            </div>
          </div>

          <NavLink to="/kontakty" className={({ isActive }) => `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}>
            Контакти
          </NavLink>

          <a href={`tel:${contact.phones[0].raw}`} className={`btn btn-primary ${styles.navCta}`}>
            <Icon name="phone" size={17} />
            {contact.phones[0].display}
          </a>
        </nav>

        <button
          className={styles.burger}
          aria-label={open ? 'Закрити меню' : 'Відкрити меню'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
