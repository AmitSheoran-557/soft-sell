'use client';
import { HOW_IT_WORKS_DATA_LIST } from '@/utils/helper';
import { motion } from 'framer-motion';



const HowItWorks = () => {
    return (
        <div id="how-it-works" className="bg-black py-36">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How It Works</h2>
                    <p className="text-white max-w-2xl mx-auto">
                        Selling your unused software license is simple. Follow these three easy steps.
                    </p>
                </div>

                <div className="relative">

                    <div className="flex flex-wrap justify-center items-center 2xl:gap-10 xl:gap-7 lg:gap-5 gap-5 relative z-10">
                        {/* =================================== connecting line =========================== */}
                        <motion.div initial={{ width: 0 }} whileInView={{ width: '90%', margin: '0px 0px 0px 40px' }} viewport={{ once: true, amount: 0.8 }} transition={{ duration: 1 }} className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] bg-white z-0" />
                        {HOW_IT_WORKS_DATA_LIST.map((step, index) => (
                            <motion.div key={index} initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.2, duration: 0.4, ease: "easeInOut", damping: 15 }} viewport={{ once: true, amount: 0.8 }}
                                className="bg-black/40 backdrop-blur-2xl 2xl:p-8 xl:p-7 lg:p-5 rounded-2xl xl:max-w-[340px] max-w-[300px] shadow hover:shadow-md transition duration-300 text-center flex flex-col items-center">
                                <div className="mb-4 text-white">{step.icon}</div>
                                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                                <p className="text-white">{step.description}</p>

                                {/* =========================== connector for small screen ============================ */}
                                {index < HOW_IT_WORKS_DATA_LIST.length - 1 && (
                                    <motion.div
                                        initial={{ height: 0 }}
                                        whileInView={{ height: '50px' }}
                                        transition={{ duration: 0.5, delay: index * 0.3 }}
                                        className="block lg:hidden w-1 h-12 mt-8"
                                    />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
export default HowItWorks