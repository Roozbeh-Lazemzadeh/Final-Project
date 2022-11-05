import SwiperSection from "../body/SwiperSection";
import SectionHeader from "../body/SectionHeader";
import Trends from "../body/Trends";

export default function Home() {
	return (
		<>
			<SwiperSection />
			<SectionHeader textH3={"Tending"} textdiv={"View All"} />
			<Trends />
		</>
	);
}
