import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { parallaxImages, parallaxText } from '../utils/data';

export default function Parallax() {
  const { bottom, top } = parallaxImages;
  // STATE
  const [xValue, setX] = useState(0),
    [yValue, setY] = useState(0),
    [rotationDegree, setR] = useState(0),
    [cursorPosition, setCursorPosition] = useState(0);
  // REF
  const parallaxRefs = useRef([]);

  // DO SOMETHING ONLY WHEN ALL THE PARALLAX REFS ARE SET
  useEffect(() => {
    parallaxRefs.current = parallaxRefs.current.flat();
    if (parallaxRefs.current.length === top.length + 1 + bottom.length - 2) {
    }
  }, [parallaxRefs]);

  // ADD EVENT FOR MOUSE MOVEMENT AT THE START THAT UPDATES THE STATES
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // FUNCTION THAT UPDATES THE STATE WITH MOUSE MOVEMENT
  function handleMouseMove(e) {
    let xValue = e.clientX - window.innerWidth / 2,
      yValue = e.clientY - window.innerHeight / 2,
      rotateDegree = (xValue / window.innerWidth / 2) * 20;
    setX(xValue), setY(yValue), setR(rotateDegree), setCursorPosition(e.clientX);
  }

  // UPDATE ANIMATIONS WHEN xValue, yValue, rotationDegree CHANGES
  useEffect(() => {
    update(xValue, yValue, rotationDegree, cursorPosition);
  }, [xValue, yValue, rotationDegree, cursorPosition]);

  // GSAP ANIMATION (TEST)
  useEffect(() => {
    if (parallaxRefs.current.length === top.length + 1 + bottom.length - 2) {
      console.log('AAASDASDASDADASDASDASDASDASDASDASDASDASDASDASFASGFDHFK;DFGKSDLFJSDLKFGJSHKLGJSLDK;F');
      let timeline = gsap.timeline();
      console.log(timeline);
      timeline.from('.bg-img', {top: 0})
      parallaxRefs.current.forEach((el) => {
        // 
      });
    }
  }, []);

  // Function for updating the transforms
  function update(xValue, yValue, rotateDegree, cursorPosition) {
    if (parallaxRefs.current.length) {
      parallaxRefs.current.forEach((el) => {
        let speedx = el.dataset.speedx,
          speedy = el.dataset.speedy,
          speedz = el.dataset.speedz * 0.1;
        let rotationSpeed = el.dataset.rotation;

        let isInLeft = parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;
        let zValue = cursorPosition - parseFloat(getComputedStyle(el).left) * isInLeft;

        el.style.transform = `
          translateX(calc(-50% + ${-xValue * speedx}px))
          translateY(calc(-50% + ${-yValue * speedy}px))
          perspective(2300px)
          translateZ(${zValue * speedz}px)
          rotateY(${rotateDegree * rotationSpeed}deg)`;
      });
    }
  }

  return (
    <Container>
      {/* Behind the text */}
      {bottom.map(({ title, image, parallax, options }, index) => (
        <Image
          ref={(ref) => (parallaxRefs.current[index] = ref)}
          key={title}
          src={image}
          index={index + 1}
          className={`parallax ${title}`}
          {...options}
        />
      ))}

      {/* Title */}
      <TextContainer ref={(ref) => (parallaxRefs.current[bottom.length] = ref)} className='parallax' index={bottom.length + 1} {...parallaxText}>
        <h2>Mist-ical</h2>
        <h1>Escapades</h1>
      </TextContainer>

      {/* On top of the title */}
      {top.map(({ title, image, parallax, options }, index) => (
        <Image
          ref={(ref) => (parallax ? (parallaxRefs.current[bottom.length + 1 + index] = ref) : null)}
          key={title}
          src={image}
          className={`${parallax ? 'parallax ' : ''}${title}`}
          index={bottom.length + 1 + index}
          {...options}
        />
      ))}

      {/* Effect(s) */}
      <div className='vignette' />
    </Container>
  );
}

const Container = styled.main`
  pointer-events: none;
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;

  .vignette {
    z-index: 100;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0) 65%, rgba(0, 0, 0, 0.7));
  }

  &.parallax {
    transform: translate(-50%, -50%);
    transition: all 0.45s cubic-bezier(0.2, 0.49, 0.32, 0.99);
  }

  & > * {
    position: absolute;
  }
`;

