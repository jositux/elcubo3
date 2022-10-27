const chronological = {
  alba: {
    viewedNodes: [],
  },
  carey: {
    viewedNodes: [],
  },
  marina: {
    viewedNodes: [],
  },
  mercado: {
    viewedNodes: [],
  },
  elvira: {
    viewedNodes: [],
  },
  sales: {
    viewedNodes: [],
  },
};

const labyrinth = {
  currentCharacter: {
    id: null,
    name: null,
  },
  reward: false,
  lastNode: {
    id: null,
    character: null,
  },
};

const reflexive = {
  alba: {
    reward: false,
    viewedNodes: ["5708"],
  },
  carey: {
    reward: false,
    viewedNodes: ["5796"],
  },
  marina: {
    reward: false,
    viewedNodes: ["5735"],
  },
  mercado: {
    reward: false,
    viewedNodes: ["5737"],
  },
  elvira: {
    reward: false,
    viewedNodes: ["5795"],
  },
  sales: {
    reward: false,
    viewedNodes: ["5529"],
  },
};

const interactive = {
  aura: {
    reward: false,
    viewedNodes: ["5708"],
  },
  kodak: {
    reward: false,
    viewedNodes: ["5796"],
  },
  almanza: {
    reward: false,
    viewedNodes: ["5735"],
  },
  rugeles: {
    reward: false,
    viewedNodes: ["5737"],
  },
  andres: {
    reward: false,
    viewedNodes: ["5795"],
  },
  el_gato: {
    reward: false,
    viewedNodes: ["5529"],
  },
};

const gift = {
  poem: {
    reward: false
  },
  bullet: {
    reward: false
  },
  table: {
    reward: false
  }
}

export default {
  chronological,
  labyrinth,
  reflexive,
  interactive
};