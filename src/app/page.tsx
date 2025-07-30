export default function Home() {
	const dummyItems = [
		{
			id: 1,
			name: "Used Frog Deck 8.25 - Almost new",
			price: "¥6000",
			imageUrl: "../../images/frog-deck.png",
			description: "Only used twice, no visible dirt or scratches.",
		},
		{
			id: 2,
			name: "Last Resort VM003 - black/white",
			price: "¥8000",
			imageUrl: "../../images/vm003.png",
			description: "Slight wear on the sole but still fresh.",
		},
		{
			id: 3,
			name: "Spitfire Formula Four Conical 52mm Wheels",
			price: "¥5500",
			imageUrl: "../../images/spitfire.png",
			description: "Bit of dirt from usage but hardly ridden.",
		},
		{
			id: 4,
			name: "Polar T-Shirt",
			price: "¥4200",
			imageUrl: "../../images/t-shirt.png",
			description: "No visible stains or damage. It's from S/s23 collection.",
		},
		// -----------------------------------------
	];

	return (
		<main className="bg-black text-white min-h-screen pt-32 px-6 pb-12 sm:pb-28">
			<section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
				{dummyItems.map((product) => (
					<div key={product.id} className="group cursor-pointer">
						<div className="aspect-square overflow-hidden">
							<img
								src={product.imageUrl}
								alt={product.name}
								className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
							/>
						</div>
						<div className="mt-4 text-sm tracking-wide uppercase text-gray-200">
							<p>{product.name}</p>
							<p className="text-gray-400 mt-1">{product.price}</p>
						</div>
					</div>
				))}
			</section>
		</main>
	);
}
