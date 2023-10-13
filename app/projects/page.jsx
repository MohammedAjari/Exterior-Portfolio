import Image from "next/image";
import '../fonts.css';


export default function Projects() {
    const projects = [
        {
            id: 1,
            name: 'Serene Bedroom Retreat for Ultimate Relaxation and Comfort ',
            description: 'Enjoy the serenity of a fantastic bedroom designed to make you feel at home and truly at ease. ',
            image: '/5.jpg',
            link: '',
        },
        {
            id: 2,
            name: 'Scenic Living Room for Relaxing and Embracing the Beauty of Indoors',
            description: 'Step into our serene living room and experience a harmonious blend of nature and comfort. ',
            image: '/6.jpg',
            link: '',
        },
        {
            id: 3,
            name: 'Luxurious Dining Room with Breathtaking Views for Elegant Dining',
            description: 'Our dining space is designed to provide you with the perfect setting for sharing delicious meals and creating cherished memories with loved ones',
            image: '/8.jpg',
        },
        {
            id: 3,
            name: 'Scenic Living Room for Relaxing and Embracing the Beauty of Indoors',
            description: 'Step into our serene living room and experience a harmonious blend of nature and comfort.',
            image: '/9.jpg',
        },
    ];
    return (
        <div className="">
            <div className="bg-[url('/2.jpg')] bg-center bg-cover ">
                <h1 className="container py-64 text-6xl font-semibold tracking-widest text-white " style={{fontFamily: 'Montserrat, sans-serif'}}>INTERIOR PROJECTS</h1>
            </div>
            <div className="container grid grid-cols-2 gap-8 py-8">

                {projects.map((project) => (
                    <div key={project.id} className="relative overflow-hidden rounded-xl group">
                        <div>
                            <Image src={project.image} width={480} height={380} alt="" className="w-full" />
                        </div>
                        <div className="absolute bottom-0 flex-col items-center justify-end w-full gap-32 p-12 text-xl text-white transition duration-300 ease-in-out translate-y-full bg-gradient-to-b from-transparent to-black group-hover:translate-y-0">
                            <h1 className="text-2xl font-semibold" style={{fontFamily: 'Montserrat, sans-serif'}}>{project.name}</h1>
                            <p className="py-4 " style={{fontFamily:'Open Sans' , fontSize: 'large'}}>{project.description}</p>
                        </div>
                    </div>


                ))}
            </div>
        </div>
    )
}