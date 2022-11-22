import React, { useEffect } from 'react';
import styles from './season2.ranking.module.scss';
import { defaultInteractive } from 'utils/Modes';
import { useSelector } from 'react-redux';

const Ranking = ({ collectibles = [] }) => {

  const { ranking: currentRanking } = useSelector(state => state.dashboard);
  const { user } = useSelector(state => state);
  const elcubo_interactive_data_json = user?.elcubo_interactive_data_json;
  const idFromState = user?.id;
  const { points: pointsFromState } = elcubo_interactive_data_json ? JSON.parse(elcubo_interactive_data_json) : { points: null };
  const defaultCollectibles = defaultInteractive.collectibles.map(item => item);

  const defaultImage = '/images/season2/avatar.png';


  const capitalize = (s) => {
    s = s.toLowerCase();
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

  useEffect(() => {
    currentRanking.sort(({ field_ec2_interactive_score: scoreA }, { field_ec2_interactive_score: scoreB }) => {
      if (parseInt(scoreA) > parseInt(scoreB)) return -1;
      if (parseInt(scoreA) < parseInt(scoreB)) return 1;
      return 0;
    })
  }, [user, currentRanking]);

  return (
    <div className={styles.Ranking}>
      <section>
        <div className={styles.iconsCover}>
          <h2>Pistas coleccionables</h2>
          <p className={styles.SectionCopy}>Accede a todos los items que has venido descubriendo en tu intento por descifrar los misterios de  "El inquisidor". </p>
          <div className={styles.icons}>
            {defaultCollectibles && defaultCollectibles.map((item, i) => {
              const activeClass = collectibles && collectibles.length && collectibles[i].isActive ? styles.active : ''
              return (
                <div key={i} className={`${styles.icon} ${activeClass}`}  >
                  <img src={item.image} />
                  <div className={styles.bubble}>{item.title}</div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.rankingCover}>
          <h2>Ranking</h2>
          <div className={styles.rankingList}>
            {currentRanking && currentRanking.length && currentRanking.map(({
              user_picture = '',
              field_full_name = '',
              field_ec2_interactive_score = '',
              id = ''
            }, i) => {
              const isCurrentUser = id === `${idFromState}`;
              const currentPoints = isCurrentUser ? pointsFromState : field_ec2_interactive_score;
              return (
                <div key={`${i}_${user_picture}`} className={`${styles.itemRanking} ${isCurrentUser ? styles.currentUser : ''}`}>
                  <div className={styles.id}>
                    {i + 1}º
                  </div>
                  <div className={styles.avatar}>
                      <div className={styles.coverImage}>
                        <img src={user_picture || defaultImage} />
                      </div>
                  </div>
                  <div className={styles.name}>
                    <span>{capitalize(field_full_name)}</span>
                  </div>
                  <div className={styles.score}>
                    {currentPoints || field_ec2_interactive_score} puntos
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

    </div >
  );
};

export default Ranking;