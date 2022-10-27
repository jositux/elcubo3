import rewards from 'constants/Rewards';
import NameUtils from 'utils/Names';

export const defaultInteractive = {
  points: 0,
  continueOnTime: 0,
  confessional: [{
    videosToActivate: 3,
    videosViewed: [],
    characterId: 6600,
    //characterId: 6202,
    characterName: "Almanza",
    videoId: "a01613",
    image: "/images/season2/characters/confesionario-3.jpg",
    description: "Lorem ipsum "
  },
  {
    videosToActivate: 3,
    videosViewed: [],
    characterId: 6602,
    //characterId: 6189,
    characterName: "Aura Bardot",
    videoId: "a01614",
    image: "/images/season2/characters/confesionario-8.jpg",
    description: "Lorem ipsum"
  },
  {
    videosToActivate: 3,
    videosViewed: [],
    characterId: 6604,
    //characterId: 6200,
    characterName: "El Gato",
    videoId: "a01615",
    image: "/images/season2/characters/confesionario-4.jpg",
    description: "Lorem ipsum"
  },
  {
    videosToActivate: 2,
    videosViewed: [],
    characterId: 6603,
    //characterId: 6199,
    characterName: "Kodak",
    videoId: "a01617",
    image: "/images/season2/characters/confesionario-6.jpg",
    description: "Lorem"
  },
  {
    videosToActivate: 3,
    videosViewed: [],
    characterId: 6613,
    //characterId: 6198,
    characterName: "Simón Restrepo",
    videoId: "a01619",
    image: "/images/season2/characters/confesionario-2.jpg",
    description: "Lorem"
  },
  {
    videosToActivate: 3,
    videosViewed: [],
    characterId: 6605,
    //characterId: 6193,
    characterName: "Héctor Fabio Rugeles",
    videoId: "a01620",
    image: "/images/season2/characters/confesionario-1.jpg",
    description: "Lorem"
  },
  {
    videosToActivate: 2,
    videosViewed: [],
    characterId: 6601,
    //characterId: 6188,
    characterName: "Andrés Erazo",
    videoId: "a01893",
    image: "/images/season2/characters/confesionario-7.jpg",
    description: "Lorem"
  },
  {
    videosToActivate: 2,
    videosViewed: [],
    characterId: 6611,
    //characterId: 6196,
    characterName: "Lucía Román",
    videoId: "a01618",
    image: "/images/season2/characters/confesionario-5.jpg",
    description: "Lorem Lucia"
  }
  ],
  collectibles: [{
    title: '2:10 - El computador de Andrés',
    image: '/images/season2/assets/02_laptop.png',
    isActive: false,
    viewed: false,
    scoreWon: 0,
    repeated: false
  },
  {
    title: '2:30 - Cita en latín fotografiada por Kodak',
    image: '/images/season2/assets/03_cita_latin.png',
    isActive: false,
    viewed: false,
    scoreWon: 0,
    repeated: false
  },
  {
    title: '5:50 - Bala del asesino de Andrés',
    image: '/images/season2/assets/04_bala.png',
    isActive: false,
    viewed: false,
    scoreWon: 0,
    repeated: false
  },
  {
    title: '6:20 - Andrés está buscando algo',
    image: '/images/season2/assets/05_lupa.png',
    isActive: false,
    viewed: false,
    scoreWon: 0,
    repeated: false
  },
  {
    title: '7:25 - El recuerdo de Andrés',
    image: '/images/season2/assets/06_recordando.png',
    isActive: false,
    viewed: false,
    scoreWon: 0,
    repeated: false
  },
  {
    title: '9:40 - Carpeta con imágenes de 4 víctimas del asesino',
    image: '/images/season2/assets/07_carpeta_imagenes.png',
    isActive: false,
    viewed: false,
    scoreWon: 0,
    repeated: false
  },
  {
    title: '10:00 - Cita del cuento ‘Berenice’ de Edgar Alan Poe',
    image: '/images/season2/assets/08_libro_e_allan_poe.png',
    isActive: false,
    viewed: false,
    scoreWon: 0,
    repeated: false
  },
  {
    title: '14:00 - Foto de una de las víctimas',
    image: '/images/season2/assets/09_polaroid.png',
    isActive: false,
    viewed: false,
    scoreWon: 0,
    repeated: false
  },
  {
    title: '15:30 - Copas de vino de Aura y El Gato',
    image: '/images/season2/assets/10_copas_vino.png',
    isActive: false,
    viewed: false,
    scoreWon: 0,
    repeated: false
  },
  {
    title: '16:00 - Empaque Condón de El Gato',
    image: '/images/season2/assets/11_caja_condones.png',
    isActive: false,
    viewed: false,
    scoreWon: 0,
    repeated: false
  },
  {
    title: '19:00 - Botella de vino Aura y El Gato',
    image: '/images/season2/assets/12_botella_vino.png',
    isActive: false,
    viewed: false,
    scoreWon: 0,
    repeated: false
  },
  {
    title: '23:40 - Mensaje del asesino a Andrés',
    image: '/images/season2/assets/13_mensaje_asesino.png',
    isActive: false,
    viewed: false,
    scoreWon: 0,
    repeated: false
  },
  {
    title: '27:00 - Video de joven víctima atacando a Aura',
    image: '/images/season2/assets/14_video_ataque.png',
    isActive: false,
    viewed: false,
    scoreWon: 0,
    repeated: false
  },
  {
    title: '31:20 - Una caja para Aura',
    image: '/images/season2/assets/15_caja_abierta.png',
    isActive: false,
    viewed: false,
    scoreWon: 0,
    repeated: false
  },
  {
    title: '35:30 - Manchas de aceite detectadas por Rugeles',
    image: '/images/season2/assets/16_mancha_aceite.png',
    isActive: false,
    viewed: false,
    scoreWon: 0,
    repeated: false
  },
  {
    title: '37:10 - El periódico de Almanza',
    image: '/images/season2/assets/17_periodico.png',
    isActive: false,
    viewed: false,
    scoreWon: 0,
    repeated: false
  },
  {
    title: '39:50 - Fotografía de la víctima más importante',
    image: '/images/season2/assets/18_foto_victima.png',
    isActive: false,
    viewed: false,
    scoreWon: 0,
    repeated: false
  },
  {
    title: '45:20 - Bolsa con dientes de la víctima',
    image: '/images/season2/assets/19_dientes_victima.png',
    isActive: false,
    viewed: false,
    scoreWon: 0,
    repeated: false
  },
  {
    title: '49:50 - USB de El Gato',
    image: '/images/season2/assets/20_usb.png',
    isActive: false,
    viewed: false,
    scoreWon: 0,
    repeated: false
  },
  {
    title: '52:30 - Mensaje de El Gato al celular Andrés',
    image: '/images/season2/assets/21_sms_recibido.png',
    isActive: false,
    viewed: false,
    scoreWon: 0,
    repeated: false
  },
  {
    title: '57:30 - Cámara oculta usada por Aura',
    image: '/images/season2/assets/22_camara.png',
    isActive: false,
    viewed: false,
    scoreWon: 0,
    repeated: false
  },
  {
    title: '1:02:00 - Bustamante como icono político',
    image: '/images/season2/assets/23_icono_politico.png',
    isActive: false,
    viewed: false,
    scoreWon: 0,
    repeated: false
  },
  {
    title: '1:10:00 - Audífonos de Aura',
    image: '/images/season2/assets/24_audifonos.png',
    isActive: false,
    viewed: false,
    scoreWon: 0,
    repeated: false
  },
  {
    title: '1:15:00 - Textos de Edgar Allan Poe',
    image: '/images/season2/assets/25_libro.png',
    isActive: false,
    viewed: false,
    scoreWon: 0,
    repeated: false
  },
  {
    title: '1:23:00 - Micrófono regalo de El Gato',
    image: '/images/season2/assets/26_microfono.png',
    isActive: false,
    viewed: false,
    scoreWon: 0,
    repeated: false
  },
  {
    title: '1:27:00 - Certificado de necropsia',
    image: '/images/season2/assets/27_certificado.png',
    isActive: false,
    viewed: false,
    scoreWon: 0,
    repeated: false
  },
  {
    title: '1:29:00 - Un afiche de Bustamante',
    image: '/images/season2/assets/28_afiche.png',
    isActive: false,
    viewed: false,
    scoreWon: 0,
    repeated: false
  },
  {
    title: '1:35:00 - Un teléfono en el despacho de Almanza',
    image: '/images/season2/assets/29_telefono.png',
    isActive: false,
    viewed: false,
    scoreWon: 0,
    repeated: false
  },
  {
    title: '1:44:00 - Un Libro de Edgar Allan Poe',
    image: '/images/season2/assets/30_libro_3.png',
    isActive: false,
    viewed: false,
    scoreWon: 0,
    repeated: false
  },
  {
    title: '1:48:00 - El Cuchillo de El Gato',
    image: '/images/season2/assets/31_navaja.png',
    isActive: false,
    viewed: false,
    scoreWon: 0,
    repeated: false
  },
  {
    title: '1:49:00 - Un audio del asesinato',
    image: '/images/season2/assets/32_cel_audio.png',
    isActive: false,
    viewed: false,
    scoreWon: 0,
    repeated: false
  },
  {
    title: '1:57:00 - Una caja cerrada con una sorpresa',
    image: '/images/season2/assets/33_caja_cerrada.png',
    isActive: false,
    viewed: false,
    scoreWon: 0,
    repeated: false
  }
  ],
};

