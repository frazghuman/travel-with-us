import * as React from "react";
import Image from "next/image";

interface FooterProps {
  email: string;
}

function Footer(props: FooterProps) {
  return (
    <div className="mb-0 px-5">
        <section className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="gap-5 flex md:flex-row flex-col md:justify-end justify-start items-stretch w-full max-md:w-full max-md:ml-0">
            <div className="flex flex-col my-auto w-[50%] max-md:max-w-full max-md:mt-10">
                <div className="w-[654px] max-w-full self-end">
                    <section className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-[42%] max-md:w-full max-md:ml-0">
                        <div className="flex flex-col max-md:mt-10">
                        <Image
                            loading="lazy"
                            src="/assets/footer/arrow.svg"
                            width={1000}
                            height={1000}
                            className="aspect-[1.98] object-cover object-center h-[46px] w-[127px] overflow-hidden max-w-full self-start"
                            alt="Travel Image"
                        />
                        <div className="text-slate-500 text-base font-medium leading-7 tracking-tight">
                            Travel helps companies manage payments easily.
                        </div>
                        <div className="gap-2 flex flex-row justify-start">
                            <div>
                                <Image
                                    loading="lazy"
                                    src="/assets/footer/linkedin.svg"
                                    width={1000}
                                    height={1000}
                                    className="aspect-[6.4] object-cover object-center w-[21px] h-[20px] overflow-hidden max-w-full grow mt-9 self-start"
                                    alt="Travel Image"
                                />
                            </div>
                            <div>
                                <Image
                                    loading="lazy"
                                    src="/assets/footer/messenger.svg"
                                    width={1000}
                                    height={1000}
                                    className="aspect-[6.4] object-cover object-center w-[21px] h-[20px] overflow-hidden max-w-full grow mt-9 self-start"
                                    alt="Travel Image"
                                />
                            </div>
                            <div>
                                <Image
                                    loading="lazy"
                                    src="/assets/footer/twitter.svg"
                                    width={1000}
                                    height={1000}
                                    className="aspect-[6.4] object-cover object-center w-[21px] h-[20px] overflow-hidden max-w-full grow mt-9 self-start"
                                    alt="Travel Image"
                                />
                            </div>
                            <div>
                                <Image
                                    loading="lazy"
                                    src="/assets/footer/twoo.svg"
                                    width={1000}
                                    height={1000}
                                    className="aspect-[6.4] object-cover object-center w-[21px] h-[20px] overflow-hidden max-w-full grow mt-9 self-start"
                                    alt="Travel Image"
                                />
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[30%] ml-5 max-md:w-full max-md:ml-0">
                        <div className="flex grow flex-col mt-7 max-md:mt-10">
                        <div className="text-slate-900 text-xl font-bold leading-6 self-start whitespace-nowrap">
                            Company
                        </div>
                        <div className="items-start flex w-[69px] max-w-full grow flex-col mt-6 self-start">
                            <a href="#" className="text-slate-900 text-base font-medium leading-6 self-start whitespace-nowrap">
                            About Us
                            </a>
                            <a href="#" className="text-slate-900 text-base font-medium leading-6 mt-5 self-start whitespace-nowrap">
                            Careers
                            </a>
                            <a href="#" className="text-slate-900 text-base font-medium leading-6 mt-5 self-start whitespace-nowrap">
                            Blog
                            </a>
                            <a href="#" className="text-slate-900 text-base font-medium leading-6 mt-5 self-start whitespace-nowrap">
                            Pricing
                            </a>
                        </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-stretch w-[28%] ml-5 max-md:w-full max-md:ml-0">
                        <div className="flex flex-col my-auto max-md:mt-10">
                        <div className="text-slate-900 text-xl font-bold leading-6 self-start whitespace-nowrap">
                            Destinations
                        </div>
                        <div className="items-start flex w-[90px] max-w-full grow flex-col mt-7 self-start">
                            <a href="#" className="text-slate-900 text-base font-medium leading-6 self-start whitespace-nowrap">
                            Maldives
                            </a>
                            <a href="#" className="text-slate-900 text-base font-medium leading-6 mt-3 self-start whitespace-nowrap">
                            Los Angelas
                            </a>
                            <a href="#" className="text-slate-900 text-base font-medium leading-6 mt-3 self-start whitespace-nowrap">
                            Las Vegas
                            </a>
                            <a href="#" className="text-slate-900 text-base font-medium leading-6 mt-3 self-start whitespace-nowrap">
                            Toronto
                            </a>
                        </div>
                        </div>
                    </div>
                    </section>
                </div>
            </div>
            <div className="flex flex-col items-stretch w-[45%] ml-5 max-md:w-full max-md:ml-0">
                <div className="flex-col overflow-hidden relative flex min-h-[484px] grow ml-0 max-w-[578px] pr-5 pt-40 pb-48 max-md:max-w-full">
                    <div className="text-slate-900 text-xl font-bold leading-6 self-start whitespace-nowrap">
                        Join Our Newsletter
                    </div>
                    <Image
                    loading="lazy"
                    src="/assets/footer/footer_bg.png"
                    className="absolute z-[-1] h-full w-full object-cover object-center inset-0"
                    
                    width={1000}
                    height={1000}
                    alt="Background Image"
                    />
                    <div className="relative bg-indigo-50 flex w-[389px] max-w-full items-start justify-between gap-5 pl-4 mt-7 self-start">
                    <div className="text-slate-900 text-base font-medium leading-7 tracking-tight opacity-20 flex-1 my-auto">
                        Your email address
                    </div>
                    <div className="shadow-[0px_20px_35px_0px_rgba(223,105,81,0.15)] bg-red-400 flex flex-col flex-1 p-5 rounded-xl">
                        <div className="text-white text-base font-medium leading-7 tracking-tight self-center whitespace-nowrap">
                        Subscribe
                        </div>
                    </div>
                    </div>
                    <div className="relative text-slate-900 text-base font-medium leading-7 tracking-tight opacity-50 max-w-[329px] mt-5 -mb-10 self-start max-md:mb-2.5">
                    * Will send you weekly updates for your better <br /> tour packages.
                    </div>
                </div>
            </div>
        </div>
        </section>
        <div className="text-slate-900 text-center text-base font-medium leading-7 tracking-tight mt-24 self-end max-md:mt-10">
            Copyright @ frazghuman@gmail.com 2023. All Rights Reserved.
        </div>
    </div>
  );
}

export default Footer;