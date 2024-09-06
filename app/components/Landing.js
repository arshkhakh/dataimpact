"use client";
import Header from "./Header";
import Hero from "./Hero";
import Services from "./Services";
import Footer from "./Footer";

import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import Mobile_Header from "./Mobile_Header";
import Third_Section from "./Third_Section";
import Fourth_Section from "./Fourth_Section";
import Fifth_Section from "./Fifth_Section";
import Global from "./Global";

const Landing = () => {
	useEffect(() => {
		Aos.init();
	}, []);
	return (
		<>
			<div className="select-none landing_conatiner h-screen ">
				<div
					className="absolute w-screen top-0 md:hidden z-[99]"
					data-aos="fade-up"
					data-aos-duration="1200">
					<Header />
				</div>
				<div className="absolute hidden w-screen md:inline-block">
					<Mobile_Header />
				</div>
				<div className="absolute top-20 z-[1] w-screen">
					<Hero />
				</div>
			</div>
			<Services />
			<Third_Section />
			<Fourth_Section />
			<Fifth_Section />
			<div className="relative ">
				<Global />
			</div>
			<Footer />
		</>
	);
};

export default Landing;