const setCharacterNodesChrono = (userData, character, current) => {
  const characterName = NameUtils.getCharacterName(character);
  if (characterName) {
    let userNodes = {
      ...rewards.chronological,
      ...userData,
    };
    const characterData = {
      ...userNodes[characterName]
    };
    const characterNodes = characterData.viewedNodes;
    const hasViewedCurrent = characterNodes.indexOf(current);
    if (hasViewedCurrent < 0) {
      characterNodes.push(current);
    }
    const sortedViewed = characterNodes.sort();
    userNodes[characterName] = {
      viewedNodes: characterNodes,
    }

    return userNodes;
  }
  return userData;
};

const setCharacterNodesReflexive = (userData, character, current, answers) => {
  const reward = answers && answers.length ? false : true;
  const userNodes = {
    ...rewards.reflexive,
    ...userData,
  };
  const characterData = {
    ...userNodes[character]
  };
  let characterNodes = characterData.viewedNodes;
  const currentIndex = characterNodes.indexOf(current);
  if (currentIndex >= 0 && characterNodes.length > currentIndex) {
    characterNodes.splice(currentIndex + 1);
  } else {
    characterNodes.push(current);
  }
  let resultNodes = {
    ...userNodes
  };
  resultNodes[character] = {
    reward,
    viewedNodes: [...characterNodes]
  };
  return resultNodes;
};

