import type { Metadata } from "next";
import { Poppins, Volkhov } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/common/NavBar";
import FooterSection from "@/components/sections/FooterSection";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
});
const volkhov = Volkhov({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
	title: "PAR Enterprise - your trusted travel partner",
	description:
		"Ready to explore the world with us? Get in touch today to start planning your next adventure!",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={[poppins.className, volkhov.className].toString()}>
				<NavBar />
				{children}
				<FooterSection />
			</body>
		</html>
	);
}
