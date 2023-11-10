import * as React from "react";
import Image from "next/image";

interface FooterProps {
  // Define your props here
}

const Footer: React.FC<FooterProps> = (props) => {
  return (
    <div className="bg-white flex w-full max-w-full items-start justify-between gap-5 pt-2.5 self-start max-md:justify-between">
      <div className="items-center self-stretch flex flex-col w-[20%]">
            <Image
              loading="lazy"
              src="/assets/grocery/footer/home.svg"
              className="aspect-square object-contain object-center w-6 h-6 overflow-hidden self-center max-w-full"
              alt="Home"
              width={44}
              height={44}
            />
            <div className="flex justify-center items-center text-emerald-400 text-base leading-[222%] tracking-normal self-center mt-1 max-md:mr-px">
              Home
            </div>
          </div>
          <div className="items-center self-stretch flex flex-col w-[20%]">
            <Image
              loading="lazy"
              src="/assets/grocery/footer/trash.svg"
              className="aspect-square object-contain object-center w-6 h-6 overflow-hidden self-center max-w-full"
              alt="Cooking Food"
              width={44}
              height={44}
            />
            <div className="flex justify-center items-center text-neutral-400 text-base leading-[222%] tracking-normal self-center mt-1">
              Food
            </div>
          </div>
      <div className="w-[20%] flex justify-center items-center">
      <Image
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e48fd025-dc0a-4e15-96c0-1d67b9b10b59?apiKey=8747f99d6964435eb0741236b489b06f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e48fd025-dc0a-4e15-96c0-1d67b9b10b59?apiKey=8747f99d6964435eb0741236b489b06f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e48fd025-dc0a-4e15-96c0-1d67b9b10b59?apiKey=8747f99d6964435eb0741236b489b06f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e48fd025-dc0a-4e15-96c0-1d67b9b10b59?apiKey=8747f99d6964435eb0741236b489b06f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e48fd025-dc0a-4e15-96c0-1d67b9b10b59?apiKey=8747f99d6964435eb0741236b489b06f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e48fd025-dc0a-4e15-96c0-1d67b9b10b59?apiKey=8747f99d6964435eb0741236b489b06f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e48fd025-dc0a-4e15-96c0-1d67b9b10b59?apiKey=8747f99d6964435eb0741236b489b06f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e48fd025-dc0a-4e15-96c0-1d67b9b10b59?apiKey=8747f99d6964435eb0741236b489b06f&"
        className="aspect-square object-contain object-center w-12 h-12 transform -translate-y-4 overflow-hidden max-w-full self-center"
        alt="Image"
        width={1000}
        height={1000}
      />
      </div>
      <div className="items-center flex flex-col self-stretch w-[20%]">
            <Image
              loading="lazy"
              src="/assets/grocery/footer/heart.svg"
              className="aspect-square object-contain object-center w-6 h-6 overflow-hidden self-center max-w-full"
              alt="Favorites"
              width={44}
              height={44}
            />
            <div className="flex justify-center items-center text-neutral-400 text-base leading-[222%] tracking-normal mt-1 self-center">
              Favorites
            </div>
          </div>
          <div className="items-center flex flex-col self-stretch w-[20%]">
            <Image
              loading="lazy"
              src="/assets/grocery/footer/shopping-cart.svg"
              className="aspect-square object-contain object-center w-6 h-6 overflow-hidden self-center max-w-full"
              alt="Cart"
              width={44}
              height={44}
            />
            <div className="flex justify-center items-center text-neutral-400 text-base leading-[222%] tracking-normal mt-1 self-center">
              Cart
            </div>
          </div>
    </div>
  );
};

export default Footer;