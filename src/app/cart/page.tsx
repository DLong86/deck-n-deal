// app/cart/page.tsx
"use client";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { Montserrat, Creepster } from "next/font/google";

const montserratLight = Montserrat({
	subsets: ["latin"],
	weight: "400",
});

const montserratBold = Montserrat({
	subsets: ["latin"],
	weight: "700",
});

export default function CartPage() {
	const { cart, removeFromCart, clearCart } = useCart();
	const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

	if (cart.length === 0) {
		return (
			<div
				className={`pt-40 w-[80%] mx-auto flex flex-col gap-12 min-h-screen`}
			>
				<div className="">
					<h1
						className={`text-4xl gap-2 tracking-wide ${montserratBold.className}`}
					>
						Cart <span className="text-xs">({cart.length} items)</span>
					</h1>
					<h2 className="text-2xl ">Your cart is empty </h2>
				</div>
				<Link
					href="/shop"
					className={`border-b border-gray-200 py-4 text-sm uppercase cursor-pointer hover:bg-gray-100 hover:p-4 transition-all duration-400 ${montserratLight.className}`}
				>
					Continue shopping
				</Link>
			</div>
		);
	}

	return (
		<div className="max-w-7xl mx-auto py-30 lg:py-40 px-6 grid grid-cols-1 lg:grid-cols-3 gap-0 sm:gap-12 min-h-screen">
			{/* Left: cart items */}
			<div className="lg:col-span-2">
				{/* Cart header row */}
				<div className="flex justify-between items-center pb-4 mt-6 sm:mt-0">
					<h1 className={`text-4xl ${montserratBold.className}`}>
						Cart{" "}
						<span className="text-sm font-normal">({cart.length} items)</span>
					</h1>

					<Link
						href="/shop"
						className={`text-xs uppercase tracking-wider ${montserratLight.className} hover:underline hover:text-gray-600 transition-all duration-300`}
					>
						Continue Shopping
					</Link>
				</div>
				<div className="space-y-8 border-t border-gray-300">
					{cart.map((item) => (
						<div
							key={item.id}
							className="flex justify-between items-center border-b border-gray-300 py-6"
						>
							{/* Product Info */}
							<div className="flex items-center space-x-6">
								{item.imageUrl && (
									<img
										src={item.imageUrl}
										alt={item.name}
										className="w-24 h-24 object-cover border "
									/>
								)}
								<div className="">
									<h3 className="font-medium">{item.name}</h3>
									{item.size && (
										<p className="text-sm text-gray-500">Size: {item.size}</p>
									)}
									<p className="text-gray-700 mt-1">
										¥{item.price.toLocaleString()}
									</p>
								</div>
							</div>

							{/* Quantity + remove */}
							<div className="flex items-center space-x-4">
								<div className="flex items-center border border-gray-400">
									<button className="px-2">-</button>
									<span className="px-3">{item.quantity}</span>
									<button className="px-2">+</button>
								</div>
								<button
									className="text-sm underline text-gray-500 hover:text-black cursor-pointer"
									onClick={() => removeFromCart(item.id)}
								>
									remove
								</button>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Right - sumary */}
			<div className="lg:col-span-1 lg:sticky lg:top-24 space-y-6">
				{/* subtotal */}
				<div className="flex justify-between border-t border-b py-4 font-semibold text-lg">
					<span>Subtotal</span>
					<span>¥{total.toLocaleString()} JPY</span>
				</div>
				{/* shipping details */}
				<div className="border-b pb-4">
					<p className="text-sm pb-2">Delivery: 2 - 3 days</p>
					<p className="text-sm">Courier: ヤマト運輸</p>
				</div>

				{/* Buttons */}
				<button className="w-full py-3 bg-black text-white font-semibold hover:bg-[#222] cursor-pointer">
					CHECKOUT
				</button>
			</div>
		</div>
	);
}
