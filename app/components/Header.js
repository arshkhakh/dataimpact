"use client";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const Header = () => {
	const [nav, setNav] = useState(false);
	const [service, setService] = useState(true);

	useEffect(() => {
		Aos.init();
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<div
				className={`${
					nav ? `bg-white` : `bg-white`
				} group overflow-x-hidden hover:bg-white group-hover:bg-white py-6 md:hidden`}>
				<div className="flex ml-[4rem] mr-[4rem] giga items-center justify-between md:justify-end lg:ml-[2rem] lg:mr-[2rem]">
					<img
						className={`lg:w-[100px] md:hidden`}
						src="/logo_bg.png"
						alt="Logo"
						width="120"
						height="80"
					/>
					<ul className="ml-[10rem] text-gray-400 flex md:hidden">
						<li
							className={` ${
								nav ? `text-black` : `giga`
							} group-hover:text-gray-400 mx-7 lg:mx-5 tracking-[-1.5px] `}
							onMouseEnter={() => {
								setService(true);
							}}>
							<Link className="hover:text-black hover:font-semibold" href="/">
								Home
							</Link>
						</li>
						<li
							className={` ${
								nav ? `text-black` : `giga`
							} group-hover:text-gray-400  mx-7 lg:mx-5 tracking-[-1.5px] `}
							onMouseEnter={() => {
								setService(true);
							}}>
							<Link
								className="hover:text-black hover:font-semibold"
								href="/About">
								About Us
							</Link>
						</li>
						<li
							className={` ${
								nav ? `text-black` : `giga`
							} group-hover:text-gray-400  mx-7 lg:mx-5 tracking-[-1.5px] `}
							onMouseEnter={() => {
								setService(false);
							}}>
							<div className="hover:text-black hover:font-semibold">
								Services
							</div>
						</li>
						<li
							className={` ${
								nav ? `text-black` : `giga`
							} group-hover:text-gray-400  mx-7 lg:mx-5 tracking-[-1.5px] `}
							onMouseEnter={() => {
								setService(true);
							}}>
							<Link
								className="hover:text-black hover:font-semibold"
								href="/Contact">
								Contact
							</Link>
						</li>
					</ul>
					<div className="flex items-center h-[40px] w-[212px] bg-[#453F4E] rounded-2xl text-white ">
						<input
							className=" transition-all duration-200 ease-linear tracking-[-1.5px] focus:transition-all focus:duration-300 focus:ease-linear focus:placeholder:opacity-0 text-[13px] placeholder:opacity-100 placeholder-white w-[182px] bg-transparent font-medium pl-4 outline-none"
							placeholder="Search Here..."
						/>
						<img
							src="/search_white.png"
							alt="search_icon"
							width="20"
							height="20"
						/>
					</div>
				</div>
			</div>
			<div
				onMouseEnter={() => {
					setNav(true);
				}}
				onMouseLeave={() => {
					setService(true);
					setNav(false);
				}}
				className={`${
					service ? `hidden` : `flex`
				}  h-56 group  bg-black text-[#858585] cursor-pointer sticky top-24 left-0 z-[999999]`}>
				<ul className="w-screen overflow-hidden flex flex-col justify-evenly items-center text-center">
					<div className="flex justify-evenly w-screen">
						<li className="w-[33vw] justify-center text-left flex items-center  hover:tracking-[1px] hover:text-white transition-all duration-500 ease-in-out">
							<Link className="text-left w-[18vw] text-white" href="/Services/Web_Application_Security">
								Web Application Security
							</Link>
						</li>
						<li className="w-[33vw] justify-center text-left flex items-center  hover:tracking-[1px] hover:text-white transition-all duration-500 ease-in-out">
							<Link className="text-left w-[18vw] text-white" href="/Services/API_Security_Testing">
								API Security Testing
							</Link>
						</li>
						<li className="w-[33vw] justify-center text-left flex items-center  hover:tracking-[1px] hover:text-white transition-all duration-500 ease-in-out">
							<Link className="text-left w-[18vw] text-white" href="/Services/Social_Engineering">Social Engineeing</Link>
						</li>
					</div>
					<div className="flex justify-evenly w-screen">
						<li className="w-[33vw] justify-center text-left flex items-center  hover:tracking-[1px] hover:text-white transition-all duration-500 ease-in-out">
							<Link className="text-left w-[18vw] text-white" href="/Services/Firewall_Configuration_Review">
								Firewall Config Review
							</Link>
						</li>
						<li className="w-[33vw] justify-center text-left flex items-center  hover:tracking-[1px] hover:text-white transition-all duration-500 ease-in-out">
							<Link className="text-left w-[18vw] text-white" href="/Services/Vulnerability_Assessment">
								Vulnerability Assessment
							</Link>
						</li>
						<li className="w-[33vw] justify-center text-left flex items-center  hover:tracking-[1px] hover:text-white transition-all duration-500 ease-in-out">
							<Link className="text-left w-[18vw] text-white" href="/Services/Network_Peneration_Testing">
								Network Peneration testing
							</Link>
						</li>
					</div>
				</ul>
			</div>
		</>
	);
};

export default Header;
