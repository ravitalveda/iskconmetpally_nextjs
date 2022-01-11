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
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <div style={{ width: '80%', margin: 'auto' }}>
          <GlobalStyles />
          <Divider />
          <Component {...pageProps} />
        </div>
        <Footer />
      </ThemeProvider>
    </>
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

      table tbody {
	      vertical-align: baseline !important;
      }

    }
  `;

const Divider = styled.div`
  height: 0rem;
`;
