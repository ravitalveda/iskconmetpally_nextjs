import React from 'react';
import BaguetteBox from 'baguettebox.js';
import styled from 'styled-components';

export default function Gallery() {
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
                    <a className='lightbox' href='images/janmashtami/(36).jpg'>
                      <img src='images/janmashtami/(36).jpg' alt='Park' />
                    </a>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/janmashtami/(10).jpg'>
                      <img src='images/janmashtami/(10).jpg' alt='Park' />
                    </a>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <div className='thumbnail'>
                      <a
                        className='lightbox'
                        href='images/janmashtami/(11).jpg'
                      >
                        <img src='images/janmashtami/(11).jpg' alt='Park' />
                      </a>
                    </div>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/janmashtami/(12).jpg'>
                      <img src='images/janmashtami/(12).jpg' alt='Park' />
                    </a>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/janmashtami/(17).jpg'>
                      <img src='images/janmashtami/(17).jpg' alt='Park' />
                    </a>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/janmashtami/(14).jpg'>
                      <img src='images/janmashtami/(14).jpg' alt='Park' />
                    </a>
                  </div>
                </div>
              </div>

              <div className='row'>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/janmashtami/(15).jpg'>
                      <img src='images/janmashtami/(15).jpg' alt='Park' />
                    </a>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/janmashtami/(16).jpg'>
                      <img src='images/janmashtami/(16).jpg' alt='Park' />
                    </a>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <div className='thumbnail'>
                      <a
                        className='lightbox'
                        href='images/janmashtami/(13).jpg'
                      >
                        <img src='images/janmashtami/(13).jpg' alt='Park' />
                      </a>
                    </div>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/janmashtami/(18).jpg'>
                      <img src='images/janmashtami/(18).jpg' alt='Park' />
                    </a>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/janmashtami/(20).jpg'>
                      <img src='images/janmashtami/(20).jpg' alt='Park' />
                    </a>
                  </div>
                </div>

                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/janmashtami/(32).jpg'>
                      <img src='images/janmashtami/(32).jpg' alt='Park' />
                    </a>
                  </div>
                </div>
              </div>

              <div className='row'>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/janmashtami/(21).jpg'>
                      <img src='images/janmashtami/(21).jpg' alt='Park' />
                    </a>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <div className='thumbnail'>
                      <a
                        className='lightbox'
                        href='images/janmashtami/(29).jpg'
                      >
                        <img src='images/janmashtami/(29).jpg' alt='Park' />
                      </a>
                    </div>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/janmashtami/(22).jpg'>
                      <img src='images/janmashtami/(22).jpg' alt='Park' />
                    </a>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/janmashtami/(25).jpg'>
                      <img src='images/janmashtami/(25).jpg' alt='Park' />
                    </a>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <div className='thumbnail'>
                      <a
                        className='lightbox'
                        href='images/janmashtami/(23).jpg'
                      >
                        <img src='images/janmashtami/(23).jpg' alt='Park' />
                      </a>
                    </div>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/janmashtami/(24).jpg'>
                      <img src='images/janmashtami/(24).jpg' alt='Park' />
                    </a>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/janmashtami/(19).jpg'>
                      <img src='images/janmashtami/(19).jpg' alt='Park' />
                    </a>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/janmashtami/(26).jpg'>
                      <img src='images/janmashtami/(26).jpg' alt='Park' />
                    </a>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/janmashtami/(30).jpg'>
                      <img src='images/janmashtami/(30).jpg' alt='Park' />
                    </a>
                  </div>
                </div>
              </div>

              <div className='row'>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/janmashtami/(27).jpg'>
                      <img src='images/janmashtami/(27).jpg' alt='Park' />
                    </a>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/janmashtami/(28).jpg'>
                      <img src='images/janmashtami/(28).jpg' alt='Park' />
                    </a>
                  </div>
                </div>

                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/janmashtami/(31).jpg'>
                      <img src='images/janmashtami/(31).jpg' alt='Park' />
                    </a>
                  </div>
                </div>
              </div>

              <div className='row'>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/janmashtami/(33).jpg'>
                      <img src='images/janmashtami/(33).jpg' alt='Park' />
                    </a>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/janmashtami/(34).jpg'>
                      <img src='images/janmashtami/(34).jpg' alt='Park' />
                    </a>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <div className='thumbnail'>
                      <a
                        className='lightbox'
                        href='images/janmashtami/(35).jpg'
                      >
                        <img src='images/janmashtami/(35).jpg' alt='Park' />
                      </a>
                    </div>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/janmashtami/(1).jpg'>
                      <img src='images/janmashtami/(1).jpg' alt='Park' />
                    </a>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/janmashtami/(37).jpg'>
                      <img src='images/janmashtami/(37).jpg' alt='Park' />
                    </a>
                  </div>
                </div>
                <div className='col-sm-6 col-md-4'>
                  <div className='thumbnail'>
                    <a className='lightbox' href='images/janmashtami/(38).jpg'>
                      <img src='images/janmashtami/(38).jpg' alt='Park' />
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
