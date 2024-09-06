"use client";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { global } from "styled-jsx/css";
import Link from "next/link";
const Fourth_Section = () => {
	useEffect(() => {
		Aos.init();
	}, []);
	return (
		<div className="bg-black flex flex-col justify-center pt-[4rem] pb-[4rem] lg:pt-[0] lg:overflow-x-hidden sm:overflow-x-hidden overflow-y-hidden ">
			<div className="flex justify-center mx-[14rem] sm:flex-col sm:ml-[3rem] ">
				<div
					data-aos="fade-right"
					data-aos-duration="1000"
					className="w-[40rem] lg:w-[35rem] md:w-[25rem] ">
					<p className="text-white poppins text-[3rem] lg:pl-[8rem] font-light pt-[7rem] w-[10rem] md:pl-[4rem] md:text-[2rem] sm:pl-0 sm:text-[1.5rem] sm:pt-[4rem]">
						Cybersecurity Services
					</p>
				</div>
				<div data-aos="fade-left" data-aos-duration="1000">
					<p className="text-white pl-[3rem] font-light pt-[8rem] w-[34rem] lg:pl-0 lg:w-[22rem] md:pl-[3rem] md:w-[18rem] sm:pl-0 sm:w-[16rem] sm:text-[.9rem] sm:pt-[1rem]">
						Redefine the way you respond to security assessments. We deliver all
						of our penetration testing services using the PTaaS delivery model
					</p>
				</div>
			</div>
			<div className="flex justify-center mt-[8rem] md:mt-[4rem] lg:ml-[8rem] md:ml-[8.3rem] sm:flex-col sm:mx-[2rem] sm:items-center sm:mt-[1rem]">
				<div>
					<div
						data-aos="fade-right"
						data-aos-duration="1000"
						className="w-[600px] h-[310px] 2xl:w-[502px] 2xl:h-[249px] lg:h-[220px] text-[#c5c5c5] bg-[#131313] hover:text-white transition-all cursor-pointer hover:bg-[url('/sec2.png')] bg-cover mt-[2rem] rounded-2xl lg:w-[400px] md:w-[250px] md:h-[160px] sm:h-[140px] sm:w-[260px] sm:mt-[1rem]">
						<p className="pl-[3rem] pt-[2rem] text-[2.125rem] 2xl:text-[1.85rem] lg:text-[1.75rem] poppins font-light max-w-[20ch] md:pt-[1rem] md:text-[1.25rem] md:pl-[2rem] sm:text-[1.25rem] sm:pt-[.8rem] ">
							Web Application Security
						</p>
						<Link href="/Services/Web_Application_Security">
							<div className="w-[90px] h-[50px] 2xl:w-[76px] 2xl:h-[42px] bg-white rounded-3xl flex justify-center items-center ml-[3rem] mt-[1rem] md:ml-[2rem] md:w-[50px] md:h-[25px] sm:h-[30px]  ">
								<img
									className="h-[1.5rem] w-[1.5rem] sm:h-[1rem] sm:w-[1rem] "
									src="/arrow2.png"
									alt="arrow"
									height={24}
									width={24}
								/>
							</div>
						</Link>
					</div>
					<div
						data-aos="fade-right"
						data-aos-duration="1000"
						className="w-[600px] h-[310px] 2xl:w-[502px] 2xl:h-[249px] lg:h-[220px] text-[#c5c5c5] bg-[#131313] hover:text-white transition-all cursor-pointer hover:bg-[url('/sec2.png')] bg-cover mt-[2rem] rounded-2xl lg:w-[400px] md:w-[250px] md:h-[160px] sm:h-[140px] sm:w-[260px] sm:mt-[1rem]">
						<p className="text-[#c5c5c5] pl-[3rem] pt-[2rem] text-[2.125rem] 2xl:text-[1.85rem] lg:text-[1.75rem] poppins font-light max-w-[20ch] md:pt-[1rem] md:text-[1.25rem] md:pl-[2rem] sm:text-[1.25rem]">
							API Security Testing
						</p>
						<Link href="/Services/API_Security_Testing">
							<div className="w-[90px] h-[50px] 2xl:w-[76px] 2xl:h-[42px] bg-white rounded-3xl flex justify-center items-center ml-[3rem] mt-[1rem] md:ml-[2rem] md:w-[50px] md:h-[25px] sm:h-[30px]">
								<img
									className="h-[1.5rem] w-[1.5rem] sm:h-[1rem] sm:w-[1rem] "
									src="/arrow2.png"
									alt="arrow"
									height={24}
									width={24}
								/>
							</div>
						</Link>
					</div>
					<div
						data-aos="fade-right"
						data-aos-duration="1000"
						className="w-[600px] h-[310px] 2xl:w-[502px] 2xl:h-[249px] lg:h-[220px] text-[#c5c5c5] bg-[#131313] hover:text-white transition-all cursor-pointer hover:bg-[url('/sec2.png')] bg-cover mt-[2rem] rounded-2xl lg:w-[400px] md:w-[250px] md:h-[160px] sm:h-[140px] sm:w-[260px] sm:mt-[1rem]">
						<p className="text-[#c5c5c5] pl-[3rem] pt-[2rem] text-[2.125rem] 2xl:text-[1.85rem] lg:text-[1.75rem] poppins font-light max-w-[20ch] md:pt-[1rem] md:text-[1.25rem] md:pl-[2rem] sm:text-[1.25rem]">
							Social Engineering
						</p>
						<Link href="/Services/Social_Engineering">
							<div className="w-[90px] h-[50px] 2xl:w-[76px] 2xl:h-[42px] bg-white rounded-3xl flex justify-center items-center ml-[3rem] mt-[1rem] md:ml-[2rem] md:w-[50px] md:h-[25px] sm:h-[30px]">
								<img
									className="h-[1.5rem] w-[1.5rem] sm:h-[1rem] sm:w-[1rem] "
									src="/arrow2.png"
									alt="arrow"
									height={24}
									width={24}
								/>
							</div>
						</Link>
					</div>
				</div>
				<div className=" ml-[1rem] sm:ml-[0]">
					<div
						data-aos="fade-left"
						data-aos-duration="1000"
						className="w-[600px] h-[310px] 2xl:w-[502px] 2xl:h-[249px] lg:h-[220px] text-[#c5c5c5] bg-[#131313] hover:text-white transition-all cursor-pointer hover:bg-[url('/sec2.png')] bg-cover mt-[2rem] rounded-2xl lg:w-[400px] md:w-[250px] md:h-[160px] sm:h-[140px] sm:w-[260px] sm:mt-[1rem]">
						<p className="text-[#c5c5c5] pl-[3rem] pt-[2rem] text-[2.125rem] 2xl:text-[1.85rem] lg:text-[1.75rem] poppins font-light max-w-[20ch] md:pt-[1rem] md:text-[1.25rem] md:pl-[2rem] sm:text-[1.25rem]">
							Firewall Config Review
						</p>
						<Link href="/Services/Firewall_Configuration_Review">
							<div className="w-[90px] h-[50px] 2xl:w-[76px] 2xl:h-[42px] bg-white rounded-3xl flex justify-center items-center ml-[3rem] mt-[1rem] md:ml-[2rem] md:w-[50px] md:h-[25px] sm:h-[30px]">
								<img
									className="h-[1.5rem] w-[1.5rem] sm:h-[1rem] sm:w-[1rem] "
									src="/arrow2.png"
									alt="arrow"
									height={24}
									width={24}
								/>
							</div>
						</Link>
					</div>
					<div
						data-aos="fade-left"
						data-aos-duration="1000"
						className="w-[600px] h-[310px] 2xl:w-[502px] 2xl:h-[249px] lg:h-[220px] text-[#c5c5c5] bg-[#131313] hover:text-white transition-all cursor-pointer hover:bg-[url('/sec2.png')] bg-cover mt-[2rem] rounded-2xl lg:w-[400px] md:w-[250px] md:h-[160px] sm:h-[140px] sm:w-[260px] sm:mt-[1rem]">
						<p className="text-[#c5c5c5] pl-[3rem] pt-[2rem] text-[2.125rem] 2xl:text-[1.85rem] lg:text-[1.75rem] poppins font-light max-w-[20ch] md:pt-[1rem] md:text-[1.25rem] md:pl-[2rem] sm:text-[1.25rem]">
							Vulnerability Assessment
						</p>
						<Link href="/Services/Vulnerability_Assessment">
							<div className="w-[90px] h-[50px] 2xl:w-[76px] 2xl:h-[42px] bg-white rounded-3xl flex justify-center items-center ml-[3rem] mt-[1rem] md:ml-[2rem] md:w-[50px] md:h-[25px] sm:h-[30px]">
								<img
									className="h-[1.5rem] w-[1.5rem] sm:h-[1rem] sm:w-[1rem] "
									src="/arrow2.png"
									alt="arrow"
									height={24}
									width={24}
								/>
							</div>
						</Link>
					</div>
					<div
						data-aos="fade-left"
						data-aos-duration="1000"
						className="w-[600px] h-[310px] 2xl:w-[502px] 2xl:h-[249px] lg:h-[220px] text-[#c5c5c5] bg-[#131313] hover:text-white transition-all cursor-pointer hover:bg-[url('/sec2.png')] bg-cover mt-[2rem] rounded-2xl lg:w-[400px] md:w-[250px] md:h-[160px] sm:h-[140px] sm:w-[260px] sm:mt-[1rem]">
						<p className="text-[#c5c5c5] pl-[3rem] pt-[2rem] text-[2.125rem] 2xl:text-[1.85rem] lg:text-[1.75rem] poppins font-light max-w-[20ch] md:pt-[1rem] md:text-[1.25rem] md:pl-[2rem] sm:text-[1.25rem]">
							Network Peneration Testing
						</p>
						<Link href="/Services/Network_Peneration_Testing">
							<div className="w-[90px] h-[50px] 2xl:w-[76px] 2xl:h-[42px] bg-white rounded-3xl flex justify-center items-center ml-[3rem] mt-[1rem] md:ml-[2rem] md:w-[50px] md:h-[25px] sm:h-[30px]">
								<img
									className="h-[1.5rem] w-[1.5rem] sm:h-[1rem] sm:w-[1rem] "
									src="/arrow2.png"
									alt="arrow"
									height={24}
									width={24}
								/>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Fourth_Section;
