import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import { FaHeart } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";

export default function Stories({ story: { title, news } }) {
    const splideOptions = {
        perPage: 4,
        perMove: 1,
        type: 'loop',
        rewind: true,
        keyboard: 'global',
        gap: '1rem',
        pagination: false,
        padding: '2rem',
        breakpoints: {
            1400: { perPage: 3 },
            1200: { perPage: 2 },
            830: { perPage: 2 },
            768: { perPage: 1 },
        },
    };

    return (
        <div className='mt-16 w-[94%] mx-auto mb-24'>
            <div>
                <h2 className="mb-5 text-4xl font-black">{title}</h2>
                <div className="">
                    <Splide options={splideOptions}>
                        {news.map((item, i) => {
                            return <SplideSlide key={i}>
                                <div className='rounded-lg overflow-hidden shadow-md shadow-slate-300'>
                                    <div className='overflow-hidden rounded-lg'>
                                        <img src={item.img} alt="" className='rounded-lg hover:scale-105 transition-all' width={'100%'} />
                                    </div>

                                    <div className='p-5'>
                                        <div className='flex justify-between gap-1 mb-6'>
                                            <div className='flex gap-2 items-center'>
                                                <FaHeart className='text-red-600' />
                                                <span className='font-semibold'>{item.like}</span>
                                            </div>

                                            <div className='flex gap-2 items-center'>
                                                <CiClock2 />
                                                <span className='font-semibold'>{item.time}</span>
                                            </div>

                                            <p className="text-blue-500"># {item.by}</p>
                                        </div>

                                        <h3 className='text-lg font-bold mb-1'>{item.title.slice(0, 20)}</h3>
                                        <p className="text-slate-500">{item.text.slice(0, 175)}...</p>
                                        <a href={item.url} target='_blank' rel="noreferrer" className='w-full bg-black text-white hover:bg-[#333] block py-2 text-center mt-5 rounded-b-lg transition-all'>{item.btn}</a>
                                    </div>
                                </div>
                            </SplideSlide>
                        })}
                    </Splide>
                </div>
            </div>
        </div>
    )
}