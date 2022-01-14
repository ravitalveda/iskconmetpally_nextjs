import styled from 'styled-components';

interface FeaturesProps {
  complete: boolean;
}

export default function Features({ complete }: FeaturesProps) {
  const completeList = [
    {
      image: '/images/features/responsive.svg',
      title: 'Nandotsav',
      description:
        'Nandotsav is a festival celebrated the day after the festival Janmashtami, which celebrates the Lord Krishnas birth. It is believed that all the villagers of Braj visited house of Nand Baba to see little Krishna and congratulate Mata Yashoda. Nand Baba distributed ornaments, clothes, cattle and various other valuables among saints and sages. All saints and sages bestowed blessings on Lord Krishna in return.',
    },
    {
      image: '/images/features/no-limit.svg',
      title: 'No Photo Upload Limit',
      description:
        'Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.',
    },
    {
      image: '/images/features/embed.svg',
      title: 'Available to Embed',
      description:
        'Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. ',
    },
    {
      image: '/images/features/custom-domain.svg',
      title: 'Custom Domain',
      description:
        'With Sri Sri Radha Govardhandhari Mandir subscriptions you can host your stories on your own domain. You can also remove our branding!',
    },
    {
      image: '/images/features/boost-exposure.svg',
      title: 'Boost Your Exposure',
      description:
        'Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.',
    },
    {
      image: '/images/features/drag-drop.svg',
      title: 'Drag & Drop Image',
      description:
        'Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.',
    },
  ];
  const festivalsList = [
    {
      image: '/images/features/responsive.svg',
      title: 'fgvdfgdf',
      description:
        'No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.',
    },
    {
      image: '/images/features/no-limit.svg',
      title: 'No Photo Upload Limit',
      description:
        'Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.',
    },
    {
      image: '/images/features/embed.svg',
      title: 'Available to Embed',
      description:
        'Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. ',
    },
  ];
  const list = complete ? completeList : festivalsList;

  return (
    <Container className={`${complete && 'complete'}`}>
      {list.map((festival) => (
        <Feature key={festival.title}>
          <Illustration src={festival.image} alt={festival.title} />
          <Title>{festival.title}</Title>
          <Description>{festival.description}</Description>
        </Feature>
      ))}
    </Container>
  );
}

const Container = styled.ul`
  background: ${(props) => props.theme.colors.white};
  padding: 8rem 24px;
  list-style: none;
  display: grid;
  gap: 5.6rem;
  text-align: center;

  &.complete {
    padding: 6.4rem 24px;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 12rem 24px;

    li:last-of-type {
      grid-column: 1 /3;
    }

    &.complete {
      padding: 11.2rem 24px;

      li:last-of-type {
        grid-column: unset;
      }
    }
  }

  @media (min-width: 950px) {
    grid-template-columns: repeat(3, 1fr);

    li:last-of-type {
      grid-column: unset;
    }

    &.complete {
      padding: 16rem 24px;
    }
  }
`;

const Feature = styled.li`
  color: ${(props) => props.theme.colors.black};
`;

const Illustration = styled.img`
  width: 72px;
  height: 72px;
  object-fit: contain;
`;

const Title = styled.h3`
  margin: 4rem 0 1.6rem;
  font-weight: bold;
  font-size: 1.8rem;
  line-height: 139%;
`;

const Description = styled.p`
  font-size: 1.6rem;
  line-height: 167%;
  opacity: 0.6;
  max-width: 40ch;
  margin: auto;
`;
