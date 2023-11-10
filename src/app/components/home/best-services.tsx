import * as React from "react";
import Image from "next/image";

type Service = {
    imageSrc: string;
    title: string;
    description: string;
};
type BestServicesProps = {
  title: string;
  services: Service[];
}

function BestServices() {

    const props = {
        title: 'Category',
        services: [
            {
                imageSrc: '/assets/best_services/tour_guide.png',
                title: 'Guided Tours',
                description: 'sunt qui repellat saepe quo velit aperiam id aliquam placeat.'
            },
            {
                imageSrc: '/assets/best_services/travelling.png',
                title: 'Best Flights Options',
                description: 'sunt qui repellat saepe quo velit aperiam id aliquam placeat.'
            },
            {
                imageSrc: '/assets/best_services/hands.png',
                title: 'Religious Tours',
                description: 'sunt qui repellat saepe quo velit aperiam id aliquam placeat.'
            },
            {
                imageSrc: '/assets/best_services/medical_team.png',
                title: 'Medical Insurance',
                description: 'sunt qui repellat saepe quo velit aperiam id aliquam placeat.'
            }
        ]
    }

  return (
    <div className="flex flex-col my-24">
      <h2 className="text-red-400 text-center text-lg font-semibold self-center">
        {props.title}
      </h2>
      <h1 className="text-indigo-950 text-center text-5xl font-bold capitalize self-center mt-9 max-md:max-w-full max-md:text-4xl">
        We Offer Best Services
      </h1>
      <div className="flex justify-center self-stretch w-full mt-9 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0 justify-center md:max-w-[90rem] max-w-full">
          {props.services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-stretch w-[22%] max-md:w-full max-md:ml-0"
            >
              <div className="flex flex-col my-auto max-md:mt-10 pt-5 pb-12 px-5 hover:rounded-[36px]
              hover:shadow-[0px_1.85185px_3.14815px_0px_rgba(0,0,0,0.00),0px_8.14815px_6.51852px_0px_rgba(0,0,0,0.01),0px_20px_13px_0px_rgba(0,0,0,0.01),0px_38.51852px_25.48148px_0px_rgba(0,0,0,0.01),0px_64.81481px_46.85185px_0px_rgba(0,0,0,0.02),0px_100px_80px_0px_rgba(0,0,0,0.02)]">
                <Image
                  loading="lazy"
                  src={service.imageSrc}
                  alt={service.title}
                  width={1000}
                  height={1000}
                  className="aspect-[1.02] object-cover object-center w-[87px] overflow-hidden self-center max-w-full"
                />
                <h3 className="text-indigo-950 text-center text-xl font-semibold self-center mt-9 whitespace-nowrap">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-center text-base font-medium leading-7 mt-4">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BestServices;