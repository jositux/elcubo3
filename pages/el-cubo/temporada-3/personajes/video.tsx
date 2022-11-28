import React, { Fragment } from 'react';
import Head from 'next/head';
import styles from './video.module.scss';



const Video360 = () => {

  return (
    <Fragment>
      <Head>
        <title>Temporada 3 - El Cubo 360</title>
        <meta property="og:title" content="▶️ Temporada 3 de【EL CUBO】La Serie Online Interactiva | RTVC Play" key="title" />
        <meta name="description" content="✅ El Cubo la única serie online interactiva, ⭐ entra ahora y sumérgete en las mejores historias tridimensionales de la televisión online gratuita" />
        <meta property="og:image" content="" />
      </Head>

      <div className={styles.Video}>
      <iframe width="100%" height="100%"  src="https://www.youtube.com/embed/hJ83Okpu1Nw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>


    </Fragment>
  )
}

export default Video360