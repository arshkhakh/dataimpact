"use client";
import React, { useState } from "react";
import Header_Black from "../components/Header_Black";
import Mobile_Header from "../components/Mobile_Header";
import Footer from "../components/Footer";

const Page = () => {
	const [details, setDetails] = useState({
		access_key: process.env.ACCESS_KEY,
		first_name: "",
		last_name: "",
		email: "",
		number: "",
		message: "",
	});

	const submitForm = async () => {
		let data = JSON.stringify({
			...details,
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
			setDetails({
				access_key: process.env.ACCESS_KEY,
				first_name: "",
				last_name: "",
				email: "",
				number: "",
				message: "",
			});
		}
	};

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
			<div className="flex items-center justify-center h-screen">
				<div className="contact_form_bg sm:rounded-lg h-[40rem] w-[62rem] lg:w-[52rem] lg:h-[42rem] md:w-[40rem] sm:w-[20rem] sm:h-[45rem] flex flex-col items-center">
					<h1 className="mt-[5rem] mb-[2rem] ml-[-32rem] text-lg lg:ml-[-27rem] md:ml-[-18rem] sm:mt-[3rem] sm:text-base sm:ml-0 font-medium poppins">
						Want to talk? Talk to us today!
					</h1>
					<div className="w-[62rem] lg:w-[52rem] md:w-[40rem] sm:w-[20rem] px-[6.5rem] lg:px-[4rem] md:px-[3rem] sm:px-[2.5rem] flex flex-wrap sm:flex-nowrap sm:flex-col poppins gap-4 sm:gap-8">
						<div>
							<h2 className="mb-[0.25rem]">First Name:</h2>
							<input
								required
								value={details.first_name}
								onChange={(e) => {
									setDetails({ ...details, first_name: e.target.value });
								}}
								className="bg-[#D7D7D7] w-[20rem] md:w-[14.25rem] h-[2.25rem] text-[11px] tracking-[0.875px] pl-[1rem] rounded-md placeholder:text-[11px] outline-none"
								placeholder="First Name"></input>
						</div>
						<div className="ml-[4rem] lg:ml-[3rem] md:ml-[3rem] sm:ml-0">
							<h2 className="mb-[0.25rem]">Last Name:</h2>
							<input
								required
								value={details.last_name}
								onChange={(e) => {
									setDetails({ ...details, last_name: e.target.value });
								}}
								className="bg-[#D7D7D7] w-[20rem] md:w-[14.25rem] h-[2.25rem] text-[11px] tracking-[0.875px] pl-[1rem] rounded-md placeholder:text-[11px] outline-none"
								placeholder="Last Name"></input>
						</div>
						<div>
							<h2 className="mb-[0.25rem] mt-[2rem] sm:mt-0">Email Address:</h2>
							<input
								required
								value={details.email}
								onChange={(e) => {
									setDetails({ ...details, email: e.target.value });
								}}
								className="bg-[#D7D7D7] w-[20rem] md:w-[14.25rem] h-[2.25rem] text-[11px] tracking-[0.875px] pl-[1rem] rounded-md placeholder:text-[11px] outline-none"
								placeholder="Email Address"></input>
						</div>
						<div className="ml-[4rem] lg:ml-[3rem] md:ml-[3rem] sm:ml-0 ">
							<h2 className="mb-[0.25rem] mt-[2rem] sm:mt-0">
								Contact Number:
							</h2>

							<input
								required
								value={details.number}
								onChange={(e) => {
									setDetails({ ...details, number: e.target.value });
								}}
								className="bg-[#D7D7D7] w-[20rem] md:w-[14.25rem] h-[2.25rem] text-[11px] tracking-[0.875px] pl-[1rem] rounded-md placeholder:text-[11px] outline-none"
								placeholder="Contact Number"></input>
						</div>
						<div>
							<h2 className="mb-[0.25rem] mt-[2rem] sm:mt-0">Messages:</h2>
							<textarea
								required
								value={details.message}
								onChange={(e) => {
									setDetails({ ...details, message: e.target.value });
								}}
								className="bg-[#D7D7D7] py-[0.5rem] w-[20rem] md:w-[14.25rem] h-[5rem] text-[11px] tracking-[0.875px] px-[1rem] rounded-md placeholder:h-[4rem] placeholder:text-[11px] outline-none"
								rows="3"
								placeholder="Messages"></textarea>
						</div>
					</div>
					<button
						onClick={submitForm}
						className="mt-[3rem] submit_button text-white h-[3.25rem] md:h-[2.75rem] md:w-[8rem] w-[9.125rem] sm:mt-[2rem] rounded-[41px] poppins font-medium tracking-wider">
						Submit
					</button>
				</div>
			</div>
			<div className="flex h-[38vh] lg:mb-[3rem] lg:overflow-x-hidden lg:h-[30vh] md:h-[15rem] sm:flex-col sm:h-[15rem]">
				<div className="w-[50vw] md:w-[45vw] sm:w-[100vw]">
					<h2 className="poppins text-[30px] font-normal leading-[44px] tracking-[1.7px] ml-[16rem] mt-[13vh] lg:mt-[12vh] lg:ml-[10rem] md:mt-[6rem] md:ml-[4rem] md:text-[22px] sm:mt-[3vh] sm:mx-[2.5rem] sm:text-[16px]">
						Newsletter
					</h2>
					<p className="poppins text-[16px] font-light leading-6 tracking-[0.51px] ml-[16.1rem] w-[28vw] mt-2 lg:text-[14px] lg:w-[30vw] lg:ml-[10rem] md:ml-[4rem] md:text-[14px] md:mt-1 md:tracking-[.30px] md:leading-5 sm:w-[70vw] sm:mx-[2.5rem] sm:mt-0 sm:text-[14px]">
						Keep up to date with the latest cybersecurity news and developments.
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
						<button
							onClick={submitLetter}
							className="w-[132px] h-[44px] rounded-[35px] bg-black mt-[15vh] ml-[1rem] lg:w-[130px] lg:h-[40px] lg:mt-[13vh] md:mt-[8rem] md:w-[110px] md:h-[35px] sm:mt-[1rem] sm:ml-0">
							<p className="text-white poppins font-light leading-7 tracking-[1.05px] text-[15px] md:text-[12px]">
								Subscribe
							</p>
						</button>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Page;
