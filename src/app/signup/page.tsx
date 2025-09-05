"use client";
import { Montserrat } from "next/font/google";
import Link from "next/link";

const montserratLight = Montserrat({
	subsets: ["latin"],
	weight: "300",
});

const montserratBold = Montserrat({
	subsets: ["latin"],
	weight: "600",
});

export default function SignupPage() {
	return (
		<div
			className={`bg-white text-black min-h-screen flex items-center justify-center ${montserratLight.className}`}
		>
			<div className="w-[90%] sm:w-[400px] bg-gray-50 p-8 shadow-lg">
				<h1 className={`text-2xl mb-6 text-center ${montserratBold.className}`}>
					Sign up
				</h1>

				<form className="flex flex-col gap-4">
					<input
						type="text"
						placeholder="Username"
						className="px-4 py-3 border focus:outline-none focus:ring-2 focus:ring-black"
					/>
					<input
						type="email"
						placeholder="Email"
						className="px-4 py-3 border focus:outline-none focus:ring-2 focus:ring-black"
					/>
					<input
						type="password"
						placeholder="Password"
						className="px-4 py-3 border focus:outline-none focus:ring-2 focus:ring-black"
					/>
					<input
						type="password"
						placeholder="confirm password"
						className="px-4 py-3 border focus:outline-none focus:ring-2 focus:ring-black"
					/>
					<button
						type="submit"
						className="bg-black text-white py-3 hover:bg-gray-500 cursor-pointer transition-all duration-200"
					>
						Create account
					</button>
				</form>

				<p className="text-center mt-12 mb-4 text-md">
					Already have an account?
				</p>
				<Link
					href="/login"
					className={`block underline hover:text-gray-700 text-center tracking-wider ${montserratLight.className}`}
				>
					Login
				</Link>
			</div>
		</div>
	);
}
