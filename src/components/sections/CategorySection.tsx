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
			title: "Best Flights",
			description: "We ensuring your travel is cost-effective and convenient.",
			highlighted: true,
		},
		{
			id: 2,
			iconUrl: "/images/visa.svg",
			title: "Visa Processing",
			description:
				"We simplifies the visa process and support to secure your visa efficiently.",
			highlighted: false,
		},
		{
			id: 3,
			iconUrl: "/images/tour.svg",
			title: "Tour Packages",
			description:
				"Discover the world with our carefully curated tour packages.",
			highlighted: false,
		},
	];

	return (
		<section className='lg:pt-20'>
			<p className='text-lightGray text-[1.125rem] font-[600] text-center'>
				Services
			</p>
			<p className='volkhov text-[3.125rem] text-title font-[700] text-center'>
				We Offer Best Services
			</p>
			<div className='flex flex-col gap-4 md:flex-row justify-between w-full mt-16'>
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
