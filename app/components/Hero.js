"use client";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
const Hero = () => {
	useEffect(() => {
		Aos.init();
	}, []);
	return (
		<div
			data-aos="zoom-in-up"
			data-aos-duration="1000"
			className="h-[90vh] flex items-center flex-col">
			<h1 className=" mt-[20rem] max-w-[20ch] text-center leading-[116.5%] text-[4rem] font-semibold poppins lg:text-[4rem] md:text-[3rem] sm:mt-[12rem] sm:max-w-[20ch] sm:text-[1.65rem] text-white">
				Cybersecurity Unveiled
			</h1>
			<h2 className="mt-[3rem] lg:mt-[4rem] textgit-center poppins text-[1.5rem] lg:text-[1.25rem] md:text-[1.2rem] md:mt-[2rem] sm:text-[1rem] sm:text-center sm:mx-[1.5rem] text-[#e6e6e6]">
				Comprehensive Penetration Testing and Vulnerability Assessment Services
			</h2>
			<p className="mt-[1rem] poppins max-w-[70ch] text-center text-[0.95rem] lg:text-[0.9rem] md:text-[0.85rem] sm:text-[0.7rem] sm:mt-[0.75rem] sm:font-medium sm:mx-[1rem] sm:max-w-[55ch] text-[#B7B7B7] font-semibold">
				Stay ahead of your expanding attack surface with a complete range of
				cutting-edge offensive security solutions
			</p>
			<Link href="/Contact">
				<button className="connect_hero mt-[3rem] bg-[#b5b7d4] poppins font-semibold text-black text-base pl-8 pr-8 pt-4 pb-4 lg:pl-7 lg:pr-7 lg:pt-3 lg:pb-3 rounded-[60px]">
					Let&apos;s Connect
				</button>
			</Link>
		</div>
	);
};

export default Hero;
