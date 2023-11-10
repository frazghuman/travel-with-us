import * as React from "react";
import Button from "../Button";

function HoneymoonSpecial() {
  return (
    <div className="lg:px-40 px-5">
      <div className="gap-5 flex max-lg:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-[56%] max-lg:w-full max-md:ml-0 pr-40 max-md:pr-0">
          <img
            loading="lazy"
            src="assets/romantic_tropical_land/honemoon_special.svg"
            className="aspect-[0.88] object-cover object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
          />
        </div>
        <div className="flex flex-col items-stretch w-[44%] ml-5 max-lg:w-full max-md:ml-0 pr-40 max-md:pr-0">
          <div className="flex flex-col my-auto max-md:max-w-full max-md:mt-10">
            <div className="text-red-400 text-lg font-bold tracking-widest uppercase self-start whitespace-nowrap">
              Honeymoon Specials
            </div>
            <div className="text-indigo-950 text-5xl font-bold leading-[71.0425px] self-start max-md:max-w-full max-md:text-4xl">
              Our Romantic Tropical Destinations
            </div>
            <div className="text-black text-base leading-7 my-9 self-start max-md:max-w-full">
              Et labore harum non nobis ipsum eum molestias mollitia et corporis
              praesentium a laudantium internos. Non quis eius quo eligendi
              corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut
              ducimus illum aut optio quibusdam!
            </div>
            <Button 
                title="View Packages"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HoneymoonSpecial;