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
			className={`bg-white] text-black min-h-screen pt-32 pb-12 ${montserratLight.className}`}
		>
			<div className="text-center pb-12 w-[80%] xl:w-1/3 mx-auto pt-4">
				<h3 className={`text-md tracking-wide mb-6`}>
					<span className={`${montserratBold.className}`}>Skate Trader</span> is
					a flea market type app that allows skaters to easily buy and sell
					skateboard parts and clothing.
				</h3>
				<h3 className={`text-md tracking-wide mb-8`}>
					Born from curbside swaps, Skate Trader is here to give skaters a
					proper place to pass gear along without hassle.
				</h3>

				{/* Feature icons */}
				<ul className="text-xl tracking-wider">
					<li className="py-2 "> Buy / sell gear easily</li>
					<li className="py-2"> Support local skaters</li>
					<li className="py-2"> Keep boards & clothes rolling</li>
				</ul>
			</div>

			{/* CTA */}
			<div className="flex flex-col justify-center items-center sm:w-2/3 xl:w-1/3 mx-auto gap-4 pb-8">
				<div className="flex flex-col justify-center mx-auto gap-4 items-center mb-4">
					<a
						href="/sell"
						className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800"
					>
						Got stuff lying around? →
					</a>
				</div>
				<div className="flex flex-col justify-center mx-auto gap-4 items-center">
					<a
						href="/shop"
						className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800"
					>
						See what&apos;s up for grabs →
					</a>
				</div>
			</div>
		</div>
	);
}
