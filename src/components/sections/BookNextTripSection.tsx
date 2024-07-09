"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import TripStepCard from "../cards/TripStepCard";

interface Step {
	id: number;
	iconUrl: string;
	title: string;
	description: string;
}

const steps: Step[] = [
	{
		id: 0,
		iconUrl: "/images/destination-icon.png",
		title: "Customer-Centric Approach",
		description:
			"Our clients are our top priority. We listen to your needs, tailor our services to meet your expectations, and strive to provide the highest level of customer satisfaction.",
	},
	{
		id: 1,
		iconUrl: "/images/payment-icon.png",
		title: "Comprehensive Solutions",
		description:
			"From ticketing and visas to accommodations and tours, we offer a full range of travel services under one roof, making your planning process smooth and hassle-free.",
	},
	{
		id: 2,
		iconUrl: "/images/airport-icon.png",
		title: "24/7 Support",
		description:
			"We are here for you around the clock. Our dedicated support team is always available to assist you, ensuring peace of mind throughout your journey.",
	},
];

const textVariants: Variants = {
	hidden: { opacity: 0, x: -50 },
	visible: (i: number) => ({
		opacity: 1,
		x: 0,
		transition: {
			delay: i * 0.3, // Stagger children by 0.3 seconds
			duration: 0.5,
		},
	}),
};

const imageVariants: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			delay: steps.length * 0.3,
			duration: 0.5,
		},
	},
	whileInView: {
		rotate: [0, 2, -2, 2, -2, 0], // Shaky effect
		transition: {
			duration: 1.5,
			delay: 1,
			repeat: Infinity,
			repeatType: "mirror",
		},
	},
};

const BookNextTripSection: React.FC = () => {
	return (
		<section className='flex justify-between flex-col md:flex-row items-center mt-[-5rem] lg:mb-10 lg:py-40'>
			<div>
				<motion.p
					className='text-lightGray text-[1.125rem] font-[600] text-left'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true }}
					variants={textVariants}
					custom={0}>
					Why Choose Us?
				</motion.p>
				<motion.p
					className='volkhov text-[2rem] text-title font-[700] text-left'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true }}
					variants={textVariants}
					custom={1}>
					From seamless air ticketing to unforgettable tour packages, we handle
					all your travel needs
				</motion.p>

				<div className='flex flex-col gap-[3rem] mt-[1.94rem]'>
					{steps.map((step, index) => (
						<motion.div
							key={step.id}
							initial='hidden'
							whileInView='visible'
							viewport={{ once: true }}
							variants={textVariants}
							custom={index + 2} // Adjust delay for each step
						>
							<TripStepCard
								title={step.title}
								description={step.description}
								iconUrl={step.iconUrl}
							/>
						</motion.div>
					))}
				</div>
			</div>
			<motion.div
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true }}
				variants={imageVariants}
				whileHover='whileInView'>
				<img src='/images/next-trip.png' alt='card with a girl on a wall' />
			</motion.div>
		</section>
	);
};

export default BookNextTripSection;
