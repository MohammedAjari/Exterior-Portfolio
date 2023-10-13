import Image from "next/image";
import { TbArrowUpRight } from "react-icons/tb";
import { usePathname } from 'next/navigation';

import Link from "next/link";


export default function HeroSection() {

    return (
        <div className="bg-zinc-50">
            <div className="container py-0 text-center lg:py-0 lg:text-left lg:flex lg:justify-between ">
                <div className="lg:w-1/2 xl:py-14 lg:py-8">
                    {/* <p className="tracking-widest">OFFER FOR THE BEST INTERIOR</p> */}
                    <h3 className="py-4 text-2xl font-extrabold leading-tight text-gray-800 xl:text-5xl lg:text-4xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>From Interiors to Exteriors: Our Design Magic
                    </h3>
                    <p className="pb-6 text-gray-500 xl:pb-10" style={{ fontFamily: 'Open Sans', fontSize: 'large' }}>
                        Transforming Spaces Inside and Out: Your Complete Interior and <br/>Exterior Design Partner.
                    </p>
                    <Link className="inline-flex items-center px-8 py-3 text-white rounded-full shadow-lg bg-gray-950 hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2 " href="/projects" style={{ fontFamily: 'Open Sans', fontSize: 'large' }} >Get Started <TbArrowUpRight className="w-5 h-5 ml-2" /></Link>
                </div>

                <div className="w-full p-4">
                    <Image src="/14.jpg" width={700} height={250} alt="" className="lg:absolute right-0 xl:h-[430px] xl:w-[700px] lg:h-[344px] lg:w-[500px] lg:block" />
                </div>
                {/* <div className="w-1/2">
                    <Image src="/image2/17.png" width={800} height={500} alt="" className="absolute right-0 xl:h-[448px] xl:w-[700px] lg:h-[344px] lg:w-[500px]  hidden lg:block" />
                </div> */}
            </div>
        </div>
    );
}