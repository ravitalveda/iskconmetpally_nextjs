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
      image: 'images/smallarticle/ratha1.webp',
      title: 'Sri Jagannātha Ratha Yātra',
      description:
        'Ratha Yatra or Chariot festival is any public procession in a chariot. The annual Rathayatra, that involve a public procession with a chariot with deities Jagannath (Vishnu avatar), Balabhadra (his brother), Subhadra (his sister) and Sudarshana Chakra (his weapon) on a ratha, a wooden doula-shaped chariot. It attracts many devotees who join the procession each year in the town of Metpally.',
    },
    {
      image: 'images/smallarticle/pparticle.webp',
      title: 'Srila Prabhupāda Vyāsapūja',
      description:
        'His Divine Grace A.C. Bhakti Vedanta Swami Prabhupada founder of ISKCON propagated Krsna Consiousness all over the world. On occasion of his divine appearance on 6th August, we are celebrating the festival at ISKCON Metpally Dham.',
    },
    {
      image: 'images/smallarticle/10.webp',
      title: 'Nandotsav',
      description:
        'Nandotsav is a festival celebrated the day after the festival Janmashtami, which celebrates the Lord Krishnas birth. It is believed that all the villagers of Braj visited house of Nand Baba to see little Krishna and congratulate Mata Yashoda. Nand Baba distributed ornaments, clothes, cattle and various other valuables among saints and sages. All saints and sages bestowed blessings on Lord Krishna in return.',
    },
    {
      image: 'images/smallarticle/bala2.webp',
      title: 'Balaram Jayanti',
      description:
        'Appearance day of Sri Balaram, Lord Balaram is the elder brother of Krishna, represents Guru Tatva and gives strength to perform Bhakti.',
    },
    {
      image: 'images/smallarticle/narasimha.webp',
      title: 'Sri Narasimha Chaturdashi',
      description:
        'It is the appearance day of Sri Narasimha Dev. He is protector of devotees and removes fear from their hearts.',
    },

    {
      image: 'images/brahmotsavam/5.jpg',
      title: 'Brahmotsavam',
      description:
        'On this auspicious day of Akshaya Tritiya, Sri Sri Radha Giridhari rides on palanquin. Also, this is starting day of Chandan Yatra where Lords whole body is smeared with sandalwood paste for 21 days which provides the Lord relief from the scorching heat of summer.',
    },
    {
      image: 'images/smallarticle/gaurpurnima.webp',
      title: 'Gaur Purnima',
      description:
        'Is the appearance day of Sri Chaitanya Mahaprabhu, the most merciful form of the lord. He came to inaugurate Harinam Sankirtan in this age of Kali.',
    },
    {
      image: 'images/smallarticle/nityananda.webp',
      title: 'Nityananda Trayodashi',
      description:
        'It is the appearance day of Lord Nityananda, he is an intimate associate of Sri Chaitanya Mahaprabhu in spreading Krishna Consciousness in this world.',
    },
    {
      image: 'images/smallarticle/gitajayanti.webp',
      title: 'Gita Jayanti',
      description:
        'The Bhagavad-Gita, The Lord’s Song, is understood as a conversation between Krishna and Arjuna but meant for the whole world’s benefit. On this day, devotees gather to glorify the sacred conversation.',
    },
  ];
  const list = complete ? completeList : festivalsList;

  return (
    <Container className={`${complete && 'complete'}`}>
      {list.map((feature) => (
        <Feature key={feature.title}>
          <Title>{feature.title}</Title>
          <Illustration src={feature.image} alt={feature.title} />

          <Description>{feature.description}</Description>
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
  background: transparent;

  &.complete {
    padding: 6.4rem 24px;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 6rem 0px;

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
  display: block;
  height: auto;
  width: 100%;
  max-height: 268px;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 0px 0px 5px black;
`;

const Title = styled.h3`
  margin: 2rem 0 1.6rem;
  font-weight: normal;
  font-size: 2rem;
  line-height: 139%;
`;

const Description = styled.p`
  font-size: 1.6rem;
  line-height: 167%;
  opacity: 0.6;
  max-width: 40ch;
  margin: auto;
  padding-top: 1rem;
`;
