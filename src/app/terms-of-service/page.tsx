import React from "react";

const TermsOfService = () => {
	return (
		<div className='max-w-6xl mx-auto py-20 px-8 text-gray-800'>
			<h1 className='text-5xl font-extrabold mb-12 text-center text-primary'>
				Terms of Service
			</h1>
			<div className='bg-white shadow-2xl rounded-3xl p-12'>
				<p className='mb-8 text-xl leading-relaxed'>
					Welcome to{" "}
					<span className='font-bold text-primary'>PAR Enterprise</span>! By
					accessing and using our services through the{" "}
					<span className='font-bold text-primary'>eSeba</span> app, you agree
					to comply with and be bound by the following Terms of Service. Please
					read them carefully.
				</p>

				<h2 className='text-3xl font-semibold mt-12 mb-6 text-secondary'>
					Use of Services
				</h2>
				<p className='mb-8 text-lg'>
					Our services, including mobile top-up, air ticketing, car booking, SIM
					card purchases, and more, are provided solely for your personal and
					non-commercial use. You agree not to misuse these services in any
					manner.
				</p>

				<h2 className='text-3xl font-semibold mt-12 mb-6 text-secondary'>
					Account Responsibilities
				</h2>
				<p className='mb-8 text-lg'>
					You are responsible for maintaining the confidentiality of your
					account credentials and any activity that occurs under your account.
					Please notify us immediately of any unauthorized access or security
					breach.
				</p>

				<h2 className='text-3xl font-semibold mt-12 mb-6 text-secondary'>
					Payments and Fees
				</h2>
				<p className='mb-8 text-lg'>
					By using our paid services, you agree to provide accurate payment
					information and authorize us to charge the applicable fees. All
					payments are final and non-refundable unless stated otherwise.
				</p>

				<h2 className='text-3xl font-semibold mt-12 mb-6 text-secondary'>
					Service Availability
				</h2>
				<p className='mb-8 text-lg'>
					We strive to ensure our services are always available, but occasional
					disruptions may occur due to maintenance or technical issues. We do
					not guarantee uninterrupted access to our app or services.
				</p>

				<h2 className='text-3xl font-semibold mt-12 mb-6 text-secondary'>
					Termination of Service
				</h2>
				<p className='mb-8 text-lg'>
					We reserve the right to suspend or terminate your access to the eSeba
					app if you violate these terms or engage in unlawful or inappropriate
					conduct.
				</p>

				<h2 className='text-3xl font-semibold mt-12 mb-6 text-secondary'>
					Limitation of Liability
				</h2>
				<p className='mb-8 text-lg'>
					PAR Enterprise shall not be liable for any direct, indirect,
					incidental, or consequential damages resulting from the use or
					inability to use our services.
				</p>

				<h2 className='text-3xl font-semibold mt-12 mb-6 text-secondary'>
					Changes to Terms
				</h2>
				<p className='mb-8 text-lg'>
					We may update these Terms of Service from time to time. Continued use
					of our services after any changes indicates your acceptance of the
					revised terms.
				</p>

				<p className='text-center mt-16 text-xl font-medium text-primary'>
					Thank you for choosing PAR Enterprise and the eSeba app. We appreciate
					your trust and support.
				</p>
			</div>
		</div>
	);
};

export default TermsOfService;