const Image = styled.img`
  /**************************  BOTTOM IMAGES  *************************/
  &.bg-img {
    top: calc(50% - 390px);
    left: calc(50% + 10px);
    width: 2800px;
    z-index: ${(props) => props.index};
    /* width: 2800px;
    top: calc(50% - 390px);
    left: calc(50% + 10px);
    z-index: 1; */
  }

  &.fog-7 {
    top: calc(50% - 100px);
    left: calc(50% + 300px);
    width: 1900px;
    z-index: ${(props) => props.index};
  }

  &.mountain-10 {
    top: calc(50% + 69px);
    left: calc(50% + 230px);
    width: 892px;
    z-index: ${(props) => props.index};
    /* z-index: 3; */
    /* top: calc(50% + 69px);
    left: calc(50% + 230px);
    width: 870px; */
  }

  &.fog-6 {
    top: calc(50% + 85px);
    left: calc(50% + 10px);
    width: 1610px;
    z-index: ${(props) => props.index};
    /* z-index: 16; */
    /* top: calc(50% + 177px);
    left: calc(50% - 30px);
    width: 1418px; */
  }

  &.mountain-9 {
    top: calc(50% + 113px);
    left: calc(50% - 457px);
    width: 470px;
    z-index: ${(props) => props.index};
    /* z-index: 5; */
    /* top: calc(50% + 119px);
    left: calc(50% - 457px);
    width: 463px; */
  }

  &.mountain-8 {
    top: calc(50% + 86px);
    left: calc(50% - 202px);
    width: 810px;
    z-index: ${(props) => props.index};
    /* z-index: 6; */
    /* top: calc(50% + 96px);
    left: calc(50% - 202px);
    width: 786px; */
  }

  &.fog-5 {
    top: calc(50% + 160px);
    left: calc(50% + 20px);
    width: 450px;
    z-index: ${(props) => props.index};
    /* z-index: 13; */
    /* top: calc(50% + 149px);
    left: calc(50% - 28px);
    width: 1435px; */
  }

  &.mountain-7 {
    top: calc(50% + 123px);
    left: calc(50% + 305px);
    width: 538px;
    z-index: ${(props) => props.index};
    /* z-index: 8; */
    /* top: calc(50% + 134px);
    left: calc(50% + 305px);
    width: 515px; */
  }

  /***************************  TOP IMAGES  ***************************/
  &.mountain-6 {
    top: calc(50% + 86.5px);
    left: calc(50% + 590px);
    width: 383.5px;
    z-index: ${(props) => props.index};
    /* z-index: 10; */
    /* top: calc(50% + 86.5px);
    left: calc(50% + 590px);
    width: 383.5px; */
  }

  &.fog-4 {
    top: calc(50% + 242px);
    left: calc(50% - 64px);
    width: 543px;
    z-index: ${(props) => props.index};
    /* z-index: 11; */
    /* top: calc(50% + 242px);
    left: calc(50% - 64px);
    width: 543px; */
  }

  &.mountain-5 {
    top: calc(50% + 269px);
    left: calc(50% + 130px);
    width: 583px;
    z-index: ${(props) => props.index};
    /* z-index: 12; */
    /* top: calc(50% + 269px);
    left: calc(50% + 130px);
    width: 583px; */
  }

  &.fog-3 {
    top: calc(50% + 171px);
    left: calc(50% + 171px);
    width: 449px;
    z-index: ${(props) => props.index};
    /* z-index: 7; */
    /* top: calc(50% + 171px);
    left: calc(50% + 29px);
    width: 449px; */
  }

  &.mountain-4 {
    top: calc(50% + 221px);
    left: calc(50% - 381.5px);
    width: 717px;
    z-index: ${(props) => props.index};
    /* z-index: 14; */
    /* top: calc(50% + 221px);
    left: calc(50% - 381.5px);
    width: 717px; */
  }

  &.mountain-3 {
    top: calc(50% + 133px);
    left: calc(50% + 736px);
    width: 419px;
    z-index: ${(props) => props.index};
    /* z-index: 15;
    top: calc(50% + 133px);
    left: calc(50% + 736px);
    width: 419px; */
  }

  &.fog-2 {
    top: calc(50% + 95px);
    left: calc(50% + 7px);
    width: 1833px;
    z-index: ${(props) => props.index};
    /* z-index: 4;
    top: calc(50% + 95px);
    left: calc(50% + 7px);
    width: 1833px; */
  }

  &.mountain-2 {
    top: calc(50% + 188px);
    left: calc(50% + 412px);
    width: 625px;
    z-index: ${(props) => props.index};
    /* z-index: 17;
    top: calc(50% + 188px);
    left: calc(50% + 412px);
    width: 625px; */
  }

  &.mountain-1 {
    top: calc(50% + 91.5px);
    left: calc(50% - 601px);
    width: 450px;
    z-index: ${(props) => props.index};
    /* z-index: 18;
    top: calc(50% + 91.5px);
    left: calc(50% - 601px);
    width: 450px; */
  }

  &.sun-rays {
    top: 0%;
    right: 0%;
    width: 595px;
    z-index: ${(props) => props.index};
  }

  &.black-shadow {
    bottom: 0%;
    right: 0%;
    width: 100%;
    z-index: ${(props) => props.index};
  }

  &.fog-1 {
    top: calc(100% - 355px);
    left: 50%;
    width: 1600px;
    z-index: ${(props) => props.index};
    /* z-index: 2;
    top: calc(50% - 100px);
    left: calc(50% + 300px);
    width: 1900px; */
  }
`;

const TextContainer = styled.div`
  z-index: ${(props) => props.index};
  position: absolute;
  top: calc(50% - 130px);
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  text-transform: uppercase;
  color: #fff;
  line-height: 0.88;
  pointer-events: all;

  h2 {
    font-weight: 100;
    font-size: 6.5rem;
  }

  h1 {
    font-weight: 800;
    font-size: 8rem;
  }
`;
