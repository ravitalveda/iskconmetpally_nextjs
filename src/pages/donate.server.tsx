import Link from 'next/link';
import styled from 'styled-components';

export default function Contact() {
  return (
    <Container>
      <div className='title'>Donate</div>
      <img src='images/general/floral-decor.png' alt='donate'></img>
      <img src='images/general/floral-decor.png' alt='donate'></img>
      <img src='images/general/floral-decor.png' alt='donate'></img>
      <br /> <br />
      <section>
        <br />
        <Illustration
          src='images/general/donate.png'
          alt='donate'
        ></Illustration>

        <Box>
          The activities of ISKCON Metpally are solely supported by the kind
          generosity of its members, friends and well wishers. All donations are
          tax-deductible. Kindly call us or email us if you're looking to make a
          donation. Contact details available in our
          <Link href='/contact' passHref>
            Contact
          </Link>
          page.
        </Box>

        <Illustration
          src='images/general/border.png'
          alt='border'
        ></Illustration>

        <img src='images/general/upi.jpg' alt='Upi account details' />
      </section>
      <FeatureTitle>
        Please accept our humble obeisances
        <br />
        <i>
          <b>- Your humble wellwishers @ ISKCON Metpally</b>
        </i>
      </FeatureTitle>
    </Container>
  );
}

(function () {
  var options = {
    whatsapp: '+919324845992', // WhatsApp number
    call_to_action: '!', // Call to action
    position: 'right', // Position may be 'right' or 'left'
  };
  var proto = document.location.protocol,
    host = 'getbutton.io',
    url = proto + '//static.' + host;
  var s = document.createElement('script');
  s.type = 'text/javascript';
  s.async = true;
  s.src = url + '/widget-send-button/js/init.js';
  s.onload = function () {
    WhWidgetSendButton.init(host, proto, options);
  };
  var x = document.getElementsByTagName('script')[0];
  x.parentNode.insertBefore(s, x);
})();

const Container = styled.section`
  @media (min-width: 768px) {
    padding: 11.2rem 40px;
    text-align: center;
  }

  @media (min-width: 768px) {
    padding: 6rem 40px;
  }
`;

const FeatureTitle = styled.h4`
  font-size: 20px;
`;

const Illustration = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
`;

const Box = styled.div`
  border-radius: 4px;
  border: solid 1px;
  margin-bottom: 2rem;
  padding: 4rem;
  background-image: url('images/general/banner.jpg');
  color: lightgoldenrodyellow;
  font-size: 1.8rem;
  text-align: center;
`;
