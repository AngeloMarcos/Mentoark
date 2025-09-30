// frontend/components/Layout.tsx
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Layout.module.css'

export function Layout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <Image src="/logo.png" alt="SiteTech" width={140} height={40} />
          </div>

          <nav className={`${styles.nav} ${open ? styles.open : ''}`}>
            <Link href="#solucoes" className={styles.navLink}>
              Soluções
            </Link>
            <Link href="#processo" className={styles.navLink}>
              Processo
            </Link>
            <Link href="#chatbots" className={styles.navLink}>
              Chatbot
            </Link>
            <Link href="#depoimentos" className={styles.navLink}>
              Depoimentos
            </Link>
            <Link href="#contato" className={styles.btnCTA}>
              Orçamento
            </Link>
          </nav>

          <button
            className={styles.toggle}
            aria-label="Menu"
            onClick={() => setOpen(!open)}
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <p>© 2025 SiteTech. Todos os direitos reservados.</p>
      </footer>
    </>
  )
}
