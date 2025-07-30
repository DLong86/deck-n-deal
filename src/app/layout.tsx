import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });
// const unica = Unica_One({
// 	weight: "400",
// 	subsets: ["latin"],
// 	display: "swap",
// });

export const metadata: Metadata = {
	title: "Deck 'n' Deal",
	description: "Buy & Sell Used Skateboard Gear",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
