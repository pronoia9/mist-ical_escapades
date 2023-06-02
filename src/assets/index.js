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
    { title: 'bg-img', image: background, parallax: true },
    { title: 'fog-7', image: fog7, parallax: true },
    { title: 'mountain-10', image: mountain10, parallax: true },
    { title: 'fog-6', image: fog6, parallax: true },
    { title: 'mountain-9', image: mountain9, parallax: true },
    { title: 'mountain-8', image: mountain8, parallax: true },
    { title: 'fog-5', image: fog5, parallax: true },
    { title: 'mountain-7', image: mountain7, parallax: true },
  ],
  top: [
    { title: 'mountain-6', image: mountain6, parallax: true },
    { title: 'fog-4', image: fog4, parallax: true },
    { title: 'mountain-5', image: mountain5, parallax: true },
    { title: 'fog-3', image: fog3, parallax: true },
    { title: 'mountain-4', image: mountain4, parallax: true },
    { title: 'mountain-3', image: mountain3, parallax: true },
    { title: 'fog-2', image: fog2, parallax: true },
    { title: 'mountain-2', image: mountain2, parallax: true },
    { title: 'mountain-1', image: mountain1, parallax: true },
    { title: 'sun-rays', image: sunRays },
    { title: 'black-shadow', image: blackShadow },
    { title: 'fog-1', image: fog1, parallax: true },
  ],
};

const themeButton = { light: cloudsLight, dark: cloudsDark };

export { logo, parallaxImages, themeButton, clouds };
