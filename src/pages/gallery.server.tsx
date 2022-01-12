import styled from 'styled-components';
import GalleryItems from '../components/shared/GalleryItems';

export default function Gallery() {
  return (
    <Container>
      <div className='title'>Gallery</div>
      <div style={{ textAlign: 'center' }}>
        <img src='images/general/floral-decor.png' alt='donate'></img>
        <img src='images/general/floral-decor.png' alt='donate'></img>
        <img src='images/general/floral-decor.png' alt='donate'></img>
        <br /> <br />
      </div>

      <GalleryItems complete={true}></GalleryItems>
    </Container>
  );
}

const Container = styled.section`
  color: ${(props) => props.theme.colors.black};
  padding-top: 4rem;
`;
