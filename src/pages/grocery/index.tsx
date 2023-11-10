import RootLayout from "@/app/components/layout";
import * as React from "react";
import './grocery.scss';
import Footer from "./footer";

interface GroceryHomeProps {
  // Define your props here
}

const GroceryHome: React.FC<GroceryHomeProps> = (props) => {

    const products = [
        {
            imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e39426e3-899c-4281-9285-f52a479fb388?apiKey=8747f99d6964435eb0741236b489b06f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e39426e3-899c-4281-9285-f52a479fb388?apiKey=8747f99d6964435eb0741236b489b06f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e39426e3-899c-4281-9285-f52a479fb388?apiKey=8747f99d6964435eb0741236b489b06f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e39426e3-899c-4281-9285-f52a479fb388?apiKey=8747f99d6964435eb0741236b489b06f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e39426e3-899c-4281-9285-f52a479fb388?apiKey=8747f99d6964435eb0741236b489b06f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e39426e3-899c-4281-9285-f52a479fb388?apiKey=8747f99d6964435eb0741236b489b06f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e39426e3-899c-4281-9285-f52a479fb388?apiKey=8747f99d6964435eb0741236b489b06f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e39426e3-899c-4281-9285-f52a479fb388?apiKey=8747f99d6964435eb0741236b489b06f&',
            name: 'Banana Hột',
            quantity: '200gr',
            price: '225'
        },
        {
            imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/cd72c552-e884-48e8-a9b7-131864d2b3e6?apiKey=8747f99d6964435eb0741236b489b06f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd72c552-e884-48e8-a9b7-131864d2b3e6?apiKey=8747f99d6964435eb0741236b489b06f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd72c552-e884-48e8-a9b7-131864d2b3e6?apiKey=8747f99d6964435eb0741236b489b06f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd72c552-e884-48e8-a9b7-131864d2b3e6?apiKey=8747f99d6964435eb0741236b489b06f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd72c552-e884-48e8-a9b7-131864d2b3e6?apiKey=8747f99d6964435eb0741236b489b06f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd72c552-e884-48e8-a9b7-131864d2b3e6?apiKey=8747f99d6964435eb0741236b489b06f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd72c552-e884-48e8-a9b7-131864d2b3e6?apiKey=8747f99d6964435eb0741236b489b06f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cd72c552-e884-48e8-a9b7-131864d2b3e6?apiKey=8747f99d6964435eb0741236b489b06f&',
            name: 'Beef',
            quantity: '200gr',
            price: '299'
        },
        {
            imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d11a3b06-171a-4c62-8be7-9c85dc5e05cf?apiKey=8747f99d6964435eb0741236b489b06f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d11a3b06-171a-4c62-8be7-9c85dc5e05cf?apiKey=8747f99d6964435eb0741236b489b06f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d11a3b06-171a-4c62-8be7-9c85dc5e05cf?apiKey=8747f99d6964435eb0741236b489b06f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d11a3b06-171a-4c62-8be7-9c85dc5e05cf?apiKey=8747f99d6964435eb0741236b489b06f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d11a3b06-171a-4c62-8be7-9c85dc5e05cf?apiKey=8747f99d6964435eb0741236b489b06f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d11a3b06-171a-4c62-8be7-9c85dc5e05cf?apiKey=8747f99d6964435eb0741236b489b06f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d11a3b06-171a-4c62-8be7-9c85dc5e05cf?apiKey=8747f99d6964435eb0741236b489b06f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d11a3b06-171a-4c62-8be7-9c85dc5e05cf?apiKey=8747f99d6964435eb0741236b489b06f&',
            name: 'Strawberry',
            quantity: '200gr',
            price: '725'
        },
        {
            imageUrl: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e39426e3-899c-4281-9285-f52a479fb388?apiKey=8747f99d6964435eb0741236b489b06f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e39426e3-899c-4281-9285-f52a479fb388?apiKey=8747f99d6964435eb0741236b489b06f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e39426e3-899c-4281-9285-f52a479fb388?apiKey=8747f99d6964435eb0741236b489b06f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e39426e3-899c-4281-9285-f52a479fb388?apiKey=8747f99d6964435eb0741236b489b06f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e39426e3-899c-4281-9285-f52a479fb388?apiKey=8747f99d6964435eb0741236b489b06f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e39426e3-899c-4281-9285-f52a479fb388?apiKey=8747f99d6964435eb0741236b489b06f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e39426e3-899c-4281-9285-f52a479fb388?apiKey=8747f99d6964435eb0741236b489b06f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e39426e3-899c-4281-9285-f52a479fb388?apiKey=8747f99d6964435eb0741236b489b06f&',
            name: 'Banana',
            quantity: '500gr',
            price: '500'
        },
    ]
  return (
    <RootLayout>
        <div className="bg-white flex w-full flex-col px-4 min-h-screen max-h-screen">
            <header className="bg-white self-stretch flex w-full flex-col pt-4 pb-px">
                <div className="self-center flex w-full max-w-full items-start justify-between">
                    <div className="flex flex-col">
                        <div className="justify-center text-zinc-900 text-base leading-[118%]">
                        TUESDAY, 24 OCTOBER
                        </div>
                        <div className="justify-center text-zinc-900 text-base font-semibold leading-[127%]">
                        Good morning, Kevin
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b10792e9-9c69-433c-a07e-ffd3b056f72b?apiKey=8747f99d6964435eb0741236b489b06f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b10792e9-9c69-433c-a07e-ffd3b056f72b?apiKey=8747f99d6964435eb0741236b489b06f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b10792e9-9c69-433c-a07e-ffd3b056f72b?apiKey=8747f99d6964435eb0741236b489b06f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b10792e9-9c69-433c-a07e-ffd3b056f72b?apiKey=8747f99d6964435eb0741236b489b06f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b10792e9-9c69-433c-a07e-ffd3b056f72b?apiKey=8747f99d6964435eb0741236b489b06f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b10792e9-9c69-433c-a07e-ffd3b056f72b?apiKey=8747f99d6964435eb0741236b489b06f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b10792e9-9c69-433c-a07e-ffd3b056f72b?apiKey=8747f99d6964435eb0741236b489b06f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b10792e9-9c69-433c-a07e-ffd3b056f72b?apiKey=8747f99d6964435eb0741236b489b06f&"
                        className="aspect-[0.98] object-contain object-center w-11 justify-center items-center overflow-hidden max-w-full grow self-end"
                        alt=""
                        />
                    </div>
                </div>
                <div className="self-center flex w-full max-w-full items-start pt-5">
                    <div className="w-[50px]">
                        <img
                            loading="lazy"
                            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/85583319-4cc5-464d-8658-ae450453f2e0?apiKey=8747f99d6964435eb0741236b489b06f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/85583319-4cc5-464d-8658-ae450453f2e0?apiKey=8747f99d6964435eb0741236b489b06f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/85583319-4cc5-464d-8658-ae450453f2e0?apiKey=8747f99d6964435eb0741236b489b06f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/85583319-4cc5-464d-8658-ae450453f2e0?apiKey=8747f99d6964435eb0741236b489b06f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/85583319-4cc5-464d-8658-ae450453f2e0?apiKey=8747f99d6964435eb0741236b489b06f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/85583319-4cc5-464d-8658-ae450453f2e0?apiKey=8747f99d6964435eb0741236b489b06f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/85583319-4cc5-464d-8658-ae450453f2e0?apiKey=8747f99d6964435eb0741236b489b06f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/85583319-4cc5-464d-8658-ae450453f2e0?apiKey=8747f99d6964435eb0741236b489b06f&"className="aspect-square object-contain object-center w-9 border overflow-hidden max-w-full rounded-xl border-solid border-stone-300 self-start"
                            alt=""
                        />
                    </div>
                    <form className="bg-zinc-100 flex w-full basis-auto items-start justify-between gap-1 px-3 py-2 rounded-[1.875rem] self-start max-md:justify-center">
                        <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/86478578-4137-4f0d-9173-806675de0dc7?apiKey=8747f99d6964435eb0741236b489b06f&"
                        className="aspect-square object-contain object-center w-5 overflow-hidden self-stretch max-w-full"
                        alt=""
                        />
                        <input type="text" id="search-input" placeholder="Search" className="w-full bg-zinc-100 text-neutral-400 text-base leading-[133%] my-auto focus:border-none" />
                        <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/77123b6b-63e0-47d1-ac4e-b9016301dd1c?apiKey=8747f99d6964435eb0741236b489b06f&"
                        className="aspect-square object-contain object-center w-[22px] overflow-hidden self-stretch max-w-full"
                        alt=""
                        />
                    </form>
                    </div>
                <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0562fd03-2486-4903-a044-6904511ef976?apiKey=8747f99d6964435eb0741236b489b06f&"
                className="aspect-[375] object-contain object-center w-full stroke-[1px] stroke-zinc-100 overflow-hidden self-stretch grow mt-6"
                alt=""
                />
            </header>
            <main className="flex-grow overflow-y-auto max-h-screen md:max-h-full">
                <main className="flex-col overflow-hidden self-center relative flex max-h-[150px] aspect-[2.71875] w-full max-w-full">
                    <div className="relative bg-img bg-black bg-opacity-10 self-stretch flex max-h-[150px] w-full items-start justify-between gap-5 pl-3 pr-2 pt-4 pb-2 rounded-2xl">
                        <div className="flex flex-col self-end">
                            <div className="text-white text-base font-semibold leading-[129%] tracking-normal">
                            Freshfood from Farm
                            </div>
                            <div className="text-neutral-200 text-base leading-[138%]">
                            Easy to pick your food!
                            </div>
                            <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/40dd1be8-b92c-44a3-9a3b-4d2811e22ed4?apiKey=8747f99d6964435eb0741236b489b06f&"
                            className="aspect-[20.5] object-contain object-center w-[41px] overflow-hidden max-w-full grow mt-16 self-start max-md:mt-10"
                            alt=""
                            />
                        </div>
                        <div className="text-yellow-700 text-center text-base font-semibold leading-[138%] bg-orange-200 w-[100px] max-w-full mt-16 pl-2.5 pr-2 py-2.5 rounded-lg self-end max-md:mt-10">
                            Shopping Now
                        </div>
                    </div>
                </main>
                <section className="self-center flex w-full max-w-full items-start justify-between gap-5 mt-6 px-5">
                    <div className="justify-center text-zinc-900 text-base font-semibold leading-[129%] tracking-normal my-auto">
                    Recommand
                    </div>
                    <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/248f3668-d2cf-4d79-a58e-2bde27f8e277?apiKey=8747f99d6964435eb0741236b489b06f&"
                    className="aspect-square object-contain object-center w-6 -rotate-90 overflow-hidden self-stretch max-w-full"
                    alt=""
                    />
                </section>
                <div className="flex w-full items-start mt-4 pb-3 self-start overflow-x-auto justify-start">
                {
                        products.map((product, idx) => (
                            <div key={idx} className="shadow-sm bg-zinc-100 self-stretch flex min-w-[132px] max-w-full flex-col mr-2 pt-5 pb-3 px-2 rounded-xl">
                            <img
                                loading="lazy"
                                srcSet={product.imageUrl}
                                className="aspect-[1.22] object-contain object-center w-[79px] overflow-hidden self-center max-w-full"
                                alt=""
                            />
                            <div className="self-stretch flex w-full items-start justify-between gap-5 mt-7 max-md:ml-px">
                                <div className="text-zinc-400 text-center text-base font-semibold leading-[164%] self-center my-auto">
                                {product.quantity}
                                </div>
                                <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5b2e26d7-ccd1-40fe-867c-38e4ce01223c?apiKey=8747f99d6964435eb0741236b489b06f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b2e26d7-ccd1-40fe-867c-38e4ce01223c?apiKey=8747f99d6964435eb0741236b489b06f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b2e26d7-ccd1-40fe-867c-38e4ce01223c?apiKey=8747f99d6964435eb0741236b489b06f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b2e26d7-ccd1-40fe-867c-38e4ce01223c?apiKey=8747f99d6964435eb0741236b489b06f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b2e26d7-ccd1-40fe-867c-38e4ce01223c?apiKey=8747f99d6964435eb0741236b489b06f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b2e26d7-ccd1-40fe-867c-38e4ce01223c?apiKey=8747f99d6964435eb0741236b489b06f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b2e26d7-ccd1-40fe-867c-38e4ce01223c?apiKey=8747f99d6964435eb0741236b489b06f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b2e26d7-ccd1-40fe-867c-38e4ce01223c?apiKey=8747f99d6964435eb0741236b489b06f&"className="aspect-[2] object-contain object-center w-full overflow-hidden flex-1 rounded-md"
                                alt=""
                                />
                            </div>
                            <div className="text-zinc-900 text-base font-semibold leading-[200%] tracking-normal whitespace-no-wrap overflow-hidden text-overflow-ellipsis">
                                {product.name}
                            </div>
                            <div className="self-stretch flex w-full items-start justify-between gap-5 mt-4">
                                <div className="text-gray-900 text-base font-semibold leading-[138%] self-end">
                                {product.price}{" "}PKR
                                </div>
                                <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/69ada2d6-c23d-4278-9254-77aa3f285e21?apiKey=8747f99d6964435eb0741236b489b06f&"
                                className="aspect-square object-contain object-center w-full shadow-sm overflow-hidden flex-1"
                                alt=""
                                />
                            </div>
                            </div>
                        ))
                    }
                </div>
                <section className="self-center flex w-full max-w-full items-start justify-between gap-5 mt-6 px-5">
                    <div className="justify-center text-zinc-900 text-base font-semibold leading-[129%] tracking-normal my-auto">
                    Top Selling
                    </div>
                    <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/2a917609-0aa8-491b-81db-cf51c012fb2b?apiKey=8747f99d6964435eb0741236b489b06f&"
                    className="aspect-square object-contain object-center w-6 -rotate-90 overflow-hidden self-stretch max-w-full"
                    alt=""
                    />
                </section>
                <div className="flex w-full items-start mt-4 pb-3 self-start overflow-x-auto justify-start">
                {
                        products.map((product, idx) => (
                            <div key={idx} className="shadow-sm bg-zinc-100 self-stretch flex min-w-[132px] max-w-full flex-col mr-2 pt-5 pb-3 px-2 rounded-xl">
                            <img
                                loading="lazy"
                                srcSet={product.imageUrl}
                                className="aspect-[1.22] object-contain object-center w-[79px] overflow-hidden self-center max-w-full"
                                alt=""
                            />
                            <div className="self-stretch flex w-full items-start justify-between gap-5 mt-7 max-md:ml-px">
                                <div className="text-zinc-400 text-center text-base font-semibold leading-[164%] self-center my-auto">
                                {product.quantity}
                                </div>
                                <img
                                loading="lazy"
                                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5b2e26d7-ccd1-40fe-867c-38e4ce01223c?apiKey=8747f99d6964435eb0741236b489b06f&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b2e26d7-ccd1-40fe-867c-38e4ce01223c?apiKey=8747f99d6964435eb0741236b489b06f&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b2e26d7-ccd1-40fe-867c-38e4ce01223c?apiKey=8747f99d6964435eb0741236b489b06f&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b2e26d7-ccd1-40fe-867c-38e4ce01223c?apiKey=8747f99d6964435eb0741236b489b06f&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b2e26d7-ccd1-40fe-867c-38e4ce01223c?apiKey=8747f99d6964435eb0741236b489b06f&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b2e26d7-ccd1-40fe-867c-38e4ce01223c?apiKey=8747f99d6964435eb0741236b489b06f&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b2e26d7-ccd1-40fe-867c-38e4ce01223c?apiKey=8747f99d6964435eb0741236b489b06f&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5b2e26d7-ccd1-40fe-867c-38e4ce01223c?apiKey=8747f99d6964435eb0741236b489b06f&"className="aspect-[2] object-contain object-center w-full overflow-hidden flex-1 rounded-md"
                                alt=""
                                />
                            </div>
                            <div className="text-zinc-900 text-base font-semibold leading-[200%] tracking-normal whitespace-no-wrap overflow-hidden text-overflow-ellipsis">
                                {product.name}
                            </div>
                            <div className="self-stretch flex w-full items-start justify-between gap-5 mt-4">
                                <div className="text-gray-900 text-base font-semibold leading-[138%] self-end">
                                {product.price}{" "}PKR
                                </div>
                                <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/69ada2d6-c23d-4278-9254-77aa3f285e21?apiKey=8747f99d6964435eb0741236b489b06f&"
                                className="aspect-square object-contain object-center w-full shadow-sm overflow-hidden flex-1"
                                alt=""
                                />
                            </div>
                            </div>
                        ))
                    }
                </div>
                <div className="w-full mt-4">
                    <div className="border-t border-gray-400 border-solid text-center uppercase">
                        Terms & Conditions 2023
                    </div>
                </div>
            </main>
            <footer className="w-full bg-green flex w-full flex-col">
                <Footer/>
            </footer>
        </div>
    </RootLayout>
  );
};

export default GroceryHome;