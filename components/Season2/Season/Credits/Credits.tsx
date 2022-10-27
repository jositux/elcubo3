import React from 'react';
import SoundCredits from 'components/Season2/Svg/SoundCredits';
import styles from './season2.credits.module.scss';

const Credits = () => {

  return (
    <div className={styles.Credits}>
      <div className={styles.ToggleTrigger}>
        <span>Créditos</span>
      </div>
      <div className={styles.CreditsContent}>
        <div className={styles.Column1}>
          <h2>EL CUBO es concepto original de:</h2>
          <ul>
            <li>Juan Baquero Romero - <em>Director de RTVCPlay</em></li>
            <li>&nbsp;</li>
            <li>Álvaro Eduardo García - <em>Gerente RTVC</em></li>
            <li>María del Pilar Cubillos - <em>Productora Ejecutiva RTVCPlay</em></li>
            <li>Carolina Aponte Rodríguez - <em>Productora Delegada de Contenidos Originales de RTVCPlay</em></li>
            <li>Juliana García Mutis - <em>Productora Ejecutiva de Contenidos Originales de RTVCPlay</em></li>
            <li>Lina Acosta Góngora - <em>Productora Ejecutiva de Contenidos Originales de RTVCPlay </em></li>
            <li>Luisa Fernanda Mayorga - <em>Productora General RTVCPlay</em></li>
            <li>Arnau Gifreu Castells - <em>Productor de contenidos interactivos de RTVCPlay</em></li>
            <li>Camilo Galvis Guerra - <em>Realizador audiovisual RTVCPlay</em></li>
           
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
            <li>Jorge Enrique Abello – <em>Simón Restrepo</em></li>
            <li>Ariosto “Toto” Vega – <em>Bustamante</em></li>
            <li>Manuel Báez – <em>Rugeles</em></li>
            <li>Marianela Quintero – <em>Cielo</em></li>
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

        <div className={styles.Column2}>
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

        <div className={styles.Column1}>
          <h2>Equipo de Arte</h2>
          <ul>
            <li>Francisco Bellizi – <em>Diseñador de Arte</em></li>
            <li>Luis Vargas – <em>Director de Arte</em></li>
            <li>Liliana Avendaño – <em>Jefe de Ambientación</em></li>
            <li>John Edison Ortiz – <em>Utilero</em></li>
            <li>Carlos Merchán – <em>Asistente de Ambientación</em></li>
            <li>Junior Sebastián <em>Cabiativa – Asistente de Ambientación</em></li>
            <li>Sebastián Ramírez – <em>Asistente de ambientación</em></li>
          </ul>
        </div>

        <div className={styles.Column2}>
          <h2>Equipo de Arte, Vestuario y Maquillaje </h2>
          <ul>
            <li>Jorge Hernández – <em>Diseñador de Vestuario</em></li>
            <li>Carolina Sánchez – <em>Asistente de Vestuario</em></li>
            <li>Esvetlana arce – <em>Asistente de Vestuario</em></li>
            <li>Teresa Castaño – <em>Diseñadora de Maquillaje</em></li>
            <li>Leidy Bohórquez – <em>Asistente de Maquillaje</em></li>
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

        <div className={styles.Column1}>
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

        <div className={styles.Column2}>
          <h2>Sonido Directo</h2>
          <ul>
            <li>Danny Rodríguez – <em>Proveedor de sonido</em></li>
            <li>Felipe Cortés - <em>Sonidista</em></li>
            <li>Pablo Medina – <em>Sonidista</em></li>
            <li>Jorge Oviedo – <em>Microfonista</em></li>
          </ul>
        </div>

        <div className={styles.Column3}>
          <h2>Transporte</h2>
          <ul>
            <li>Yuber Segura – <em>Planta eléctrica</em></li>
            <li>Melco Algeciras – <em>Camión de luces</em></li>
            <li>Christian Caballero – <em>Camión de cámaras</em></li>
            <li>Carlos Gómez – <em>Camión de arte</em></li>
            <li>Edilberto Carvajal – <em>Camión de vestuario</em></li>
            <li>Sergio Guerra – <em>Van actores</em></li>
            <li>Ricardo Mejía – <em>Carro de locaciones</em></li>
            <li>Alexander Rincón – <em>Carro de producción</em></li>
            <li>Viviana Rodríguez – <em>Carro de producción</em></li>
            <li>Ricardo Galarza – <em>Carro de arte</em></li>
          </ul>
        </div>

        <div className={styles.Column1}>
          <h2>Proveedores y Servicios</h2>
          <ul>
            <li>Loma Films – <em>Casa de renta</em></li>
            <li>Soluciones Gastronómicas – <em>Alimentación</em></li>
            <li>J.J. Ortega Producciones – <em>Transporte</em></li>
            <li>DSM Bioseguridad y logística – <em>Bioseguridad</em></li>
            <li>GUN Service Internacional – <em>Seguridad</em></li>
            <li>Logística Thor – <em>Baños y Carpas</em></li>
            <li>Radar Logística – <em>Logística</em></li>
            <li>Car Solution – <em>Carros en escena</em></li>
            <li>Genética Molecular de Colombia – <em>Pruebas Covid</em></li>
            <li>Power Station – <em>Generador eléctrico</em></li>
            <li>Yamec Comunicaciones – <em>Radios</em></li>
          </ul>
        </div>

        <div className={styles.Column2}>
          <h2>Interfaz - Estudio Multimedia</h2>
          <ul>
            <li>Juan Marín – <em>Director Creativo</em></li>
            <li>Andrés Cano – <em>Diseño Gráfico - Video y Animación</em></li>
            <li>César León – <em>Director de UX</em></li>
            <li>Ing. José María Guaimas – <em>It Director</em></li>
            <li>Ing. Guillermo Colotti – <em>React Developer</em></li>
            <li>Ing. Marcos Henning – <em>Drupal API</em></li>
            <li className={styles.SoundCredits}><a href="https://design.facebook.com/soundkitlicense/">Licencia de efectos de sonido<SoundCredits /></a>
</li>
          </ul>
        </div>

        <div className={styles.Column3}>
          <h2>Dirección de Tecnologías Convergentes RTVC</h2>
          <ul>
            <li>Orlando Bernal Díaz – <em>Director de Tecnologías</em></li>
            <li>Gerardo Andrés Penagos – <em>Dueño de Producto</em></li>
            <li>César León – <em>Director de UX</em></li>
            <li>Juan Jorge Hernández – <em>- Desarrollador de Sitios Web y Aplicaciones Móviles</em></li>
            <li>Iván Darío Roldán – <em>Administrador Infraestructura Nube</em></li>
          </ul>

          <h3 className={styles.CreditsMinticTitle}>Este contenido fue financiado con recursos del Fondo Único de Tecnologías de la Información y las Comunicaciones de</h3>
          <img className={styles.CreditsMinticImg} src="/images/rtvc/logo-mintic.png" />
                  
        </div>


      </div>
      <div className={styles.ColumnFinal}>
        Una producción por encargo de Valencia Producciones FX S.A.S<br />
        para RTVCPlay 2021
        </div>
    </div>
  );
}

export default Credits;
