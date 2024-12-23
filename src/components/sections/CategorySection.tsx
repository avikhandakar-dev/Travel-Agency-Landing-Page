"use client";

import React from "react";
import { motion } from "framer-motion";
import CatergoryCard from "../cards/CatergoryCard";

const CategorySection: React.FC = () => {
	const features = [
		{
			id: 0,
			iconUrl: "/images/ticketing.svg",
			title: "Air Ticketing",
			description:
				"We offer competitive prices on air tickets for domestic and international flights.",
			highlighted: false,
		},
		{
			id: 1,
			iconUrl: "/images/aircraft.png",
			title: "Best Flight Deals",
			description:
				"Find special flight deals with us and discover your favourite destination around the world and in Bangladesh.",
			highlighted: true,
		},
		{
			id: 2,
			iconUrl: "/images/visa.jpg",
			title: "Visa Processing",
			description:
				"Find special flight deals with us and discover your favourite destination around the world and in Bangladesh.",
			highlighted: false,
		},
		{
			id: 3,
			iconUrl: "/images/tour.svg",
			title: "Tour Packages",
			description:
				"Discover the Signature Of Excellence of our best tour packages for local and international destinations.",
			highlighted: false,
		},
		{
			id: 4,
			iconUrl: "/images/insurance.png",
			title: "Travel Insurance",
			description: "Protect yourself from unwanted expenses.",
			highlighted: false,
		},
		{
			id: 5,
			iconUrl: "/images/garibook.png",
			title: "Who we are?",
			description:
				"<a href='https://www.garibook.com' class='underline-link' target='_blank' rel='noopener noreferrer'>Garibook</a> is more than a ride; we're the architects of transformative journeys. Our passion for innovation, reliability, and affordability defines every trip.",
			highlighted: false,
		},
	];

	return (
		<section className='lg:pt-20 pb-20'>
			<p className='text-lightGray text-[1.125rem] font-[600] text-center md:text-[1rem] lg:text-[1.125rem]'>
				Services
			</p>
			<p className='volkhov text-[2rem] text-title font-[700] text-center md:text-[2.5rem] lg:text-[3.125rem]'>
				We Offer The Best Services
			</p>
			<div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 justify-items-center w-full mt-4 md:mt-16'>
				{features.map((feature) => (
					<motion.div
						key={feature.id}
						initial={{ opacity: 0, y: 50 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}>
						<CatergoryCard
							key={feature.id}
							iconUrl={feature.iconUrl}
							title={feature.title}
							description={feature.description}
							highlighted={feature.highlighted}
						/>
					</motion.div>
				))}
			</div>
		</section>
	);
};

export default CategorySection;
