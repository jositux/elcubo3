interface Image {
  id: number;
  desc: string;
  url: string;
}

interface Images {
  images1: Image[];
  images2: Image[];
  '1337': Image[];
  '1353': Image[];
}

/*
interface Images {
  images1: Image[];
  images2: Image[];
  '1252': Image[];
  '1253': Image[];
}*/

export const memoryImages: Images = {
  images1: [
    { id: 1, desc: '', url: '/images/season2/memory/1/0.jpg' },
    { id: 2, desc: '', url: '/images/season2/memory/1/1.jpg' },
    { id: 3, desc: '', url: '/images/season2/memory/1/2.jpg' },
    { id: 4, desc: '', url: '/images/season2/memory/1/3.jpg' },
    { id: 5, desc: '', url: '/images/season2/memory/1/4.jpg' },
    { id: 6, desc: '', url: '/images/season2/memory/1/5.jpg' },
  ],
  images2: [
    { id: 1, desc: '', url: '/images/season2/memory/2/0.jpg' },
    { id: 2, desc: '', url: '/images/season2/memory/2/1.jpg' },
    { id: 3, desc: '', url: '/images/season2/memory/2/2.jpg' },
    { id: 4, desc: '', url: '/images/season2/memory/2/3.jpg' },
    { id: 5, desc: '', url: '/images/season2/memory/2/4.jpg' },
    { id: 6, desc: '', url: '/images/season2/memory/2/5.jpg' },
  ],
  '1337': [
    { id: 1, desc: '', url: '/images/season2/memory/1/0.jpg' },
    { id: 2, desc: '', url: '/images/season2/memory/1/1.jpg' },
    { id: 3, desc: '', url: '/images/season2/memory/1/2.jpg' },
    { id: 4, desc: '', url: '/images/season2/memory/1/3.jpg' },
    { id: 5, desc: '', url: '/images/season2/memory/1/4.jpg' },
    { id: 6, desc: '', url: '/images/season2/memory/1/5.jpg' },
  ],
  '1353': [
    { id: 1, desc: '', url: '/images/season2/memory/2/0.jpg' },
    { id: 2, desc: '', url: '/images/season2/memory/2/1.jpg' },
    { id: 3, desc: '', url: '/images/season2/memory/2/2.jpg' },
    { id: 4, desc: '', url: '/images/season2/memory/2/3.jpg' },
    { id: 5, desc: '', url: '/images/season2/memory/2/4.jpg' },
    { id: 6, desc: '', url: '/images/season2/memory/2/5.jpg' },
  ],
};
