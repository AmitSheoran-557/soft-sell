"use client";
import { motion } from "framer-motion";
import Link from "next/link";
const Hero = () => {
    return (
        <div className="bg-[url(https://static.vecteezy.com/system/resources/previews/000/664/173/original/vector-abstract-technology-background.jpg)] bg-cover">
            <div className="2xl:pt-[256px] max-w-[1472px] mx-auto xl:pt-52 lg:pt-36 md:pt-28 pt-20 xl:pb-[217px] lg:pb-20 md:pb-16 pb-12 bg-no-repeat bg-cover" >
                <div className="xl:max-w-[850px] lg:max-w-2xl sm:max-w-xl max-w-sm me-4 bg-black/60 2xl:py-20 xl:py-16 lg:py-12 md:py-7 py-5 2xl:ps-20 xl:ps-16 lg:ps-12 md:ps-7 ps-5 2xl:pe-[98px] xl:pe-16 lg:pe-12 md:pe-7 pe-5 rounded-lg">

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-left max-w-2xl"
                    >
                        <h1 className="lg:text-5xl text-3xl 2xl:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                            Sell Unused Software Licenses Effortlessly
                        </h1>
                        <p className="lg:text-xl text-lg text-gray-600 dark:text-gray-300 mb-6">
                            SoftSell helps you recover value from unused licenses. Simple. <br /> Secure.  Fast.
                        </p>
                        <Link href="#contact">
                            <button className="inline-block lg:text-lg font-medium hover:bg-white border-blue-500 border-1 hover:border-transparent hover:text-black text-white xl:px-6 lg:px-5 px-4 lg:py-3 py-2 lg:rounded-lg rounded-sm transition-all ease-linear duration-300">
                                Sell My Licenses
                            </button>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </div>


    )
}

export default Hero
