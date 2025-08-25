"use client";
import { Montserrat } from "next/font/google";

const montserratLight = Montserrat({
	subsets: ["latin"],
	weight: "300",
});

const montserratBold = Montserrat({
	subsets: ["latin"],
	weight: "600",
});

export default function About() {
	return (
		<div
			className={`bg-white] text-black min-h-screen pt-32 pb-4 ${montserratLight.className}`}
		>
			<div className="text-center pb-12 w-[80%] sm:w-1/3 mx-auto">
				<h1
					className={`text-3xl tracking-wide pb-6 ${montserratBold.className}`}
				>
					Skate Trader
				</h1>
				<h3 className={`text-md tracking-wide `}>
					Skate Trader is a flea market type app that allows skaters to easily
					buy and sell skateboard gear and clothing.
				</h3>
			</div>

			{/* a row of three or so images */}
			<div className=""></div>
		</div>
	);
}
