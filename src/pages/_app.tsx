import type { AppProps } from 'next/app';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import Footer from '../components/app/Footer';
import Navbar from '../components/app/Navbar';

function MyApp({ Component, pageProps }: AppProps) {
  const theme: object = {
    colors: {
      black: '#000000',
      white: '#ffffff',
      lightGray: '#F5F5F5',
      gray: '#DFDFDF',
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <head>
        <title>Iskcon Metpally</title>
      </head>
      <Navbar />
      <div style={{ width: '90%', margin: 'auto' }}>
        <GlobalStyles />
        <Divider />
        <Component {...pageProps} />
      </div>
      <Footer />
    </ThemeProvider>
  );
}
export default MyApp;

const GlobalStyles = createGlobalStyle`
   *,
    *::before,
    *::after {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html {
      font-size: 62.5%;

      body {
        width: 100%;
        background: url(images/shared/bg.jpg); 
        background-repeat: repeat;
        	font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
      }

      @media only screen and (max-width: 600px) {
      body {
      background-color: lightblue;
      }
    }

      body, select, input, button, textarea {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
        font-size: 1rem;
        font-weight: normal;
        line-height: 1.65;
        color:#484338;
      }



      .row {
	      margin-left: 0 !important;
	      margin-right: 0 !important;
      }

      .title {
	      text-align: center;
        font-family: 'Open Sans';
        font-weight: 300;
        letter-spacing: 4.5px;
        font-size: 36px;
        line-height: 40px;
        color: #484338;
      }

      .thumbnail{
        max-height: 200px;
      }

      .thumbnail a>img, .thumbnail>img {
        object-fit: cover;
      }

      .gallery {
        margin-bottom: 30px;
      }

      table tbody {
	      vertical-align: baseline !important;
      }
    }
  `;

const Divider = styled.div`
  height: 0rem;
`;
