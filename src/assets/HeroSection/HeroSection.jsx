import React from "react";
import bgImage from "../img/bg_hero.png";

const bg = {
  backgroundImage: `url(${bgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const HeroSection = () => {
  return (
    <main style={bg}>
      <section className=" min-h-[750px] w-full">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2">
            
          </div>
        </div>
      </section>
    </main>
  );
};

export default HeroSection;
