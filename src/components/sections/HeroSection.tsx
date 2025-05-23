"use client";
import React from "react";
import { motion } from "framer-motion";
import MainButton from "../common/MainButton";

function HeroSection() {
	return (
		<section className='flex justify-between items-center mt-16 md:z-[99]'>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5 }}>
				<div className='pt-32 md:pt-4'>
					<p className='text-[1.128rem] font-[700] text-primary uppercase mb-4'>
						Best Destinations around the world
					</p>
					<div className='flex flex-col'>
						<div className='volkhov font-[700] text-[3rem] md:text-[4.73756rem] leading-large inline-flex text-lightBlue'>
							Travel,
							<div className='flex  flex-col'>
								<span className='ml-8 z-10'>enjoy</span>
								<img
									src='/images/stylish-underline.png'
									alt='stylish underline'
									className='-mt-4 z-0 hidden md:block'
								/>
							</div>
						</div>

						<p className='volkhov font-[700] text-[3rem] md:text-[4.73756rem] leading-large inline-flex text-lightBlue'>
							and live a new and full life
						</p>
					</div>

					<p className='my-[1.6rem] font-bold leading-[1.692rem] text-lightGray text-[1rem]'>
						Welcome to PAR Enterprise, your trusted travel partner. Discover the
						world with our comprehensive services, from visa processing to
						luxurious accommodations.
					</p>

					<div className='flex gap-6 items-center '>
						<div>
							<MainButton
								text='Find out more'
								classes='bg-secondary text-white font-[600] shadow-none rounded-[0.564rem] border-none hover:bg-secondary  w-[9.58788rem] h-[3rem]'
							/>
						</div>
					</div>
				</div>
			</motion.div>
			<div className='hidden md:block'>
				<img
					src='/images/lady-with-aircraft.png'
					alt='girl with phone with aircrafts on the background'
				/>
			</div>
		</section>
	);
}

export default HeroSection;
