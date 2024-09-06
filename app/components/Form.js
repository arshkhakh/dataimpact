"use client";
import React, { useState } from "react";
import Header_Black from "../components/Header_Black";
import Mobile_Header from "../components/Mobile_Header";

const Form = () => {
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
	return (
		<>
			<div className="flex items-center justify-center h-screen">
				<div className="contact_form_bg sm:rounded-lg h-[40rem] w-[62rem] lg:w-[52rem] lg:h-[42rem] md:w-[40rem] sm:w-[20rem] sm:h-[45rem] flex flex-col items-center">
					<h1 className="mt-[5rem] mb-[2rem] ml-[-32rem] text-lg lg:ml-[-27rem] md:ml-[-18rem] sm:mt-[3rem] sm:text-base sm:ml-0 font-medium poppins">
						Want to talk? Talk to us today!
					</h1>
					<div className="w-[62rem] lg:w-[52rem] md:w-[40rem] sm:w-[20rem] px-[6.5rem] lg:px-[4rem] md:px-[3rem] sm:px-[2.5rem] flex flex-wrap sm:flex-nowrap sm:flex-col poppins gap-4 sm:gap-8">
						<div>
							<h2 className="mb-[0.25rem]">First Name:</h2>
							<input
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
		</>
	);
};

export default Form;
