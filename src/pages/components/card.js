import React from 'react';
import styles from './card.css';

const Card = ({ imageUrl, name, description }) => {
  return (
    <div className={styles.card}>
      <img src={imageUrl} alt={name} className={styles.image} />
      <div className={styles.content}>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default Card;