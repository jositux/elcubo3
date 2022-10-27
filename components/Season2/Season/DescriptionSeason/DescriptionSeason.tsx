import React from 'react';
import styles from './season2.descriptionSeason.module.scss';


const DescriptionSeason = () => {

  return (
    <div className={styles.DescriptionCover}>
      <section className={styles.Description}>
        <img className={styles.ImgDivisor} src="/images/season2/line-top.svg" />
        <div className={styles.DescriptionHeader}>
          <div className={styles.DescriptionLogo}>
            <img className={styles.LogoSeason2} src="/images/season2/logo-season2.png" />
          </div>

          <div className={styles.DescriptionParagraph}>
            <p>Cadáveres de mujeres bellas aparecen por toda la ciudad y un tabloide, El Inquisidor, es el mejor informado sobre el tema. Descubre el misterio que se oculta en las 2 temporadas de El inquisidor.
</p>
          </div>

          <div className={styles.DescriptionSeason1}>
            <a href="https://www.rtvcplay.co/series-ficcion/el-inquisidor">
              <img src="/images/season2/season1.jpg" />
              <h3>Temporada 1</h3>
            </a>
          </div>
        </div>
        <img className={styles.ImgDivisor} src="/images/season2/line-bottom.svg" />

        <div className={styles.DescriptionContent}>
          <div className={styles.DescriptionText}>
            <img className={styles.Hilos1} src="/images/season2/hilos-0.png" />
            <p>Para vivir la experiencia interactiva de El Inquisidor II, podrás navegar por dos modos narrativos.</p>
          </div>

          <div className={styles.DescriptionPhotoSeason2}>
            <img className={styles.Hilos2} src="/images/season2/hilos-1.png" />
            <img className={styles.ImgPhotoSeason2} src="/images/season2/season2.jpg" />
            <h2>En el modo lineal, podrás ver el contenido como una película completa hasta llegar al desenlace de la serie. Es decir, es un único episodio.<br/><br/>
En el modo interactivo podrás ir descubriendo pistas que aparecerán en la pantalla y podrás dar click a la respuesta que consideres. Entre más respuestas y pistas obtengas, llegarás al final y el mejor puntaje se llevará un reconocimiento.</h2>
          </div>
        </div>

        <div className={styles.DescriptionContentMobile}>
          <img className={styles.ImgPhotoSeason2} src="/images/season2/season2.jpg" />
          <h2>Para vivir la experiencia interactiva de El Inquisidor II, podrás navegar por dos modos narrativos.</h2>

          <p>En el modo lineal, podrás ver el contenido como una película completa hasta llegar al desenlace de la serie. Es decir, es un único episodio.
En el modo interactivo podrás ir descubriendo pistas que aparecerán en la pantalla y podrás dar click a la respuesta que consideres. Entre más respuestas y pistas tengas, llegarás al final y el mejor puntaje se llevará un reconocimiento.</p>
        </div>


      </section>
    </div >
  );
};

export default DescriptionSeason;
