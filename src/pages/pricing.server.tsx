import type { NextPage } from 'next';

import Banner from '../components/shared/Banner';
import BetaInvite from '../components/shared/BetaInvite';
import PricingList from '../components/pricing/PricingList';

import HeroImage from '../../public/images/pricing/hero.jpg';
import CompareTable from '../components/pricing/CompareTable';
import Head from 'next/head';

const Pricing: NextPage = () => {
  return (
    <main>
      <Head>
        <title>Sri Sri Radha Govardhandhari Mandir | Pricing</title>
      </Head>

      <Banner
        image={HeroImage.src}
        blur={HeroImage.blurDataURL}
        title='PRICING'
        description='Create a your stories, Sri Sri Radha Govardhandhari Mandir is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos.'
        position='left'
        hero={true}
      />

      <PricingList />

      <CompareTable />

      <BetaInvite />
    </main>
  );
};

export default Pricing;
