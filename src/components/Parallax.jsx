import styled from 'styled-components';

import { parallaxImages } from '../assets';

export default function Parallax() {
  return (
    <Container>
      {/* Behind the text */}
      {parallaxImages.bottom.map(({ title, image, parallax }) => (
        <Image key={title} className={`${parallax ? 'parallax ' : ''}${title}`} src={image} />
      ))}

      {/* Title */}
      <TextContainer>
        <h2>Mist-ical</h2>
        <h1>Escapades</h1>
      </TextContainer>

      {/* On top of the title */}
      {parallaxImages.top.map(({ title, image, parallax }) => (
        <Image key={title} className={`${parallax ? 'parallax ' : ''}${title}`} src={image} />
      ))}
    </Container>
  );
}

const Container = styled.main`
  background-color: #353;
  height: 100vh;
`;

const Image = styled.img``;

const TextContainer = styled.div``;
