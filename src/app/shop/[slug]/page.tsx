"use client";
import { useParams } from "next/navigation";
import { products } from "@/data/products";

export default function ProductPage() {
	const { slug } = useParams();
	const product = products.find((p) => p.slug === slug);

	if (!product)
		return <div className="text-white p-10">Product not found.</div>;

	return (
		<div className="max-w-6xl mx-auto min-h-screen px-6 py-10 pt-40 grid grid-cols-1 md:grid-cols-2 gap-12">
			{/* left image */}
			<div className="flex justify-center items-start">
				<img
					src={product.imageUrl}
					alt={product.name}
					className="w-full max-w-md object-contain"
				/>
			</div>

			{/* right infoe etc... */}
			<div className="space-y-6">
				{/* title */}
				<h1 className="text-2xl font-semibold">{product.name}</h1>

				{/* Price */}
				<p className="text-xl">{product.price}</p>

				{/* Size */}
				<div className="">
					<p className="text-lg font-medium">Size</p>
					<p className="text-gray-600 mt-2">{product.size}</p>
				</div>

				{/* Description */}
				<div className="">
					<h2 className="text-lg font-medium">Description</h2>
					<p className="text-gray-600 mt-2">{product.description}</p>
				</div>

				{/* Add to cart */}
				<button className="w-full bg-black text-white py-3 hover:bg-gray-600 transition-all cursor-pointer">
					Add to Cart
				</button>
			</div>
		</div>
	);
}
