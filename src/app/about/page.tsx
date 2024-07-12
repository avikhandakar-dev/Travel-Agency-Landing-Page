"use client";
import NewsLetterSection from "@/components/sections/NewsLetterSection";
import OurStory from "@/components/sections/OurStory";
import Features from "@/components/sections/WhyUs";
import Link from "next/link";
import { MdPlayCircleFilled } from "react-icons/md";
import { Parallax } from "react-parallax";

export default function Hero() {
	return (
		<main className='relative mt-20 md:mt-4  '>
			<div className='relative poppins '>
				<div className='container px-4 md:px-[9rem] relative max-w-2xl py-8 mx-auto mt-2 md:py-24 lg:max-w-screen-2xl'>
					<div className='w-full'>
						<h2 className='text-lg md:text-3xl font-medium  text-center text-gray-900 uppercase'>
							Who we are
						</h2>
						<div className='mt-6'>
							<p className='text-lg text-center font-extrabold tracking-tight text-gray-700 uppercase sm:text-3xl'>
								We are taking travellers around the world and connecting people
								from home to their desire destination.
							</p>
						</div>

						<div className='mt-2'>
							<p className=' text-center text-xl'>
								We are committed to provide the great experience of the world’s
								adventures, visiting new places and old friends, and countless,
								unforgettable moments.
							</p>
						</div>
					</div>
				</div>
				<div className=''>
					<Parallax
						bgImage='/images/hero-bg-about.jpg'
						bgImageStyle={{ objectFit: "cover" }}
						strength={200}>
						<div className='w-full aspect-video sm:aspect-auto sm:h-96' />
					</Parallax>
				</div>
				<div className='container relative flex justify-center  items-center flex-col max-w-2xl py-8 mx-auto md:py-24 lg:max-w-screen-2xl'>
					<div>
						<h2 className='text-4xl text-gray-900 uppercase font-hero md:text-3xl'>
							We’re here to craft your travel with joy.
						</h2>
						<div className='mt-2'>
							<p className='max-w-3xl mt-4 text-xl'>
								Our goal is to use travel as a positive influence doing
								correctly. Our focus to conduct trips in a manner that honors
								local individuals and locations. When you journey with us, you
								will see our caring, services and enjoyable moments; forming
								connections with the places you visit. This is where we aim to
								make a difference.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div>
				<Features />
			</div>
			<div className='container max-w-screen-xl px-8 lg:px-[6.5rem] pb-8 mx-auto '>
				<h2 className='text-lg md:text-3xl font-medium   container px-0 py-4 text-gray-900 uppercase'>
					Our stories
				</h2>
				<OurStory />
			</div>
			<div className='px-4 md:px-[9rem] pb-10'>
				<NewsLetterSection />
			</div>
		</main>
	);
}
