"use client";
import { useState } from "react";
import { Montserrat } from "next/font/google";

const montserratLight = Montserrat({
	subsets: ["latin"],
	weight: "300",
});

export default function SellPage() {
	const [form, setForm] = useState({
		name: "",
		price: "",
		size: "",
		category: "",
		condition: "",
		description: "",
		imageUrl: "",
	});

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => {
		const { name, value } = e.target;
		setForm((prev) => ({ ...prev, [name]: value }));
		// !!!! later send to backend !!!!
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Submitted product:", form);
	};

	return (
		<div
			className={`max-w-4xl mx-auto min-h-screen px-6 py-20 pt-40 sm:pb-40 ${montserratLight.className}`}
		>
			<h1 className="text-2xl font-semibold mb-8">Sell Something</h1>

			<form onSubmit={handleSubmit} className="space-y-6">
				{/* product name */}
				<div className="">
					<label className="block text-sm font-medium mb-1">
						Product Name*
					</label>
					<input
						type="text"
						name="name"
						value={form.name}
						onChange={handleChange}
						required
						className="w-full border border-gray-400 px-4 py-3 focus:outline-none focus:border-black"
					/>
				</div>

				{/* price */}
				<div className="">
					<label className="block text-sm font-medium mb-1">Price*</label>
					<input
						type="text"
						name="price"
						value={form.price}
						onChange={handleChange}
						required
						className="w-full border border-gray-400 px-4 py-3 focus:outline-none focus:border-black"
					/>
				</div>

				{/* size */}
				<div className="">
					<label className="block text-sm font-medium mb-1">Size</label>
					<input
						type="text"
						name="size"
						value={form.size}
						onChange={handleChange}
						className="w-full border border-gray-400 px-4 py-3 focus:outline-none focus:border-black"
					/>
				</div>

				{/* category */}
				<div className="">
					<label className="block text-sm font-medium mb-1">Category*</label>
					<select
						name="category"
						value={form.category}
						onChange={handleChange}
						required
						className="w-full border border-gray-400 px-2 py-3 bg-white focus:outline-none focus:border-black"
					>
						<option value="">Select a category</option>
						<option value="decks">Decks</option>
						<option value="trucks">Trucks</option>
						<option value="wheels">Wheels</option>
						<option value="apparel">Apparel</option>
						<option value="shoes">Shoes</option>
						<option value="accessories">Accessories</option>
					</select>
				</div>

				{/* condition */}
				<div className="">
					<label className="block text-sm font-medium mb-1">Condition*</label>
					<select
						name="condition"
						value={form.condition}
						onChange={handleChange}
						required
						className="w-full border border-gray-400 px-2 py-3 bg-white focus:outline-none focus:border-black"
					>
						<option value="">Select condition</option>
						<option value="new">New or Unused</option>
						<option value="like-new">Like New</option>
						<option value="used-good">Used (Good)</option>
						<option value="used-fair">Used (Fair)</option>
						<option value="used-poor">Used (Poor)</option>
					</select>
				</div>

				{/* description */}
				<div className="">
					<label className="block text-sm font-medium mb-1">Description</label>
					<textarea
						name="description"
						value={form.description}
						onChange={handleChange}
						rows={5}
						className="w-full border border-gray-400 px-4 py-3 focus:outline-none focus:border-black"
					></textarea>
				</div>

				{/* Image upload (placeholder for now) */}
				<div className="">
					<label className="block text-sm font-medium mb-1">Image*</label>
					<input
						type="text"
						name="imageUrl"
						value={form.imageUrl}
						onChange={handleChange}
						placeholder="https://example.com/product.jpg"
						className="w-full border border-gray-400 px-4 py-3 focus:outline-none focus:border-black"
					/>
				</div>

				{/* submit btn */}
				<button
					type="submit"
					className="w-full bg-black text-white py-3 hover:bg-gray-400 transition-all duration-250 cursor-pointer uppercase tracking-wider"
				>
					List Product
				</button>
			</form>
		</div>
	);
}
