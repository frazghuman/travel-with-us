import React from "react";
import Image from "next/image";
import Button from "../Button";

interface HeaderProps {
  // Define your props here
}

const auto= 1000;

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <main className="flex-col overflow-hidden self-stretch relative flex min-h-[976px] w-full pt-16 pb-14 px-5 max-md:max-w-full">
      <Image
        loading="lazy"
        height={auto}
        width={auto}
        alt="Background Image"
        src="/assets/home_header/header_background.png"className="absolute z-[-1] h-full w-full object-cover object-center inset-0"
      />
      <section className="relative self-center flex w-full max-w-[1281px] flex-col max-md:max-w-full">
        <div className="self-center w-full max-w-[1278px] max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[34%] max-md:w-full max-md:ml-0">
              <Image
                loading="lazy"
                height={auto}
                width={auto}
                alt=""
                src="/assets/home_header/arrow.svg"
                className="aspect-[1.98] object-cover object-center w-[127px] overflow-hidden max-w-full max-md:mt-10"
              />
            </div>
            <div className="flex flex-col items-stretch w-[4%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex flex-col mt-6 max-md:mt-10">
                <div className="text-white text-lg font-medium self-stretch">
                  <a href="#" className="link">Home</a>
                </div>
                <div className="bg-red-400 self-center flex w-[30px] h-[3px] flex-col mt-2.5 rounded-[34px]" />
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[48%] ml-5 max-md:w-full max-md:ml-0">
              <div className="flex grow flex-col w-[385px] mt-6 max-md:mt-10">
                <div className="self-stretch flex w-full items-start justify-between gap-5">
                  <div className="text-white text-lg font-medium">
                    <a href="#" className="link">About</a>
                  </div>
                  <div className="flex grow shrink-0 basis-auto items-start justify-between gap-2.5 max-md:justify-center">
                    <div className="text-white text-lg font-medium">
                      <a href="#" className="link">Services</a>
                    </div>
                    {/*Service Menu //ToDo */}
                    <div className="text-white text-lg font-medium self-stretch">
                      <a href="#" className="link">Upcoming Packages</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[14%] ml-5 max-md:w-full max-md:ml-0">
            <Button 
                title="Get in Touch"
            />
            </div>
          </div>
        </div>
        <Image
          loading="lazy"
            height={auto}
            width={auto}
            alt=""
            src="/assets/home_header/vector_01.svg"
          className="aspect-[4.88] object-cover object-center w-[83px] stroke-[5.224px] stroke-red-400 overflow-hidden max-w-full mt-40"
        />
        <h1 className="text-white text-6xl font-bold leading-[116.071%] max-w-[631px] mt-3.5 max-md:max-w-full max-md:text-4xl">
          No matter where you’re going to, we’ll take you there
        </h1>
        <div className="backdrop-blur-[17.760618209838867px] bg-zinc-100 bg-opacity-60 flex w-[844px] max-w-full flex-col mt-10 px-5 py-6 rounded-md">
          <div className="self-stretch flex w-full items-start justify-between gap-5 ml-3.5 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:mr-2">
            <div className="text-white text-lg self-center my-auto">Where to?</div>
            <div className="bg-stone-300 flex max-w-[3px] h-12 flex-col grow shrink-0 basis-auto mt-1.5 rounded-3xl" />
            <div className="text-white text-lg my-auto">Travel Type</div>
            <Image
              loading="lazy"
                height={auto}
                width={auto}
                alt=""
              src="/assets/home_header/arrow_down.svg"
              className="aspect-[1.75] object-cover object-center w-3.5 stroke-[2px] stroke-white overflow-hidden self-center max-w-full my-auto"
            />
            <div className="bg-stone-300 flex max-w-[3px] h-12 flex-col grow shrink-0 basis-auto mt-1.5 rounded-3xl" />
            <div className="text-white text-lg self-center my-auto">Duration</div>
            <Image
              loading="lazy"
                height={auto}
                width={auto}
                alt=""
              src="/assets/home_header/arrow_down.svg"
              className="aspect-[1.75] object-cover object-center w-3.5 stroke-[2px] stroke-white overflow-hidden self-center max-w-full my-auto"
            />
            <Button 
                title="Submit"
            />
          </div>
        </div>
        <div className="flex w-[567px] max-w-full items-start gap-3.5 mt-7 max-md:flex-wrap">
          <Image
            loading="lazy"
                height={auto}
                width={auto}
                alt=""
            src="/assets/home_header/ellipse.svg"
            className="aspect-[5.06] object-cover object-center w-[35px] overflow-hidden self-stretch max-w-full"
          />
          <div className="text-white text-xs font-medium leading-[300%] self-center grow shrink-0 basis-auto my-auto">
            2,500 people booked Tommorowland Event in last 24 hours
          </div>
        </div>
      </section>
      <Image
        loading="lazy"
        height={auto}
        width={auto}
        alt=""
        src="/assets/home_header/vector_02.svg"
        className="aspect-[64] object-cover object-center w-32 overflow-hidden self-center max-w-full mt-44 max-md:mt-10"
      />
    </main>
  );
};

export default Header;