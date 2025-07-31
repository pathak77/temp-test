import React from "react";
import Men from '../img/men-jewellery.avif'
import Women from '../img/women-jewellery.jpg'

const HeroSection = () => {
  return (
    <main>
      <div className="grid grid-cols-2 gap-4 h-screen ">
        <div className="relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-black opacity-50 group-hover:opacity-100 transition-opacity duration-500">
            <img src={Men}/>
          </div>
        </div>
        <div className="relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-black opacity-50 group-hover:opacity-100 transition-opacity duration-500">
             <img src={Women}/>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
