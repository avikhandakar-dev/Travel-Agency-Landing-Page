"use client";
import React from "react";
import { motion } from "framer-motion";
import { Input } from "../ui/input";
import MainButton from "../common/MainButton";

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			duration: 0.5,
			delayChildren: 0.3,
			staggerChildren: 0.2,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, x: -50 },
	visible: { opacity: 1, x: 0 },
};

function NewsLetterSection() {
	return (
		<motion.div
			className='bg-[#DFD7F9] px-2 py-[4rem] lg:p-[4rem] lg:my-28 rounded-[1.25rem] rounded-tl-extraLarge relative lg:-mt-[10rem]'
			variants={containerVariants}
			initial='hidden'
			whileInView='visible'>
			<div className='z-20'>
				<motion.p
					className='text-lightGray text-[1.2rem] md:text-[1.5rem] font-[600] p-2 text-center mb-[2.63rem]'
					variants={itemVariants}>
					Subscribe to get information, latest news and other{" "}
					<br className='hidden md:block' /> interesting offers about PAR
					Enterprise
				</motion.p>

				<motion.div
					className='flex justify-between flex-col md:flex-row items-center w-full gap-8'
					variants={itemVariants}>
					<motion.div
						className='relative flex-grow z-[10] w-full'
						variants={itemVariants}>
						<Input
							type='email'
							placeholder='Your email'
							className='bg-white w-full h-[3.5rem] pl-[3rem]'
						/>
						<div className='absolute top-5 left-4'>
							<img src='/images/envelop.png' alt='envelope icon' />
						</div>
					</motion.div>

					<motion.div className='z-[10]' variants={itemVariants}>
						<MainButton
							text='Subscribe'
							classes='w-[9.25rem] h-[3.25rem]'
							isGradient
						/>
					</motion.div>
				</motion.div>
			</div>
			<motion.div
				className='absolute bottom-0 left-4 z-0 opacity-25'
				variants={itemVariants}>
				<img
					src='/images/round-ring-left.png'
					alt='round ring left'
					className='w-[200px]'
				/>
			</motion.div>

			<motion.div className='absolute -top-4 -right-4' variants={itemVariants}>
				<img src='/images/send-shape.png' alt='send icon' />
			</motion.div>

			<motion.div
				className='absolute top-0 right-0 opacity-25'
				variants={itemVariants}>
				<img
					src='/images/round-ring-right.png'
					alt='round ring right'
					className='w-[200px]'
				/>
			</motion.div>

			<motion.div
				className='absolute -bottom-16 right-[-6rem] hidden md:block'
				variants={itemVariants}>
				<img src='/images/plus-group.png' alt='send icon' />
			</motion.div>
		</motion.div>
	);
}

export default NewsLetterSection;
