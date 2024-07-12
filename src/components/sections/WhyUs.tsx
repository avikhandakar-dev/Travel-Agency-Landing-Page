const FeatureList = [
	{
		title: "Exceptional Service",
		description:
			"We prioritize your comfort and satisfaction, offering personalized services tailored to your needs. Our dedicated team ensures every aspect of your journey is handled with the utmost care and attention, making your travel experience seamless and enjoyable.",
		image: "/images/feature_1.svg",
	},
	{
		title: "Local Expertise",
		description:
			"Our deep knowledge and respect for local cultures and communities set us apart. We work closely with local guides and experts to provide you with authentic experiences that celebrate the unique traditions and beauty of each destination.",
		image: "/images/feature_2.svg",
	},
	{
		title: "Sustainable Travel",
		description:
			"We are committed to responsible tourism, minimizing our environmental impact, and supporting local economies. By choosing us, you contribute to sustainable travel practices that preserve the natural and cultural heritage of the places you visit.",
		image: "/images/feature_3.svg",
	},
];
const Features = ({ bg = "bg-white" }) => {
	return (
		<div className={`${bg}`}>
			<div className='container max-w-screen-xl py-8 mx-auto'>
				<h1 className='max-w-3xl mx-auto text-2xl font-black leading-snug text-center md:text-5xl'>
					Why{" "}
					<span className='inline-block volkhov px-4 py-2 mt-2 transform -skew-x-12 font-hero  bg-secondary text-white'>
						Choose Us ?
					</span>
				</h1>
				<div className='mt-4 md:m-16'>
					<div className='flex gap-4 px-2 py-4 overflow-x-scroll lg:overflow-x-auto snap-x snap-mandatory flex-nowrap no-scrollbar sm:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-8'>
						{FeatureList.map((feature, index) => (
							<div
								key={index}
								className='flex snap-center min-w-[80vw] sm:min-w-[auto] flex-col items-center py-4 px-10 shadow-lg text-center space-y-4 '>
								<p className='font-bold text-lg mt-2'>{feature.title}</p>
								<img
									className='w-3/4 h-32 mx-auto'
									src={feature.image}
									alt='feature'
								/>
								<p className='text-sm pb-8 font-medium text-gray-500'>
									{feature.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Features;
