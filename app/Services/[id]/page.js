"use client";
import React, { useEffect, useState } from "react";
import Header_Black from "../../components/Header_Black";
import Form from "../../components/Form";
import Footer from "../../components/Footer";
import Mobile_Header from "@/app/components/Mobile_Header";
import Aos from "aos";
import "aos/dist/aos.css";

const Page = ({ params }) => {
	useEffect(() => {
		Aos.init();
	}, []);
	const [state, setState] = useState({
		sec1: false,
		sec2: false,
		sec3: false,
		sec4: false,
		sec5: false,
		sec6: false,
	});

	useEffect(() => {
		if (params.id === "Web_Application_Security") {
			setState({
				...state,
				sec1: true,
			});
		}
		if (params.id === "Firewall_Configuration_Review") {
			setState({
				...state,
				sec2: true,
			});
		}
		if (params.id === "API_Security_Testing") {
			setState({
				...state,
				sec3: true,
			});
		}
		if (params.id === "Vulnerability_Assessment") {
			setState({
				...state,
				sec4: true,
			});
		}
		if (params.id === "Social_Engineering") {
			setState({
				...state,
				sec5: true,
			});
		}
		if (params.id === "Network_Peneration_Testing") {
			setState({
				...state,
				sec6: true,
			});
		}
	}, []);


	


	return (
		<>
			<div className="select-none overflow-whidden">
				<div className="w-screen top-0 md:hidden z-[99]">
					<Header_Black />
				</div>
				<div className="bg-black hidden w-screen md:inline-block">
					<Mobile_Header />
				</div>
			</div>
			{state.sec1 && <Section_one />}
			{state.sec2 && <Section_two />}
			{state.sec3 && <Section_three />}
			{state.sec4 && <Section_four />}
			{state.sec5 && <Section_five />}
			{state.sec6 && <Section_six />}
			<div data-aos="zoom-in" data-aos-duration="1000">
				<Form />
			</div>
			<Footer />
		</>
	);
};

export default Page;

