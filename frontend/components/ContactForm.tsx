import React, { useState } from 'react'
import axios from 'axios'
import styles from './ContactForm.module.css'
export function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle'|'sending'|'success'|'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/leads`,
        { name, email, message }
      )
      setStatus('success')
      setName('')
      setEmail('')
      setMessage('')
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome (opcional)"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="E-mail (opcional)"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <textarea
        rows={4}
        placeholder="Sua mensagem"
        value={message}
        onChange={e => setMessage(e.target.value)}
        required
      />
      <button type="submit" disabled={status==='sending'}>
        {status==='sending' ? 'Enviando...' : 'Enviar Mensagem'}
      </button>
      {status==='success' && <p className={styles.success}>Obrigado! Entraremos em contato em breve.</p>}
      {status==='error'   && <p className={styles.error}>Erro ao enviar. Tente novamente.</p>}
    </form>
  )
}
