"use client";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

const Services = () => {
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
						PENETRATION TESTING AS A SERVICE (PTAAS)
					</p>
					<h1 className="poppins font-light text-[2.9rem] md:text-[2.25rem]  md:leading-[50px] mt-[2rem]">
						Data Inspect Platform
					</h1>
					<p className="text-[#9D9D9D] poppins mt-[1rem] text-[1rem] md:text-[0.8rem] max-w-[40ch] ">
						Introducing our cutting-edge cybersecurity platform meticulously
						engineered to proactively detect and preemptively mitigate
						tomorrow&apos;s emerging threats, ensuring robust protection for
						your organization.
					</p>
				</div>
				<div
					data-aos="fade-left"
					data-aos-duration="1000"
					className="flex justify-center items-center ml-[15rem] lg:ml-0 rounded-2xl w-[30rem] overflow-hidden h-[80vh] md:h-[35rem] mt-20 sm:ml-0 sm:w-auto sm:mt-10 sm:mb-[5rem]">
					<img
						className="object-cover bgsxyt "
						src="/penetration .jpg"
						alt="photo"
					/>
				</div>
			</div>
		</>
	);
};

export default Services;
