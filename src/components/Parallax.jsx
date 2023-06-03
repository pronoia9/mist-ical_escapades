import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { parallaxImages, parallaxText } from '../utils/data';

export default function Parallax() {
  const { bottom, top } = parallaxImages;
  // STATE
  const [xValue, setX] = useState(0),
    [yValue, setY] = useState(0),
    [rotationDegree, setR] = useState(0),
    [cursorPosition, setCursorPosition] = useState(0);
  // REFS
  const refsArr = useRef([]),
    staticRefs = useRef([]),
    timeline = useRef(gsap.timeline());

  // ADD EVENT FOR MOUSE MOVEMENT AT THE START THAT UPDATES THE STATES
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => { window.removeEventListener('mousemove', handleMouseMove); };
  }, []);

  // FUNCTION THAT UPDATES THE STATE WITH MOUSE MOVEMENT
  function handleMouseMove(e) {
    if (timeline.current.isActive()) return;
    let xValue = e.clientX - window.innerWidth / 2,
      yValue = e.clientY - window.innerHeight / 2,
      rotateDegree = (xValue / window.innerWidth / 2) * 20;
    setX(xValue), setY(yValue), setR(rotateDegree), setCursorPosition(e.clientX);
  }

  // UPDATE ANIMATIONS WHEN xValue, yValue, rotationDegree CHANGES
  useEffect(() => {
    update(xValue, yValue, rotationDegree, cursorPosition);
  }, [xValue, yValue, rotationDegree, cursorPosition]);

  // FUNCTION TO UPDATE PARALLAX TRANSFORMS ACCORDING TO STATE VARIABLES
  function update(xValue, yValue, rotateDegree, cursorPosition) {
    if (!refsArr.current.length) return;
    refsArr.current
      ?.filter((e) => e?.dataset?.speedx)
      .forEach((el) => {
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

  // GSAP ANIMATION
  useLayoutEffect(() => {
    if (refsArr.current.length === top.length + 1 + bottom.length - 2) {
      refsArr.current
        .filter((e) => e.dataset.distance)
        .forEach((el) => {
          timeline.current.from(el, { top: `${el.offsetHeight / 2 + +el.dataset.distance}px`, duration: 3.5, ease: 'power3.out' }, '1');
        });
      // TEXT
      const title = [...refsArr.current[8].children];
      timeline.current
        .from(title[1], { y: window.innerHeight - title[1].getBoundingClientRect().top + 200, duration: 2 }, '2.5')
        .from(title[0], { y: -150, opacity: 0, duration: 1.5 }, '3');
      // SUN RAYS & BLACK SHADOW
      staticRefs.current.length === 2 &&
        staticRefs.current.forEach((el) => {
          timeline.current.from(el, { opacity: 0, duration: 1.5 }, '3');
        });
      // HEADER / NAVBAR
      timeline.current.from('header', { opacity: 0, duration: 1.5 }, '3');
    }
  }, []);

  // GRRRR RAAAWR IDK WHY GSAP DOESNT WORK UNLESS THIS IS WEIRD LIKE THIS
  useEffect(() => { refsArr.current = refsArr.current.flat(); }, [refsArr]);
  useEffect(() => { staticRefs.current = staticRefs.current.flat(); }, [staticRefs]);

  return (
    <Container>
      {/* Behind the text */}
      {bottom.map(({ title, image, parallax, options }, index) => (
        <Image ref={(ref) => (refsArr.current[index] = ref)} key={title} src={image} index={index} className={`parallax ${title}`} {...options} />
      ))}

      {/* Title */}
      <TextContainer ref={(ref) => (refsArr.current[bottom.length] = ref)} className='parallax text' index={bottom.length} {...parallaxText}>
        <h2>Mist-ical</h2>
        <h1>Escapades</h1>
      </TextContainer>

      {/* On top of the title */}
      {top.map(({ title, image, parallax, options }, index) => (
        <Image
          ref={(ref) => (parallax ? (refsArr.current[bottom.length + 1 + index] = ref) : (staticRefs.current[index] = ref))}
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

  & > * {
    position: absolute;
  }

  .vignette {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0) 65%, rgba(0, 0, 0, 0.7));
    z-index: 100;
  }

  .parallax {
    transform: translate(-50%, -50%);
    transition: all 0.45s cubic-bezier(0.2, 0.49, 0.32, 0.99);
  }
`;

const Image = styled.img`
  /**************************  BOTTOM IMAGES  *************************/
  &.bg-img {
    top: calc(50% - 390px);
    left: calc(50% + 10px);
    width: 2800px;
    z-index: ${(props) => props.index};
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
  }

  &.fog-6 {
    top: calc(50% + 85px);
    left: calc(50% + 10px);
    width: 1610px;
    z-index: ${(props) => props.index};
  }

  &.mountain-9 {
    top: calc(50% + 113px);
    left: calc(50% - 457px);
    width: 470px;
    z-index: ${(props) => props.index};
  }

  &.mountain-8 {
    top: calc(50% + 86px);
    left: calc(50% - 202px);
    width: 810px;
    z-index: ${(props) => props.index};
  }

  &.fog-5 {
    top: calc(50% + 160px);
    left: calc(50% + 20px);
    width: 450px;
    z-index: ${(props) => props.index};
  }

  &.mountain-7 {
    top: calc(50% + 123px);
    left: calc(50% + 305px);
    width: 538px;
    z-index: ${(props) => props.index};
  }

  /***************************  TOP IMAGES  ***************************/
  &.mountain-6 {
    top: calc(50% + 86.5px);
    left: calc(50% + 590px);
    width: 383.5px;
    z-index: ${(props) => props.index};
  }

  &.fog-4 {
    top: calc(50% + 242px);
    left: calc(50% - 64px);
    width: 543px;
    z-index: ${(props) => props.index};
  }

  &.mountain-5 {
    top: calc(50% + 269px);
    left: calc(50% + 130px);
    width: 583px;
    z-index: ${(props) => props.index};
  }

  &.fog-3 {
    top: calc(50% + 171px);
    left: calc(50% + 171px);
    width: 449px;
    z-index: ${(props) => props.index};
  }

  &.mountain-4 {
    top: calc(50% + 221px);
    left: calc(50% - 381.5px);
    width: 717px;
    z-index: ${(props) => props.index};
  }

  &.mountain-3 {
    top: calc(50% + 133px);
    left: calc(50% + 736px);
    width: 419px;
    z-index: ${(props) => props.index};
  }

  &.fog-2 {
    top: calc(50% + 95px);
    left: calc(50% + 7px);
    width: 1833px;
    z-index: ${(props) => props.index};
  }

  &.mountain-2 {
    top: calc(50% + 188px);
    left: calc(50% + 412px);
    width: 625px;
    z-index: ${(props) => props.index};
  }

  &.mountain-1 {
    top: calc(50% + 91.5px);
    left: calc(50% - 601px);
    width: 450px;
    z-index: ${(props) => props.index};
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
  }
`;

const TextContainer = styled.div`
  position: absolute;
  top: calc(50% - 130px);
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  text-transform: uppercase;
  color: #fff;
  line-height: 0.88;
  pointer-events: all;
  z-index: ${(props) => props.index};

  h2 {
    font-weight: 100;
    font-size: 6.5rem;
  }

  h1 {
    font-weight: 800;
    font-size: 8rem;
  }
`;
