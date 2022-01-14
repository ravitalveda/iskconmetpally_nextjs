import styled from 'styled-components';
import GalleryItems from '../components/shared/GalleryItems';
import Image from 'next/image';

import border from '../../public/images/general/floral-decor.png';

export default function Gallery(): JSX.Element {
  return (
    <Container>
      <div className='title'>Gallery</div>
      <div style={{ textAlign: 'center' }}>
        <Image src={border} alt=''></Image>
        <Image src={border} alt=''></Image>
        <Image src={border} alt=''></Image>
        <br /> <br />
      </div>

      <GalleryItems complete={true}></GalleryItems>
    </Container>
  );
}

const Container = styled.section`
  @media (min-width: 768px) {
    padding: 11.2rem 40px;
  }

  @media (min-width: 768px) {
    padding: 6rem 40px;
  }
`;
