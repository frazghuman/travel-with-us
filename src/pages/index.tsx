// pages/index.tsx

import React from 'react';
import RootLayout from '@/app/components/layout';
import Header from '@/app/components/home/header';
import Partners from '@/app/components/home/partners';
import BestServices from '@/app/components/home/best-services';
import HoneymoonSpecial from '@/app/components/home/honeymoon-special';
import Footer from '@/app/components/home/footer';
import BookTrip from '@/app/components/home/book-a-trip';
import Holiday from '@/app/components/home/holiday';
import ExplorePackages from '@/app/components/home/explore-packages';

const Home = () => {
  return (
    <RootLayout>
      <Header/>
      <Partners/>
      <BestServices/>
      <HoneymoonSpecial/>
      <ExplorePackages/>
      <BookTrip/>
      <Holiday/>
      
      <Footer email='frazghuman@gmail.com'/>
    </RootLayout>
  );
};

export default Home;
