import Image from "next/image";
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

const HomeHero = () => {
	return (
		<section className="flex flex-col lg:flex-row w-full gap-4 sm:gap-0 min-h-screen bg-black">
			<div className="w-full h-[50vh] md:h-screen relative overflow-hidden group">
				<Image
					src="/images/fashion-hero.jpg"
					alt="skateboard gear"
					layout="fill"
					objectFit="cover"
					className="brightness-100 transform transition-transform duration-700 ease-in-out object-contain"
				></Image>
				{/* Overlay on hover */}
				<Link
					href="/shop"
					className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 transition ease-in-out duration-500 group-hover:opacity-100 "
				>
					<h2
						className={`text-white text-4xl font-bold tracking-wider drop-shadow-[3px_3px_6px_rgba(0,0,0,0.9)] ${bebasFont.className}`}
					>
						Buy
					</h2>
				</Link>
			</div>

			<div className="w-full h-[50vh] md:h-screen relative overflow-hidden group">
				<Image
					src="/images/ace-hero.jpg"
					alt=""
					layout="fill"
					objectFit="cover"
					className="brightness-100 transform transition-transform duration-700 ease-in-out"
				></Image>
				{/* Overlay on hover */}
				<Link
					href="/sell"
					className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 transition ease-in-out duration-500 group-hover:opacity-100 "
				>
					<h2
						className={`text-white text-4xl font-bold tracking-wider drop-shadow-[3px_3px_6px_rgba(0,0,0,0.9)] ${bebasFont.className}`}
					>
						Sell
					</h2>
				</Link>
			</div>
		</section>
	);
};

export default HomeHero;
