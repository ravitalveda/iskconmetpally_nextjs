import React from 'react';
import styled from 'styled-components';

import Image from 'next/image';

import p1 from '../../public/images/janmashtami/1.webp';
import p2 from '../../public/images/janmashtami/2.webp';
import p3 from '../../public/images/janmashtami/3.webp';
import p4 from '../../public/images/janmashtami/4.webp';
import p5 from '../../public/images/janmashtami/3.webp';
import p6 from '../../public/images/janmashtami/4.webp';
import p7 from '../../public/images/janmashtami/7.webp';
import p8 from '../../public/images/janmashtami/8.webp';
import p9 from '../../public/images/janmashtami/9.webp';
import p10 from '../../public/images/janmashtami/10.webp';
import p11 from '../../public/images/janmashtami/11.webp';
import p12 from '../../public/images/janmashtami/12.webp';
import p13 from '../../public/images/janmashtami/13.webp';
import p14 from '../../public/images/janmashtami/14.webp';
import p15 from '../../public/images/janmashtami/15.webp';
import p16 from '../../public/images/janmashtami/16.webp';
import p17 from '../../public/images/janmashtami/17.webp';
import p18 from '../../public/images/janmashtami/18.webp';
import p19 from '../../public/images/janmashtami/19.webp';
import p20 from '../../public/images/janmashtami/20.webp';
import p21 from '../../public/images/janmashtami/21.webp';
import p22 from '../../public/images/janmashtami/22.webp';
import p23 from '../../public/images/janmashtami/23.webp';
import p24 from '../../public/images/janmashtami/24.webp';
import p25 from '../../public/images/janmashtami/23.webp';
import p26 from '../../public/images/janmashtami/24.webp';
import p27 from '../../public/images/janmashtami/27.webp';
import p28 from '../../public/images/janmashtami/28.webp';
import p29 from '../../public/images/janmashtami/29.webp';
import p30 from '../../public/images/janmashtami/30.webp';
import p31 from '../../public/images/janmashtami/31.webp';
import p32 from '../../public/images/janmashtami/32.webp';
import p33 from '../../public/images/janmashtami/33.webp';
import p34 from '../../public/images/janmashtami/34.webp';
import p35 from '../../public/images/janmashtami/35.webp';
import p36 from '../../public/images/janmashtami/36.webp';
import p37 from '../../public/images/janmashtami/37.webp';
import p38 from '../../public/images/janmashtami/38.webp';
import p39 from '../../public/images/janmashtami/39.webp';
import p40 from '../../public/images/janmashtami/40.webp';
import p41 from '../../public/images/janmashtami/41.webp';
import p42 from '../../public/images/janmashtami/42.webp';
import p43 from '../../public/images/janmashtami/43.webp';
import p44 from '../../public/images/janmashtami/44.webp';
import p45 from '../../public/images/janmashtami/45.webp';

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
                    <a className='lightbox' href='images/janmashtami/1.webp'>
                      <Image src={p1} alt=''></Image>
                    </a>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/janmashtami/2.webp'>
                      <Image src={p2} alt=''></Image>
                    </a>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <div className='thumbnail'>
                      <a className='lightbox' href='images/janmashtami/3.webp'>
                        <Image src={p3} alt=''></Image>
                      </a>
                    </div>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/janmashtami/4.webp'>
                      <Image src={p4} alt=''></Image>
                    </a>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/janmashtami/5.webp'>
                      <Image src={p5} alt=''></Image>
                    </a>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/janmashtami/6.webp'>
                      <Image src={p6} alt=''></Image>
                    </a>
                  </div>
                </div>
              </div>

              <div className='row'>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/janmashtami/7.webp'>
                      <Image src={p7} alt=''></Image>
                    </a>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/janmashtami/8.webp'>
                      <Image src={p8} alt=''></Image>
                    </a>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <div className='thumbnail'>
                      <a className='lightbox' href='images/janmashtami/9.webp'>
                        <Image src={p9} alt=''></Image>
                      </a>
                    </div>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/janmashtami/10.webp'>
                      <Image src={p10} alt=''></Image>
                    </a>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/janmashtami/11.webp'>
                      <Image src={p11} alt=''></Image>
                    </a>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/janmashtami/12.webp'>
                      <Image src={p12} alt=''></Image>
                    </a>
                  </div>
                </div>
              </div>

              <div className='row'>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/janmashtami/13.webp'>
                      <Image src={p13} alt=''></Image>
                    </a>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/janmashtami/14.webp'>
                      <Image src={p14} alt=''></Image>
                    </a>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/janmashtami/15.webp'>
                      <Image src={p15} alt=''></Image>
                    </a>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/janmashtami/16.webp'>
                      <Image src={p16} alt=''></Image>
                    </a>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/janmashtami/17.webp'>
                      <Image src={p17} alt=''></Image>
                    </a>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <div className='thumbnail'>
                      <a className='lightbox' href='images/janmashtami/18.webp'>
                        <Image src={p18} alt=''></Image>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className='row'>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/janmashtami/19.webp'>
                      <Image src={p19} alt=''></Image>
                    </a>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <div className='thumbnail'>
                      <a className='lightbox' href='images/janmashtami/20.webp'>
                        <Image src={p20} alt=''></Image>
                      </a>
                    </div>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/janmashtami/21.webp'>
                      <Image src={p21} alt=''></Image>
                    </a>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/janmashtami/22.webp'>
                      <Image src={p22} alt=''></Image>
                    </a>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <div className='thumbnail'>
                      <a className='lightbox' href='images/janmashtami/23.webp'>
                        <Image src={p23} alt=''></Image>
                      </a>
                    </div>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/janmashtami/24.webp'>
                      <Image src={p24} alt=''></Image>
                    </a>
                  </div>
                </div>
              </div>

              <div className='row'>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/janmashtami/25.webp'>
                      <Image src={p25} alt=''></Image>
                    </a>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/janmashtami/26.webp'>
                      <Image src={p26} alt=''></Image>
                    </a>
                  </div>
                </div>

                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/janmashtami/27.webp'>
                      <Image src={p27} alt=''></Image>
                    </a>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/janmashtami/28.webp'>
                      <Image src={p28} alt=''></Image>
                    </a>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/janmashtami/29.webp'>
                      <Image src={p29} alt=''></Image>
                    </a>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/janmashtami/30.webp'>
                      <Image src={p30} alt=''></Image>
                    </a>
                  </div>
                </div>
              </div>

              <div className='row'>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/janmashtami/31.webp'>
                      <Image src={p31} alt=''></Image>
                    </a>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/janmashtami/32.webp'>
                      <Image src={p32} alt=''></Image>
                    </a>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <div className='thumbnail'>
                      <a className='lightbox' href='images/janmashtami/33.webp'>
                        <Image src={p33} alt=''></Image>
                      </a>
                    </div>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/janmashtami/34.webp'>
                      <Image src={p34} alt=''></Image>
                    </a>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/janmashtami/35.webp'>
                      <Image src={p35} alt=''></Image>
                    </a>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/janmashtami/36.webp'>
                      <Image src={p36} alt=''></Image>
                    </a>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/janmashtami/37.webp'>
                      <Image src={p37} alt=''></Image>
                    </a>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/janmashtami/38.webp'>
                      <Image src={p38} alt=''></Image>
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
