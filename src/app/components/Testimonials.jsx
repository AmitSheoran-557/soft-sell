'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
    {
        name: 'Emily Carter',
        role: 'Product Manager',
        company: 'TechNova Inc.',
        image: '/assets/images/png/testimonials-card-profile-img-1.webp',
        feedback: 'SoftSell made software license selling effortless. Great experience and fast payouts!',
    },
    {
        name: 'Marcus Lee',
        role: 'CTO',
        company: 'ByteWave Solutions',
        image: '/assets/images/png/testimonials-card-profile-img-2.webp',
        feedback: 'Super intuitive platform. We were able to sell unused licenses and recover value instantly.',
    },
];

const Testimonials = () => {
    return (
        <div className="py-32 bg-black px-4" id="testimonials">
            <div className="text-center mb-14">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">What Our Clients Say</h2>
                <div className="mx-auto w-24 h-1 bg-white rounded-full" />
            </div>

            <div className="flex flex-wrap justify-center xl:gap-10 md:gap-6 gap-4 max-w-6xl w-full mx-auto relative">
                <motion.div initial={{ height: 0 }} whileInView={{ height: '100%' }} transition={{ type: 'spring', stiffness: 40, damping: 10, delay: 0.3 }} className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-white rounded-full" />

                {testimonials.map((client, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                            delay: index * 0.2,
                            type: 'spring',
                            stiffness: 60,
                            damping: 12,
                        }}
                        viewport={{ once: true }}
                        className="bg-white/10 xl:p-8 lg:p-7 md:p-6 p-5 hover:bg-black hover:scale-[1.01] transition-all ease-linear border border-white/20 rounded-xl xl:max-w-lg lg:max-w-[480px] md:max-w-xs w-full shadow-lg hover:shadow-xl duration-300 group relative z-10"
                    >
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-primary rounded-full group-hover:w-16 transition-all duration-300" />
                        <div className="flex flex-col items-center text-center">
                            <Image
                                src={client.image}
                                alt={client.name}
                                width={80}
                                height={80}
                                className="rounded-full mb-4 object-cover"
                            />
                            <p className="text-white text-lg mb-4 italic">"{client.feedback}"</p>
                            <h3 className="text-blue text-white lg:mb-3 mb-1 font-semibold">{client.name}</h3>
                            <p className="text-sm text-white">
                                {client.role} @ {client.company}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
