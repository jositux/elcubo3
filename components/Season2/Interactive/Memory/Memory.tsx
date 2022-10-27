import React, { useState, useEffect } from "react";
import { memoryImages } from 'utils/Memory';
import CountDown from 'components/Season2/Shared/Progress/CountDown';
import ButtonBig from 'components/Season2/Shared/Button/ButtonBig';
import Grid from "./Grid";

import { useSelector } from 'react-redux';

const Memory = ({ dontPlay, wonTheGame }) => {

  const { currentItem } = useSelector(state => state?.interactive);
  const identifier = currentItem?.field_ec_gallery_ref || currentItem?.id
  const currentImages = memoryImages[identifier];
  const [showMemory, setShowMemory] = useState(true);
  const [visibleItems, setVisibleItems] = useState([]);
  const [finishedItems, setFinishedItems] = useState([]);
  const [winner, setWinner] = useState(false);

  const listToConcat = currentImages.map(image => ({ ...image, id: image.id + 100 }));
  const list = currentImages.concat(listToConcat);
  const [itemsList, setItemsList] = useState(list);

  const [play, setPlay] = useState(false);

  const rel = parseInt(currentItem?.field_ec_time_action);

  const checkItems = (firstIndex, secondIndex) => {
    if (
      firstIndex !== secondIndex &&
      itemsList[firstIndex].url === itemsList[secondIndex].url
    ) {
      setFinishedItems([...finishedItems, firstIndex, secondIndex]);
    } else {
      setTimeout(() => {
        setVisibleItems([]);
      }, 600);
    }
  };

  const shuffleArray = (array) => {
    const newArray = [...array];
    for (var i = newArray.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = newArray[i];
      newArray[i] = newArray[j];
      newArray[j] = temp;
    }
    return newArray;
  };

  const handlePlay = () => {
    setItemsList(current => {
      return shuffleArray(current);
    });
    setVisibleItems([]);
    setFinishedItems([]);
    setWinner(false);
    setPlay(true);
  };

  const handleDontPlay = () => {
    setShowMemory(false);
    dontPlay();
  }

  useEffect(
    () => {
      if (finishedItems.length > 0 && finishedItems.length === list.length) {
        setWinner(true);
      }
    },
    [finishedItems]
  );

  return (
    <>
      {showMemory ?
        <>
          {play ?
            <div className={"game fadeIn game-" + rel}>
              <div className="game-inner">
                <div className="game-row fadeIn">
                  {!winner &&
                    <CountDown
                      text={''}
                      totalTime={60}
                      onFinish={handleDontPlay}
                    />
                  }
                  {winner && (
                    <div className="text-win fadeIn"> ¡Felicitaciones! Has pasado la prueba</div>
                  )}
                </div>
                <div className="game-row">
                  {list.length === 0 ? (
                    <div>...Loading</div>
                  ) : (
                    <div>
                      <Grid
                        list={itemsList}
                        visibleItems={visibleItems}
                        setVisibleItems={setVisibleItems}
                        finishedItems={finishedItems}
                        checkItems={checkItems}
                      />
                      {winner && (
                        <div className="win">
                          You Win !
                        </div>
                      )}
                    </div>
                  )}

                  <button className="new"
                    onClick={handlePlay}
                  >
                    Nuevo Juego
                  </button>
                </div>

                <div className="game-buttons game-row">
                  {winner ?
                    <ButtonBig onClick={wonTheGame} type={'btn'} text="Continuar Experiencia" />
                    :
                    <button className="button-negative" onClick={handleDontPlay}>No quiero jugar</button>
                  }
                </div>
              </div>
            </div>
            :
           
            <div className={"intro-memory fadeIn intro-" + rel}>
             
              <div className="content-intro">
                <div className="intro-buttons">
                  <ButtonBig
                    onClick={handlePlay}
                    type={'btn'}
                    text="jugar a la memoria"
                  />
                  <button className="button-negative" onClick={dontPlay}>No quiero jugar</button>
                </div>
              </div>
            </div>
          }
        </ >
        :
        <div></div>
      }
    </>
  );
}

export default Memory;