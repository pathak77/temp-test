import React from "react";
import Men from "../img/men-jewellery.avif";
import Women from "../img/women-jewellery.jpg";

const HeroSection = () => {
  return (
    <main>
      <div className="grid grid-cols-2 w-full h-screen m-5 ">
        <div className="relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-black opacity-50 group-hover:opacity-100 transition-opacity duration-500">
            <img
              src={Men}
              alt="Men's Jewelry"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute bottom-6 left-6 right-6 text-white text-center text-xl font-semibold tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-500 drop-shadow-lg">
            MEN — for your beloved husband, son, brother, or{" "}
            <span className="italic">you</span>.
          </div>
        </div>
        <div className="relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-black opacity-50 group-hover:opacity-100 transition-opacity duration-500">
            <img
              src={Women}
              alt="Women's Jewelry"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute bottom-6 left-6 right-6 text-white text-center text-xl font-semibold tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-500 drop-shadow-lg">
            Women — for your beloved wife, daughter, sister, or{" "}
            <span className="italic">you</span>.
          </div>
        </div>

        <h1 className="absolute translate-x-[510px] translate-y-[300px] text-[56px] font-semibold">
          AETHER
        </h1>
      </div>
    </main>
  );
};

export default HeroSection;
