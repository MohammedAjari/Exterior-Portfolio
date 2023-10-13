"use client";
import Image from "next/image";
import { TbArrowUpRight } from "react-icons/tb";
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './fonts.css';

export default function CatalogSwiperSection() {

    return (
        <div className="py-8 lg:py-28">
            <div className="container grid pb-8 lg:grid-cols-2">
                <div className="text-left ">
                    <h1 className="py-4 text-4xl font-medium lg:text-6xl lg:py-0" style={{ fontFamily: 'Montserrat, sans-serif' }}>Interior & Exterior Masterpieces</h1>
                </div>
                <div>
                    <h2 className="pb-6 text-xl font-bold tracking-wider" style={{ fontFamily: 'Montserrat, sans-serif' }}>ELEVATING LIVING SPACES: INTERIOR & EXTERIOR LUXURY FOR YOUR HOME</h2>
                    <div className="grid grid-cols-2 text-gray-500 gap-x-8">
                        <div>
                            <p style={{ fontFamily: 'Open Sans', fontSize: 'large' }}>
                                With our passion for design and decor, we have created a collection of furniture and accessories that will help you create a comfortable and stylish home.
                            </p>
                        </div>
                        <div>
                            <p style={{ fontFamily: 'Open Sans', fontSize: 'large' }}>
                                We create distinctive and unique designs that are inspired by the latest trends in Interior and Exterior design .
                            </p>
                            <a href="/gallery" className="inline-flex items-center pt-4 text-lg font-bold text-black underline">View Gallery <TbArrowUpRight /> </a>
                        </div>
                    </div>
                </div>
            </div>

            <Swiper
                slidesPerView={1}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                modules={[Autoplay]}

            >
                <SwiperSlide>
                    <Image src="/image3/IMG-20231006-WA0395.jpg" alt="LOGO" width={520} height={200} className="" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/image3/IMG-20231006-WA0399.jpg" alt="LOGO" width={520} height={220} className="w-full" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/image3/IMG-20231006-WA0296.jpg" alt="LOGO" width={300} height={180} className="w-full" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/image3/IMG-20231006-WA0333.jpg" alt="LOGO" width={520} height={220} className="w-full" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/image3/IMG-20231006-WA0373.jpg" alt="LOGO" width={520} height={220} className="w-full" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/image3/IMG-20231006-WA0382.jpg" alt="LOGO" width={520} height={220} className="w-full" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}