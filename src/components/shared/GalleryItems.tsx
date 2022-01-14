import styled from 'styled-components';
import Image from 'next/image';

import ga1 from '../../../public/images/inside/1.webp';
import ga2 from '../../../public/images/janmashtami/1.webp';
import ga3 from '../../../public/images/pushpabhishekam/14.webp';
import ga4 from '../../../public/images/govardhan/21.jpg';
import ga5 from '../../../public/images/smallarticle/ratha1.webp';
import ga6 from '../../../public/images/smallarticle/narasimha.webp';
import ga7 from '../../../public/images/brahmotsavam/5.jpg';
import ga8 from '../../../public/images/sharadpurnima/3.jpg';
import ga9 from '../../../public/images/balaram/5.webp';

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
            <Image src={ga1} alt='' />
          </a>
        </Box>
      </Article>
      <Article key='Prabhupada Daily Quote'>
        <Title>Janmashtami</Title>

        <Box>
          <a href='/janmashtami'>
            <Image src={ga2} alt='' />
          </a>
        </Box>
      </Article>
      <Article key='Temple Daily Schedule'>
        <Title>Pushpabhishekam</Title>

        <Box>
          <a href='/pushpabhishekam'>
            <Image src={ga3} alt='' />
          </a>
        </Box>
      </Article>
      <Article key='Govardhan Puja'>
        <Title>Govardhan Puja</Title>

        <Box>
          <a href='/govardhan'>
            <Image src={ga4} alt='' />
          </a>
        </Box>
      </Article>
      <Article key='Ratha Yatra'>
        <Title>Ratha Yatra</Title>

        <Box>
          <a href='/rathayatra'>
            <Image src={ga5} alt='' />
          </a>
        </Box>
      </Article>
      <Article key='Sri Narasimha Chaturdashi'>
        <Title>Sri Narasimha Chaturdashi</Title>

        <Box>
          <a href='/narasimha'>
            <Image src={ga6} alt='' />
          </a>
        </Box>
      </Article>

      <Article key='Brahmotsavam'>
        <Title>Brahmotsavam</Title>

        <Box>
          <a href='/brahmotsavam'>
            <Image src={ga7} alt='' />
          </a>
        </Box>
      </Article>
      <Article key='Sharad Purnima'>
        <Title>Sharad Purnima</Title>

        <Box>
          <a href='/sharadpurnima'>
            <Image src={ga8} alt='' />
          </a>
        </Box>
      </Article>
      <Article key='Balaram Jayanti<'>
        <Title>Balaram Jayanti</Title>

        <Box>
          <a href='/balaram'>
            <Image src={ga9} alt='' />
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
`;
