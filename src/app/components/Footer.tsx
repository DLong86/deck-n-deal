"use client";
import { useEffect, useState } from "react";
import { SiInstagram, SiFacebook, SiX } from "react-icons/si";

const Footer = () => {
	const [showOnMobile, setShowOnMobile] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			const scrollBottom = window.innerHeight + window.scrollY;
			const docHeight = document.documentElement.offsetHeight;

			setShowOnMobile(scrollBottom >= docHeight - 100);
		};

		window.addEventListener("scroll", onScroll);
		onScroll();

		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<footer className="lg:fixed bottom-0 left-0 w-full bg-black text-white py-6 px-6 lg:px-18 z-50">
			<div className="flex justify-between items-center text-sm ">
				<div className="flex uppercase gap-1 text-xs font-extralight items-center">
					<a href="#" className="hover:text-neutral-300">
						contact
					</a>
					<p>|</p>
					<a href="#" className="hover:text-neutral-300">
						home
					</a>
				</div>
				<div className="flex gap-4">
					<a href="#" className="">
						<SiInstagram className="w-5 h-5 hover:text-neutral-300" />
					</a>
					<a href="#" className="">
						<SiFacebook className="w-5 h-5 hover:text-neutral-300" />
					</a>
					<a href="#" className="">
						<SiX className="w-5 h-5 hover:text-neutral-300" />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
