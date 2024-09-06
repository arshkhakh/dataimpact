"use client";
import Image from "next/image";
import Aos from "aos";
Aos;
import "aos/dist/aos.css";
import React, { useEffect } from "react";

const Fifth_Section = () => {
	useEffect(() => {
		Aos.init();
	}, []);
	return (
		<>
			<div className="flex justify-evenly overflow-x-hidden bg-black pl-[10rem] pr-[10rem] lg:pl-[7rem] lg:pr-[7rem] md:pl-[4rem] md:pr-[4rem] sm:flex-col sm:ml-[-1rem] h-screen text-white ">
				<div
					data-aos="fade-right"
					data-aos-duration="1000"
					className=" lg:mr-[1rem] pt-[5rem]">
					<p className="poppins font-light text-[1rem] md:text-[0.9rem] text-[#7B7B7B]">
						ADVANCED VULNERABILITY ASSESSMENT
					</p>
					<h1 className="poppins font-light text-[2.9rem] md:text-[2.25rem]  md:leading-[50px] mt-[2rem]">
						Secure Your Digital Identity
					</h1>
					<p className="text-[#9D9D9D] poppins mt-[1rem] text-[1rem] md:text-[0.8rem] max-w-[50ch] ">
						Experience advanced vulnerability assessment services utilizing
						cutting-edge technology and analytics to safeguard your digital
						identity. Stay one step ahead of evolving threats with our
						comprehensive approach to maximum protection.
					</p>
				</div>
				<div
					data-aos="fade-left"
					data-aos-duration="1000"
					className="flex justify-center items-center ml-[15rem] lg:ml-0 rounded-2xl w-[30rem] overflow-hidden h-[80vh] md:h-[35rem] mt-20 sm:ml-0 sm:w-auto sm:mt-10 sm:mb-[5rem]">
					<img className="object-cover bgsxyt " src="/secure.jpg" alt="photo" />
				</div>
			</div>
		</>
	);
};

export default Fifth_Section;
