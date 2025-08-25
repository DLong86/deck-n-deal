"use client";
import { Montserrat } from "next/font/google";

const montserratLight = Montserrat({
	subsets: ["latin"],
	weight: "300",
});

export default function Contact() {
	return (
		<div
			className={`bg-[#222] text-white min-h-screen pt-32 pb-4 ${montserratLight.className}`}
		>
			{/* Left menu */}
			<main className="flex flex-col flex-1 md:flex-row max-w-[90%] mx-auto my-16 px-4 gap-16">
				<aside className="flex flex-col md:w-1/4 text-sm font-light tracking-widest">
					<button className="border-b border-gray-400 py-4 text-left uppercase cursor-pointer hover:bg-gray-500 hover:pl-4 transition-all duration-400">
						Contact Us
					</button>
					<button className="border-b border-gray-400 py-4 text-left uppercase cursor-pointer hover:bg-gray-500 hover:pl-4 transition-all duration-400">
						Subscribe
					</button>
					<button className="border-b border-gray-400 py-4 text-left uppercase cursor-pointer hover:bg-gray-500 hover:pl-4 transition-all duration-400">
						Shipping Information
					</button>
					<button className="border-b border-gray-400 py-4 text-left uppercase cursor-pointer hover:bg-gray-500 hover:pl-4 transition-all duration-400">
						Returns
					</button>
					<button className="border-b border-gray-400 py-4 text-left uppercase cursor-pointer hover:bg-gray-500 hover:pl-4 transition-all duration-400">
						Terms of Use
					</button>
					<button className="border-b border-gray-400 py-4 text-left uppercase cursor-pointer hover:bg-gray-500 hover:pl-4 transition-all duration-400">
						Privacy Policy
					</button>
				</aside>
				{/* Contact form */}
				<section className="flex-1">
					<form className="flex flex-col gap-4">
						<input
							type="text"
							placeholder="Name*"
							required
							className="border border-gray-400 px-4 py-3 focus:outline-none focus:border-white"
						/>
						<textarea
							placeholder="Message"
							rows={12}
							className="border border-gray-400 px-4 py-3 focus:outline-none focus:border-black"
						/>
						<button
							type="submit"
							className="hover:bg-white hover:text-black uppercase py-2 px-4 mt-6 border-2 border-white text-white transition duration-200 cursor-pointer font-bold tracking-wider"
						>
							Send
						</button>
					</form>
				</section>
			</main>
		</div>
	);
}
