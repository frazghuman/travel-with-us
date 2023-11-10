import * as React from "react";
import Image from "next/image";

type PartnersProps = {
}

const height: number = 50;
const width: number | undefined = 0;

const Partners: React.FC<PartnersProps> = (props) => {
  return (
    <main className="justify-center items-start bg-neutral-100 flex flex-col px-5">
      <section className="self-center flex w-full max-w-[1578px] items-start justify-between gap-5 mt-20 mb-20 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:my-10">
        <Image
          loading="lazy"
          src="/assets/partners/fly_emirates.svg"
          alt="Image 1"
          height={height}
          width={144}
          className="aspect-[2.86] object-cover object-center h-[50px] overflow-hidden self-stretch max-w-full"
        />
        <Image
          loading="lazy"
          src="/assets/partners/trivago.svg"
          alt="Image 1"
          height={height}
          width={165}
          className="aspect-[2.86] object-cover object-center h-[50px] overflow-hidden self-stretch max-w-full"
        />
        <Image
          loading="lazy"
          src="/assets/partners/airbnb.svg"
          alt="Image 1"
          height={height}
          width={161}
          className="aspect-[2.86] object-cover object-center h-[50px] overflow-hidden self-stretch max-w-full"
        />
        <Image
          loading="lazy"
          src="/assets/partners/turkish_airlines.svg"
          alt="Image 1"
          height={height}
          width={172}
          className="aspect-[2.86] object-cover object-center h-[50px] overflow-hidden self-stretch max-w-full"
        />
        <Image
          loading="lazy"
          src="/assets/partners/swiss.svg"
          alt="Image 2"
          height={height}
          width={221}
          className="aspect-[4.42] object-cover object-center h-[50px] overflow-hidden self-stretch max-w-full"
        />
      </section>
    </main>
  );
};

export default Partners;