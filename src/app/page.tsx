import HomeHero from "./components/HomeHero";

export default function Home() {
	return (
		<main className="bg-black text-white min-h-screen px-6 sm:px-14">
			<section className="">
				<HomeHero />
				{/* <h1 className="text-4xl sm:text-6xl font-bold mb-6">
					Deck &apos;n&apos; Deal
				</h1>
				<p className="text-lg sm:text-xl text-grey-300 mb-8">
					{" "}
					Buy & sell used skate decks, wheels, shoes & more. All killer, no
					filler.
				</p>
				<a
					href="/shop"
					className="inline-block bg-white text-black px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-200 transition"
				>
					Shop
				</a> */}
			</section>
		</main>
	);
}
