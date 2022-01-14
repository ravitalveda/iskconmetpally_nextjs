import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import b1 from '../../public/images/balaram/1.webp';
import b2 from '../../public/images/balaram/2.webp';
import b3 from '../../public/images/balaram/3.webp';
import b4 from '../../public/images/balaram/4.webp';
import b5 from '../../public/images/balaram/3.webp';
import b6 from '../../public/images/balaram/4.webp';

export default function Narasimha() {
  const BaguetteBox = require('baguettebox.js');

  React.useEffect(() => {
    BaguetteBox.run('.gallery');
  }, []);

  return (
    <Container>
      <head>
        <title>ISKCON Metpally</title>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, user-scalable=no'
        />
        <link rel='shortcut icon' href='images/general/iskconlogo.png' />

        <script src='https://cdnjs.cloudflare.com/ajax/libs/baguettebox.js/1.8.1/baguetteBox.min.js'></script>
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
          href='https://cdnjs.cloudflare.com/ajax/libs/baguettebox.js/1.8.1/baguetteBox.min.css'
        />
      </head>
      <div className='gallery'>
        <div id='wrapper' className='divided'>
          <div className='container gallery-container'>
            <div className='tz-gallery'>
              <div className='row'>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/balaram/1.webp'>
                      <Image src={b1} alt=''></Image>
                    </a>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/balaram/2.webp'>
                      <Image src={b2} alt=''></Image>
                    </a>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <div className='thumbnail'>
                      <a className='lightbox' href='images/balaram/3.webp'>
                        <Image src={b3} alt=''></Image>
                      </a>
                    </div>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/balaram/4.webp'>
                      <Image src={b4} alt=''></Image>
                    </a>
                  </div>
                </div>

                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/balaram/5.webp'>
                      <Image src={b5} alt=''></Image>
                    </a>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/balaram/6.webp'>
                      <Image src={b6} alt=''></Image>
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
