import styled from 'styled-components';

interface FeaturesProps {
  complete: boolean;
}

export default function GalleryItems({ complete }: FeaturesProps) {
  return (
    <Container className={`${complete && 'complete'}`}>
      <Article key='Like us on Facebook'>
        <Title>Inside ISKCON Metpally</Title>

        <Box>
          <a href='/inside'>
            <Image src='images/inside/(34).jpg' />
          </a>
        </Box>
      </Article>
      <Article key='Prabhupada Daily Quote'>
        <Title>Janmashtami</Title>

        <Box>
          <a href='/janmashtami'>
            <Image src='images/janmashtami/(36).jpg' />
          </a>
        </Box>
      </Article>
      <Article key='Temple Daily Schedule'>
        <Title>Pushpabhishekam</Title>

        <Box>
          <a href='/pushpabhishekam'>
            <Image src='images/pushpabhishekam/(14).jpg' />
          </a>
        </Box>
      </Article>
      <Article key='Govardhan Puja'>
        <Title>Govardhan Puja</Title>

        <Box>
          <a href='/govardhan'>
            <Image src='images/govardhan/(27).jpg' />
          </a>
        </Box>
      </Article>
      <Article key='Ratha Yatra'>
        <Title>Ratha Yatra</Title>

        <Box>
          <a href='/rathayatra'>
            <Image src='images/smallarticle/ratha1.webp' />
          </a>
        </Box>
      </Article>
      <Article key='Sri Narasimha Chaturdashi'>
        <Title>Sri Narasimha Chaturdashi</Title>

        <Box>
          <a href=''>
            <Image src='images/smallarticle/narasimha.webp' />
          </a>
        </Box>
      </Article>

      <Article key='Brahmotsavam'>
        <Title>Brahmotsavam</Title>

        <Box>
          <a href='/brahmotsavam'>
            <Image src='images/brahmotsavam/5.jpg' />
          </a>
        </Box>
      </Article>
      <Article key='Sharad Purnima'>
        <Title>Sharad Purnima</Title>

        <Box>
          <a href='/sharadpurnima'>
            <Image src='images/sharadpurnima/3.jpg' />
          </a>
        </Box>
      </Article>
      <Article key='Balaram Jayanti<'>
        <Title>Balaram Jayanti</Title>

        <Box>
          <a href='/balaram'>
            <Image src='images/balaram/5.webp' />
          </a>
        </Box>
      </Article>
      <br></br>
    </Container>
  );
}

const Container = styled.ul`
  background: ${(props) => props.theme.colors.white};
  list-style: none;
  width: 100%;
  gap: 5.6rem;
  text-align: center;
  background: transparent;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    li:last-of-type {
      grid-column: 1 /3;
    }

    &.complete {
      li:last-of-type {
        grid-column: unset;
      }
    }
  }

  @media (min-width: 950px) {
    grid-template-columns: repeat(3, 1fr);

    li:last-of-type {
      grid-column: unset;
    }
  }
`;

const Article = styled.li`
  color: ${(props) => props.theme.colors.black};
`;

const Title = styled.h3`
  margin: 4rem 0 1.6rem;
  font-weight: bold;
  font-size: 1.8rem;
  line-height: 139%;
`;

const Box = styled.div`
  text-align: center;
  border-radius: 20px;
`;

const Image = styled.img`
  max-width: 340px;
  max-height: 220px;
  border-radius: 6px;
`;
