import React from 'react';
import { Content } from '../components/Content';
import { Hero } from '../components/Hero';

interface Props {}

const Home = (props: Props) => {
  return (
    <>
      <Hero />
      <Content />
    </>
  );
};

export default Home;
