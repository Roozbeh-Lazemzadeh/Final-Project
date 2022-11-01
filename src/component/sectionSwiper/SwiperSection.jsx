import "swiper/css/autoplay";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
export default function SwiperSection() {
	const slides = [
		{
			href: "#",
			src: "./src/picture/Annabelle-Collection-Movie-Poster-301x170.jpg.webp",
			name: "آنابل",
		},
		{
			href: "#",
			src: "./src/picture/Dumb-and-Dumber-Movie-Collection-poster-301x170.jpg.webp",
			name: "احمق و احمق تر",
		},
		{
			href: "#",
			src: "./src/picture/now-you-see-me-collection-movie-301x170.jpg.webp",
			name: "اکنون مرا می بینی",
		},
		{
			href: "#",
			src: "./src/picture/Saw-collection-Movie-poster-301x170.jpg.webp",
			name: "اره ",
		},
		{
			href: "#",
			src: "./src/picture/Scooby-Doo-collection-animation-Poster-301x170.jpg.webp",
			name: "اسکوبی دو",
		},
		{
			href: "#",
			src: "./src/picture/The-Conjuring-Collection-Movie-Poster-301x170.jpg.webp",
			name: "  احضار ",
		},
		{
			href: "#",
			src: "./src/picture/The-Lord-of-the-Rings-collection-1-301x170.jpg.webp",
			name: "  ارباب حلقه ها ",
		},
	];

	return (
		<Swiper
			modules={[Autoplay]}
			spaceBetween={15}
			slidesPerView={5}
			loop={true}
			autoplay={{ delay: 1000 }}
			onSlideChange={() => console.log("slide change")}
			onSwiper={(swiper) => console.log(swiper)}
		>
			{slides.map((item) => (
				<SwiperSlide>
					<div className="item">
						<a href={item.href}>
							<img src={item.src} alt="" className="spimg" />
						</a>
						<div className="name">{item.name}</div>
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
}
