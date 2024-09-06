"use client";

import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Global = () => {
	return (
		<div data-aos="fade-up" data-aos-duration="700">
			<div className="flex md:hidden overflow-hidden md:flex-col-reverse justify-around items-center w-screen bgxyserve ">
				<div className="w-[50%] md:w-[90%] poppins px-12 absolute z-[999] left-4 bottom-16 md:static">
					<div className="ml-[5rem] lg:ml-0 ">
						<h1 className="text-2xl font-medium my-4 lg:text-xl lg:my-2">
							Top Targeted Industries
						</h1>
						<p className="text-base my-4 max-w-[35ch] text-gray-600 lg:text-sm lg:my-2 lg:max-w-[30ch]">
							Highest rate of attacks per organization in the last day
						</p>
						<ul className="mb-4">
							<li className="mt-[0.85rem] lg:mt-[0.65rem] flex items-center w-[29%]">
								<img src="/edu.png" width={28} />
								<span className="mx-6 lg:text-sm">Education</span>
							</li>

							<li className="mt-[0.85rem] lg:mt-[0.65rem] flex items-center w-[29%]">
								<img src="/health.png" width={28} />
								<span className="mx-6 lg:text-sm">Health</span>
							</li>

							<li className="mt-[0.85rem] lg:mt-[0.65rem] flex items-center w-[29%]">
								<img src="/insurance.png" width={28} />
								<span className="mx-6 lg:text-sm">Insurance</span>
							</li>
						</ul>
					</div>
				</div>
				<div className="overflow-hidden md:pr-32">
					<video
						className="w-[290vw] pr-10 scale-105 md:scale-x-[2.3] scale-y-[1.05] md:w-screen overflow-hidden"
						loop
						autoPlay
						muted>
						<source src="/stiched.mp4" type="video/mp4" />
						Your browser does not support the video tag.
					</video>
				</div>
			</div>

			<div className="hidden md:flex md:flex-col-reverse justify-around items-center w-screen bgxyserve ">
				<div className="w-[50%] md:w-[90%] px-4 absolute z-[999] left-4 bottom-36 md:static">
					<div className="ml-[5rem] lg:ml-0 mb-[4rem]">
						<h1 className="text-2xl font-medium mt-[1rem] mb-2 sm:text-lg">
							Top Targeted Industries
						</h1>
						<p className="text-base text-gray-600 sm:text-sm">
							Highest rate of attacks per organization in the last day
						</p>
						<ul className="mb-4">
							<li className="mt-[0.65rem] flex items-center w-[29%]">
								<img src="/edu.png" width={28} />
								<span className="mx-6 sm:text-[0.85rem]">Education</span>
							</li>

							<li className="mt-[0.65rem] flex items-center w-[29%]">
								<img src="/health.png" width={28} />
								<span className="mx-6 sm:text-[0.85rem]">Health</span>
							</li>

							<li className="mt-[0.65rem] flex items-center w-[29%]">
								<img src="/insurance.png" width={28} />
								<span className="mx-6 sm:text-[0.85rem]">Insurance</span>
							</li>
						</ul>
					</div>
				</div>
				<div className="overflow-hidden">
					<video className="" loop autoPlay muted>
						<source src="/mob_stiched.mp4" type="video/mp4" />
						Your browser does not support the video tag.
					</video>
				</div>
			</div>
		</div>
	);
};

export default Global;