const setCharacterNodesLabyrinth = (userData, character, currentNode, nextNodes, initialName = null, initialId = null) => {
  const reward = nextNodes && nextNodes.length === 1 ? true : false;
  const initialCharacter = {
    id: initialId,
    name: initialName,
  };
  const currentCharacter = initialName ? initialCharacter : userData.currentCharacter;
  let userNodes = {
    ...rewards.labyrinth,
    ...userData,
    lastNode: {
      id: currentNode,
      character,
    },
    reward,
    currentCharacter,
  };
  return userNodes;
};

const setCurrentCharacterLabyrinth = (userData, currentCharacter) => {
  let userNodes = {
    ...rewards.labyrinth,
    ...userData,
    currentCharacter: currentCharacter,
  };
  return userNodes;
};

const updateInteractive = (currentData, colOrder, score, videoViewed = null, characterId = null) => {
  let formatScore = score;
  const toastData = {
    score: 0,
    repeated: false,
  };
  if (!typeof score === 'number' || score === NaN) {
    formatScore = 10;
  }
  const interactiveData = {
    ...defaultInteractive,
    ...currentData
  };
  let newConfessionalUnlocked = null;
  if (videoViewed && characterId) {
    const updatedConfessional = interactiveData?.confessional.map(item => {
      if (item.characterId === parseInt(characterId)) {
        const oldQty = item.videosViewed;
        item.videosViewed = item.videosViewed.includes(videoViewed) ? item.videosViewed : [...item.videosViewed, videoViewed];
        if (oldQty < item.videosViewed && item.videosViewed.length === parseInt(item.videosToActivate)) {
          newConfessionalUnlocked = item.characterName;
        }
      }
      return { ...item };
    });
    interactiveData.confessional = [...updatedConfessional];
  }
  const currentCol = interactiveData.collectibles[colOrder - 1];
  if (currentCol.viewed && currentCol.isActive) {
    currentCol.repeated = true;
    toastData.repeated = true;
  }
  if (!currentCol.viewed) {
    currentCol.isActive = true;
    currentCol.viewed = true;
    currentCol.scoreWon = parseInt(formatScore);
    interactiveData.points = parseInt(interactiveData.points) + parseInt(formatScore);
  }
  if (currentCol.viewed && !currentCol.isActive) {
    formatScore = parseInt(formatScore / 2);
    currentCol.isActive = true;
    currentCol.scoreWon = formatScore;
    interactiveData.points = parseInt(interactiveData.points) + formatScore;
  }
  toastData.score = currentCol.scoreWon;
  interactiveData.collectibles[colOrder - 1] = currentCol;
  return {
    interactiveData,
    toastData,
    newConfessionalUnlocked
  };
};

const setInteractiveViewed = (currentData, colOrder) => {
  if (colOrder) {
    const interactiveData = {
      ...defaultInteractive,
      ...currentData
    };
    interactiveData.collectibles[colOrder - 1].viewed = true;
    return interactiveData;
  }
  return currentData;
};

const setInteractiveLastMinuteViewed = (currentData, continueOnTime) => {
  if (continueOnTime) {
    const interactiveData = {
      ...defaultInteractive,
      ...currentData
    };
    interactiveData.continueOnTime = continueOnTime;
    return interactiveData;
  }
  return currentData;
};

export default {
  setCharacterNodesChrono,
  setCharacterNodesReflexive,
  setCharacterNodesLabyrinth,
  setCurrentCharacterLabyrinth,
  setInteractiveViewed,
  setInteractiveLastMinuteViewed,
  updateInteractive
};