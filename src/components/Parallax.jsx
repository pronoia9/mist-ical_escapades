import styled from 'styled-components';

import { parallaxImages } from '../assets';

export default function Parallax() {
  const { bottom, top } = parallaxImages;

  return (
    <Container>
      {/* Behind the text */}
      {bottom.map(({ title, image, parallax }, index) => (
        <Image key={title} className={`${parallax ? 'parallax ' : ''}${title}`} src={image} index={index + 1} />
      ))}

      {/* Title */}
      <TextContainer index={bottom.length + 1}>
        <h2>Mist-ical</h2>
        <h1>Escapades</h1>
      </TextContainer>

      {/* On top of the title */}
      {top.map(({ title, image, parallax }, index) => (
        <Image key={title} className={`${parallax ? 'parallax ' : ''}${title}`} src={image} index={bottom.length + 1 + index + 1} />
      ))}
    </Container>
  );
}

const Container = styled.main`
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

const Image = styled.img`
  /**************************  BOTTOM IMAGES  *************************/
  &.bg-img {
    position: absolute;
    top: calc(50% - 390px);
    left: calc(50% + 10px);
    width: 2800px;
    transform: translate(-50%, -50%);
    z-index: ${(props) => props.index};
    /* width: 2800px;
    top: calc(50% - 390px);
    left: calc(50% + 10px);
    z-index: 1; */
  }

  &.fog-7 {
    position: absolute;
    top: calc(50% - 100px);
    left: calc(50% + 300px);
    width: 1900px;
    transform: translate(-50%, -50%);
    z-index: ${(props) => props.index};
  }

  &.mountain-10 {
    position: absolute;
    top: calc(50% + 69px);
    left: calc(50% + 230px);
    width: 892px;
    transform: translate(-50%, -50%);
    z-index: ${(props) => props.index};
    /* z-index: 3; */
    /* top: calc(50% + 69px);
    left: calc(50% + 230px);
    width: 870px; */
  }

  &.fog-6 {
    position: absolute;
    top: calc(50% + 85px);
    left: calc(50% + 10px);
    width: 1610px;
    transform: translate(-50%, -50%);
    z-index: ${(props) => props.index};
    /* z-index: 16; */
    /* top: calc(50% + 177px);
    left: calc(50% - 30px);
    width: 1418px; */
  }

  &.mountain-9 {
    position: absolute;
    top: calc(50% + 113px);
    left: calc(50% - 457px);
    width: 470px;
    transform: translate(-50%, -50%);
    z-index: ${(props) => props.index};
    /* z-index: 5; */
    /* top: calc(50% + 119px);
    left: calc(50% - 457px);
    width: 463px; */
  }

  &.mountain-8 {
    position: absolute;
    top: calc(50% + 86px);
    left: calc(50% - 202px);
    width: 810px;
    transform: translate(-50%, -50%);
    z-index: ${(props) => props.index};
    /* z-index: 6; */
    /* top: calc(50% + 96px);
    left: calc(50% - 202px);
    width: 786px; */
  }

  &.fog-5 {
    position: absolute;
    top: calc(50% + 160px);
    left: calc(50% + 20px);
    width: 450px;
    transform: translate(-50%, -50%);
    z-index: ${(props) => props.index};
    /* z-index: 13; */
    /* top: calc(50% + 149px);
    left: calc(50% - 28px);
    width: 1435px; */
  }

  &.mountain-7 {
    position: absolute;
    top: calc(50% + 123px);
    left: calc(50% + 305px);
    width: 538px;
    transform: translate(-50%, -50%);
    z-index: ${(props) => props.index};
    /* z-index: 8; */
    /* top: calc(50% + 134px);
    left: calc(50% + 305px);
    width: 515px; */
  }

  /***************************  TOP IMAGES  ***************************/
  &.mountain-6 {
    position: absolute;
    top: calc(50% + 86.5px);
    left: calc(50% + 590px);
    width: 383.5px;
    transform: translate(-50%, -50%);
    z-index: ${(props) => props.index};
    /* z-index: 10; */
    /* top: calc(50% + 86.5px);
    left: calc(50% + 590px);
    width: 383.5px; */
  }

  &.fog-4 {
    position: absolute;
    top: calc(50% + 242px);
    left: calc(50% - 64px);
    width: 543px;
    transform: translate(-50%, -50%);
    z-index: ${(props) => props.index};
    /* z-index: 11; */
    /* top: calc(50% + 242px);
    left: calc(50% - 64px);
    width: 543px; */
  }

  &.mountain-5 {
    position: absolute;
    top: calc(50% + 269px);
    left: calc(50% + 130px);
    width: 583px;
    transform: translate(-50%, -50%);
    z-index: ${(props) => props.index};
    /* z-index: 12; */
    /* top: calc(50% + 269px);
    left: calc(50% + 130px);
    width: 583px; */
  }

  &.fog-3 {
    position: absolute;
    top: calc(50% + 171px);
    left: calc(50% + 29px);
    width: 449px;
    transform: translate(-50%, -50%);
    z-index: ${(props) => props.index};
    /* z-index: 7; */
    /* top: calc(50% + 171px);
    left: calc(50% + 29px);
    width: 449px; */
  }

  &.mountain-4 {
    position: absolute;
    top: calc(50% + 221px);
    left: calc(50% - 381.5px);
    width: 717px;
    transform: translate(-50%, -50%);
    z-index: ${(props) => props.index};
    /* z-index: 14; */
    /* top: calc(50% + 221px);
    left: calc(50% - 381.5px);
    width: 717px; */
  }

  &.mountain-3 {
    position: absolute;
    top: calc(50% + 133px);
    left: calc(50% + 736px);
    width: 419px;
    transform: translate(-50%, -50%);
    z-index: ${(props) => props.index};
    /* z-index: 15;
    top: calc(50% + 133px);
    left: calc(50% + 736px);
    width: 419px; */
  }

  &.fog-2 {
    position: absolute;
    top: calc(50% + 95px);
    left: calc(50% + 7px);
    width: 1833px;
    transform: translate(-50%, -50%);
    z-index: ${(props) => props.index};
    /* z-index: 4;
    top: calc(50% + 95px);
    left: calc(50% + 7px);
    width: 1833px; */
  }

  &.mountain-2 {
    position: absolute;
    top: calc(50% + 188px);
    left: calc(50% + 412px);
    width: 625px;
    transform: translate(-50%, -50%);
    z-index: ${(props) => props.index};
    /* z-index: 17;
    top: calc(50% + 188px);
    left: calc(50% + 412px);
    width: 625px; */
  }

  &.mountain-1 {
    position: absolute;
    top: calc(50% + 91.5px);
    left: calc(50% - 601px);
    width: 450px;
    transform: translate(-50%, -50%);
    z-index: ${(props) => props.index};
    /* z-index: 18;
    top: calc(50% + 91.5px);
    left: calc(50% - 601px);
    width: 450px; */
  }

  &.sun-rays {
    position: absolute;
    top: 0%;
    right: 0%;
    width: 595px;
    z-index: ${(props) => props.index};
  }

  &.black-shadow {
    position: absolute;
    bottom: 0%;
    right: 0%;
    width: 100%;
    z-index: ${(props) => props.index};
  }

  &.fog-1 {
    position: absolute;
    top: calc(50% + 100px);
    left: calc(50% + 300px);
    width: 1900px;
    transform: translate(-50%, -50%);
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

  h2 {
    font-weight: 100;
    font-size: 6.5rem;
  }

  h1 {
    font-weight: 800;
    font-size: 8rem;
  }
`;
