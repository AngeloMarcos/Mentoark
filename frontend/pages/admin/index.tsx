import Head from 'next/head';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import HowItWorks from '../../components/HowItWorks';
import { Integrations } from '../../components/Integrations';
import { Testimonials } from '../../components/Testimonials';
import { CTA } from '../../components/CTA';
import { Footer } from '../../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>MentoArk — Automação de WhatsApp com n8n</title>
        <meta name="description" content="Atendimento 24/7 no WhatsApp com IA + n8n: agendamentos, lembretes, integrações (Calendar/Sheets/CRM) e dashboards." />
        <meta property="og:title" content="MentoArk — Automação de WhatsApp com n8n" />
        <meta property="og:description" content="Transforme seu WhatsApp em um atendimento inteligente com integrações e relatórios em tempo real." />
        <meta property="og:type" content="website" />
      </Head>

      <Header />
      <Hero />
      <HowItWorks />
      <Integrations />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}
