// src/components/OurStory.tsx

import React from "react";
import Image from "next/image";
import Link from "next/link";

const OurStory: React.FC = () => {
	return (
		<section className='flex container flex-col lg:flex-row items-center border border-primary/30 p-0 bg-white'>
			<div className='flex-shrink-0 lg:w-[50%]'>
				<Image
					src='/images/europe.png'
					alt='Two explorers'
					width={500}
					height={500}
					className=' object-cover w-[500px] h-[500px]  shadow-lg'
				/>
			</div>
			<div className='lg:w-[50%] lg:px-16 my-8 lg:mt-0'>
				<h2 className='text-3xl lg:text-4xl text-center font-bold mb-4'>
					Coming soon...
				</h2>
				{/* <p className='text-gray-700 mb-4'>
					Intrepid was founded by two friends, Darrell and Geoff, who had a bold
					idea to build a travel company that benefited both travellers and the
					communities they visit.
				</p>
				<p className='text-gray-700 mb-4'>
					Their big idea sprung to mind in 1988, not long after they crammed
					themselves and some friends into a modified ex-council truck and
					headed off on a roadtrip across Africa. More than three decades later,
					we are proud to call ourselves the worlds largest purpose-led
					adventure travel company.
				</p> */}
				{/* <Link href='/our-story'>
					<span className='inline-block px-6 py-3 border border-black text-black font-semibold rounded-md hover:bg-black hover:text-white transition-colors'>
						Get the whole story
					</span>
				</Link> */}
			</div>
		</section>
	);
};

export default OurStory;
