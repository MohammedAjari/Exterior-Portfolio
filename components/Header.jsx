import Image from "next/image";
import logo from "../public/canvaLogo-removebg.png";
import Navigation from "./Navigation";

export default function Header() {
    return (

        <div className="sticky inset-x-0 top-0 z-10 bg-opacity-60 bg-zinc-100 backdrop-blur-lg">
            <div className="container flex items-center justify-between  pb-2 ">

                <Image src={logo} alt="logo" className="w-52 h-32" />

                <Navigation />
            </div>
        </div>
    );
}