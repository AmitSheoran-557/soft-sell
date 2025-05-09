'use client';
import { CONTACT_DATA_LIST, SOCIAL_LINKS } from '@/utils/helper';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const Contact = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
        Swal.fire({
            icon: 'success',
            title: 'Form Submitted Successfully!',
            text: 'We will get back to you soon.',
            confirmButtonText: 'Close',
        });
        console.log(data);
        reset();
    };

    return (
        <div className="2xl:py-36 xl:py-28 lg:py-20 md:py-16 py-12 px-4" id="contact">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Get In Touch</h2>
            <div className="max-w-[1240px] mx-auto w-full">
                <div className="flex flex-wrap mx-auto w-full justify-content-center">
                    <div className="lg:w-6/12 w-full flex justify-center">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 w-full">
                            <div>
                                <label className="block mb-1">Name</label>
                                <input {...register('name', { required: 'Name is required' })} type="text" className="w-full p-3 rounded bg-white/10 border border-zinc-300 outline-none dark:border-zinc-700" />
                                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                            </div>

                            <div>
                                <label className="block mb-1">Email</label>
                                <input {...register('email', { required: 'Email is required', pattern: { value: /\S+@\S+\.\S+/, message: 'Enter a valid email address', } })} type="email" className="w-full p-3 rounded bg-white/10 border border-zinc-300 outline-none dark:border-zinc-700" />
                                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                            </div>

                            <div>
                                <label className="block mb-1">Company</label>
                                <input {...register('company', { required: 'Company name is required' })} type="text" className="w-full p-3 rounded bg-white/10 border border-zinc-300 outline-none dark:border-zinc-700" />
                                {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company.message}</p>}
                            </div>

                            <div>
                                <label className="block mb-1">License Type</label>
                                <select {...register('license', { required: 'License type is required' })} className="w-full p-3 rounded bg-white/10 border border-zinc-300 outline-none dark:border-zinc-700" >
                                    <option value="">Select type</option>
                                    <option value="Windows">Windows</option>
                                    <option value="Adobe">Adobe</option>
                                    <option value="Office365">Office 365</option>
                                    <option value="Other">Other</option>
                                </select>
                                {errors.license && <p className="text-red-500 text-sm mt-1">{errors.license.message}</p>}
                            </div>

                            <div>
                                <label className="block mb-1">Message</label>
                                <textarea {...register('message', { required: 'Message is required' })} rows="4" className="w-full p-3 rounded max-h-44 min-h-20 bg-white/10 border border-zinc-300 outline-none dark:border-zinc-700" />
                                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                            </div>

                            <button type="submit" className="py-2 px-6 lg:text-lg rounded-sm border-blue-500 border-1 hover:border-transparent bg-transparent hover:bg-white hover:text-black transition-all ease-linear duration-300">
                                Submit
                            </button>
                        </form>
                    </div>
                    <div className="lg:w-6/12 w-full lg:mt-0 md:mt-9 mt-7 flex justify-start items-start">
                        <div className="flex justify-center items-start mx-auto lg:pt-10 flex-col">
                            <h3 className='lg:text-3xl text-2xl font-bold text-center xl:mb-8 lg:mb-7 mb-4'>Contact Details</h3>
                            <div className="flex flex-col gap-5">
                                <div className="flex lg:gap-8 md:gap-12 gap-8 lg:flex-col max-lg:flex-wrap lg:pt-2">
                                    <div>
                                        <h4 className="font-semibold">{CONTACT_DATA_LIST.location.title}</h4>
                                        <p>{CONTACT_DATA_LIST.location.content}</p>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold">{CONTACT_DATA_LIST.email.title}</h4>
                                        <Link href={CONTACT_DATA_LIST.email.href} className="hover:text-white/80 hover:underline">
                                            {CONTACT_DATA_LIST.email.content}
                                        </Link>
                                    </div>

                                    <div>
                                        <h4 className="font-semibold">{CONTACT_DATA_LIST.phone.title}</h4>
                                        <Link href={CONTACT_DATA_LIST.phone.href} className="hover:text-white/80 hover:underline">
                                            {CONTACT_DATA_LIST.phone.content}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-4 lg:pt-10 pt-6">
                                {SOCIAL_LINKS.map((item, index) => (
                                    <Link key={index} className="rounded-full hover:scale-110 transition-all ease-linear duration-300" href={item.href} target="_blank">
                                        <div className="lg:px-2 px-1 lg:py-2 py-1 border rounded-full 2xl:size-10 xl:size-11 lg:size-10 size-7 bg-black duration-300 ease-linear hover:border-black/40 flex justify-center items-center">
                                            {item.icon}
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
}

export default Contact;