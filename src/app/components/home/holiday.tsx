import React from "react";
import Image from "next/image";

interface HolidayProps {
}

const Holiday: React.FC<HolidayProps> = (props: HolidayProps) => {
    const {
            imageSrc,
            imageAlt,
            heading,
        } = {
            imageSrc: '/assets/holiday/bg.svg',
            imageAlt: 'Let’s make your next holiday amazing',
            heading: 'Let’s make your next holiday amazing'
        }
  return (
    <section className="flex-col overflow-hidden relative flex min-h-[399px] px-5 mt-24">
      <Image
        loading="lazy"
        src={imageSrc}
        alt={imageAlt}
        width={1000}
        height={1000}
        className="absolute z-[-1] h-full w-full object-cover object-center inset-0"
      />
      <h1 className="relative text-white text-5xl font-bold capitalize max-w-[559px] self-center ml-0 mt-36 mb-28 max-md:max-w-full max-md:my-10">
        {heading}
      </h1>
    </section>
  );
};

export default Holiday;