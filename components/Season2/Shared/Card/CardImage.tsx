import React, { Fragment } from 'react';
import styles from './season2.cardImage.module.scss';


const CardImage = ({ url, title, paragraph, isEnabled }) => {
  return (
    <article className={`${styles.Card}`}>
      <div>
        {isEnabled &&
          <Fragment>
            <img src={url} /><span>{title}</span>
          </Fragment>
        }
      </div>
      <p>
        {isEnabled ? paragraph
          :
          <Fragment>
            <span className={styles.skeleton}></span>
            <span className={styles.skeleton}></span>
            <span className={styles.skeleton}></span>
            <span className={styles.skeleton}></span>
            <span className={styles.skeleton}></span>
          </Fragment>
        }
      </p>
    </article>
  );
};

export default CardImage;
