"use client";
import { useState } from "react";
import { products } from "@/data/products";
import Link from "next/link";

export default function ShopPage() {
	const [selectedCategory, setSelectedCategory] = useState("All");
	// const [sortOption, setSortOption] = useState("");

	const categories = [
		"All",
		"Decks",
		"Trucks",
		"Wheels",
		"Bearings",
		"Shoes",
		"Tees",
		"Shirts",
		"Hoodies",
		"Sweaters",
		"Jackets",
		"Pants",
		"Shorts",
		"Headwear",
		"Socks",
		"Accessories",
	];

	const filteredItems =
		selectedCategory === "All"
			? products
			: products.filter((item) => item.category === selectedCategory);

	return (
		<main className="bg-black text-white min-h-screen pt-32 px-6 pb-12 sm:pb-28">
			{/* filter box */}

			<div className="overflow-x-auto">
				<div className="flex gap-4 justify-center min-w-fit mb-8 px-2">
					{categories.map((cat) => (
						<button
							key={cat}
							onClick={() => setSelectedCategory(cat)}
							className={`px-3 py-1 text-xs border transition-all duration-150 cursor-pointer uppercase ${
								selectedCategory === cat
									? "bg-white text-black border-white"
									: "border-white text-white hover:bg-white hover:text-black"
							}`}
						>
							{cat}
						</button>
					))}
				</div>
			</div>

			<section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
				{filteredItems.map((product) => (
					<Link key={product.id} href={`/shop/${product.slug}`}>
						<div className="group cursor-pointer">
							<div className="aspect-square overflow-hidden">
								<img
									src={product.imageUrl}
									alt={product.name}
									className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
								/>
							</div>
							<div className="mt-4 text-sm tracking-wide uppercase text-gray-200">
								<p>{product.name}</p>
								<p className="text-gray-400 mt-1">¥{product.price}</p>
							</div>
						</div>
					</Link>
				))}
			</section>
		</main>
	);
}
