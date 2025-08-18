import Image from "next/image";

const HomeHero = () => {
	return (
		<section className="flex flex-col md:flex-row w-full gap-4 sm:gap-0 min-h-screen bg-black">
			<div className="w-full h-[50vh] md:h-screen relative overflow-hidden">
				<Image
					src="/images/hero-gear.jpg"
					alt="skateboard gear"
					layout="fill"
					objectFit="cover"
					className="brightness-100 transform transition-transform duration-700 ease-in-out hover:scale-105"
				></Image>
			</div>
			<div className="w-full  h-[50vh] md:h-screen relative overflow-hidden">
				<Image
					src="/images/hero-cool.jpg"
					alt=""
					layout="fill"
					objectFit="cover"
					className="brightness-100 transform transition-transform duration-700 ease-in-out hover:scale-105"
				></Image>
			</div>
		</section>
	);
};

export default HomeHero;
