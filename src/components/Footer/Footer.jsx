
'use client';

import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

export default function Futer() {
  return (
    <Footer bgDark>
      <div className="w-full">
     
        <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between text-gray-200">
         
          <Footer.Copyright href="#" by=" Blog" year={2024} />
         
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
         
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
