import React, { Fragment } from 'react';
import styles from './season3.credits.module.scss';

const Credits = () => {

  return (
    <Fragment>
      <div className={styles.CreditsContainer}>
        <img className={styles.SliderImage} src="/images/season3/slider/home_slider_04.jpg" />

        <div className={styles.Credits}>
          <div className={styles.CreditsContent}>
            <div className={styles.Column1}>
              <h2>EL CUBO es concepto original de:</h2>
              <ul>
                <li>Juan Baquero Romero - <em>Director de RTVCPlay</em></li>
                <li>Álvaro Eduardo García - <em>Gerente RTVC</em></li>
                <li>María del Pilar Cubillos - <em>Productora Ejecutiva RTVCPlay</em></li>
                <li>Carolina Aponte Rodríguez - <em>Productora Delegada de Contenidos Originales de RTVCPlay</em></li>
                <li>Juliana García Mutis - <em>Productora Ejecutiva de Contenidos Originales de RTVCPlay</em></li>
                <li>Lina Acosta Góngora - <em>Productora Ejecutiva de Contenidos Originales de RTVCPlay </em></li>
                <li>Luisa Fernanda Mayorga - <em>Productora General RTVCPlay</em></li>
              </ul>
              <br/>
              
            </div>

            <div className={styles.Column2}>
              <h2>Elenco</h2>
              <ul>
                <li>Diego León Hoyos – <em>Almanza</em></li>
                <li>Luís Eduardo Arango – <em>Kodak</em></li>
                <li>Mario Ruíz – <em>Jair</em></li>
                <li>José Julián Gaviria – <em>Andrés</em></li>
                <li>María Adelaida Puerta – <em>Aura</em></li>
                <li>Claudio Cataño – <em>Gato</em></li>
                <li>Isabel Olano – <em>Lucía</em></li>
                
              </ul>
            </div>

            <div className={styles.Column3}>
              <h2>Equipo de Dirección</h2>
              <ul>
              <li>Gustavo Salcedo - <em>Idea Original - Libretos</em></li>
                <li>Juan Baquero Romero - <em>Director Creativo</em></li>
                <li>Mauricio Navas Talero – <em>Director y Show Runner</em></li>
                <li>Andrés Valencia – <em>Director</em></li>
                <li>Arnau Gifreu Castells - <em>Diseño, guion y dirección de interactividad</em></li>
                <li>David Velázquez – <em>Asistente de dirección</em></li>
                <li>Jesús “TETU” Cortés – <em>2do Asistente de Dirección</em></li>
                <li>Duver Betancour – <em>Coordinador de piso</em></li>
                <li>Danilo Chacón – <em>Planner</em></li>
                <li>Carmenza Mendigaña – <em>Script</em></li>
              </ul>
            </div>

            <div className={styles.Column1}>
              <h2>Equipo de Producción</h2>
              <ul>
                <li>Luisa Bendeck - <em>Productora Ejecutiva</em></li>
                <li>J.C. “Chomo” Calderón – <em>Jefe de Producción</em></li>
                <li>Carlos Mario Pérez – <em>Productor de Campo</em></li>
                <li>Claudia Lozano – <em>Productora de Locaciones</em></li>
                <li>Manuel Rubio – <em>Asistente PUFA</em></li>
                <li>John Duarte – <em>Coord. Producción de entregables</em></li>
                <li>Jenny Alejandra Martínez – <em>Cafetería</em></li>
              </ul>

            </div>

            <div className={styles.Column1}>
              <h2>Equipo de Postproducción</h2>
              <ul>
                <li>Danny Bermúdez Urbano – <em>Editor Conceptual</em></li>
                <li>Alejandro Arismendi – <em>Edición Offline</em></li>
                <li>Daniela Arismendi – <em>Ingesta y Sincronización</em></li>
                <li>Juan V Martínez – <em>Colorista</em></li>
                <li>Germán León – <em>Diseño sonoro y mezcla final</em></li>
              </ul>

            </div>

            <div className={styles.Column3}>
              <h2>VFX y Composición Digital</h2>
              <ul>
                <li>Freddy Rodríguez – <em>Director VFX</em></li>
                <li>Andrea López - <em>Coordinadora VFX</em></li>
                <li>Johan Ballesteros – <em>Composición digital</em></li>
                <li>Haiver Henao - <em>Composición digital</em></li>
                <li>Tatiana Virviescas - <em>Composición digital</em></li>
                <li>Jonatan Loaiza - <em>Composición digital</em></li>
                <li>Juan Pablo Vargas - <em>Composición digital</em></li>
                <li>James Salamanca - <em>Composición digital</em></li>
                <li>Jesús Caicedo - <em>Composición digital</em></li>
                <li>Christor Córdoba - <em>Composición digital</em></li>
                <li>Óscar Rincón - <em>Composición digital</em></li>
              </ul>
            </div>

            <div className={styles.Column3}>
              <h2>Fotogragía y luces</h2>
              <ul>
                <li>Rubén Fernández – <em>Director de Fotografía</em></li>
                <li>Rubén Fernández – <em>Gaffer</em></li>
                <li>Dago Rivera – <em>Asistente de Luces</em></li>
                <li>Juan Carlos Rivera – <em>Asistente de Luces</em></li>
                <li>Fidel Aguilera – <em>Electrónico</em></li>
              </ul>
            </div>

            <div className={styles.Column2}>
              <h2>Equipo de Cámara</h2>
              <ul>
                <li>Nicolás Sastoque – <em>Camarógrafo</em></li>
                <li>Cristian Barajas – <em>Foquista</em></li>
                <li>Cristian Torres – <em>2do de Cámara</em></li>
                <li>Oscar Díaz – <em>2do de Cámara</em></li>
                <li>Alejandro Niebles – <em>Data Manager</em></li>
                <li>Walter Gómez – <em>Foto Fija</em></li>
              </ul>
            </div>

            <div className={styles.Column3}>
              <h2>Sonido Directo</h2>
              <ul>
                <li>Danny Rodríguez – <em>Proveedor de sonido</em></li>
                <li>Felipe Cortés - <em>Sonidista</em></li>
                <li>Pablo Medina – <em>Sonidista</em></li>
                <li>Jorge Oviedo – <em>Microfonista</em></li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Credits;