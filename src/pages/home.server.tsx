import type { NextPage } from 'next';
import styled from 'styled-components';
import Head from 'next/head';
import Features from '../components/shared/Features';
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import ArticleRow from '../components/shared/ArticleRow';
import Link from 'next/link';
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';

import border from '../../public/images/general/floral-decor.png';
import h1 from '../../public/images/slide/homeslide.webp';
import h2 from '../../public/images/slide/jbsslide.webp';
import h3 from '../../public/images/slide/1.webp';
import h4 from '../../public/images/slide/2.webp';
import h5 from '../../public/images/slide/3.webp';
import h6 from '../../public/images/slide/ppslide.webp';

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
      <Carousel infiniteLoop autoPlay showStatus={false} showThumbs={false}>
        <div>
          <img src={h1.src} alt='' width={'100%'} />
          <p className='legend'></p>
        </div>
        <div>
          <img src={h2.src} alt='' width={'100%'} />
          <p className='legend'>Sri Jagannath Baladev Subhadra Maharni</p>
        </div>

        <div>
          <img src={h3.src} alt='' width={'100%'} />
          <p className='legend'>Sri Sri Radha GovardhanaDhari</p>
        </div>
        <div>
          <img src={h4.src} alt='' width={'100%'} />
          <p className='legend'>Sri Sri Gaura Nitai</p>
        </div>
        <div>
          <img src={h5.src} alt='' width={'100%'} />
        </div>

        <div>
          <img src={h6.src} alt='' />
          <p className='legend'>Srila Prabhupada</p>
        </div>
      </Carousel>
      <br /> <br />
      <div className='title'>Main Festivals</div>
      <div style={{ textAlign: 'center' }}>
        <img src={border.src} alt='' />
        <img src={border.src} alt='' />
        <img src={border.src} alt='' />
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
        </Link>
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
