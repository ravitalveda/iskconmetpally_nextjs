import React from 'react';
import styled from 'styled-components';

import Image from 'next/image';

import g1 from '../../public/images/govardhan/1.jpg';
import g2 from '../../public/images/govardhan/2.jpg';
import g3 from '../../public/images/govardhan/3.jpg';
import g4 from '../../public/images/govardhan/4.jpg';
import g5 from '../../public/images/govardhan/3.jpg';
import g6 from '../../public/images/govardhan/4.jpg';
import g7 from '../../public/images/govardhan/7.jpg';
import g8 from '../../public/images/govardhan/8.jpg';
import g9 from '../../public/images/govardhan/9.jpg';
import g10 from '../../public/images/govardhan/10.jpg';
import g11 from '../../public/images/govardhan/11.jpg';
import g12 from '../../public/images/govardhan/12.jpg';
import g13 from '../../public/images/govardhan/13.jpg';
import g14 from '../../public/images/govardhan/14.jpg';
import g15 from '../../public/images/govardhan/15.jpg';
import g16 from '../../public/images/govardhan/16.jpg';
import g17 from '../../public/images/govardhan/17.jpg';
import g18 from '../../public/images/govardhan/18.jpg';
import g19 from '../../public/images/govardhan/19.jpg';
import g20 from '../../public/images/govardhan/20.jpg';
import g21 from '../../public/images/govardhan/21.jpg';

export default function Gallery() {
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
        <link rel='stylesheet' href='assets/css/main.css' />
        <link rel='stylesheet' href='assets/css/menu.css' />
        <noscript>
          <link rel='stylesheet' href='assets/css/noscript.css' />
        </noscript>

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
                    <a className='lightbox' href='images/govardhan/1.jpg'>
                      <Image src={g1} alt=''></Image>
                    </a>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/govardhan/2.jpg'>
                      <Image src={g2} alt=''></Image>
                    </a>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <div className='thumbnail'>
                      <a className='lightbox' href='images/govardhan/3.jpg'>
                        <Image src={g3} alt=''></Image>
                      </a>
                    </div>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/govardhan/4.jpg'>
                      <Image src={g4} alt=''></Image>
                    </a>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/govardhan/5.jpg'>
                      <Image src={g5} alt=''></Image>
                    </a>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/govardhan/6.jpg'>
                      <Image src={g6} alt=''></Image>
                    </a>
                  </div>
                </div>
              </div>

              <div className='row'>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/govardhan/7.jpg'>
                      <Image src={g7} alt=''></Image>
                    </a>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/govardhan/8.jpg'>
                      <Image src={g8} alt=''></Image>
                    </a>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <div className='thumbnail'>
                      <a className='lightbox' href='images/govardhan/9.jpg'>
                        <Image src={g9} alt=''></Image>
                      </a>
                    </div>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/govardhan/10.jpg'>
                      <Image src={g10} alt=''></Image>
                    </a>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/govardhan/11.jpg'>
                      <Image src={g11} alt=''></Image>
                    </a>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/govardhan/12.jpg'>
                      <Image src={g12} alt=''></Image>
                    </a>
                  </div>
                </div>
              </div>

              <div className='row'>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/govardhan/13.jpg'>
                      <Image src={g13} alt=''></Image>
                    </a>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <div className='thumbnail'>
                      <a className='lightbox' href='images/govardhan/14.jpg'>
                        <Image src={g14} alt=''></Image>
                      </a>
                    </div>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/govardhan/15.jpg'>
                      <Image src={g15} alt=''></Image>
                    </a>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/govardhan/16.jpg'>
                      <Image src={g16} alt=''></Image>
                    </a>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <div className='thumbnail'>
                      <a className='lightbox' href='images/govardhan/17.jpg'>
                        <Image src={g17} alt=''></Image>
                      </a>
                    </div>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/govardhan/18.jpg'>
                      <Image src={g18} alt=''></Image>
                    </a>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/govardhan/19.jpg'>
                      <Image src={g19} alt=''></Image>
                    </a>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/govardhan/20.jpg'>
                      <Image src={g20} alt=''></Image>
                    </a>
                  </div>
                </div>

                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/govardhan/21.jpg'>
                      <Image src={g21} alt=''></Image>
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
