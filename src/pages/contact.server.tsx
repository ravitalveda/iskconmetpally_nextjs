import styled from 'styled-components';
import React from 'react';
import FloatingWhatsApp from 'react-floating-whatsapp';
import Image from 'next/image';
import border from '../../public/images/general/floral-decor.png';

export default function Contact() {
  return (
    <Container>
      <div className='title'>Contact</div>
      <Image src={border} alt=''></Image>
      <Image src={border} alt=''></Image>
      <Image src={border} alt=''></Image>
      <br /> <br /> <br />
      <div>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12802.732744654382!2d78.65654097891372!3d18.820987129501034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6bd2d58e6afcf8bf!2sGiridhari+Kunj!5e1!3m2!1sen!2sin!4v1493376901443'
          height='350'
          style={{ border: 0, width: '100%' }}
          allowFullScreen
        ></iframe>
      </div>
      <br />
      <FeatureTitle>Our Location:</FeatureTitle>
      <Box>
        HARE KRISHNA MANDIRAM, <br />
        GIRIDHARI KUNJ, <br />
        Hare Krishna Road, <br />
        Near peddapur Camp, <br />
        Metpally-Korutla, Jagityal,
        <br />
        Telangana, pincode 505325 India.
      </Box>
      <Box>
        <strong>Email:</strong> iskconmetpally@gmail.com
        <br />
        <strong>Phone:</strong> +91 94408 51408
        <br />
      </Box>
      <br />
      <br />
      <FeatureTitle>Reaching us by bus:</FeatureTitle>
      <Box>
        From Hyderabad MGBS Bus Stand & Secundrabad Jubliee Bus Stand. There are
        Number of buses going to Metpally or Korutla.
      </Box>
      <br />
      <FeatureTitle>By car:</FeatureTitle>
      <Box>
        On NH-44 from Hyderabad to Nizamabad Highway @ Armoor Junction 30km on
        Jagtial/Warangal route. The temple is located between Metpally and
        Korutla.
      </Box>
      <br />
      <FeatureTitle>By train:</FeatureTitle>
      <Box>
        From Mumbai or Secunderabad you should arrive in Nizamabad. It is the
        nearest Railway Station to Metpally.
      </Box>
      <FeatureTitle>By air:</FeatureTitle>
      <Box>
        Hyderabad International airport is 279 km away from ISKCON Metpally.
        There are even direct busses available right from airport to Metpally.
      </Box>
      <FloatingWhatsApp
        phoneNumber='919885773787'
        accountName={'Iskcon Metpally'}
        chatMessage='Hare Krishna! How can we serve you? 🙏🏼'
      />
    </Container>
  );
}

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
  font-weight: normal;
  font-size: 26px;
  margin-bottom: 1.6rem;

  @media (min-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const Box = styled.div`
  border-radius: 4px;
  border: solid 1px;
  margin-bottom: 2rem;
  padding: 4rem;
  font-size: 1.8rem;
  text-align: center;
`;
