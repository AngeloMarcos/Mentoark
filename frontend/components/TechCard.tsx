// frontend/components/TechCard.tsx
import React from 'react'
import Image from 'next/image'
import styles from './TechCard.module.css'

export interface Tech {
  name: string
  logo: string   // path em public/, ex: '/tech-react.png'
}

export function TechCard({ name, logo }: Tech) {
  return (
    <div className={styles.card}>
      <div className={styles.logo}>
        <Image src={logo} alt={name} width={48} height={48} />
      </div>
      <p className={styles.name}>{name}</p>
    </div>
  )
}
