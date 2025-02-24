import React from "react";
import { useForm } from "react-hook-form";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ContactFormData {
	fullName: string;
	email: string;
	message: string;
}

const ContactPage: React.FC = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<ContactFormData>();

	const onSubmit = (data: ContactFormData) => {
		toast.success("Your message has been sent successfully!", {
			position: "top-right",
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
		});
		reset();
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
				<form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
					<div>
						<label className='block text-lg font-medium'>Full Name</label>
						<input
							type='text'
							{...register("fullName", { required: "Full Name is required" })}
							className='w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none'
							placeholder='Enter your full name'
						/>
						{errors.fullName && (
							<p className='text-red-500 text-sm mt-1'>
								{errors.fullName.message}
							</p>
						)}
					</div>

					<div>
						<label className='block text-lg font-medium'>Email</label>
						<input
							type='email'
							{...register("email", {
								required: "Email is required",
								pattern: {
									value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
									message: "Invalid email address",
								},
							})}
							className='w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none'
							placeholder='Enter your email'
						/>
						{errors.email && (
							<p className='text-red-500 text-sm mt-1'>
								{errors.email.message}
							</p>
						)}
					</div>

					<div>
						<label className='block text-lg font-medium'>Message</label>
						<textarea
							{...register("message", { required: "Message is required" })}
							className='w-full mt-2 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none'
							placeholder='Write your message...'
							rows={4}></textarea>
						{errors.message && (
							<p className='text-red-500 text-sm mt-1'>
								{errors.message.message}
							</p>
						)}
					</div>

					<button
						type='submit'
						className='w-full bg-primary text-white py-3 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition'>
						Submit
					</button>
				</form>
			</div>
			<ToastContainer />
		</div>
	);
};

export default ContactPage;
