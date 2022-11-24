import React, { Fragment } from 'react';
import Head from 'next/head';
import styles from './season3.module.scss';


const Timeline = () => {

  return (
    <Fragment>
      <Head>
        <title>Temporada 3 - El Cubo</title>
        <meta property="og:title" content="▶️ Temporada 3 de【EL CUBO】La Serie Online Interactiva | RTVC Play" key="title" />
        <meta name="description" content="✅ El Cubo la única serie online interactiva, ⭐ entra ahora y sumérgete en las mejores historias tridimensionales de la televisión online gratuita" />
        <meta property="og:image" content="" />
      </Head>

      <div className={styles.TimelineContainer} id="timeline-1">

      <div className={styles.timelineHeader}>
        <h2 className={styles.timelineHeaderTitle}>Mustafa Kemal Atatürk</h2>
        <h3 className={styles.timelineHeaderSubtitle}>FATHER OF THE TURKS</h3>
      </div>
        
      <div className={styles.timeline}>
          <div className={styles.timelineItem} data-text="FATHER OF THE TURKS">
            <div className={styles.timelineContent}>
              <img className={styles.timelineImg} src="http://i.cdn.ensonhaber.com/resimler/diger/ataturk_3473.jpg" />
              <h2 className={styles.timelineContentTitle}>1881</h2>
              <p className={styles.timelineContentDesc}>He was born in 1881 (probably in the spring) in Salonica, then an Ottoman city, now inGreece. His father Ali Riza, a customs official turned lumber merchant, died when Mustafawas still a boy. His mother Zubeyde, adevout and strong-willed woman, raised him and his sister.</p>
            </div>
          </div>

          <div className={styles.timelineItem} data-text="FATHER OF THE TURKS">
            <div className={styles.timelineContent}>
              <img className={styles.timelineImg} src="http://gazetemanifesto.com/wp-content/uploads/2015/11/mustafa-kemal.jpg" />
              <h2 className={styles.timelineContentTitle}>1881</h2>
              <p className={styles.timelineContentDesc}>He was born in 1881 (probably in the spring) in Salonica, then an Ottoman city, now inGreece. His father Ali Riza, a customs official turned lumber merchant, died when Mustafawas still a boy. His mother Zubeyde, adevout and strong-willed woman, raised him and his sister.</p>
            </div>
          </div>

          <div className={styles.timelineItem} data-text="FATHER OF THE TURKS">
            <div className={styles.timelineContent}>
              <img className={styles.timelineImg} src="http://gazetemanifesto.com/wp-content/uploads/2015/11/mustafa-kemal.jpg" />
              <h2 className={styles.timelineContentTitle}>1881</h2>
              <p className={styles.timelineContentDesc}>He was born in 1881 (probably in the spring) in Salonica, then an Ottoman city, now inGreece. His father Ali Riza, a customs official turned lumber merchant, died when Mustafawas still a boy. His mother Zubeyde, adevout and strong-willed woman, raised him and his sister.</p>
            </div>
          </div>
      </div>

      </div>


    </Fragment>
  )
}

export default Timeline