"use client";
import { useParams } from "next/navigation";
import { products } from "@/data/products";
import Link from "next/link";
import StarRating from "@/app/components/StarRating";

export default function ProductPage() {
	const { slug } = useParams();
	const product = products.find((p) => p.slug === slug);

	if (!product)
		return <div className="text-white p-10">Product not found.</div>;

	return (
		<div className="max-w-6xl mx-auto min-h-screen px-6 py-10 pt-40 pb-20 lg:pb-40 grid grid-cols-1 md:grid-cols-2 gap-12">
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
				<p className="text-xl font-extralight">{product.price}</p>

				{/* Condition */}
				{product.condition && (
					<div>
						<p className="text-lg font-medium">Condition</p>
						<p className="text-gray-600 mt-2">{product.condition}</p>
					</div>
				)}

				{/* Size */}
				<div className="">
					<p className="text-lg font-medium">Size</p>
					<p className="text-gray-600 mt-2">{product.size}</p>
				</div>

				{/* Add to cart */}
				<button className="w-full bg-black text-white py-3 hover:bg-gray-500 transition-all duration-200 cursor-pointer mb-8">
					Add to Cart
				</button>

				{/* Description */}
				<div className="">
					<h2 className="text-lg font-medium">Description</h2>
					<p className="text-gray-600 mt-2">{product.description}</p>
				</div>

				{/* Category */}
				{product.category && (
					<div>
						<p className="text-lg font-medium">Category</p>
						<p className="text-gray-600 mt-2">{product.category}</p>
					</div>
				)}

				{/* Seller info */}
				{product.seller && (
					<div className="">
						<h2 className="text-lg font-medium">Seller</h2>
						<p className="text-gray-600 mt-2 pb-2 underline cursor-pointer hover:text-gray-400 duration-200 inline-block">
							{product.seller.name}
						</p>
						<StarRating rating={product.seller.rating} />
					</div>
				)}
				{/* Comments */}
				<div className="mt-8">
					<h3 className="text-lg font-medium">Comments</h3>
					<textarea
						placeholder="Write a comment..."
						rows={4}
						className="w-full border border-gray-400 px-4 py-2 mt-2"
					/>
					<button className="bg-black text-white px-4 py-2 mt-2 hover:bg-gray-500 transition-all duration-200 cursor-pointer">
						Post Comment
					</button>
				</div>
			</div>
		</div>
	);
}
