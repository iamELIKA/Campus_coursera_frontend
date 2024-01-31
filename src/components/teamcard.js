import React from "react";
import styles from './card.css';
// all the instagram link code is commented because css not applied so icon covering all page
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const Teamcard = ({imgUrl,name,post,instagramUrl}) => {
    return ( 
        <div>
            <img src={imgUrl} alt={name} className={styles.image} />
            <div className={styles.content}>
                <h2 className={styles.name}>{name}</h2>
                <h4 className={styles.post}>{post}</h4>
            </div>
            {/* {instagramUrl && (
          <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className={styles.instagramIcon} />
          </a>
        )} */}
        </div>
     );
}
 
export default Teamcard;