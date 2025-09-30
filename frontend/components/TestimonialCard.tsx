// frontend/components/TestimonialCard.tsx
import React from 'react'
import styles from './TestimonialCard.module.css'

export interface Testimonial {
  quote: string
  author: string
  role?: string
  avatarUrl?: string
}

export function TestimonialCard({ quote, author, role, avatarUrl }: Testimonial) {
  return (
    <div className={styles.card}>
      {avatarUrl && (
        <img src={avatarUrl} alt={author} className={styles.avatar} />
      )}
      <p className={styles.quote}>"{quote}"</p>
      <p className={styles.author}>{author}</p>
      {role && <p className={styles.role}>{role}</p>}
    </div>
  )
}
