import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import br1 from '../../public/images/brahmotsavam/1.jpg';
import br2 from '../../public/images/brahmotsavam/2.jpg';
import br3 from '../../public/images/brahmotsavam/3.jpg';
import br4 from '../../public/images/brahmotsavam/4.jpg';
import br5 from '../../public/images/brahmotsavam/3.jpg';
import br6 from '../../public/images/brahmotsavam/4.jpg';
import br7 from '../../public/images/brahmotsavam/7.jpg';

export default function Brahmotsavam() {
  const BaguetteBox = require('baguettebox.js');

  React.useEffect(() => {
    BaguetteBox.run('.gallery');
  }, []);

  return (
    <Container>
      <head>
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
                    <a className='lightbox' href='images/brahmotsavam/1.jpg'>
                      <Image src={br1} alt=''></Image>
                    </a>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/brahmotsavam/2.jpg'>
                      <Image src={br2} alt=''></Image>
                    </a>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <div className='thumbnail'>
                      <a className='lightbox' href='images/brahmotsavam/3.jpg'>
                        <Image src={br3} alt=''></Image>
                      </a>
                    </div>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/brahmotsavam/4.jpg'>
                      <Image src={br4} alt=''></Image>
                    </a>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/brahmotsavam/5.jpg'>
                      <Image src={br5} alt=''></Image>
                    </a>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/brahmotsavam/6.jpg'>
                      <Image src={br6} alt=''></Image>
                    </a>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/brahmotsavam/7.jpg'>
                      <Image src={br7} alt=''></Image>
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
