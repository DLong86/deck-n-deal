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
			className={`bg-white] text-black min-h-screen pt-32 pb-4 h-screen ${montserratLight.className}`}
		>
			<div className="text-center pb-12 w-[80%] xl:w-1/3 mx-auto mb-6">
				<h1
					className={`text-3xl tracking-wide pb-6 ${montserratBold.className}`}
				>
					Skate Trader
				</h1>
				<h3 className={`text-md tracking-wide mb-6`}>
					Skate Trader is a flea market type app that allows skaters to easily
					buy and sell skateboard gear and clothing.
				</h3>
				<h3 className={`text-md tracking-wide mb-8`}>
					Born from curbside swaps, Skate Trader is here to give skaters a
					proper place to pass gear along without hassle.
				</h3>

				{/* Feature icons */}
				<ul className="text-xl tracking-wider">
					<li className="py-2 "> Buy/sell gear easily</li>
					<li className="py-2"> Support local skaters</li>
					<li className="py-2"> Keep boards & clothes rolling</li>
				</ul>
			</div>

			{/* CTA */}
			<div className="flex items-center sm:w-2/3 mx-auto">
				<div className="flex flex-col items-center justify-center mx-auto gap-4 ">
					<p className="">Got gear lying around?</p>
					<a
						href="/sell"
						className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800"
					>
						List it Now →
					</a>
				</div>
				<div className="flex flex-col items-center justify-center mx-auto gap-4">
					<p className="">See what&apos;s up for grabs?</p>
					<a
						href="/shop"
						className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800"
					>
						Search gear →
					</a>
				</div>
			</div>
		</div>
	);
}
