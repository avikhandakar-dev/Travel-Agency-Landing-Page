import React from "react";

const PrivacyPolicy = () => {
	return (
		<div className='max-w-6xl mx-auto py-20 px-8 text-gray-800'>
			<h1 className='text-5xl font-extrabold mb-12 text-center text-primary'>
				Privacy Policy
			</h1>
			<div className='bg-white shadow-2xl rounded-3xl p-12'>
				<p className='mb-8 text-xl leading-relaxed'>
					Welcome to{" "}
					<span className='font-bold text-primary'>PAR Enterprise</span>! We are
					dedicated to safeguarding your privacy and ensuring your personal
					information is handled with the utmost care. This Privacy Policy
					explains how we collect, use, and protect your data when you use our
					services through the{" "}
					<span className='font-bold text-primary'>eSeba</span> app, in
					compliance with Google Play Console data privacy guidelines.
				</p>

				<h2 className='text-3xl font-semibold mt-12 mb-6 text-secondary'>
					Information We Collect
				</h2>
				<p className='mb-8 text-lg'>
					When you use the eSeba app, we may collect the following types of
					information:
				</p>
				<ul className='list-disc pl-6 mb-8 text-lg space-y-2'>
					<li>
						<strong>Personal Information:</strong> Full name, email address,
						phone number.
					</li>
					<li>
						<strong>Location Data:</strong> Precise or approximate location to
						provide localized services.
					</li>
					<li>
						<strong>Camera Access:</strong> To scan documents or QR codes when
						required for service functionality.
					</li>
					<li>
						<strong>Media & Files:</strong> Access to your photos, media, and
						files is used for uploading documents or images required for service
						usage.
					</li>
					<li>
						<strong>Contacts:</strong> Access to contacts to simplify
						transactions or invite friends.
					</li>
					<li>
						<strong>Device Information:</strong> Device type, operating system,
						and app usage data to improve app performance.
					</li>
				</ul>

				<h2 className='text-3xl font-semibold mt-12 mb-6 text-secondary'>
					How We Use Your Information
				</h2>
				<p className='mb-8 text-lg'>We use your information to:</p>
				<ul className='list-disc pl-6 mb-8 text-lg space-y-2'>
					<li>
						Provide and improve our services including mobile recharge, ticket
						booking, and other utility services.
					</li>
					<li>Process payments securely.</li>
					<li>Offer customer support and handle inquiries.</li>
					<li>Send important service updates and notifications.</li>
					<li>Ensure personalized and location-based service experiences.</li>
				</ul>

				<h2 className='text-3xl font-semibold mt-12 mb-6 text-secondary'>
					Data Protection
				</h2>
				<p className='mb-8 text-lg'>
					We implement industry-standard security protocols to protect your
					personal data from unauthorized access or disclosure. However, please
					note that no online transmission method is 100% secure.
				</p>

				<h2 className='text-3xl font-semibold mt-12 mb-6 text-secondary'>
					Sharing Your Information
				</h2>
				<p className='mb-8 text-lg'>
					Your data is never sold. We only share your information:
				</p>
				<ul className='list-disc pl-6 mb-8 text-lg space-y-2'>
					<li>With service partners when needed to fulfill a transaction.</li>
					<li>To comply with legal obligations or law enforcement requests.</li>
					<li>
						To protect the rights and safety of our users and our platform.
					</li>
				</ul>

				<h2 className='text-3xl font-semibold mt-12 mb-6 text-secondary'>
					User Consent & Permissions
				</h2>
				<p className='mb-8 text-lg'>
					All permissions requested by the app (location, camera, contacts,
					files) are only used for the stated purposes and with your explicit
					consent. You can manage these permissions at any time from your device
					settings.
				</p>

				<h2 className='text-3xl font-semibold mt-12 mb-6 text-secondary'>
					Your Rights
				</h2>
				<p className='mb-8 text-lg'>
					You have the right to access, update, or delete your personal
					information. You may also withdraw consent for permissions or data
					collection at any time. For such requests, please contact us via the{" "}
					<span className='font-bold text-primary'>eSeba</span> app.
				</p>

				<h2 className='text-3xl font-semibold mt-12 mb-6 text-secondary'>
					Changes to This Policy
				</h2>
				<p className='mb-8 text-lg'>
					We may update this Privacy Policy from time to time. Any changes will
					be communicated through the app, and the latest version will always be
					available for your review.
				</p>

				<p className='text-center mt-16 text-xl font-medium text-primary'>
					Thank you for trusting PAR Enterprise and the eSeba app. Your privacy
					is our priority.
				</p>
			</div>
		</div>
	);
};

export default PrivacyPolicy;
