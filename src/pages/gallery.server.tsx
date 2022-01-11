import styled from 'styled-components';
import ArticleRow from '../components/shared/ArticleRow';
import ArticleRow2 from '../components/shared/ArticleRow2';
import GalleryItems from '../components/shared/GalleryItems';

export default function Gallery() {
  return (
    <Container>
      <section>
        <div>
          <h2>Gallery</h2>
          <div>
            <GalleryItems complete={true}></GalleryItems>
          </div>
        </div>
      </section>
    </Container>
  );
}

const Container = styled.section`
  color: ${(props) => props.theme.colors.black};
  padding-top: 4rem;
`;
