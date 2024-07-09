import Image from "next/image";
import React from "react";
import {
	FaPhone,
	FaEnvelope,
	FaMapMarkerAlt,
	FaFacebookF,
	FaInstagram,
	FaTwitter,
} from "react-icons/fa";

function FooterSection() {
	const currentYear = new Date().getFullYear();
	return (
		<section>
			<div className='flex flex-col justify-evenly md:flex-row   gap-8'>
				<div className=' lg:w-[40%]'>
					<p>
						<a href='https://parenterprise.net/'>
							{" "}
							<Image
								src='/images/logo.png'
								width={200}
								height={60}
								alt='logo footer'
							/>
						</a>
					</p>
					<p className='text-lightGray mt-[2rem] lg:pr-20'>
						At PAR Enterprise, We are a comprehensive travel agency committed to
						providing exceptional services and ensuring our clients have
						seamless and enjoyable journeys.
					</p>
				</div>
				<div className='flex gap-8 mb-10 flex-grow flex-col'>
					<p className='font-bold text-lg'>Contact Us</p>
					<ul className='list-none text-lightGray flex flex-col gap-4'>
						<li className='flex items-center gap-2'>
							<FaPhone /> <strong>Phone:</strong>
							<a
								href='tel:01911555563'
								className='text-primary hover:underline'>
								01911555563
							</a>
						</li>
						<li className='flex items-center gap-2'>
							<FaEnvelope /> <strong>Email:</strong>
							<a
								href='mailto:info@parenterprise.net'
								className='text-primary hover:underline'>
								info@parenterprise.net
							</a>
						</li>
						<li className='flex items-start gap-2'>
							<FaMapMarkerAlt />{" "}
							<div className=''>
								<strong>Address:</strong>{" "}
								<span className='text-primary items-start'>
									House-63/1, Ward-9, College Para (Binodpur), Rajbari-7700
								</span>
							</div>
						</li>
					</ul>
				</div>
				<div className='flex flex-col gap-4 justify-center items-center'>
					<div className='flex gap-4 justify-center  items-center'>
						<img
							src='/images/facebook-icon.png'
							alt='social icon'
							className='cursor-pointer'
						/>
						<img
							className='cursor-pointer'
							src='/images/instagram-icon.png'
							alt='social icon'
						/>
						<img
							className='cursor-pointer'
							src='/images/x-icon.png'
							alt='social icon'
						/>
					</div>
					<p className='text-lightGray font-[500] text-[1.25rem]'>
						Discover our app
					</p>
					<div className='flex flex-col md:flex-row gap-8'>
						<a
							href='#'
							className='bg-lightBlack rounded-extraLarge px-[1.06rem] py-[0.58rem] w-[11rem]'>
							<div className='flex gap-4 justify-center items-center'>
								<div>
									<img
										src='/images/google-play-icon.png'
										alt='google play icon'
									/>
								</div>

								<div>
									<p className='uppercase font-[700] text-white text-[0.7rem]'>
										get it on
									</p>
									<p className='uppercase font text-white text-[0.7rem]'>
										Google play
									</p>
								</div>
							</div>
						</a>
						{/* <div className='bg-lightBlack rounded-extraLarge px-[1.06rem] py-[0.58rem] w-[14rem]'>
							<div className='flex gap-4 items-center'>
								<div>
									<img src='/images/app-icon.png' alt='google play icon' />
								</div>

								<div>
									<p className='uppercase font-[700] text-white text-[0.7rem]'>
										Available on the
									</p>
									<p className='uppercase font text-white text-[0.7rem]'>
										Apple store
									</p>
								</div>
							</div>
							<div></div>
						</div> */}
					</div>
				</div>
			</div>
			<p className='my-[5.25rem] text-lightGray text-[0.875rem] font-[600] flex justify-center'>
				All rights reserved {currentYear} ©&nbsp;
				<a href='https://parenterprise.net/'>parenterprise.net</a>
			</p>
		</section>
	);
}

export default FooterSection;
