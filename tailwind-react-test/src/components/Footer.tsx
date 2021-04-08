import React from 'react';

interface Props {}

const Footer = (props: Props) => {
  return (
    <div className="flex justify-center items-center h-16 bg-black text-white">
      <p className="text-xs">Copyright © Tiago All rights reserved.</p>
    </div>
  );
};

export default Footer;
