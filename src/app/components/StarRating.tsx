"use client";
import { Star } from "lucide-react";

type StarRatingProps = {
	rating: number;
};

export default function StarRating({ rating }: StarRatingProps) {
	const stars = Array.from({ length: 5 }, (_, i) => i + 1);

	return (
		<div className="flex items-center gap-1">
			{stars.map((star) => (
				<Star
					key={star}
					className={`w-5 h-5 ${
						star <= Math.floor(rating)
							? "text-yellow-400 fill-yellow-400"
							: "text-gray-300"
					}`}
				/>
			))}
			<span className="ml-2 text-sm text-gray-500">({rating})</span>
		</div>
	);
}
