import React from 'react';
import { CharacterSelectorWrapper } from './CharacterSelector.style';

const CharacterSelector = ({ list }) => {
  React.useEffect(() => {
    // Pane Slide
    const button_open = document.querySelectorAll('.toggle');
    const button_close = document.querySelector('.close');
    const pane = document.querySelector('.pane');
    const pane_cover = document.querySelector('.pane-cover');

    if (button_open) {
      button_open.forEach(function (link) {
        link.addEventListener('click', () => {
          pane.classList.add('open');
          pane_cover.classList.toggle('visible');
        });
      });
    }

    if (button_close) {
      button_close.addEventListener('click', () => {
        pane.classList.toggle('open');
        pane_cover.classList.toggle('visible');
      });
    }
  }, []);

  return (
    <CharacterSelectorWrapper>
      <div className="pane-cover"></div>
      <div className="pane">
        <a className="close">
          <img src="/images/pane-close.svg" />
        </a>
        <div className="pane-content">
          <h2>Cambiar de personaje</h2>
          <ul className="list-personajes">
            {list.map((l) => (
              <li key={l.link}>
                <a href={l.link} className={`${l.active ? 'active' : ''}`}>
                  {l.name}
                  <img src="/images/icon-selected-char.svg" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </CharacterSelectorWrapper>
  );
};

export default CharacterSelector;
