'use client'
import Link from 'next/link'
import React, {useState} from 'react'
const Footer = () => {
	const [news, setNews] = useState({
		access_key: process.env.ACCESS_KEY,
		email: '',
	})

	const submitLetter = async () => {
		let data = JSON.stringify({
			...news,
		})
		const res = await fetch('https://api.web3forms.com/submit', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			body: data,
		}).then((res) => res.json())

		if (res.success) {
			alert('success!!')
			setNews({
				access_key: process.env.ACCESS_KEY,
				email: '',
			})
		}
	}
	return (
		<div>
			<div className='bg-black overflow-x-hidden h-[25rem] flex md:flex-col md:h-[35rem] sm:h-[45rem]'>
				<div className='mt-[4rem] ml-[10rem] lg:w-[15rem] lg:ml-[4rem] font-normal giga text-xl leading-5 sm:mt-[2rem] sm:ml-[2.5rem] '>
					<p className='text-white tracking-[1px] leading-6 '>Data Inspect</p>
					<p className='head2 text-[#A8A8A8] lg:tracking-[-0.5px] mt-[1.5rem] text-xs md:mt-[1rem]'>
						info@datainspect.ca
					</p>
					<p className='head2 text-[#A8A8A8] lg:tracking-[-0.5px] mt-[1rem] text-xs md:mt-[0.75rem]'>
						+1289-217-8843
					</p>
					<p className='head2 text-[#A8A8A8] lg:tracking-[-0.5px] mt-[1rem] text-xs md:mt-[0.75rem]'>
						Toronto, Canada
					</p>
				</div>
				<div>
					<div className='w-[900px] lg:w-[650px] h-[2px] but2 mt-[4rem] ml-[8rem] lg:ml-[1rem] md:ml-[3rem] md:w-[675px] sm:ml-[2.5rem] sm:w-[300px] lg:mt-[2rem]'></div>
					<div className='flex md:ml-[3rem] sm:flex-col sm:ml-[2.5rem]'>
						<div className='giga ml-[8rem] lg:ml-[1rem] sm:ml-0'>
							<p className='text-white pt-[1.8rem] giga font-semibold text-[1rem] lg:text-[0.9rem] leading-5 tracking-[10.5%] '>
								INFORMATION
							</p>
							<p className='text-[.7rem] lg:text-[0.65rem] text-[#A8A8A8] hover:text-white cursor-pointer transition-all duration-400 leading-4 font-normal pt-[1.6rem] sm:pt-[1rem] tracking-[-6%]'>
								<Link href='/About'>ABOUT US</Link>
							</p>
							<p className='head2 text-[.7rem] lg:text-[0.65rem] text-[#A8A8A8] hover:text-white cursor-pointer transition-all duration-400 leading-4 font-normal pt-[.4rem] tracking-[-6%]'>
								<Link href='/Contact'>CONTACT US</Link>
							</p>
						</div>
						<div className='ml-[9rem] giga lg:ml-[4rem] lg:w-[13rem] sm:ml-0'>
							<p className='text-white mt-[1.8rem] giga font-semibold text-[1rem] lg:text-[0.9rem] leading-5 tracking-[10.5%] '>
								SERVICES
							</p>
							<p className='head2 text-[.7rem] lg:text-[0.65rem] text-[#A8A8A8] hover:text-white cursor-pointer transition-all duration-400 leading-4 font-normal pt-[1.6rem] sm:pt-[1rem] tracking-[-6%]'>
								<Link href='/Services/Web_Application_Security'>
									Web Application Security
								</Link>
							</p>
							<p className='head2 text-[.7rem] lg:text-[0.65rem] text-[#A8A8A8] hover:text-white cursor-pointer transition-all duration-400 leading-4 font-normal pt-[.5rem] tracking-[-6%]'>
								<Link href='/Services/API_Security_Testing'>
									API Security Testing
								</Link>
							</p>
							<p className='head2 text-[.7rem] lg:text-[0.65rem] text-[#A8A8A8] hover:text-white cursor-pointer transition-all duration-400 leading-4 font-normal pt-[.5rem] tracking-[-6%] '>
								<Link href='/Services/Social_Engineering'>
									Social Engineeing
								</Link>
							</p>
							<p className='head2 text-[.7rem] lg:text-[0.65rem] text-[#A8A8A8] hover:text-white cursor-pointer transition-all duration-400 leading-4 font-normal pt-[.5rem] tracking-[-6%]'>
								<Link href='/Services/Firewall_Configuration_Review'>
									Firewall Config Review
								</Link>
							</p>
							<p className='head2 text-[.7rem] lg:text-[0.65rem] text-[#A8A8A8] hover:text-white cursor-pointer transition-all duration-400 leading-4 font-normal pt-[.5rem] tracking-[-6%]'>
								<Link href='/Services/Vulnerability_Assessment'>
									Vulnerability Assessment
								</Link>
							</p>
							<p className='head2 text-[.7rem] lg:text-[0.65rem] text-[#A8A8A8] hover:text-white cursor-pointer transition-all duration-400 leading-4 font-normal pt-[.5rem] tracking-[-6%]'>
								<Link href='/Services/Network_Peneration_Testing'>
									Network Peneration testing
								</Link>
							</p>
						</div>
						<div className='ml-[5rem] lg:ml-[2rem] sm:ml-0'>
							<p className=' text-white pt-[1.8rem] giga font-medium text-[1rem] lg:text-[0.9rem] leading-5 tracking-[10.5%] '>
								NEWSLETTER
							</p>
							<p className='head2 text-[#A8A8A8] w-[20rem] lg:w-[14rem] sm:w-[20rem] pt-[1.3rem] sm:pt-[1rem] text-[.7rem] lg:text-[0.65rem] giga '>
								GET THE LATEST UPDATES ABOUT OUR SERVICES
							</p>
							<div className='sm:flex'>
								<div className='w-[17rem] lg:w-[12rem] sm:w-[19rem] h-[2.3rem] bg-[#333333] rounded-xl mt-[.9rem] flex'>
									<input
										value={news.email}
										onChange={(e) => {
											setNews({
												...news,
												email: e.target.value,
											})
										}}
										className='outline-none bg-transparent giga w-[10rem]  text-[#A8A8A8] lg:w-[7rem] text-[.6rem] pl-[1rem] lg:pl-[0.5rem] sm:w-[12rem] sm:mr-[1rem] sm:pl-[0.75rem]'
										placeholder='Enter Email'></input>
									<button
										onClick={submitLetter}
										className='text-white giga ml-[2rem] lg:ml-[1rem] mr-[0.5rem] hover:text-[0.9rem] cursor-pointer text-[.8rem] lg:text-[0.7rem] lg:hover:text-[0.8rem]'>
										SUBMIT
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Footer
