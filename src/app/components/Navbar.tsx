"use client";
import { useState } from "react";
import { Menu, X, ShoppingCart, Search } from "lucide-react";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="fixed w-full bg-black text-white py-6 px-8 flex justify-between items-center z-50">
			{/* MENU For Mobile and Ting!!!! */}
			<button className=" sm:hidden" onClick={() => setIsOpen(!isOpen)}>
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

			<div className="text-2xl font-semibold tracking-wider uppercase">
				Deck ’n’ Deal
			</div>

			{/* desktop links !!!!!!! not quite centered !!!!!!!!!!!! */}
			<ul className="hidden sm:flex gap-6 text-xs uppercase font-bold tracking-wide md:-ml-24">
				<li className="hover:text-neutral-400 cursor-pointer duration-150">
					Home
				</li>
				<li className="hover:text-neutral-300 cursor-pointer duration-150">
					Shop
				</li>
				<li className="hover:text-neutral-300 cursor-pointer duration-150">
					Sell
				</li>
				<li className="hover:text-neutral-300 cursor-pointer duration-150">
					About
				</li>
				<li className="hover:text-neutral-300 cursor-pointer duration-150">
					Contact
				</li>
			</ul>

			{/* Right: Icons */}
			<div className="flex items-center gap-4">
				<ShoppingCart className="w-6 h-6 cursor-pointer hover:text-neutral-300 duration-150" />
				<Search className="w-6 h-6 cursor-pointer hover:text-neutral-300" />
			</div>

			{isOpen && (
				<div className="absolute top-full left-0 w-full bg-black text-white flex flex-col items-center md:hidden">
					{["Home", "Shop", "Sell", "About", "Contact"].map((link) => (
						<button
							key={link}
							className="py-3 w-full text-center cursor-pointer hover:text-neutral-400 duration-200"
							onClick={() => setIsOpen(false)} // close menu on click
						>
							{link}
						</button>
					))}
				</div>
			)}
		</nav>
	);
};

export default Navbar;
