import React from 'react';
import Image from 'next/image';

import styled from 'styled-components';
import n1 from '../../public/images/smallarticle/narasimha.webp';

export default function Narasimha() {
  const BaguetteBox = require('baguettebox.js');
  React.useEffect(() => {
    BaguetteBox.run('.gallery');
  }, []);

  return (
    <Container>
      <head>
        <title>Narasimha Chaturdasi</title>

        <noscript>
          <link rel='stylesheet' href='assets/css/noscript.css' />
        </noscript>

        <script src='https://cdnjs.cloudflare.com/ajax/libs/baguettebox.js/1.11.1/baguetteBox.min.js'></script>
        <link
          rel='stylesheet'
          href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'
        />
        <link
          href='https://fonts.googleapis.com/css?family=Droid+Sans:400,700'
          rel='stylesheet'
        />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/baguettebox.js/1.11.1/baguetteBox.min.css'
        />
      </head>

      <div className='gallery'>
        <div id='wrapper' className='divided'>
          <div className='container gallery-container'>
            <div className='tz-gallery'>
              <div className='row'>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/sharadpurnima/1.jpg'>
                      <Image src={n1}></Image>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <script src='assets/js/jquery.min.js'></script>

      <script src='assets/js/browser.min.js'></script>
      <script src='assets/js/breakpoints.min.js'></script>
      <script src='assets/js/util.js'></script>
      <script src='assets/js/main.js'></script>
    </Container>
  );
}

const Container = styled.section`
  color: ${(props) => props.theme.colors.black};
  padding-top: 4rem;
`;
