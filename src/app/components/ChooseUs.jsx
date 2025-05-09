'use client';
import { CHOOSE_US_DATA_LIST } from '@/utils/helper';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ChooseUs = () => {
    useEffect(() => {
        const mm = gsap.matchMedia();
        mm.add("(min-width: 769px)", () => {
            gsap.registerPlugin(ScrollTrigger);
            gsap.from(".choose-us-card", {
                x: 400,
                opacity: 0,
                duration: 2,
                ease: "power4.out",
                stagger: {
                    amount: 2,
                    start: 0.9,
                    from: "start"
                },
                scrollTrigger: {
                    trigger: '.choose-us-container',
                    start: "top 60%",
                    end: "top 20%",
                    scrub: 3,
                    duration: 2,
                }
            });
        })
        mm.add("(max-width: 768px)", () => {
            gsap.registerPlugin(ScrollTrigger);
            gsap.from(".choose-us-card", {
                x: 400,
                opacity: 0,
                duration: 4,
                ease: "power4.out",
                stagger: {
                    amount: 3,
                    start: 1.9,
                    from: "start"
                },
                scrollTrigger: {
                    trigger: '.choose-us-container',
                    start: "top 90%",
                    end: "bottom 60%",
                    scrub: 3,
                    duration: 3,
                }
            });
        })
    }, []);

    return (
        <div className="2xl:py-36 xl:py-28 lg:py-20 md:py-16 py-12 px-4 -mt-1 relative choose-us-container overflow-hidden">
            <div className="h-1 w-full bg-blue-500 absolute top-0 left-0 right-0"></div>
            <div className="max-w-[1240px] mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose SoftSell?</h2>
                <p className="mb-12">We make reselling software licenses easy, secure, and profitable.</p>
                <div className="flex flex-wrap justify-center xl:gap-8 lg:gap-5 gap-5">
                    {CHOOSE_US_DATA_LIST.map((feature, index) => (
                        <div key={index} className="choose-us-card">
                            <div className="group relative transition xl:max-w-xs lg:max-w-[310px] max-w-xs w-full">
                                <div className="absolute w-14 h-14 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 ease-linear top-4 right-4 group-hover:-top-4 group-hover:-right-4 flex justify-center items-center"></div>
                                <div className="dark:bg-black/10 border-1 border-white/15 2xl:p-6 xl:p-5 p-4 h-full max-lg:min-h-48 relative z-10 backdrop-blur-md rounded-2xl shadow hover:shadow-xl transition-all ease-linear duration-300">
                                    <div className="text-4xl  mb-4">{feature.icon}</div>
                                    <h3 className="text-xl  font-semibold mb-2">{feature.title}</h3>
                                    <p className="">{feature.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;
