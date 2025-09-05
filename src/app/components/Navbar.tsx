"use client";
import { useState } from "react";
import { Menu, X, ShoppingCart, Search, User } from "lucide-react";
import Link from "next/link";
import { Bebas_Neue, Montserrat, Creepster } from "next/font/google";

const bebasFont = Creepster({
	subsets: ["latin"],
	weight: "400",
});
const montserratBold = Montserrat({
	subsets: ["latin"],
	weight: "600",
});

const navLinks = [
	{ label: "Home", href: "/" },
	{ label: "Shop", href: "/shop" },
	{ label: "Sell", href: "/sell" },
	{ label: "About", href: "/about" },
	{ label: "Contact", href: "/contact" },
];

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="fixed w-full bg-black text-white py-6 sm:px-16 px-6 flex items-center justify-between z-50">
			{/* Left: Mobile Menu + Logo */}
			<div className="flex items-center gap-4">
				{/* Logo */}
				<Link
					href="/"
					className={`text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide uppercase hover:text-neutral-300 ${bebasFont.className}`}
				>
					Skate Trader
				</Link>
			</div>

			{/* Center: Desktop Links */}
			<ul
				className={`hidden md:flex gap-6 lg:gap-10 text-xs uppercase font-bold tracking-wide ${montserratBold.className}`}
			>
				{navLinks.map(({ label, href }) => (
					<li key={label}>
						<Link
							href={href}
							className="hover:text-neutral-300 cursor-pointer duration-150"
						>
							{label}
						</Link>
					</li>
				))}
			</ul>

			{/* Right: Icons */}
			<div className="flex items-center gap-3 sm:gap-4">
				<Link href="/login">
					<User className="w-6 h-6 cursor-pointer hover:text-neutral-300 duration-150" />
				</Link>
				<ShoppingCart className="w-6 h-6 cursor-pointer hover:text-neutral-300 duration-150" />
				<Search className="w-6 h-6 cursor-pointer hover:text-neutral-300" />
				{/* Mobile menu button */}
				<button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
					{isOpen ? (
						<X
							size={24}
							className="hover:text-neutral-300 duration-150 cursor-pointer"
						/>
					) : (
						<Menu
							size={24}
							className="hover:text-neutral-300 duration-150 cursor-pointer"
						/>
					)}
				</button>
			</div>

			{/* Mobile Nav */}
			<ul
				className={`absolute top-full left-0 w-full bg-black text-white flex flex-col items-center gap-4 uppercase md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
					isOpen ? "max-h-64 opacity-100 py-4 pb-8" : "max-h-0 opacity-0 py-0"
				}`}
			>
				{navLinks.map(({ label, href }) => (
					<li key={label}>
						<Link
							href={href}
							className="hover:text-neutral-300 cursor-pointer duration-150"
							onClick={() => setIsOpen(false)}
						>
							{label}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navbar;
