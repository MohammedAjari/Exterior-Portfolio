import Image from "next/image";
import './fonts.css';
export default function AboutComponent() {
    return (
        <div className="container py-16">
            <div className="flex items-center justify-between pb-4">
                <a className="py-4 text-3xl font-extrabold leading-tight text-gray-800 lg:text-5xl" href="" style={{ fontFamily: 'Montserrat, sans-serif' }}>An aesthetic room is <br />given harmony</a>
                
            </div>
            <div className="grid lg:grid-cols-2 place-items-center ">
                <div>
                    <Image src="/5.jpg" width={900} height={500} alt="" className="max-md:hidden" />
                </div>

                <div className="items-center">
                    <p className="px-12 pb-4 " style={{ fontFamily: 'Open Sans', fontSize: 'large' }}>
                        <b style={{ fontFamily: 'Montserrat, sans-serif' }}>RKTECTURE</b> is where imagination meets reality. Our mastery of interior and exterior design transforms homes into exceptional living experiences.<br/>
                        For countless homeowners, <b style={{ fontFamily: 'Montserrat, sans-serif' }}>RKTECTURE</b> has been the answer to their design dreams. Our work speaks for itself, celebrated with prestigious awards from various countries.
                    </p>
                </div>
            </div>
        </div>
    );
}