"use client";
import React, { useState } from "react";
import Header_Black from "../components/Header_Black";
import Footer from "../components/Footer";
import Mobile_Header from "../components/Mobile_Header";
const Page = () => {
	const [news, setNews] = useState({
		access_key: process.env.ACCESS_KEY,
		email: "",
	});

	const submitLetter = async () => {
		let data = JSON.stringify({
			...news,
		});
		const res = await fetch("https://api.web3forms.com/submit", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: data,
		}).then((res) => res.json());

		if (res.success) {
			alert("success!!");
			setNews({
				access_key: process.env.ACCESS_KEY,
				email: "",
			});
		}
	};
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
			<div className=" overflow-x-hidden lg:overflow-x-hidden">
				{/* section1 */}
				<div className="flex  sm:flex-col ">
					<div className="pl-[3rem] md:pl-[1.5rem] w-[50vw] sm:w-auto sm:mx-[3rem] sm:pl-0">
						<h1 className="poppins  text-[45px] font-medium leading-8 text-black mt-[8rem] ml-[3rem] lg:text-[35px] lg:leading-6 lg:mt-[6rem] lg:ml-[2rem] md:text-[25px] md:leading-5 md:mt-[4.5rem] md:ml-[1.5rem] sm:text-[22px] sm:mx-0 sm:mt-[4rem]">
							About Us
						</h1>
						<p className="mt-6 mx-[3rem] text-[18px] poppins font-normal leading-7 lg:mt-4 lg:mx-[2.3rem] lg:text-[14px] lg:leading-6 md:leading-5 md:mt-3 md:ml-[1.5rem] md:w-[300px] md:text-[14px] sm:mx-0 sm:mr-[3rem] sm:text-[13px] sm:w-[280px]">
							Welcome to Data Impact, a leading name in the world of penetration
							testing and vulnerability assessment. We are dedicated to
							enhancing the security posture of your digital assets, providing
							you with the confidence to operate in an increasingly
							interconnected and fast-paced digital landscape.
						</p>
					</div>
					<div className="w-[50vw] ml-4 md:ml-2 sm:w-[100vw] sm:ml-0 sm:mt-[4rem]">
						<img
							className="object-cover w-[50vw] h-[787px] lg:h-[600px] lg:w-[800px] md:h-[530px] sm:h-[350px]"
							src="/about_us_final.jpg"
							alt="Photo"
							height={600}
							width={650}
						/>
					</div>
				</div>

				{/* Section2 */}

				<div className="h-[110vh] bg-black text-white lg:h-[750px] md:h-[760px] sm:h-[840px]">
					<h2 className="text-center text-[45px] poppins font-light leading-[30px] pt-20 lg:text-[35px] lg:leading-[20px] lg:pt-16 md:text-[25px] md:leading-[15px] md:pt-12 sm:pt-[4rem] sm:text-[19px] sm:leading-[10px]">
						Why Choose Us
					</h2>
					<div className="flex mt-20 md:mt-[4rem] sm:flex-col sm:mt-[3rem] ">
						<div className="w-[50vw] pl-[8rem]  lg:pl-[6rem] md:pl-[4rem] sm:w-[100vw] sm:px-[3rem] ">
							<h2 className="poppins text-[25px] font-normal leading-7 lg:text-[20px] lg:leading-6 md:text-[20px] md:leading-5 sm:text-[16px] sm:leading-4">
								Expertise
							</h2>
							<p className="w-[580px] h-[124px] leading-7 pt-4 text-[15px] text-[#a8a8a8] lg:pt-2 lg:text-[14px] lg:w-[400px] lg:h-[80px] md:text-[12px] md:w-[300px] md:h-[70px]  md:leading-6 sm:h-[35px] sm:leading-5  ">
								Our team consists of certified professionals with extensive
								experience in the field of cybersecurity. We bring a diverse
								skill set to the table, ensuring that every aspect of your
								digital ecosystem is thoroughly assessed.
							</p>
							<h2 className="poppins text-[25px] font-normal leading-7 mt-[6rem] lg:text-[20px]  lg:leading-6 md:text-[20px] md:leading-6 sm:text-[16px] sm:leading-4 ">
								Customized Solutions
							</h2>
							<p className="w-[580px] h-[124px] leading-7  pt-4 text-[15px] text-[#a8a8a8] lg:pt-2 lg:text-[14px] lg:w-[400px] lg:h-[80px] md:text-[12px] md:w-[300px] md:h-[70px]  md:leading-6 sm:h-[35px] sm:leading-5">
								We understand that every business is unique. Our approach is
								tailored to your specific needs, providing you with practical
								and relevant solutions that align with your objectives and
								industry best practices.
							</p>
							<h2 className="poppins text-[25px] font-normal leading-7 mt-[6rem] lg:text-[20px]  lg:leading-6 md:text-[20px] md:leading-5 sm:text-[16px] sm:leading-4 ">
								Continual Improvement
							</h2>
							<p className="w-[580px] h-[124px] leading-7  pt-4 text-[15px] text-[#a8a8a8] lg:pt-2 lg:text-[14px] lg:w-[400px] lg:h-[80px] md:text-[12px] md:w-[300px] md:h-[70px]  md:leading-6 sm:h-[35px] sm:leading-5">
								Cyber threats are ever-changing, and so are our strategies. We
								continually refine our methodologies to ensure we&lsquo;re at
								the forefront of emerging threats and security solutions
							</p>
						</div>
						<div className="w-[50vw] pl-[8rem] lg:pl-[5rem] md:pl-[3rem] sm:px-[3rem] sm:w-[100vw] sm:mt-[4.8rem] ">
							<h2 className="poppins text-[25px] font-normal leading-7 lg:text-[20px]  lg:leading-6 md:text-[20px] md:leading-5 sm:text-[16px] sm:leading-4 ">
								Cutting-Edge Tools
							</h2>
							<p className="w-[580px] h-[124px] leading-7  pt-4 text-[15px] text-[#a8a8a8] lg:text-[14px] lg:w-[400px] lg:h-[80px] lg:pt-2 md:text-[12px] md:w-[300px] md:h-[70px] md:leading-6 sm:h-[35px] sm:leading-5">
								We leverage the latest tools and technologies to conduct our
								assessments, staying current with the rapidly evolving threat
								landscape.
							</p>
							<h2 className="poppins text-[25px] font-normal leading-7 mt-[6rem]  lg:text-[20px]  lg:leading-6 md:text-[20px] md:leading-5 md:mt-[6rem] sm:text-[16px] sm:leading-4 sm:mt-[4rem]">
								Transparent Communication
							</h2>
							<p className="w-[580px] h-[124px] leading-7  pt-4 text-[15px] text-[#a8a8a8] lg:pt-2 lg:text-[14px] lg:w-[400px] lg:h-[80px] md:text-[12px] md:w-[300px] md:h-[70px]  md:leading-6 sm:h-[35px] sm:leading-5">
								Throughout the assessment process, we maintain open and
								transparent communication. You&lsquo;ll receive regular updates
								and detailed reports that outline the findings and
								recommendations in a clear, non-technical manner.
							</p>
						</div>
					</div>
				</div>

				{/* Third Section */}
				<div className="flex h-[38vh] lg:mb-[3rem] lg:overflow-x-hidden lg:h-[30vh] md:h-[15rem] sm:flex-col sm:h-[15rem]">
					<div className="w-[50vw] md:w-[45vw] sm:w-[100vw]">
						<h2 className="poppins text-[30px] font-normal leading-[40px] tracking-[1.7px] ml-[16rem] mt-[13vh] lg:mt-[12vh] lg:ml-[10rem] md:mt-[6rem] md:ml-[4rem] md:text-[22px] sm:mt-[3vh] sm:mx-[2.5rem] sm:text-[16px]">
							Newsletter
						</h2>
						<p className="poppins text-[16px] font-light leading-6 tracking-[0.51px] ml-[16.1rem] w-[28vw] mt-2 lg:text-[14px] lg:w-[30vw] lg:ml-[10rem] md:ml-[4rem] md:text-[14px] md:mt-1 md:tracking-[.30px] md:leading-5 sm:w-[70vw] sm:mx-[2.5rem] sm:mt-0 sm:text-[14px]">
							Keep up to date with the latest cybersecurity news and
							developments.
						</p>
					</div>
					<div className="flex ml-[10rem] lg:ml-[4rem] md:ml-[2rem] sm:flex-col sm:mx-[2.5rem]">
						<div>
							<input
								required
								value={news.email}
								onChange={(e) => {
									setNews({
										...news,
										email: e.target.value,
									});
								}}
								className="poppins w-[280px] lg:w-[230px] md:w-[180px] sm:w-[300px] outline-none text-[15px] font-normal leading-7 tracking-[1.05px] mt-[16vh] lg:mt-[13vh] md:mt-[8.5rem] md:text-[12px] md:leading-5 sm:mt-[4vh] sm:text-[14px] placeholder:poppins"
								placeholder="Email address"></input>
							<div className="w-[280px] h-[2px] bg-black pl-[5rem] lg:w-[230px] md:w-[180px] sm:w-[280px]"></div>
						</div>
						<div>
							<button className="w-[132px] h-[44px] rounded-[35px] bg-black mt-[15vh] ml-[1rem] lg:w-[130px] lg:h-[40px] lg:mt-[13vh] md:mt-[8rem] md:w-[110px] md:h-[35px] sm:mt-[1rem] sm:ml-0">
								<p
									onClick={submitLetter}
									className="text-white poppins font-light leading-7 tracking-[1.05px] text-[15px] md:text-[12px]">
									Subscribe
								</p>
							</button>
						</div>
					</div>
				</div>
				<div>
					<Footer />
				</div>
			</div>
		</>
	);
};

export default Page;
