import React from 'react';
import styled from 'styled-components';

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
                    <a className='lightbox' href='images/govardhan/(1).jpg'>
                      <img src='images/govardhan/(1).jpg' alt='Park' />
                    </a>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/govardhan/(10).jpg'>
                      <img src='images/govardhan/(10).jpg' alt='Park' />
                    </a>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <div className='thumbnail'>
                      <a className='lightbox' href='images/govardhan/(11).jpg'>
                        <img src='images/govardhan/(11).jpg' alt='Park' />
                      </a>
                    </div>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/govardhan/(28).jpg'>
                      <img src='images/govardhan/(28).jpg' alt='Park' />
                    </a>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/govardhan/(13).jpg'>
                      <img src='images/govardhan/(13).jpg' alt='Park' />
                    </a>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/govardhan/(14).jpg'>
                      <img src='images/govardhan/(14).jpg' alt='Park' />
                    </a>
                  </div>
                </div>
              </div>

              <div className='row'>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/govardhan/(15).jpg'>
                      <img src='images/govardhan/(15).jpg' alt='Park' />
                    </a>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/govardhan/(16).jpg'>
                      <img src='images/govardhan/(16).jpg' alt='Park' />
                    </a>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <div className='thumbnail'>
                      <a className='lightbox' href='images/govardhan/(17).jpg'>
                        <img src='images/govardhan/(17).jpg' alt='Park' />
                      </a>
                    </div>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/govardhan/(18).jpg'>
                      <img src='images/govardhan/(18).jpg' alt='Park' />
                    </a>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/govardhan/(25).jpg'>
                      <img src='images/govardhan/(25).jpg' alt='Park' />
                    </a>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/govardhan/(20).jpg'>
                      <img src='images/govardhan/(20).jpg' alt='Park' />
                    </a>
                  </div>
                </div>
              </div>

              <div className='row'>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/govardhan/(21).jpg'>
                      <img src='images/govardhan/(21).jpg' alt='Park' />
                    </a>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <div className='thumbnail'>
                      <a className='lightbox' href='images/govardhan/(29).jpg'>
                        <img src='images/govardhan/(29).jpg' alt='Park' />
                      </a>
                    </div>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/govardhan/(22).jpg'>
                      <img src='images/govardhan/(22).jpg' alt='Park' />
                    </a>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/govardhan/(19).jpg'>
                      <img src='images/govardhan/(19).jpg' alt='Park' />
                    </a>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <div className='thumbnail'>
                      <a className='lightbox' href='images/govardhan/(23).jpg'>
                        <img src='images/govardhan/(23).jpg' alt='Park' />
                      </a>
                    </div>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/govardhan/(24).jpg'>
                      <img src='images/govardhan/(24).jpg' alt='Park' />
                    </a>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/govardhan/(25).jpg'>
                      <img src='images/govardhan/(25).jpg' alt='Park' />
                    </a>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/govardhan/(26).jpg'>
                      <img src='images/govardhan/(26).jpg' alt='Park' />
                    </a>
                  </div>
                </div>

                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/govardhan/(27).jpg'>
                      <img src='images/govardhan/(27).jpg' alt='Park' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <script src='https://cdnjs.cloudflare.com/ajax/libs/baguettebox.js/1.8.1/baguetteBox.min.js'></script>
          <script>baguetteBox.run(".tz-gallery");</script>
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