const Section_one = () => {
	return (
		<>
			<div className="overflow-hidden">
				<div className="landing_conatiner h-screen">
					<div className="" data-aos="fade-up" data-aos-duration="1000">
						<h4 className="text-white poppins text-[16px] font-normal leading-[28.5px] tracking-[0.48px] pl-[8rem] pt-[16rem] lg:pl-[6rem] sm:pl-[4rem] ">
							SERVICES
						</h4>
						<h2 className="text-white poppins text-[48px] font-normal leading-[30px] pt-[3.8rem] pl-[7.6rem] lg:pl-[5.6rem] sm:text-[24px] sm:pl-[3.6rem] sm:pt-[2rem] sm:w-[22rem] ">
							Web Application Security
						</h2>
						<p className="text-[#909090] poppins text-[18px] font-light leading-[28.5px] tracking-[0.54px] pl-[8rem] pt-[2.5rem] w-[50rem] lg:pl-[6rem] lg:w-[45rem] sm:w-[22rem] sm:pl-[4rem] sm:text-[14px] sm:leading-[24px] sm:pt-[1.5rem]">
							Unlocking Digital Fortresses: Comprehensive Web Application
							Penetration Testing for Your Business
						</p>
					</div>
				</div>

				{/* Second section */}

				<div
					className="bg-black h-screen flex justify-center items-center sm:flex-col"
					data-aos="fade-down"
					data-aos-duration="1000">
					<div className="w-[50rem] lg:w-[40rem] md:w-[35rem] sm:w-[16rem] sm:mb-8">
						<h2 className="text-white poppins text-[32px] font-normal leading-[41.5px] tracking-[0.96px] w-[35rem] pl-[7rem] lg:pl-[4rem] lg:w-[30rem] md:text-[26px] md:w-[25rem] md:leading-[35px] sm:pl-0 sm:text-[18px] sm:w-[17rem]">
							Why Web Application Penetration Testing Matters:
						</h2>
						<p className="text-[#B3B3B3] poppins text-[16px] font-normal leading-[28.5px] tracking-[0.48px] pl-[7rem] w-[40rem] pt-[2rem] lg:pl-[4rem] lg:w-[35rem] md:w-[25rem] md:text-[13px] md:leading-[24px] sm:pl-0 sm:w-[17rem] sm:text-[12px] sm:pt-[1.5rem]">
							In a world where a single vulnerability can lead to catastrophic
							breaches, the significance of web application penetration testing
							cannot be overstated. Our services empower you to proactively
							uncover security gaps that could otherwise jeopardize your
							business operations, reputation, and customer trust.
						</p>
					</div>
					<div>
						<img
							className="pr-[2rem] w-[573px] lg:w-[400px] lg:pr-[3.5rem] lg:h-[530px] md:w-[450px] md:h-[480px] md:pr-[2.5rem] sm:w-[375px] sm:pr-0 sm:h-[265px]"
							src="/web_app.jpg"
							alt=""
							height={593}
							width={573}
						/>
					</div>
				</div>
				<div className="flex justify-evenly sm:flex-col">
					<div className="" data-aos="fade-right" data-aos-duration="1000">
						<p className="text-black poppins text-[32px] font-normal leading-[41.5px] tracking-[0.96px] pt-[8rem] lg:pl-[7rem] md:pl-[5rem] md:text-[24px] sm:pt-[2rem] sm:pl-[3rem]">
							Partner with Us:
						</p>
					</div>
					<div data-aos="fade-left" data-aos-duration="1000">
						<p className="text-black poppins text-[16px] font-medium leading-[28.5px] tracking-[0.48px] w-[35rem] pt-[6rem] lg:w-[27rem] md:w-[22rem] md:text-[14px] md:leading-[24px] sm:pl-[3rem] sm:pt-[1rem] sm:text-[12px] sm:leading-[20px] sm:w-[21rem]">
							Elevate your defenses, protect your assets, and stay one step
							ahead of cyber threats. Reach out to us today to embark on a
							journey towards a secure digital future. Let&apos;s transform
							vulnerabilities into opportunities together.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

const Section_two = () => {
	return (
		<>
			<div className="overflow-hidden">
				<div className="landing_conatiner h-screen">
					<div className="" data-aos="fade-up" data-aos-duration="1000">
						<h4 className="text-white poppins text-[16px] font-normal leading-[28.5px] tracking-[0.48px] pl-[8rem] pt-[16rem] lg:pl-[6rem] sm:pl-[4rem] ">
							SERVICES
						</h4>
						<h2 className="text-white poppins text-[48px] font-normal leading-[30px] pt-[3.8rem] pl-[7.6rem] lg:pl-[5.6rem] sm:text-[24px] sm:pl-[3.6rem] sm:pt-[2rem] sm:w-[22rem] ">
							Firewall Configuration Review
						</h2>
						<p className="text-[#909090] poppins text-[18px] font-light leading-[28.5px] tracking-[0.54px] pl-[8rem] pt-[2.5rem] w-[50rem] lg:pl-[6rem] lg:w-[45rem] sm:w-[22rem] sm:pl-[4rem] sm:text-[14px] sm:leading-[24px] sm:pt-[1.5rem]">
							Building Digital Strongholds: Firewall Configuration Review for
							Unwavering Security
						</p>
					</div>
				</div>

				{/* Second section */}

				<div
					className="bg-black h-screen flex justify-center items-center sm:flex-col"
					data-aos="fade-down"
					data-aos-duration="1000">
					<div className="w-[50rem] lg:w-[40rem] md:w-[35rem] sm:w-[16rem] sm:mb-8">
						<h2 className="text-white poppins text-[32px] font-normal leading-[41.5px] tracking-[0.96px] w-[35rem] pl-[7rem] lg:pl-[4rem] lg:w-[30rem] md:text-[26px] md:w-[25rem] md:leading-[35px] sm:pl-0 sm:text-[18px] sm:w-[17rem]">
							Custom-Tailored Firewall Solutions:
						</h2>
						<p className="text-[#B3B3B3] poppins text-[16px] font-normal leading-[28.5px] tracking-[0.48px] pl-[7rem] w-[40rem] pt-[2rem] lg:pl-[4rem] lg:w-[35rem] md:w-[25rem] md:text-[13px] md:leading-[24px] sm:pl-0 sm:w-[17rem] sm:text-[12px] sm:pt-[1.5rem]">
							Every organization&apos;s network is unique, and so are its
							security needs. Our firewall configuration solutions are designed
							to meet the specific requirements of your industry. From finance
							to healthcare, e-commerce to manufacturing, we align your firewall
							strategies with your sector&apos;s demands.
						</p>
					</div>
					<div>
						<img
							className="pr-[2rem] w-[573px] lg:w-[400px] lg:pr-[3.5rem] lg:h-[530px] md:w-[450px] md:h-[480px] md:pr-[2.5rem] sm:w-[375px] sm:pr-0 sm:h-[265px]"
							src="/firewalll_services.jpg"
							alt=""
							height={593}
							width={600}
						/>
					</div>
				</div>
				<div className="flex justify-evenly sm:flex-col">
					<div className="" data-aos="fade-right" data-aos-duration="1000">
						<p className="text-black poppins text-[32px] font-normal leading-[41.5px] tracking-[0.96px] pt-[8rem] lg:pl-[7rem] md:pl-[5rem] md:text-[24px] sm:pt-[2rem] sm:pl-[3rem]">
							Secure Your Digital Perimeter:
						</p>
					</div>
					<div data-aos="fade-left" data-aos-duration="1000">
						<p className="text-black poppins text-[16px] font-medium leading-[28.5px] tracking-[0.48px] w-[35rem] pt-[6rem] lg:w-[27rem] md:w-[22rem] md:text-[14px] md:leading-[24px] sm:pl-[3rem] sm:pt-[1rem] sm:text-[12px] sm:leading-[20px] sm:w-[21rem]">
							Elevate your network security, bolster your defenses, and shield
							your critical assets. Contact us today to embark on a journey
							toward enhanced firewall configurations. Together, let&apos;s
							transform your digital stronghold into an unyielding fortress.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

const Section_three = () => {
	return (
		<>
			<div className="overflow-hidden">
				<div className="landing_conatiner h-screen">
					<div className="" data-aos="fade-up" data-aos-duration="1000">
						<h4 className="text-white poppins text-[16px] font-normal leading-[28.5px] tracking-[0.48px] pl-[8rem] pt-[16rem] lg:pl-[6rem] sm:pl-[4rem] ">
							SERVICES
						</h4>
						<h2 className="text-white poppins text-[48px] font-normal leading-[30px] pt-[3.8rem] pl-[7.6rem] lg:pl-[5.6rem] sm:text-[24px] sm:pl-[3.6rem] sm:pt-[2rem] sm:w-[22rem] ">
							API Security Testing
						</h2>
						<p className="text-[#909090] poppins text-[18px] font-light leading-[28.5px] tracking-[0.54px] pl-[8rem] pt-[2.5rem] w-[50rem] lg:pl-[6rem] lg:w-[45rem] sm:w-[22rem] sm:pl-[4rem] sm:text-[14px] sm:leading-[24px] sm:pt-[1.5rem]">
							Unleashing Unrivaled API Security: Safeguarding Your Digital
							Connections
						</p>
					</div>
				</div>

				{/* Second section */}

				<div
					className="bg-black h-screen flex justify-center items-center sm:flex-col"
					data-aos="fade-down"
					data-aos-duration="1000">
					<div className="w-[50rem] lg:w-[40rem] md:w-[35rem] sm:w-[16rem] sm:mb-8">
						<h2 className="text-white poppins text-[32px] font-normal leading-[41.5px] tracking-[0.96px] w-[35rem] pl-[7rem] lg:pl-[4rem] lg:w-[30rem] md:text-[26px] md:w-[25rem] md:leading-[35px] sm:pl-0 sm:text-[18px] sm:w-[17rem]">
							The API Security Imperative:
						</h2>
						<p className="text-[#B3B3B3] poppins text-[16px] font-normal leading-[28.5px] tracking-[0.48px] pl-[7rem] w-[40rem] pt-[2rem] lg:pl-[4rem] lg:w-[35rem] md:w-[25rem] md:text-[13px] md:leading-[24px] sm:pl-0 sm:w-[17rem] sm:text-[12px] sm:pt-[1.5rem]">
							In an era where data flows seamlessly between applications, the
							security of your APIs is paramount. At Data Inspect, we recognize
							the importance of securing these digital bridges, ensuring that
							your data remains confidential, integrity is maintained, and
							services are available when needed
						</p>
					</div>
					<div>
						<img
							className="pr-[2rem] w-[573px] lg:w-[400px] lg:pr-[3.5rem] lg:h-[530px] md:w-[450px] md:h-[480px] md:pr-[2.5rem] sm:w-[375px] sm:pr-0 sm:h-[265px]"
							src="/api_services.jpg"
							alt=""
							height={593}
							width={573}
						/>
					</div>
				</div>
				<div className="flex justify-evenly sm:flex-col">
					<div className="" data-aos="fade-right" data-aos-duration="1000">
						<p className="text-black poppins text-[32px] font-normal leading-[41.5px] tracking-[0.96px] pt-[8rem] lg:pl-[7rem] md:pl-[5rem] md:text-[24px] sm:pt-[2rem] sm:pl-[3rem]">
							Empower Your APIs:
						</p>
					</div>
					<div data-aos="fade-left" data-aos-duration="1000">
						<p className="text-black poppins text-[16px] font-medium leading-[28.5px] tracking-[0.48px] w-[35rem] pt-[6rem] lg:w-[27rem] md:w-[22rem] md:text-[14px] md:leading-[24px] sm:pl-[3rem] sm:pt-[1rem] sm:text-[12px] sm:leading-[20px] sm:w-[21rem]">
							Forge a partnership with us to strengthen your APIs, secure your
							data, and propel your business forward with confidence. Contact us
							today to embark on a journey towards fortified API security.
							Together, let&apos;s transform vulnerabilities into strengths.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

const Section_four = () => {
	return (
		<>
			<div className="overflow-hidden">
				<div className="landing_conatiner h-screen">
					<div className="" data-aos="fade-up" data-aos-duration="1000">
						<h4 className="text-white poppins text-[16px] font-normal leading-[28.5px] tracking-[0.48px] pl-[8rem] pt-[16rem] lg:pl-[6rem] sm:pl-[4rem] ">
							SERVICES
						</h4>
						<h2 className="text-white poppins text-[48px] font-normal leading-[30px] pt-[3.8rem] pl-[7.6rem] lg:pl-[5.6rem] sm:text-[24px] sm:pl-[3.6rem] sm:pt-[2rem] sm:w-[22rem] ">
							Vulnerability Assessment
						</h2>
						<p className="text-[#909090] poppins text-[18px] font-light leading-[28.5px] tracking-[0.54px] pl-[8rem] pt-[2.5rem] w-[50rem] lg:pl-[6rem] lg:w-[45rem] sm:w-[22rem] sm:pl-[4rem] sm:text-[14px] sm:leading-[24px] sm:pt-[1.5rem]">
							Navigating the Threat Landscape: Comprehensive Vulnerability
							Assessment for Your Digital Resilience
						</p>
					</div>
				</div>

				{/* Second section */}

				<div
					className="bg-black h-screen flex justify-center items-center sm:flex-col"
					data-aos="fade-down"
					data-aos-duration="1000">
					<div className="w-[50rem] lg:w-[40rem] md:w-[35rem] sm:w-[16rem] sm:mb-8">
						<h2 className="text-white poppins text-[32px] font-normal leading-[41.5px] tracking-[0.96px] w-[35rem] pl-[7rem] lg:pl-[4rem] lg:w-[30rem] md:text-[26px] md:w-[25rem] md:leading-[35px] sm:pl-0 sm:text-[18px] sm:w-[17rem]">
							Tailored Vulnerability Assessment Solutions:
						</h2>
						<p className="text-[#B3B3B3] poppins text-[16px] font-normal leading-[28.5px] tracking-[0.48px] pl-[7rem] w-[40rem] pt-[2rem] lg:pl-[4rem] lg:w-[35rem] md:w-[25rem] md:text-[13px] md:leading-[24px] sm:pl-0 sm:w-[17rem] sm:text-[12px] sm:pt-[1.5rem]">
							Every organization&apos;s digital landscape is unique, and so are
							its vulnerabilities. Our vulnerability assessment solutions are
							meticulously tailored to meet the demands of your industry. From
							finance to healthcare, e-commerce to energy, we safeguard your
							assets against unseen dangers.
						</p>
					</div>
					<div>
						<img
							className="pr-[2rem] w-[573px] lg:w-[400px] lg:pr-[3.5rem] lg:h-[530px] md:w-[450px] md:h-[480px] md:pr-[2.5rem] sm:w-[375px] sm:pr-0 sm:h-[265px]"
							src="/assess_services.jpg"
							alt=""
							height={593}
							width={573}
						/>
					</div>
				</div>
				<div className="flex justify-evenly sm:flex-col">
					<div className="" data-aos="fade-right" data-aos-duration="1000">
						<p className="text-black poppins text-[32px] font-normal leading-[41.5px] tracking-[0.96px] pt-[8rem] lg:pl-[7rem] md:pl-[5rem] md:text-[24px] sm:pt-[2rem] sm:pl-[3rem]">
							Empower Your Digital Resilience:
						</p>
					</div>
					<div data-aos="fade-left" data-aos-duration="1000">
						<p className="text-black poppins text-[16px] font-medium leading-[28.5px] tracking-[0.48px] w-[35rem] pt-[6rem] lg:w-[27rem] md:w-[22rem] md:text-[14px] md:leading-[24px] sm:pl-[3rem] sm:pt-[1rem] sm:text-[12px] sm:leading-[20px] sm:w-[21rem]">
							Equip yourself with the knowledge to face vulnerabilities head-on.
							Reach out to us today to embark on a journey toward bolstered
							security and fortified resilience. Together, let&apos;s turn
							vulnerabilities into stepping stones to a more secure digital
							future.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

const Section_five = () => {
	return (
		<>
			<div className="overflow-hidden">
				<div className="landing_conatiner h-screen">
					<div className="" data-aos="fade-up" data-aos-duration="1000">
						<h4 className="text-white poppins text-[16px] font-normal leading-[28.5px] tracking-[0.48px] pl-[8rem] pt-[16rem] lg:pl-[6rem] sm:pl-[4rem] ">
							SERVICES
						</h4>
						<h2 className="text-white poppins text-[48px] font-normal leading-[30px] pt-[3.8rem] pl-[7.6rem] lg:pl-[5.6rem] sm:text-[24px] sm:pl-[3.6rem] sm:pt-[2rem] sm:w-[22rem] ">
							Social Engineering
						</h2>
						<p className="text-[#909090] poppins text-[18px] font-light leading-[28.5px] tracking-[0.54px] pl-[8rem] pt-[2.5rem] w-[50rem] lg:pl-[6rem] lg:w-[45rem] sm:w-[22rem] sm:pl-[4rem] sm:text-[14px] sm:leading-[24px] sm:pt-[1.5rem]">
							Mastering Digital Defense: Guarding Against Social Engineering
							Threats
						</p>
					</div>
				</div>

				{/* Second section */}

				<div
					className="bg-black h-screen flex justify-center items-center sm:flex-col"
					data-aos="fade-down"
					data-aos-duration="1000">
					<div className="w-[50rem] lg:w-[40rem] md:w-[35rem] sm:w-[16rem] sm:mb-8">
						<h2 className="text-white poppins text-[32px] font-normal leading-[41.5px] tracking-[0.96px] w-[35rem] pl-[7rem] lg:pl-[4rem] lg:w-[30rem] md:text-[26px] md:w-[25rem] md:leading-[35px] sm:pl-0 sm:text-[18px] sm:w-[17rem]">
							Unmasking Social Engineering:
						</h2>
						<p className="text-[#B3B3B3] poppins text-[16px] font-normal leading-[28.5px] tracking-[0.48px] pl-[7rem] w-[40rem] pt-[2rem] lg:pl-[4rem] lg:w-[35rem] md:w-[25rem] md:text-[13px] md:leading-[24px] sm:pl-0 sm:w-[17rem] sm:text-[12px] sm:pt-[1.5rem]">
							In an age where technology connects us, cybercriminals exploit our
							trust, curiosity, and emotions. At Data Inspect, we unravel the
							world of social engineering – the art of manipulating human
							psychology to breach digital fortresses.
						</p>
					</div>
					<div>
						<img
							className="pr-[2rem] w-[573px] lg:w-[400px] lg:pr-[3.5rem] lg:h-[530px] md:w-[450px] md:h-[480px] md:pr-[2.5rem] sm:w-[375px] sm:pr-0 sm:h-[265px]"
							src="/social_engineering.jpg"
							alt=""
							height={593}
							width={573}
						/>
					</div>
				</div>
				<div className="flex justify-evenly sm:flex-col">
					<div className="" data-aos="fade-right" data-aos-duration="1000">
						<p className="text-black poppins text-[32px] font-normal leading-[41.5px] tracking-[0.96px] pt-[8rem] lg:pl-[7rem] md:pl-[5rem] md:text-[24px] sm:pt-[2rem] sm:pl-[3rem]">
							Empower Your Workforce:
						</p>
					</div>
					<div data-aos="fade-left" data-aos-duration="1000">
						<p className="text-black poppins text-[16px] font-medium leading-[28.5px] tracking-[0.48px] w-[35rem] pt-[6rem] lg:w-[27rem] md:w-[22rem] md:text-[14px] md:leading-[24px] sm:pl-[3rem] sm:pt-[1rem] sm:text-[12px] sm:leading-[20px] sm:w-[21rem]">
							Arm your employees with the knowledge and resilience needed to
							thwart social engineering threats. Contact us today to embark on a
							journey toward a workforce skilled in social engineering defense.
							Together, let&apos;s turn vulnerability into empowerment.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

const Section_six = () => {
	return (
		<>
			<div className="overflow-hidden">
				<div className="landing_conatiner h-screen">
					<div className="" data-aos="fade-up" data-aos-duration="1000">
						<h4 className="text-white poppins text-[16px] font-normal leading-[28.5px] tracking-[0.48px] pl-[8rem] pt-[16rem] lg:pl-[6rem] sm:pl-[4rem] ">
							SERVICES
						</h4>
						<h2 className="text-white poppins text-[48px] font-normal leading-[30px] pt-[3.8rem] pl-[7.6rem] lg:pl-[5.6rem] sm:text-[24px] sm:pl-[3.6rem] sm:pt-[2rem] sm:w-[22rem] ">
							Network Peneration Testing
						</h2>
						<p className="text-[#909090] poppins text-[18px] font-light leading-[28.5px] tracking-[0.54px] pl-[8rem] pt-[2.5rem] w-[50rem] lg:pl-[6rem] lg:w-[45rem] sm:w-[22rem] sm:pl-[4rem] sm:text-[14px] sm:leading-[24px] sm:pt-[1.5rem]">
							Navigating the Network&apos;s Depths: Unveiling Security Through
							Network Penetration Testing
						</p>
					</div>
				</div>

				{/* Second section */}

				<div
					className="bg-black h-screen flex justify-center items-center sm:flex-col"
					data-aos="fade-down"
					data-aos-duration="1000">
					<div className="w-[50rem] lg:w-[40rem] md:w-[35rem] sm:w-[16rem] sm:mb-8">
						<h2 className="text-white poppins text-[32px] font-normal leading-[41.5px] tracking-[0.96px] w-[35rem] pl-[7rem] lg:pl-[4rem] lg:w-[30rem] md:text-[26px] md:w-[25rem] md:leading-[35px] sm:pl-0 sm:text-[18px] sm:w-[17rem]">
							Our Battle-Tested Approach:
						</h2>
						<p className="text-[#B3B3B3] poppins text-[16px] font-normal leading-[28.5px] tracking-[0.48px] pl-[7rem] w-[40rem] pt-[2rem] lg:pl-[4rem] lg:w-[35rem] md:w-[25rem] md:text-[13px] md:leading-[24px] sm:pl-0 sm:w-[17rem] sm:text-[12px] sm:pt-[1.5rem]">
							Delve into our time-tested network penetration testing process. We
							simulate real-world cyberattacks to identify vulnerabilities,
							assess their impact, and provide you with actionable insights to
							fortify your network&apos;s defenses.
						</p>
					</div>
					<div>
						<img
							className="pr-[2rem] w-[573px] lg:w-[400px] lg:pr-[3.5rem] lg:h-[530px] md:w-[450px] md:h-[480px] md:pr-[2.5rem] sm:w-[375px] sm:pr-0 sm:h-[265px]"
							src="/network_services.jpg"
							alt=""
							height={593}
							width={573}
						/>
					</div>
				</div>
				<div className="flex justify-evenly sm:flex-col">
					<div className="" data-aos="fade-right" data-aos-duration="1000">
						<p className="text-black poppins text-[32px] font-normal leading-[41.5px] tracking-[0.96px] pt-[8rem] lg:pl-[7rem] md:pl-[5rem] md:text-[24px] sm:pt-[2rem] sm:pl-[3rem]">
							Empower Your Network&apos;s Security:
						</p>
					</div>
					<div data-aos="fade-left" data-aos-duration="1000">
						<p className="text-black poppins text-[16px] font-medium leading-[28.5px] tracking-[0.48px] w-[35rem] pt-[6rem] lg:w-[27rem] md:w-[22rem] md:text-[14px] md:leading-[24px] sm:pl-[3rem] sm:pt-[1rem] sm:text-[12px] sm:leading-[20px] sm:w-[21rem]">
							Prepare to face the digital battleground with confidence. Reach
							out to us today to embark on a journey toward enhanced network
							security and fortified resilience. Together, let&apos;s transform
							vulnerabilities into stepping stones to a more secure digital
							future.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};
