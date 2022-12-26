import React, { Fragment, useState, useRef } from 'react';
import VideoModal from 'components/Season3/Modal/VideoModal';

import PersonajeArrow from 'components/Season3/Svg/PersonajeArrow';
import Progress from 'components/Season3/Shared/Progress/Progress';
import Characters from './Characters';
import styles from './dashboard.module.scss';


const Dashboard = ({char}) => {
  const ref = useRef();

  const [isOpen, setIsOpen] = useState(false);

  const handleOnPlayVideo = () => {
    //if (ref && ref.current ) {
      setIsOpen(true)
    //}
  };

  const handleOnDashboardVideoEnd = () => {
    //disableScroll.off();
    setIsOpen(false);
  };


const characters = [
  {
    name:'soledad', 
    realName: 'Soledad', 
    description: '“Los cambios siempre dan miedo, pero hay que hacerlos con miedos y todo“',
    background: '/images/season3/steals/personaje-soledad.jpg',
    icon :'/images/season3/map/popups/popup-soledad.png',
    link: '../soledad',
  },
  {
    name:'diego', 
    realName: 'Diego', 
    description: '“Para lograr las cosas primero hay que soñarlas“',
    background: '/images/season3/steals/personaje-diego.jpg',
    icon :'/images/season3/map/popups/popup-diego.png',
    link: '../diego',
  },
  {
    name:'juandejesus', 
    realName: 'Juan de Jesús', 
    description: '“Uno busca su misión en la vida, pero a veces es la propia misión la que a uno lo encuentra“',
    background: '/images/season3/steals/personaje-juan.jpg',
    icon :'/images/season3/map/popups/popup-juandejesus.png',
    link: '../juan-de-jesus',
  },
  {
    name:'jenny', 
    realName: 'Jenny', 
    description: '“Viajando se conoce la libertad“',
    background: '/images/season3/steals/personaje-jenny.jpg',
    icon :'/images/season3/map/popups/popup-jenny.png',
    link: '../jenny',
  },
  {
    name:'guillermo', 
    realName: 'Don Guillermo', 
    description: '“Y si algún día me separo de María, espero encontrarla del otro lado“',
    background: '/images/season3/steals/personaje-guillermo.jpg',
    icon :'/images/season3/map/popups/popup-guillermo.png',
    link: '../guillermo',
  },
];

  return (
    <Fragment>
      <div className={styles.DashboardPageContainer}>

        <div className={styles.CharacterBackground}>

<div className={styles.Content}>
          <h2>Dashboard</h2>
          <p>Completa <strong>los hitos</strong> de cada personaje y desbloquea su <strong>Confesionario</strong>.<br />
Completa todos los personajes y desbloquea la <strong>Infografía</strong>.</p>

<div className={styles.Characters}>
  <h3>Objetos coleccionables</h3>
  <div className={styles.row}>
    <div className={styles.column1}>
      <div className={styles.avatar}>
      <img src="/images/season3/dashboard/juan.png" />
      </div>
      <div className={styles.name}>
      <h6>Juan de Jesús</h6>
      <a href="">Ver historia</a>
      </div>
      <div className={styles.progress}>
        <Progress percent={68} />
      </div>
    </div>
    <div className={styles.column2}>
      
    </div>
  </div>

</div>

</div>
     
          <Characters characters={characters} />
          {
          characters.map( (c, index) => (
            c.name == char ?
            <div key={index} className={`${styles.ContainerCharacter} ${styles[c.name]} ` }>

            <div className={styles.column}>
            <img src={c.icon}  />
            </div>
            <div className={styles.column}>
              <h2>{c.realName}</h2>
              <p>{c.description}</p>
              <a>Ver Confesionario
              <PersonajeArrow />
              </a>
            </div>
            
          </div>: ''
         
      
          ))
        }

      {/*<div className={styles.coverBG}></div>*/}
    </div>

  </div>
  </Fragment>
  )
};

export default Dashboard;