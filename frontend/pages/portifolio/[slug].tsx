import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Layout } from '../../styles/Layout'
import { SEO } from '../../components/SEO'
import styles from './Portfolio.module.css'

const mockProjects: Record<string, { title: string; description: string; slug: string }> = {
  'landing-tech': {
    title: 'Landing Page Tech',
    description: 'Exemplo de landing page moderna.',
    slug: 'landing-tech',
  },
  'dashboard': {
    title: 'Dashboard de Vendas',
    description: 'Dashboard interativo para análise de vendas.',
    slug: 'dashboard',
  },
}

export default function ProjectDetail() {
  const router = useRouter()
  const { slug } = router.query

  if (router.isFallback || !slug) {
    return (
      <Layout>
        <p>Carregando...</p>
      </Layout>
    )
  }

  const project = mockProjects[slug as string]

  if (!project) {
    return (
      <Layout>
        <p>Projeto não encontrado.</p>
        <Link href="/portifolio">← Voltar ao Portfólio</Link>
      </Layout>
    )
  }

  return (
    <Layout>
      <SEO
        title={project.title}
        description={project.description}
        path={`/portifolio/${project.slug}`}
      />
      <main className={styles.main}>
        <h1 className={styles.title}>{project.title}</h1>
        <p className={styles.description}>{project.description}</p>
        <Link href="/portifolio" className={styles.backLink}>
          ← Voltar ao Portfólio
        </Link>
      </main>
    </Layout>
  )
}
