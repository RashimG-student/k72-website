

import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';

const Menu_1 = () => {
  return (
    <div className="fixed top-0 right-0 z-[999]">
      <Link
        to="/navbar"
        className="bg-black text-white w-[20vw] h-[5vw] flex items-center justify-center"
      >
        <HiOutlineMenuAlt4 className="text-[5vw] ml-[70%] pt-[10%]" />
      </Link>
    </div>
  );
};

export default Menu_1;



















