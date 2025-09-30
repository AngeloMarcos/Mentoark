// frontend/components/ProcessStepCard.tsx
import React from 'react';
import styles from '../styles/Home.module.css';

interface ProcessStepCardProps {
  icon: string;
  title: string;
  description: string;
}

export const ProcessStepCard: React.FC<ProcessStepCardProps> = ({ icon, title, description }) => {
  return (
    <div className="card">
      <img src={icon} alt={title} className={styles.icon} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};
