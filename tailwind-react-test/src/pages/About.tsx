import React from 'react';

interface Props {}

export const About = (props: Props) => {
  return (
    <div className="h-screen flex justify-center items-center bg-green-100">
      <h1 className="text-9xl uppercase font-black">About</h1>
    </div>
  );
};
