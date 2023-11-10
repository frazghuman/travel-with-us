import * as React from "react";
import Image from "next/image";

interface BookTripProps {
}

const BookTrip: React.FC<BookTripProps> = (props) => {
    const {
        destinationImageSrc,
        availabilityImageSrc,
        letsGoImageSrc,
        tripAdvertisementImageSrc
      } = {
        destinationImageSrc : '/assets/book-a-trip/destination.svg',
        availabilityImageSrc : '/assets/book-a-trip/availability.svg',
        letsGoImageSrc : '/assets/book-a-trip/letsgo.svg',
        tripAdvertisementImageSrc: '/assets/book-a-trip/illustration.svg'
      }

  return (
    <div className="px-5 mt-24">
      <div className="gap-5 flex max-lg:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-center w-[50%] max-lg:w-full max-md:ml-0">
          <div className="flex flex-col my-auto max-md:max-w-[30rem] max-md:mt-10">
            <div className="text-red-400 text-center text-lg font-bold">
              Fast & Easy
            </div>
            <div className="text-indigo-950 text-5xl font-bold capitalize mt-7 self-start max-md:max-w-full">
              Get Your Favourite <br /> Resort Bookings
            </div>
            <div className="flex w-[389px] max-w-full items-start justify-between gap-5 mt-9 self-start">
              <Image
                loading="lazy"
                src={destinationImageSrc}
                width={1000}
                height={1000}
                alt=""
                className="aspect-[0.98] object-cover object-center w-[47px] overflow-hidden max-w-full self-start"
              />
              <div className="flex flex-col grow shrink-0 basis-auto self-start">
                <div className="text-gray-500 text-base font-bold leading-[124.5%]">
                  Choose Destination
                </div>
                <div className="text-gray-500 text-base leading-[124.5%] self-start">
                  Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                  elit. Urna, tortor tempus.{" "}
                </div>
              </div>
            </div>
            <div className="flex w-[389px] max-w-full items-start justify-between gap-5 mt-11 self-start max-md:mt-10">
              <Image
                loading="lazy"
                src={availabilityImageSrc}
                width={1000}
                height={1000}
                alt=""
                className="aspect-[0.98] object-cover object-center w-[47px] overflow-hidden self-center max-w-full my-auto"
              />
              <div className="self-stretch flex flex-col grow shrink-0 basis-auto">
                <div className="text-gray-500 text-base font-bold leading-[124.5%]">
                  Check Availability
                </div>
                <div className="text-gray-500 text-base leading-[124.5%] self-start">
                  Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                  elit. Urna, tortor tempus.{" "}
                </div>
              </div>
            </div>
            <div className="flex w-[389px] max-w-full items-start justify-between gap-5 mt-14 self-start max-md:mt-10">
              <Image
                loading="lazy"
                src={letsGoImageSrc}
                width={1000}
                height={1000}
                alt=""
                className="aspect-[0.98] object-cover object-center w-[47px] overflow-hidden max-w-full self-start"
              />
              <div className="flex flex-col grow shrink-0 basis-auto self-start">
                <div className="text-gray-500 text-base font-bold leading-[124.5%] self-start">
                  Let’s Go
                </div>
                <div className="text-gray-500 text-base leading-[124.5%] self-start">
                  Lorem ipsum dolor sit amet, consectetur <br /> adipiscing
                  elit. Urna, tortor tempus.{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch w-[50%] ml-5 max-lg:w-full max-md:ml-0">
          <Image
            loading="lazy"
            src={tripAdvertisementImageSrc}
            width={1000}
            height={1000}
            alt=""
            className="aspect-[1.67] object-cover object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
          />
        </div>
      </div>
    </div>
  );
};

export default BookTrip;