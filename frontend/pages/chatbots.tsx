import React from 'react';
import { Layout } from '../styles/Layout';
import styles from '../styles/Home.module.css';

export default function Chatbots() {
  const benefits = [
    {
      icon: '/chatbot_benefit_24_7.png',
      title: 'Atendimento 24/7',
      description: 'Seu negócio nunca para! Respostas automáticas e inteligentes a qualquer hora do dia ou da noite, garantindo que nenhum cliente seja perdido.'
    },
    {
      icon: '/chatbot_benefit_personalized.png',
      title: 'Experiência Personalizada',
      description: 'Chatbots que aprendem com cada interação, oferecendo respostas únicas e adaptadas ao perfil de cada cliente.'
    },
    {
      icon: '/chatbot_benefit_leads.png',
      title: 'Qualificação de Leads',
      description: 'Identifique automaticamente clientes potenciais e direcione-os para sua equipe de vendas, otimizando seu funil de conversão.'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section id="chatbot-hero" className={styles.heroSection} style={{ padding: '4rem 0', textAlign: 'center' }}>
        <div className="container">
          <h1 className={styles.heroTitle}>
            Revolucione Seu Atendimento: Chatbots com IA no WhatsApp para o Seu Negócio!
          </h1>
          <p className={styles.heroSubtitle} style={{ maxWidth: '800px', margin: '1rem auto 2rem auto' }}>
            Imagine seu negócio operando 24 horas por dia, 7 dias por semana, com respostas instantâneas e personalizadas. Nossos Chatbots com Inteligência Artificial no WhatsApp não apenas automatizam, eles encantam e convertem!
          </p>
          <img src="/chatbot_banner.png" alt="Banner Chatbot IA WhatsApp" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', marginBottom: '2rem' }} />
          
          <div style={{ marginTop: '2rem' }}>
            <a href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20de%20chatbot%20com%20IA." target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: '1.2rem', padding: '1rem 2rem' }}>
              🚀 Quero Revolucionar Meu Atendimento Agora!
            </a>
          </div>
        </div>
      </section>

      {/* Problema Section */}
      <section className="section" style={{ backgroundColor: '#1e293b', padding: '4rem 0' }}>
        <div className="container">
          <h2 className="center" style={{ color: '#FFFFFF', marginBottom: '2rem', fontSize: '2.5rem' }}>
            Você Está Perdendo Vendas Todos os Dias?
          </h2>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: '#cbd5e1', marginBottom: '1.5rem' }}>
              <strong style={{ color: '#f59e0b' }}>❌ Clientes esperando horas por uma resposta</strong><br/>
              <strong style={{ color: '#f59e0b' }}>❌ Perguntas repetitivas consumindo tempo da sua equipe</strong><br/>
              <strong style={{ color: '#f59e0b' }}>❌ Atendimento limitado ao horário comercial</strong><br/>
              <strong style={{ color: '#f59e0b' }}>❌ Leads não qualificados chegando até o vendedor</strong>
            </p>
            <p style={{ fontSize: '1.3rem', lineHeight: '1.6', color: '#FFFFFF', fontWeight: 'bold' }}>
              Cada minuto sem resposta é uma venda que escapa das suas mãos!
            </p>
          </div>
        </div>
      </section>

      {/* Benefícios Section */}
      <section className="section" style={{ padding: '4rem 0' }}>
        <div className="container">
          <h2 className="center" style={{ color: '#FFFFFF', marginBottom: '3rem', fontSize: '2.5rem' }}>
            Como Nossos Chatbots Transformam Seu Negócio
          </h2>
          <div className="grid-3" style={{ gap: '2rem' }}>
            {benefits.map((benefit, index) => (
              <div key={index} style={{ 
                backgroundColor: '#1e293b', 
                padding: '2rem', 
                borderRadius: '12px', 
                textAlign: 'center',
                border: '1px solid #334155'
              }}>
                <img 
                  src={benefit.icon} 
                  alt={benefit.title} 
                  style={{ width: '80px', height: '80px', marginBottom: '1rem' }}
                />
                <h3 style={{ color: '#FFFFFF', fontSize: '1.5rem', marginBottom: '1rem' }}>
                  {benefit.title}
                </h3>
                <p style={{ color: '#cbd5e1', fontSize: '1rem', lineHeight: '1.6' }}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como Funciona Section */}
      <section className="section" style={{ backgroundColor: '#1e293b', padding: '4rem 0' }}>
        <div className="container">
          <h2 className="center" style={{ color: '#FFFFFF', marginBottom: '3rem', fontSize: '2.5rem' }}>
            Como Funciona Nossa Solução
          </h2>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
              <div style={{ textAlign: 'center', padding: '1.5rem' }}>
                <div style={{ 
                  backgroundColor: '#3b82f6', 
                  color: 'white', 
                  width: '60px', 
                  height: '60px', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  fontSize: '1.5rem', 
                  fontWeight: 'bold',
                  margin: '0 auto 1rem auto'
                }}>
                  1
                </div>
                <h3 style={{ color: '#FFFFFF', fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                  Análise do Seu Negócio
                </h3>
                <p style={{ color: '#cbd5e1', fontSize: '0.9rem' }}>
                  Entendemos suas necessidades e mapeamos os fluxos de atendimento
                </p>
              </div>
              
              <div style={{ textAlign: 'center', padding: '1.5rem' }}>
                <div style={{ 
                  backgroundColor: '#3b82f6', 
                  color: 'white', 
                  width: '60px', 
                  height: '60px', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  fontSize: '1.5rem', 
                  fontWeight: 'bold',
                  margin: '0 auto 1rem auto'
                }}>
                  2
                </div>
                <h3 style={{ color: '#FFFFFF', fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                  Desenvolvimento Personalizado
                </h3>
                <p style={{ color: '#cbd5e1', fontSize: '0.9rem' }}>
                  Criamos um chatbot único para seu negócio com IA avançada
                </p>
              </div>
              
              <div style={{ textAlign: 'center', padding: '1.5rem' }}>
                <div style={{ 
                  backgroundColor: '#3b82f6', 
                  color: 'white', 
                  width: '60px', 
                  height: '60px', 
                  borderRadius: '50%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  fontSize: '1.5rem', 
                  fontWeight: 'bold',
                  margin: '0 auto 1rem auto'
                }}>
                  3
                </div>
                <h3 style={{ color: '#FFFFFF', fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                  Integração e Treinamento
                </h3>
                <p style={{ color: '#cbd5e1', fontSize: '0.9rem' }}>
                  Integramos ao seu WhatsApp e treinamos sua equipe
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resultados Section */}
      <section className="section" style={{ padding: '4rem 0' }}>
        <div className="container">
          <h2 className="center" style={{ color: '#FFFFFF', marginBottom: '3rem', fontSize: '2.5rem' }}>
            Resultados Que Nossos Clientes Alcançam
          </h2>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
              <div style={{ padding: '1.5rem' }}>
                <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#f59e0b', marginBottom: '0.5rem' }}>
                  85%
                </div>
                <p style={{ color: '#cbd5e1', fontSize: '1.1rem' }}>
                  Redução no tempo de resposta
                </p>
              </div>
              
              <div style={{ padding: '1.5rem' }}>
                <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#f59e0b', marginBottom: '0.5rem' }}>
                  60%
                </div>
                <p style={{ color: '#cbd5e1', fontSize: '1.1rem' }}>
                  Aumento na conversão de leads
                </p>
              </div>
              
              <div style={{ padding: '1.5rem' }}>
                <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#f59e0b', marginBottom: '0.5rem' }}>
                  40%
                </div>
                <p style={{ color: '#cbd5e1', fontSize: '1.1rem' }}>
                  Redução nos custos operacionais
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final Section */}
      <section className="section" style={{ backgroundColor: '#1e293b', padding: '4rem 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: '#FFFFFF', marginBottom: '1rem', fontSize: '2.5rem' }}>
            Pronto Para Revolucionar Seu Atendimento?
          </h2>
          <p style={{ color: '#cbd5e1', fontSize: '1.2rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
            Não deixe seus concorrentes saírem na frente. Implemente agora um chatbot com IA que trabalha 24/7 para o seu negócio!
          </p>
          <div style={{ marginBottom: '2rem' }}>
            <a href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20de%20chatbot%20com%20IA." target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: '1.3rem', padding: '1.2rem 2.5rem', marginRight: '1rem' }}>
              💬 Falar com Especialista Agora
            </a>
          </div>
          <p style={{ color: '#94a3b8', fontSize: '0.9rem' }}>
            ⚡ Resposta em menos de 5 minutos | 🎯 Consultoria gratuita | 🚀 Implementação rápida
          </p>
        </div>
      </section>
    </Layout>
  );
}
