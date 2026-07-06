import { useState } from 'react'
import Icon from '../Icon'
import styles from './MediaGallery.module.css'

function withBase(path) {
  if (!path) return path
  if (path.startsWith('http')) return path
  const base = import.meta.env.BASE_URL
  return `${base}${path.replace(/^\//, '')}`
}

export default function MediaGallery({ photos = [], videos = [], title }) {
  const [active, setActive] = useState(null) // { type: 'photo'|'video', index }

  const hasPhotos = photos.length > 0
  const hasVideos = videos.length > 0

  return (
    <div className={styles.wrap}>
      {hasPhotos && (
        <div className={styles.photos}>
          {photos.map((src, i) => (
            <button
              key={i}
              className={styles.photoBtn}
              onClick={() => setActive({ type: 'photo', index: i })}
              aria-label={`${title} — фото ${i + 1}, збільшити`}
            >
              <img src={withBase(src)} alt={`${title} — фото роботи ${i + 1}`} className={styles.photo} loading="lazy" />
            </button>
          ))}
        </div>
      )}

      {hasVideos && (
        <div className={styles.videos}>
          {videos.map((v, i) => (
            <div className={styles.videoBox} key={i}>
              <video
                controls
                className={styles.video}
                poster={withBase(v.poster)}
                preload="none"
              >
                <source src={withBase(v.src)} type="video/mp4" />
              </video>
            </div>
          ))}
        </div>
      )}

      {!hasPhotos && !hasVideos && (
        <div className={styles.videoPlaceholder}>
          <Icon name="play" size={28} />
          <p>Фото і відео з прикладами робіт зʼявляться тут найближчим часом.</p>
        </div>
      )}

      {active && active.type === 'photo' && (
        <div className={styles.lightbox} onClick={() => setActive(null)}>
          <button className={styles.lightboxClose} aria-label="Закрити">×</button>
          <img
            src={withBase(photos[active.index])}
            alt={`${title} — фото роботи ${active.index + 1}, збільшено`}
            className={styles.lightboxImg}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  )
}
