import React from 'react'
import Link from 'next/link'
import { Layout } from '../../styles/Layout'
import { SEO } from '../../components/SEO'
import styles from './Portfolio.module.css'

const mockProjects = [
  {
    title: 'Landing Page Tech',
    description: 'Exemplo de landing page moderna.',
    slug: 'landing-tech',
  },
  {
    title: 'Dashboard de Vendas',
    description: 'Dashboard interativo para análise de vendas.',
    slug: 'dashboard',
  },
]

export default function Portfolio() {
  return (
    <Layout>
      <SEO title="Portfólio" description="Veja meus projetos mais recentes" path="/portifolio" />
      <main className={styles.main}>
        <h1 className={styles.title}>Portfólio</h1>
        <div className={styles.grid}>
          {mockProjects.map((project) => (
            <Link href={`/portifolio/${project.slug}`} key={project.slug} className={styles.card}>
              <h2>{project.title} →</h2>
              <p>{project.description}</p>
            </Link>
          ))}
        </div>
      </main>
    </Layout>
  )
}
