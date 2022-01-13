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
              <div className='row' style={{ marginLeft: '25%' }}>
                <iframe
                  width='560'
                  height='315'
                  src='https://www.youtube.com/embed/qkVqXC9LL5k'
                  frameborder='0'
                  allow='autoplay; encrypted-media'
                  allowfullscreen
                ></iframe>
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
