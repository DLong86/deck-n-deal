import type { Metadata } from "next";
import "./globals.css";
import { Inter, Bebas_Neue } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { CartProvider } from "@/context/CartContext";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const bebas = Bebas_Neue({
	subsets: ["latin"],
	variable: "--font-bebas",
	weight: "400",
});

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
			<body className={inter.variable}>
				<CartProvider>
					<Navbar />
					{children}
					<Footer />
				</CartProvider>
			</body>
		</html>
	);
}
