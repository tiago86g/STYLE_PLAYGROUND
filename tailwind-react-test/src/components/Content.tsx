import React from 'react';
import ImageOne from '../images/avocado.jpeg';
import ImageTwo from '../images/avocado-2.jpeg';

interface Props {}

export const Content = (props: Props) => {
  return (
    <>
      {/* {map} */}
      <div className="flex flex-col justify-center items-center bg-white h-screen font-mono py-40">
        <img src={ImageOne} alt="" className="h-5/6 rounded mb-20 shadow" />
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl mb-2">Egg Muffins</h2>
          <p className="mb-2">Crispy, delicious, and nutritious</p>
          <span>30dkk</span>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-white h-screen font-mono py-40">
        <img src={ImageTwo} alt="" className="h-full rounded mb-20 shadow" />
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl mb-2">Egg Sandwich</h2>
          <p className="mb-2">With avocados and homemade sauce</p>
          <span>70dkk</span>
        </div>
      </div>
    </>
  );
};
