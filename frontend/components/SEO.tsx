import React from 'react'
import Head from 'next/head'

interface SEOProps {
  title: string
  description: string
  path?: string       // caminho relativo da página, ex: '/about'
  image?: string      // URL absoluta da imagem Open Graph
}

export function SEO({ title, description, path = '/', image }: SEOProps) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://seusite.com'
  const url = `${siteUrl}${path}`

  return (
    <Head>
      {/* Básicos */}
      <title>{title} | SiteTech</title>
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:title" content={title + ' | SiteTech'} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      {image && <meta property="og:image" content={image} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title + ' | SiteTech'} />
      <meta name="twitter:description" content={description} />
      {image && <meta name="twitter:image" content={image} />}

      {/* Mobile */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}
