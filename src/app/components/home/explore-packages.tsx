import * as React from "react";
import Image from "next/image";
import '../../styles/explore-packages.scss';

interface ExplorePackagesProps {
}

function ExplorePackages(props: ExplorePackagesProps) {
  return (
    <div className="px-5 mt-24">
      <div className="flex max-md:flex-col max-md:items-stretch max-md:gap-5">
        <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0 bg nature-bg">
          <div className="bg-stone-900 bg-opacity-40 flex grow flex-col w-full mx-auto pt-32 pb-28 px-5 max-md:max-w-full">
            <div className="text-rose-50 text-base font-bold tracking-widest uppercase">
            PROMOTION
            </div>
            <h1 className="text-white text-5xl font-bold leading-[142%] max-w-[375px] self-center">
              Explore Nature
            </h1>
            <a
              href=""
              className="text-white text-center text-base font-semibold justify-center items-center border shadow-2xl self-center mb-0 w-[177px] max-w-full mt-7 pl-1.5 pr-5 pt-3 pb-5 rounded-xl border-solid border-white max-md:mb-2.5"
            >
              View Packages
            </a>
          </div>
        </div>
        <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0 bg cities-bg">
          <div className="bg-stone-900 bg-opacity-40 flex grow flex-col w-full mx-auto pt-32 pb-28 px-5 max-md:max-w-full">
            <div className="text-rose-50 text-base font-bold tracking-widest uppercase">
            PROMOTION
            </div>
            <h1 className="text-white text-5xl font-bold leading-[142%] max-w-[343px] self-center ml-0">
              Explore Cities
            </h1>
            <a
              href=""
              className="text-white text-center text-base font-semibold justify-center items-center border shadow-2xl self-center mb-0 w-[177px] max-w-full mt-7 pl-1.5 pr-5 pt-3 pb-5 rounded-xl border-solid border-white max-md:mb-2.5"
            >
              View Packages
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExplorePackages;