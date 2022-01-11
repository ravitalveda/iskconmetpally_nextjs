import styled from 'styled-components';

export default function Activities() {
  return (
    <Container>
      {[
        {
          featureTitle: 'Sunday Love Feast',
          disWrapper:
            'Following in the footsteps of Srila prabhupada every sunday we organize “Sunday Love Feast” program in temple. Program includes discourse, kirtan & followed by sumptuous prasadam.',
        },
        {
          featureTitle: 'Harinaam Sankirtan',
          disWrapper:
            'Lord Chaitanya Mahaprabhu’s main mission is harinaam sankritan. Every week devotees perform harinaam sankirtan within town or village to village propagating the holynames & distributing Srila prabhupada books.',
        },
        {
          featureTitle: 'Bhagavad Gita Classes',
          disWrapper:
            'For regular connected devotees to temple we hold systematic study of Bhagavad Gita & other preliminary books on Sunday morning in temple premises.',
        },
        {
          featureTitle: 'Home Satsang',
          disWrapper:
            ' Weekly evening two hour home program in various localities replete with kirtan, discourse & delicious prasadam. Learning practical application of Krsna consciousness.',
        },
        {
          featureTitle: 'Go Seva',
          disWrapper:
            'Krsna loves cows & is satisfied with those who have love of cows in their heart. Keeping the mood we are serving & taking care of 9 cows & 5 calf’s. Goshala is located just beside the main temple.',
        },
        {
          featureTitle: 'Organic Farming',
          disWrapper:
            'All economic problems can be solved by just having a cow & piece of land for farming. With this view we are growing different vegetables, fruits, corns, & other cereals. There is plenty of flower plantation within the perimeter of temple.',
        },
      ].map((feature) => (
        <FeatureItem key={feature.featureTitle}>
          {/* <img
            src='images/general/chakra3.jpeg'
            style={{ borderRadius: '50%', height: '20px' }}
          /> */}
          <FeatureTitle>{feature.featureTitle}</FeatureTitle>
          <DisWrapper>{feature.disWrapper}</DisWrapper>
        </FeatureItem>
      ))}
    </Container>
  );
}

const Container = styled.section`
  color: ${(props) => props.theme.colors.black};
  padding-top: 4rem;
`;

const FeatureItem = styled.section`
  border-bottom: 1px solid ${(props) => props.theme.colors.gray};
  padding-bottom: 2.4rem;

  @media (min-width: 768px) {
    align-items: left;
  }
`;

const FeatureTitle = styled.h4`
  font-weight: bold;
  font-size: 2rem;
  margin-bottom: 1.6rem;

  @media (min-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const DisWrapper = styled.p`
  font-size: 1.5rem;
  left: 0;
  margin-bottom: 1.6rem;
`;
