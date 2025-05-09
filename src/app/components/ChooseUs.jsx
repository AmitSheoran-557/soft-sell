'use client';
import { CHOOSE_US_DATA_LIST } from '@/utils/helper';
import { motion } from 'framer-motion';


const ChooseUs = () => {
    return (
        <div className="py-36 px-4 bg-black text-zinc-800 -mt-1 relative">
            <div className="h-1 w-full bg-blue-500 absolute top-0 left-0 right-0"></div>
            <div className="max-w-[1240px] mx-auto text-center">
                <h2 className="text-3xl text-white md:text-4xl font-bold mb-6">Why Choose SoftSell?</h2>
                <p className="mb-12 text-white">We make reselling software licenses easy, secure, and profitable.</p>
                <div className="flex flex-wrap justify-center xl:gap-8 lg:gap-5 gap-5">
                    {CHOOSE_US_DATA_LIST.map((feature, index) => (
                        <motion.div key={index} className="group relative transition xl:max-w-xs lg:max-w-[310px] max-w-xs w-full" initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: index * 0.1 }} viewport={{ once: true }}>
                            <div className="absolute w-14 h-14 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 ease-linear top-4 right-4 group-hover:-top-4 group-hover:-right-4 flex justify-center items-center"></div>
                            <div className='bg-black/30 border-1 border-white/15 2xl:p-6 xl:p-5 p-4 h-full max-lg:min-h-48 relative z-10 backdrop-blur-md rounded-2xl shadow hover:shadow-lg'>
                                <div className="text-4xl text-white mb-4">{feature.icon}</div>
                                <h3 className="text-xl text-white font-semibold mb-2">{feature.title}</h3>
                                <p className="text-white">{feature.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default ChooseUs;