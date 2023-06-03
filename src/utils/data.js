import {
  background,
  blackShadow,
  fog1,
  fog2,
  fog3,
  fog4,
  fog5,
  fog6,
  fog7,
  mountain1,
  mountain2,
  mountain3,
  mountain4,
  mountain5,
  mountain6,
  mountain7,
  mountain8,
  mountain9,
  mountain10,
  sunRays,
  cloudsDark,
  cloudsLight,
} from '../assets';

const parallaxText = { 'data-speedx': 0.07, 'data-speedy': 0.07, 'data-speedz': 0, 'data-rotation': 0.11, 'data-distance': 0 };

const parallaxImages = {
  bottom: [
    {
      title: 'bg-img',
      image: background,
      parallax: true,
      options: { 'data-speedx': 0.3, 'data-speedy': 0.38, 'data-speedz': 0, 'data-rotation': 0, 'data-distance': -200 },
    },
    {
      title: 'fog-7',
      image: fog7,
      parallax: true,
      options: { 'data-speedx': 0.27, 'data-speedy': 0.32, 'data-speedz': 0, 'data-rotation': 0, 'data-distance': 850 },
    },
    {
      title: 'mountain-10',
      image: mountain10,
      parallax: true,
      options: { 'data-speedx': 0.195, 'data-speedy': 0.305, 'data-speedz': 0, 'data-rotation': 0, 'data-distance': 1100 },
    },
    {
      title: 'fog-6',
      image: fog6,
      parallax: true,
      options: { 'data-speedx': 0.25, 'data-speedy': 0.28, 'data-speedz': 0, 'data-rotation': 0, 'data-distance': 1400 },
    },
    {
      title: 'mountain-9',
      image: mountain9,
      parallax: true,
      options: { 'data-speedx': 0.125, 'data-speedy': 0.155, 'data-speedz': 0.15, 'data-rotation': 0.02, 'data-distance': 1700 },
    },
    {
      title: 'mountain-8',
      image: mountain8,
      parallax: true,
      options: { 'data-speedx': 0.1, 'data-speedy': 0.11, 'data-speedz': 0, 'data-rotation': 0.02, 'data-distance': 1800 },
    },
    {
      title: 'fog-5',
      image: fog5,
      parallax: true,
      options: { 'data-speedx': 0.16, 'data-speedy': 0.105, 'data-speedz': 0, 'data-rotation': 0, 'data-distance': 1900 },
    },
    {
      title: 'mountain-7',
      image: mountain7,
      parallax: true,
      options: { 'data-speedx': 0.1, 'data-speedy': 0.1, 'data-speedz': 0, 'data-rotation': 0.09, 'data-distance': 2000 },
    },
  ],
  top: [
    {
      title: 'mountain-6',
      image: mountain6,
      parallax: true,
      options: { 'data-speedx': 0.065, 'data-speedy': 0.32, 'data-speedz': 0.05, 'data-rotation': 0.12, 'data-distance': 2300 },
    },
    {
      title: 'fog-4',
      image: fog4,
      parallax: true,
      options: { 'data-speedx': 0.135, 'data-speedy': 0.32, 'data-speedz': 0, 'data-rotation': 0, 'data-distance': 2400 },
    },
    {
      title: 'mountain-5',
      image: mountain5,
      parallax: true,
      options: { 'data-speedx': 0.08, 'data-speedy': 0, 'data-speedz': 0.13, 'data-rotation': 0, 'data-distance': 2550 },
    },
    {
      title: 'fog-3',
      image: fog3,
      parallax: true,
      options: { 'data-speedx': 0.11, 'data-speedy': 0.018, 'data-speedz': 0, 'data-rotation': 0.1, 'data-distance': 2800 },
    },
    {
      title: 'mountain-4',
      image: mountain4,
      parallax: true,
      options: { 'data-speedx': 0.059, 'data-speedy': 0.024, 'data-speedz': 0, 'data-rotation': 0.35, 'data-distance': 3200 },
    },
    {
      title: 'mountain-3',
      image: mountain3,
      parallax: true,
      options: { 'data-speedx': 0.04, 'data-speedy': 0.018, 'data-speedz': 0.32, 'data-rotation': 0.05, 'data-distance': 3400 },
    },
    {
      title: 'fog-2',
      image: fog2,
      parallax: true,
      options: { 'data-speedx': 0.15, 'data-speedy': 0.0115, 'data-speedz': 0, 'data-rotation': 0, 'data-distance': 3600 },
    },
    {
      title: 'mountain-2',
      image: mountain2,
      parallax: true,
      options: { 'data-speedx': 0.035, 'data-speedy': 0.013, 'data-speedz': 0, 'data-rotation': 0.15, 'data-distance': 3800 },
    },
    {
      title: 'mountain-1',
      image: mountain1,
      parallax: true,
      options: { 'data-speedx': 0.027, 'data-speedy': 0.018, 'data-speedz': 0.53, 'data-rotation': 0.2, 'data-distance': 4000 },
    },
    { title: 'sun-rays', image: sunRays },
    { title: 'black-shadow', image: blackShadow },
    {
      title: 'fog-1',
      image: fog1,
      parallax: true,
      options: { 'data-speedx': 0.12, 'data-speedy': 0.01, 'data-speedz': 0.0, 'data-rotation': 0, 'data-distance': 4200 },
    },
  ],
};

const themeBtn = { dark: cloudsDark, light: cloudsLight };

export { parallaxText, parallaxImages, themeBtn };
