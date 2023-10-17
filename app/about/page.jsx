import Image from 'next/image'
import '../fonts.css';
import { TbArrowUpRight } from "react-icons/tb"
export default function About() {
    return (
        <div>
            <div className="bg-[url('/3.jpg')] bg-center bg-cover brightness-90 ">
                <h1 className="container py-32 text-6xl font-semibold tracking-widest text-center text-white lg:py-64 lg:text-left font-ibm-plex-mono" style={{ fontFamily: 'Montserrat, sans-serif' }}>WHO ARE WE?</h1>
            </div>
            <div className="container ">
                <div className="py-1 lg:py-10">
                    <h2 className="p-4 text-3xl font-semibold text-center lg:p-10 lg:text-4xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>Visionary Designs: Elevating Interior and Exterior Excellence</h2>

                    <div className="flex lg:flex lg:flex-col flex-col justify-center  items-center ">
                        <Image src="/8.jpg" width={830} height={500} alt="" className="" />

                        <div className='mt-4 lg:flex items-center justify-center '>
                            <p className="text-2xl font-medium lg:w-1/2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                At <b>RKTECTURE</b>, we are the ultimate source for transforming living and outdoor spaces. As a versatile design firm, we take pride in curating stunning interiors for homes, offices, apartments, and beyond, as well as crafting captivating exterior designs that redefine the boundaries of outdoor living.
                            </p>
                            
                            <a className="inline-flex my-5 items-center gap-1 px-6 py-3 text-sm text-white rounded-full shadow-lg bg-gray-950 hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2" href="" style={{ fontFamily: 'Open Sans', fontSize: 'large' }}>
                                Read More <TbArrowUpRight className="text-xl" />
                            </a>
                        </div>

                    </div>
                </div>

                {/* <div className="py-1 lg:py-8">
                    <h2 className=" text-3xl font-semibold text-center pt-2 pb-4 lg:p-20 lg:text-5xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>Visionary Designs: Elevating Interior and Exterior Excellence</h2>

                    <div className="justify-items-center lg:flex gap-x-8 ">
                        <p className="text-2xl font-medium lg:w-1/2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            At <b>RKTECTURE</b>, we are the ultimate source for transforming living and outdoor spaces. As a versatile design firm, we take pride in curating stunning interiors for homes, offices, apartments, and beyond, as well as crafting captivating exterior designs that redefine the boundaries of outdoor living.
                        </p>

                    </div>
                </div> */}

                {/* <div className="items-center lg:flex gap-x-8 pb-5">
                    <div className="w-full">
                        <Image src="/14.jpg" width={700} height={700} alt="" className="" />
                    </div>
                    <div className="">
                        <p className="pb-8 tracking-wide" style={{ fontFamily: 'Open Sans', fontSize: 'large' }}>
                            As an Architects, We firmly believe in the need to reimagine architectural education in todays world. Our approach goes beyond conventional boundaries, integrating fresh perspectives on society while embracing modern methodologies and contemporary tools that empower creativity, enhance production, and facilitate communication.
                            <br />
                            <br />
                            Whether its the art of crafting inspiring interiors or the mastery of sculpting captivating exteriors, our work is a testament to innovation and excellence. We bring to life designs that are not only visually stunning but also highly functional, reflecting the evolving needs of our clients and the world we live in.
                            <br />
                            <br />
                            <span className="text-xl font-extrabold tracking-tight" style={{ fontFamily: 'Montserrat, sans-serif' }}>The backpiperARCH, we share a belief in the transformational power of people united in a common purpose.</span>
                        </p>
                        <a className="inline-flex items-center gap-1 px-6 py-3 text-sm text-white rounded-full shadow-lg bg-gray-950 hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2" href="" style={{ fontFamily: 'Open Sans', fontSize: 'large' }}>Read More <TbArrowUpRight className="text-xl" /> </a>
                    </div>
                </div> */}
                {/* 
                    <div className="py-1 lg:py-14">
                    <h2 className="p-4 text-3xl font-semibold text-center lg:p-10 lg:text-5xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>Visionary Designs: Elevating Interior and Exterior Excellence</h2>

                    <div className="flex lg:flex lg:flex-col flex-col justify-center  items-center ">
                        <iframe
                            className='video  my-5 w-11/12 lg:w-7/12 lg:h-96'
                            title='Youtube player'
                            sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
                            src={`https://youtube.com/embed/4iEKJMglcoc?autoplay=1`}
                            
                        >
                        </iframe>

                        <Image src="/14.jpg" width={700} height={700} alt="" className="" />

                        <div className='lg:flex items-center justify-center '>
                            <p className="text-2xl font-medium lg:w-1/2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                At <b>RKTECTURE</b>, we are the ultimate source for transforming living and outdoor spaces. As a versatile design firm, we take pride in curating stunning interiors for homes, offices, apartments, and beyond, as well as crafting captivating exterior designs that redefine the boundaries of outdoor living.
                            </p>


                            <a className="inline-flex my-5 items-center gap-1 px-6 py-3 text-sm text-white rounded-full shadow-lg bg-gray-950 hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2" href="" style={{ fontFamily: 'Open Sans', fontSize: 'large' }}>
                                Read More <TbArrowUpRight className="text-xl" />
                            </a>
                        </div>

                    </div>
                </div>
                */}



            </div>
        </div >
    )
}