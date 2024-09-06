"use client";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
// import styles from "@/app/"
import { global } from "styled-jsx/css";
const Third_Section = () => {
	useEffect(() => {
		Aos.init();
	}, []);
	const defaultsx = {
		Oine: false,
		Tiwo: false,
		Tihree: false,
		Fiour: false,
		Foive: false,
	};
	const [state, setState] = useState({
		Oine: true,
		Tiwo: false,
		Tihree: false,
		Fiour: false,
		Foive: false,
	});
	return (
		<div className="h-screen body_bg overflow-x-hidden overflow-y-hidden sm:overflow-x-hidden sm:min-h-[80rem]">
			<h1
				data-aos="fade-down"
				data-aos-duration="1000"
				className="text-[2.5rem] poppins mt-[3rem] ml-[9rem] md:mx-2 md:text-center font-medium sm:leading-[45px] sm:mb-[1rem]">
				Our Approach To Security
			</h1>
			<div className="flex justify-center items-center sm:items-start">
				<div className=" flex justify-center items-center sm:justify-start md:flex-col pl-[1rem] h-[35rem] sm:h-[68rem] pt-[1rem] sm:pl-0 sm:pt-0  ">
					<div
						data-Aos="fade-right"
						data-aos-duration="1000"
						className=" flex flex-col md:mt-[4rem] sm:mt-0 sm:justify-center sm:items-center md:flex-row md:flex-wrap sm:mx-3">
						<button
							className={`${
								state.Oine ? `actives` : ``
							} bg-[#202020] but3 font-semibold rounded-[3rem] text-white w-[8rem] h-[3rem] lg:ml-[1rem] md:ml-[1rem] md:mt-[2rem] md:w-[5rem] md:h-[2.5rem] md:text-[.8rem] sm:w-[5.2rem] sm:h-[2.2rem] sm:text-[.7rem] sm:mt-[1rem] sm:ml-0`}
							onClick={() => {
								setState({ ...defaultsx, Oine: true });
							}}>
							STEP 1
						</button>
						<button
							className={`${
								state.Tiwo ? `actives` : ``
							} bg-[#202020] rounded-[3rem] but3 font-semibold text-white w-[8rem] h-[3rem] mt-[2rem] lg:ml-[1rem] md:ml-[1rem] md:w-[5rem] md:h-[2.5rem] md:text-[.8rem]  sm:text-[.7rem] sm:mt-[1rem] sm:ml-[.85rem] sm:w-[5.2rem] sm:h-[2.2rem] `}
							onClick={() => {
								setState({ ...defaultsx, Tiwo: true });
							}}>
							STEP 2
						</button>
						<button
							className={`${
								state.Tihree ? `actives` : ``
							} bg-[#202020] rounded-[3rem] but3 font-semibold text-white w-[8rem] h-[3rem] mt-[2rem] lg:ml-[1rem] md:ml-[1rem] md:w-[5rem] md:h-[2.5rem] md:text-[.8rem] sm:w-[5.2rem] sm:h-[2.2rem] sm:text-[.7rem] sm:mt-[1rem] sm:ml-[.85rem]`}
							onClick={() => {
								setState({ ...defaultsx, Tihree: true });
							}}>
							STEP 3
						</button>
						<button
							className={`${
								state.Fiour ? `actives` : ``
							} bg-[#202020] rounded-[3rem] but3 font-semibold text-white w-[8rem] h-[3rem] mt-[2rem] lg:ml-[1rem] md:ml-[1rem] md:w-[5rem] md:h-[2.5rem] md:text-[.8rem] sm:w-[5.2rem] sm:h-[2.2rem] sm:text-[.7rem] sm:mt-[1rem] sm:ml-[.85rem]`}
							onClick={() => {
								setState({ ...defaultsx, Fiour: true });
							}}>
							STEP 4
						</button>
						<button
							className={`${
								state.Foive ? `actives` : ``
							} bg-[#202020] rounded-[2.8rem] but3 font-semibold text-white w-[8rem] h-[3rem] mt-[2rem] lg:ml-[1rem] md:ml-[1rem] md:w-[5rem] md:h-[2.5rem] md:text-[.8rem] sm:w-[5.2rem] sm:h-[2.2rem] sm:text-[.7rem] sm:mt-[1rem] sm:ml-[1rem]`}
							onClick={() => {
								setState({ ...defaultsx, Foive: true });
							}}>
							STEP 5
						</button>
					</div>
					<div className="bg-white flex">
						<div
							data-aos="fade-left"
							data-aos-duration="1000"
							className="poppins ">
							{state.Oine && (
								<>
									<h4 className="ml-[6rem] pt-[1rem] lg:ml-[3rem] poppins font-medium text-[1.4rem] md:pt-[2rem] md:ml-[1.5rem] md:text-[1.2rem] sm:text-[1rem] sm:ml-[1.5rem] ">
										Meeting
									</h4>
									<div className="w-[850px] h-[2px] lg:ml-[3rem] md:ml-[1rem] but mt-[.5rem] ml-[6rem] lg:w-[670px] md:w-[550px] sm:w-[320px] sm:ml-[1.5rem]"></div>
									<div className="flex justify-center items-center md:flex-col">
										<div className="flex flex-col ml-[6rem] lg:ml-[3rem] md:ml-0">
											<p className="mt-[1rem] mr-0 w-[30rem] leading-6 lg:ml-[1rem] lg:w-[25rem] md:w-[40rem] md:text-[.9rem] sm:text-[.9rem] sm:leading-6 sm:w-[20rem] sm:ml-0 sm:pl-0">
												<span className="font-semibold">
													Pre-engagement content:
												</span>
												The pre-engagement phase plays a pivotal role in the
												successful execution of a penetration test,
												necessitating effective communication and collaboration
												between the pentester and the client. This phase is of
												paramount importance, given the technical nature of
												penetration testing.
											</p>
											<p className="mt-[0.5rem] w-[30rem] leading-7  lg:ml-[1rem] lg:w-[25rem] md:w-[40rem] md:text-[.9rem] sm:text-[.9rem] sm:leading-6 sm:w-[20rem] sm:ml-0 sm:pl-0">
												<div className="flex ">
													<ul className=" ml-[1rem] mr-[3rem] list-disc">
														<li>Meeting</li>
														<li>Scope</li>
													</ul>
													<ul className="list-disc">
														<li>Requirements</li>
														<li>Test Plan</li>
													</ul>
												</div>
											</p>
											<p className="mt-[0.5rem] w-[30rem] leading-6 lg:ml-[1rem] lg:w-[25rem] md:w-[40rem] md:text-[.9rem] sm:text-[.9rem] sm:leading-6 sm:w-[20rem] sm:ml-0 sm:pl-0">
												Initiating the pentesting process with a client meeting
												marks the foundational step toward ensuring a successful
												engagement.
											</p>
										</div>
										<img
											className="h-[18rem] w-[25rem] ml-[3rem] mr-[3rem] lg:w-[15rem] lg:h-[14rem] md:mt-[0.5rem] md:mb-[1rem] md:w-[11rem] md:h-[9rem] sm:w-[20rem] sm:h-[13rem] sm:mt-[2rem] sm:mb-[2rem] "
											src="/meeting.jpg"
											alt="photo"
											height={400}
											width={800}
										/>
									</div>
								</>
							)}
							{state.Tiwo && (
								<>
									<h4 className="ml-[6rem] pt-[1rem] lg:ml-[3rem] poppins font-medium text-[1.4rem] md:pt-[2rem] md:ml-[1.5rem] md:text-[1.2rem] sm:text-[1rem] sm:ml-[1.5rem] ">
										Threat Modeling
									</h4>
									<div className="w-[850px] h-[2px] lg:ml-[3rem] md:ml-[1rem] but mt-[.5rem] ml-[6rem] lg:w-[670px] md:w-[550px] sm:w-[320px] sm:ml-[1.5rem]"></div>
									<div className="flex justify-center items-center md:flex-col">
										<div className="flex flex-col ml-[6rem] lg:ml-[3rem] md:ml-0">
											<p className="mt-[1rem] mr-0 w-[30rem] leading-6 lg:ml-[1rem] lg:w-[25rem] md:w-[40rem] md:text-[.9rem] sm:text-[.9rem] sm:leading-6 sm:w-[20rem] sm:ml-0 sm:pl-0">
												Employing threat modeling as a proactive approach
												enables the comprehensive assessment of cybersecurity
												risks. This essential stage involves the formulation of
												meticulous tests and procedures to identify and respond
												to potential threats effectively.
											</p>
											<p className="mt-[0.5rem] w-[30rem] leading-7 lg:ml-[1rem] lg:w-[25rem] md:w-[40rem] md:text-[.9rem] sm:text-[.9rem] sm:leading-6 sm:w-[20rem] sm:ml-0 sm:pl-0">
												<div className="flex sm:flex-col">
													<ul className=" ml-[1rem] mr-[3rem] list-disc">
														<li>Defining Assets</li>
														<li>Classifying Threats</li>
													</ul>
													<ul className="sm:ml-[1rem] sm:mr-[3rem] list-disc">
														<li>Identifying Threats</li>
														<li>Tighten Internal Controls</li>
													</ul>
												</div>
											</p>
											<p className="mt-[0.5rem] w-[30rem] leading-6 lg:ml-[1rem] lg:w-[25rem] md:w-[40rem] md:text-[.9rem] sm:text-[.9rem] sm:leading-6 sm:w-[20rem] sm:ml-0 sm:pl-0">
												Initiating the pentesting process with a client meeting
												marks the foundational step toward ensuring a successful
												engagement.
											</p>
										</div>
										<img
											className="mt-[1rem] h-[18rem] w-[25rem] ml-[3rem] mr-[3rem] lg:w-[15rem] lg:h-[14rem] md:mt-[0.5rem] md:mb-[1rem] md:w-[11rem] md:h-[9rem] sm:w-[20rem] sm:h-[13rem] sm:mt-[2rem] sm:mb-[2rem] "
											src="/threat_modeling.jpg"
											alt="photo"
											height={400}
											width={800}
										/>
									</div>
								</>
							)}

							{state.Tihree && (
								<>
									<h4 className="ml-[6rem] pt-[1rem] lg:ml-[3rem] poppins font-medium text-[1.4rem] md:pt-[2rem] md:ml-[1.5rem] md:text-[1.2rem] sm:text-[1rem] sm:ml-[1.5rem] ">
										Security Testing
									</h4>
									<div className="w-[850px] h-[2px] lg:ml-[3rem] md:ml-[1rem] but mt-[.5rem] ml-[6rem] lg:w-[670px] md:w-[550px] sm:w-[320px] sm:ml-[1.5rem]"></div>
									<div className="flex justify-center items-center md:flex-col">
										<div className="flex flex-col ml-[6rem] lg:ml-[3rem] md:ml-0">
											<p className="mt-[1rem] mr-0 w-[30rem] leading-6 lg:ml-[1rem] lg:w-[25rem] md:w-[40rem] md:text-[.9rem] sm:text-[.9rem] sm:leading-6 sm:w-[20rem] sm:ml-0 sm:pl-0">
												In the domain of offensive security, this pivotal stage
												encompasses the execution of attack simulations,
												commonly known as penetration tests. These tests entail
												deliberate attacks on networks, web applications, and
												software products with the aim of uncovering potential
												vulnerabilities.
											</p>
											<p className="mt-[0.5rem] w-[30rem] leading-7 lg:ml-[1rem] lg:w-[25rem] md:w-[40rem] md:text-[.9rem] sm:text-[.9rem] sm:leading-6 sm:w-[20rem] sm:ml-0 sm:pl-0">
												<div className="flex sm:flex-col">
													<ul className=" ml-[1rem] mr-[3rem] list-disc">
														<li>Manual Testing</li>
														<li>Automated Testing</li>
													</ul>
													<ul className="sm:ml-[1rem] sm:mr-[3rem] list-disc">
														<li>Hacker Mindset</li>
														<li>Limited Exploitation</li>
													</ul>
												</div>
											</p>
											<p className="mt-[0.5rem] w-[30rem] leading-6 lg:ml-[1rem] lg:w-[25rem] md:w-[40rem] md:text-[.9rem] sm:text-[.9rem] sm:leading-6 sm:w-[20rem] sm:ml-0 sm:pl-0">
												Initiating the pentesting process with a client meeting
												marks the foundational step toward ensuring a successful
												engagement.
											</p>
										</div>
										<img
											className="h-[18rem] w-[25rem] ml-[3rem] mr-[3rem] lg:w-[15rem] lg:h-[14rem] md:mt-[0.5rem] md:mb-[1rem] md:w-[11rem] md:h-[9rem] sm:w-[20rem] sm:h-[13rem] sm:mt-[2rem] sm:mb-[2rem] "
											src="/security_testing.jpg"
											alt="photo"
											height={400}
											width={800}
										/>
									</div>
								</>
							)}
							{state.Fiour && (
								<>
									<h4 className="ml-[6rem] pt-[1rem] lg:ml-[3rem] poppins font-medium text-[1.4rem] md:pt-[2rem] md:ml-[1.5rem] md:text-[1.2rem] sm:text-[1rem] sm:ml-[1.5rem] ">
										Report Submission
									</h4>
									<div className="w-[850px] h-[2px] lg:ml-[3rem] md:ml-[1rem] but mt-[.5rem] ml-[6rem] lg:w-[670px] md:w-[550px] sm:w-[320px] sm:ml-[1.5rem]"></div>
									<div className="flex justify-center items-center md:flex-col">
										<div className="flex flex-col ml-[6rem] lg:ml-[3rem] md:ml-0">
											<p className="mt-[1rem] mr-0 w-[30rem] leading-6 lg:ml-[1rem] lg:w-[25rem] md:w-[40rem] md:text-[.9rem] sm:text-[.9rem] sm:leading-6 sm:w-[20rem] sm:ml-0 sm:pl-0">
												Upon the conclusion of the assessment, we furnish a
												comprehensive written report encompassing all identified
												vulnerabilities, whether observed or exploited. The
												report includes a meticulous root cause analysis and
												categorization of the vulnerabilities, coupled with
												precise mitigation recommendations.
											</p>
											<p className="mt-[0.5rem] w-[30rem] leading-7 lg:ml-[1rem] lg:w-[25rem] md:w-[40rem] md:text-[.9rem] sm:text-[.9rem] sm:leading-6 sm:w-[20rem] sm:ml-0 sm:pl-0">
												<div className="flex sm:flex-col">
													<ul className=" ml-[1rem] mr-[3rem] list-disc">
														<li>Neat And Clean</li>
														<li>Easy To Understand</li>
													</ul>
													<ul className="sm:ml-[1rem] sm:mr-[3rem] list-disc">
														<li>Quality Checked</li>
														<li>Graphical Representations</li>
													</ul>
												</div>
											</p>
											<p className="mt-[0.5rem] w-[30rem] leading-6 lg:ml-[1rem] lg:w-[25rem] md:w-[40rem] md:text-[.9rem] sm:text-[.9rem] sm:leading-6 sm:w-[20rem] sm:ml-0 sm:pl-0">
												The vulnerability report showcases paramount discoveries
												pertaining to assets, security vulnerabilities, and
												overall risk assessment.
											</p>
										</div>
										<img
											className="h-[18rem] w-[25rem] ml-[3rem] mr-[3rem] lg:w-[15rem] lg:h-[14rem] md:mt-[0.5rem] md:mb-[1rem] md:w-[11rem] md:h-[9rem] sm:w-[20rem] sm:h-[13rem] sm:mt-[2rem] sm:mb-[2rem] "
											src="/reporting.jpg"
											alt="photo"
											height={400}
											width={800}
										/>
									</div>
								</>
							)}
							{state.Foive && (
								<>
									<h4 className="ml-[6rem] pt-[1rem] lg:ml-[3rem] poppins font-medium text-[1.4rem] md:pt-[2rem] md:ml-[1.5rem] md:text-[1.2rem] sm:text-[1rem] sm:ml-[1.5rem] ">
										Remediation & Retest :
									</h4>
									<div className="w-[850px] h-[2px] lg:ml-[3rem] md:ml-[1rem] but mt-[.5rem] ml-[6rem] lg:w-[670px] md:w-[550px] sm:w-[320px] sm:ml-[1.5rem]"></div>
									<div className="flex justify-center items-center md:flex-col">
										<div className="flex flex-col ml-[6rem] lg:ml-[3rem] md:ml-0">
											<p className="mt-[1rem] mr-0 w-[30rem] leading-6 lg:ml-[1rem] lg:w-[25rem] md:w-[40rem] md:text-[.9rem] sm:text-[.9rem] sm:leading-6 sm:w-[20rem] sm:ml-0 sm:pl-0">
												Each vulnerability is accompanied by an audit trail with
												detailed remediation notes, allowing precise tracking of
												actions taken. Clients can request retesting after
												marking vulnerabilities as ready for validation,
												enhancing security measures.
											</p>
											<p className="mt-[0.5rem] w-[30rem] leading-7 lg:ml-[1rem] lg:w-[25rem] md:w-[40rem] md:text-[.9rem] sm:text-[.9rem] sm:leading-6 sm:w-[20rem] sm:ml-0 sm:pl-0">
												<div className="flex flex-col">
													<ul className=" ml-[1rem] mr-[3rem] list-disc">
														<li>Timely Submission</li>
														<li>Mitigate Vulnerability</li>
													</ul>
													<ul className="ml-[1rem] mr-[3rem] list-disc">
														<li>Industry Standard Recommendations</li>
														<li>Retest When Needed</li>
													</ul>
												</div>
											</p>
											<p className="mt-[0.5rem] w-[30rem] leading-6 lg:ml-[1rem] lg:w-[25rem] md:w-[40rem] md:text-[.9rem] sm:text-[.9rem] sm:leading-6 sm:w-[20rem] sm:ml-0 sm:pl-0">
												During this phase, if necessary, we will conduct
												retesting of the product, accompanied by comprehensive
												remediation guidelines and reports.
											</p>
										</div>
										<img
											className="h-[18rem] w-[25rem] ml-[3rem] mr-[3rem] lg:w-[15rem] lg:h-[14rem] md:mt-[0.5rem] md:mb-[1rem] md:w-[11rem] md:h-[9rem] sm:w-[20rem] sm:h-[13rem] sm:mt-[2rem] sm:mb-[2rem] "
											src="/remediation.jpg"
											alt="photo"
											height={400}
											width={800}
										/>
									</div>
								</>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Third_Section;
