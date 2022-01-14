import Link from 'next/link';
import FloatingWhatsApp from 'react-floating-whatsapp';
import styled from 'styled-components';
import Image from 'next/image';

import border from '../../public/images/general/floral-decor.png';

export default function Donate() {
  return (
    <Container>
      <div className='title'>Donate</div>
      <div style={{ textAlign: 'center' }}>
        <Image src={border} alt=''></Image>
        <Image src={border} alt=''></Image>
        <Image src={border} alt=''></Image>
        <br /> <br />
      </div>
      <Illustration src='images/general/donate.png' alt='donate'></Illustration>

      <Box>
        The activities of ISKCON Metpally are solely supported by the kind
        generosity of its members, friends and well wishers. All donations are
        tax-deductible. Kindly call us or email us if you're looking to make a
        donation. Contact details available in our&nbsp;
        <Link href='/contact' passHref>
          Contact
        </Link>
        &nbsp;page.
      </Box>

      <Illustration src='images/general/border.png' alt='border'></Illustration>

      <Illustration
        style={{ maxWidth: '400px' }}
        src='images/general/upi.jpg'
        alt='Upi account details'
      />

      <FeatureTitle>
        Please accept our humble obeisances
        <br />
        <i>
          <b>- Your humble wellwishers @ ISKCON Metpally</b>
        </i>
      </FeatureTitle>
      <FloatingWhatsApp
        phoneNumber='919885773787'
        accountName={'Iskcon Metpally'}
        chatMessage='Hare Krishna! How can we serve you? 🙏🏼'
      />
    </Container>
  );
}

const Container = styled.section`
  text-align: center;
  @media (min-width: 768px) {
    padding: 11.2rem 40px;
  }

  @media (min-width: 768px) {
    padding: 6rem 40px;
  }
`;

const Illustration = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
`;
const FeatureTitle = styled.h4`
  font-size: 1.5rem;
  text-align: center;
  font-weght: thin;
  padding: 10px 0 10px;
`;
const Box = styled.div`
  width: 100%;
  border-radius: 4px;
  border: solid 1px;
  margin-bottom: 2rem;
  padding: 4rem;
  background-image: url('images/general/banner.jpg');
  color: lightgoldenrodyellow;
  font-size: 1.6rem;
  font-weight: normal;
  text-align: center;
`;
