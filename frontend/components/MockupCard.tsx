import React from 'react'
import Image from 'next/image'
import styles from './MockupCard.module.css'

export interface MockupProps {
  src: string
  title: string
}

export function MockupCard({ src, title }: MockupProps) {
  return (
    <div className={styles.card}>
      <Image src={src} alt={title} width={300} height={180} />
      <h4>{title}</h4>
    </div>
  )
}
