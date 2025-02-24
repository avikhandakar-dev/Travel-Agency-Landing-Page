"use client";
import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactPage: React.FC = () => {
	const [formData, setFormData] = useState({
		fullName: "",
		email: "",
		message: "",
	});
	const [successMessage, setSuccessMessage] = useState("");

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setSuccessMessage("Your message has been sent successfully!");
		setFormData({ fullName: "", email: "", message: "" }); // Clear form
	};

	return (
		<div className='max-w-6xl mx-auto py-20 px-8 text-gray-800'>
			<h1 className='text-5xl font-extrabold mb-12 text-center text-primary'>
				Contact Us
			</h1>
			<div className='bg-white shadow-2xl rounded-3xl p-12'>
				<div className='space-y-8 text-lg mb-12'>
					<div className='flex items-center space-x-4'>
						<FaPhoneAlt className='text-secondary text-3xl' />
						<span className='font-medium'>Phone: 01911555563</span>
					</div>
					<div className='flex items-center space-x-4'>
						<FaEnvelope className='text-secondary text-3xl' />
						<span className='font-medium'>Email: info@parenterprise.net</span>
					</div>
					<div className='flex items-center space-x-4'>
						<FaMapMarkerAlt className='text-secondary text-3xl' />
						<span className='font-medium'>
							Address: House-63/1, Ward-9, College Para (Binodpur), Rajbari-7700
						</span>
					</div>
				</div>

				{/* Contact Form */}
				<form onSubmit={handleSubmit} className='space-y-6'>
					<div>
						<label className='block text-lg font-medium'>Full Name</label>
						<input
							type='text'
							name='fullName'
							value={formData.fullName}
							onChange={handleChange}
							className='w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none'
							placeholder='Enter your full name'
						/>
					</div>

					<div>
						<label className='block text-lg font-medium'>Email</label>
						<input
							type='email'
							name='email'
							value={formData.email}
							onChange={handleChange}
							className='w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none'
							placeholder='Enter your email'
						/>
					</div>

					<div>
						<label className='block text-lg font-medium'>Message</label>
						<textarea
							name='message'
							value={formData.message}
							onChange={handleChange}
							className='w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none'
							placeholder='Write your message...'
							rows={4}></textarea>
					</div>

					<button
						type='submit'
						className='w-full bg-primary text-white py-3 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition'>
						Submit
					</button>

					{successMessage && (
						<p className='text-green-600 font-medium mt-4'>{successMessage}</p>
					)}
				</form>
			</div>
		</div>
	);
};

export default ContactPage;
