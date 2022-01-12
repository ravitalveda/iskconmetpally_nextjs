import type { NextPage } from 'next';
import styled from 'styled-components';
import Head from 'next/head';

import Features from '../components/shared/Features';

import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ArticleRow from '../components/shared/ArticleRow';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <main>
      <Head>
        <title>Home</title>

        <link
          rel='stylesheet'
          href='node-modules/react-responsive-carousel/lib/styles/carousel.min.css'
        />
      </Head>
      <Carousel infiniteLoop autoPlay showThumbs={false}>
        <div>
          <img src='images/slide/homeslide.webp' alt='' />
          <p className='legend'>Home</p>
        </div>
        <div>
          <img src='images/slide/jbsslide.webp' alt='' />
          <p className='legend'>khjkhk</p>
        </div>
        <div>
          <img src='images/slide/ppslide.webp' alt='' />
          <p className='legend'>Legend 1</p>
        </div>
        <div>
          <img src='images/slide/1.webp' alt='' />
          <p className='legend'>Legend 1</p>
        </div>
        <div>
          <img src='images/slide/2.webp' alt='' />
          <p className='legend'>Legend 2</p>
        </div>
        <div>
          <img src='images/slide/3.webp' alt='' />
          <p className='legend'>Legend 3</p>
        </div>
      </Carousel>
      <br /> <br />
      <div className='title'>Main Festivals</div>
      <div style={{ textAlign: 'center' }}>
        <img src='images/general/floral-decor.png' alt='donate'></img>
        <img src='images/general/floral-decor.png' alt='donate'></img>
        <img src='images/general/floral-decor.png' alt='donate'></img>
        <br />
      </div>
      <Features complete={false} />
      <Illustration src='images/general/donate.png' alt='donate'></Illustration>
      <Box>
        The activities of ISKCON Metpally are solely supported by the kind
        generosity of its members, friends and well wishers. All donations are
        tax-deductible. Kindly call us or email us if you're looking to make a
        donation. Contact details available in our
        <Link href='/contact' passHref>
          Contact
        </Link>{' '}
        page.
      </Box>
      <Illustration src='images/general/border.png' alt='border'></Illustration>
      <ArticleRow complete={true}></ArticleRow>
      <br />
    </main>
  );
};

export default Home;

const Illustration = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
`;

const Box = styled.div`
  border-radius: 4px;
  border: solid 1px;
  margin-bottom: 2rem;
  padding: 4rem;
  background-image: url('images/general/banner.jpg');
  color: lightgoldenrodyellow;
  font-size: 1.8rem;
  text-align: center;
`;
