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

export default function LoginPage() {
	return (
		<div
			className={`bg-white text-black min-h-screen flex items-center justify-center ${montserratLight.className}`}
		>
			<div className="w-[90%] sm:w-[400px] bg-gray-50 p-8 shadow-lg">
				<h1 className={`text-2xl mb-6 text-center `}>Login</h1>

				{/* Google login button */}
				<button className="w-full flex items-center justify-center gap-2 border py-3  hover:bg-gray-100 transition duration-200 cursor-pointer">
					<svg
						className="w-5 h-5"
						viewBox="0 0 48 48"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill="#EA4335"
							d="M24 9.5c3.54 0 6.72 1.22 9.22 3.6l6.85-6.85C35.7 2.6 30.24 0 24 0 14.64 0 6.6 5.4 2.64 13.2l7.98 6.2C12.24 13.14 17.64 9.5 24 9.5z"
						/>
						<path
							fill="#4285F4"
							d="M46.5 24.5c0-1.56-.14-3.06-.41-4.5H24v9h12.7c-.54 2.88-2.17 5.32-4.7 6.94l7.2 5.58C43.46 37.14 46.5 31.28 46.5 24.5z"
						/>
						<path
							fill="#FBBC05"
							d="M10.62 28.4c-1.02-3.06-1.02-6.34 0-9.4L2.64 13.2C-.88 19.28-.88 29.72 2.64 35.8l7.98-6.2z"
						/>
						<path
							fill="#34A853"
							d="M24 48c6.24 0 11.46-2.06 15.28-5.58l-7.2-5.58c-2.02 1.36-4.62 2.16-8.08 2.16-6.36 0-11.76-3.64-13.38-9.5l-7.98 6.2C6.6 42.6 14.64 48 24 48z"
						/>
					</svg>
					<span>Sign in with Google</span>
				</button>

				{/* Separator */}
				<div className="flex items-center my-8">
					<div className="flex-grow h-px bg-gray-300"></div>
					<span className="px-3 text-gray-500 text-sm">or</span>
					<div className="flex-grow h-px bg-gray-300"></div>
				</div>
				<form className="flex flex-col gap-4">
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

					<button
						type="submit"
						className="bg-black text-white py-3 hover:bg-gray-500 cursor-pointer transition-all duration-200"
					>
						Login
					</button>
				</form>

				<p className="text-center mt-12 mb-4 text-md">
					Don&apos;t have an account?
				</p>
				<Link
					href="/signup"
					className={`block underline hover:text-gray-700 text-center tracking-wider ${montserratLight.className}`}
				>
					Sign up
				</Link>
			</div>
		</div>
	);
}
