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
  &.bg-img {
    position: absolute;
    width: 2800px;
    top: calc(50% - 390px);
    left: calc(50% + 10px);
    transform: translate(-50%, -50%);
    z-index: ${(props) => props.index};
  }

  &.fog-7 {
    position: absolute;
    width: 1900px;
    top: calc(50% - 100px);
    left: calc(50% + 300px);
    transform: translate(-50%, -50%);
    z-index: ${(props) => props.index};
  }

  &.mountain-10 {
    position: absolute;
    width: 892px;
    top: calc(50% + 69px);
    left: calc(50% + 230px);
    transform: translate(-50%, -50%);
    z-index: ${(props) => props.index};
  }

  &.fog-6 {
    position: absolute;
    width: 1610px;
    top: calc(50% + 85px);
    left: calc(50% + 10px);
    transform: translate(-50%, -50%);
    z-index: ${(props) => props.index};
  }

  &.mountain-9 {
    position: absolute;
    width: 470px;
    top: calc(50% + 113px);
    left: calc(50% - 457px);
    transform: translate(-50%, -50%);
    z-index: ${(props) => props.index};
  }

  &.mountain-8 {
    position: absolute;
    width: 810px;
    top: calc(50% + 86px);
    left: calc(50% - 202px);
    transform: translate(-50%, -50%);
    z-index: ${(props) => props.index};
  }

  &.fog-5 {
    position: absolute;
    width: 450px;
    top: calc(50% + 160px);
    left: calc(50% + 20px);
    transform: translate(-50%, -50%);
    z-index: ${(props) => props.index}; 
  }

  &.mountain-7 {
    position: absolute;
    width: 538px;
    top: calc(50% + 123px);
    left: calc(50% + 305px);
    transform: translate(-50%, -50%);
    z-index: ${(props) => props.index};
  }
`;

const TextContainer = styled.div`
  z-index: ${(props) => props.index};

  h2 {
  }

  h1 {
  }
`;
