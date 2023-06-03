import background from './background.png';
import blackShadow from './black_shadow.png';
import fog1 from './fog_1.png';
import fog2 from './fog_2.png';
import fog3 from './fog_3.png';
import fog4 from './fog_4.png';
import fog5 from './fog_5.png';
import fog6 from './fog_6.png';
import fog7 from './fog_7.png';
import logo from './logo.png';
import mountain1 from './mountain_1.png';
import mountain2 from './mountain_2.png';
import mountain3 from './mountain_3.png';
import mountain4 from './mountain_4.png';
import mountain5 from './mountain_5.png';
import mountain6 from './mountain_6.png';
import mountain7 from './mountain_7.png';
import mountain8 from './mountain_8.png';
import mountain9 from './mountain_9.png';
import mountain10 from './mountain_10.png';
import sunRays from './sun_rays.png';
import cloudsDark from './clouds-moon.svg';
import cloudsLight from './clouds-sun.svg';
import clouds from './clouds.svg';

const parallaxImages = {
  bottom: [
    { title: 'bg-img', image: background, parallax: true, speed: { 'data-speedx': 0.3, 'data-speedy': 0.38, 'data-speedz': 0 } },
    { title: 'fog-7', image: fog7, parallax: true, speed: { 'data-speedx': 0.27, 'data-speedy': 0.32, 'data-speedz': 0 } },
    { title: 'mountain-10', image: mountain10, parallax: true, speed: { 'data-speedx': 0.195, 'data-speedy': 0.305, 'data-speedz': 0 } },
    { title: 'fog-6', image: fog6, parallax: true, speed: { 'data-speedx': 0.25, 'data-speedy': 0.28, 'data-speedz': 0 } },
    { title: 'mountain-9', image: mountain9, parallax: true, speed: { 'data-speedx': 0.125, 'data-speedy': 0.155, 'data-speedz': 0.15 } },
    { title: 'mountain-8', image: mountain8, parallax: true, speed: { 'data-speedx': 0.1, 'data-speedy': 0.11, 'data-speedz': 0 } },
    { title: 'fog-5', image: fog5, parallax: true, speed: { 'data-speedx': 0.16, 'data-speedy': 0.105, 'data-speedz': 0 } },
    { title: 'mountain-7', image: mountain7, parallax: true, speed: { 'data-speedx': 0.1, 'data-speedy': 0.1, 'data-speedz': 0 } },
  ],
  top: [
    { title: 'mountain-6', image: mountain6, parallax: true, speed: { 'data-speedx': 0.065, 'data-speedy': 0.32, 'data-speedz': 0.05 } },
    { title: 'fog-4', image: fog4, parallax: true, speed: { 'data-speedx': 0.135, 'data-speedy': 0.32, 'data-speedz': 0 } },
    { title: 'mountain-5', image: mountain5, parallax: true, speed: { 'data-speedx': 0.08, 'data-speedy': 0, 'data-speedz': 0.13 } },
    { title: 'fog-3', image: fog3, parallax: true, speed: { 'data-speedx': 0.11, 'data-speedy': 0.018, 'data-speedz': 0 } },
    { title: 'mountain-4', image: mountain4, parallax: true, speed: { 'data-speedx': 0.059, 'data-speedy': 0.024, 'data-speedz': 0 } },
    { title: 'mountain-3', image: mountain3, parallax: true, speed: { 'data-speedx': 0.04, 'data-speedy': 0.018, 'data-speedz': 0.32 } },
    { title: 'fog-2', image: fog2, parallax: true, speed: { 'data-speedx': 0.15, 'data-speedy': 0.0115, 'data-speedz': 0 } },
    { title: 'mountain-2', image: mountain2, parallax: true, speed: { 'data-speedx': 0.035, 'data-speedy': 0.013, 'data-speedz': 0 } },
    { title: 'mountain-1', image: mountain1, parallax: true, speed: { 'data-speedx': 0.027, 'data-speedy': 0.018, 'data-speedz': 0.53 } },
    { title: 'sun-rays', image: sunRays },
    { title: 'black-shadow', image: blackShadow },
    { title: 'fog-1', image: fog1, parallax: true, speed: { 'data-speedx': 0.12, 'data-speedy': 0.01, 'data-speedz': 0.0 } },
  ],
};

const themeButton = { light: cloudsLight, dark: cloudsDark };

export { logo, parallaxImages, themeButton, clouds };
