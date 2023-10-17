'use client'

import { useEffect } from 'react'
import Image from "next/image";
import CountUp from 'react-countup';

export default function CompanySection() {
    useEffect(() => {
        console.log("in useEffect");
    })
    return (
        <div className="py-14  bg-zinc-100">
            {/* <p className="py-4 text-lg font-medium text-center opacity-40">Trusted by the world’s best companies</p> */}
            <div className="container flex flex-wrap items-center justify-between lg:justify-evenly  ">
                {/* <Image src="/image/air-company-logo.png" width={128} height={128} alt="" className="opacity-40" /> */}
                <div className="countUP">
                    <h2 style={{ fontSize: "xx-large" , fontFamily: 'Montserrat, sans-serif'}}  class=" text-center">Successful Projects</h2>
                    <CountUp style={{ fontSize: "xxx-large", fontWeight: "500"  }} start={0} end={1000} width={128} height={128} className=" text-center text-orange-400" duration={2.5} /><span style={{ fontSize: "xxx-large", fontWeight: "500"  }} className=" text-center text-orange-400" >+</span>
                </div>
                <div className="countUP">
                    <h2 style={{ fontSize: "xx-large" , fontFamily: 'Montserrat, sans-serif' , color:"ring-orange-400"}} class=" text-center ">Happy Customers</h2>
                    <CountUp style={{ fontSize: "xxx-large", fontWeight: "500" }} start={0} end={100} width={128} height={128} className=" text-center text-orange-400" duration={2.5} /><span style={{ fontSize: "xxx-large", fontWeight: "500"  }} className=" text-center text-orange-400" >+</span>
                </div>
                <div className="countUP">
                    <h2 style={{ fontSize: "xx-large" , fontFamily: 'Montserrat, sans-serif' , color:"ring-orange-400"}} class=" text-center ">Experience in Years</h2>
                    <CountUp style={{ fontSize: "xxx-large", fontWeight: "500" }} start={0} end={50} width={128} height={128} className=" text-center text-orange-400" duration={2.5} /><span style={{ fontSize: "xxx-large", fontWeight: "500"  }} className=" text-center text-orange-400" >+</span>
                </div>
                <div className="countUP">
                    <h2 style={{ fontSize: "xx-large" , fontFamily: 'Montserrat, sans-serif' , color : "ring-orange-400"}} class=" text-center ">Partner Network</h2>
                    <CountUp style={{ fontSize: "xxx-large", fontWeight: "500"  }} start={0} end={15} width={128} height={128} className=" text-center text-orange-400" duration={2.5} /><span style={{ fontSize: "xxx-large", fontWeight: "500"  }} className=" text-center text-orange-400" >+</span>
                </div>
            </div>
        </div>
    );
}