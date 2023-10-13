import Image from "next/image";
import '../fonts.css';

import React from 'react'

export default function page() {
    const projects = [
        {
            id: 1,
            name: 'Nature-View Lounge for Relaxing and Enjoying the Outdoors ',
            description: 'Relaxing Lounge with a Clean and Modern Design for Your Family, Infused with Charm. ',
            image: '/image3/IMG-20231006-WA0374.jpg',
            link: '',
        },
        {
            id: 2,
            name: 'Lounge Seating Area for Relaxed Moments',
            description: 'Discover a Lounge Seating Area Designed for Comfort and Relaxation.',
            image: '/image3/IMG-20231006-WA0347.jpg',
            link: '',
        },
        {
            id: 3,
            name: 'Vibrant Blossoms Adorn the Exterior Wall for Relaxing Moments',
            description: 'Experience serene moments as colorful flowers adorn the exterior walls, creating a beautiful oasis for relaxation. ',
            image: '/image3/IMG-20231006-WA0293.jpg',
        },
    ];
    return (
        <div className="">
            <div className="bg-[url('/4.jpg')] bg-center bg-cover ">
                <h1 className="container py-64 text-6xl font-semibold tracking-widest text-white " style={{ fontFamily: 'Montserrat, sans-serif' }}>EXTERIOR PROJECTS</h1>
            </div>
            <div className="container grid grid-cols-2 gap-8 py-8">

                {projects.map((project) => (
                    <div key={project.id} className="relative overflow-hidden rounded-xl group">
                        <div>
                            <Image src={project.image} width={480} height={380} alt="" className="w-full" />
                        </div>
                        <div className="absolute bottom-0 flex-col items-center justify-end w-full gap-32 p-12 text-xl text-white transition duration-300 ease-in-out translate-y-full bg-gradient-to-b from-transparent to-black group-hover:translate-y-0">
                            <h1 className="text-2xl font-semibold" style={{ fontFamily: 'Montserrat, sans-serif' }}>{project.name}</h1>
                            <p className="py-4 " style={{ fontFamily: 'Open Sans', fontSize: 'large' }}>{project.description}</p>
                        </div>
                    </div>


                ))}
            </div>
        </div>
    )
}