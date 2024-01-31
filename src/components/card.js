import React from 'react';
import styles from './card.css';

const Card = ({status ,imageUrl, name, description, data }) => {
  return (
    <div className={styles.card}>
      <div classname="stat">{status}</div>
      <img src={imageUrl} alt={name} className={styles.image} />
      <div className={styles.content}>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.description}>{description}</p>
      </div>
      <div>
        <div>small image icon</div>
        <p> {data}</p>
      </div>
    </div>
  );
};

export default Card;