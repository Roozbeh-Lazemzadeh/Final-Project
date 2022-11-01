import React from "react";
import Header from "./header/Header";
import Footer from "./Footer/Footer";
import SwiperSection from "./body/SwiperSection";
import Trends from "./body/Trends";
import SectionHeader from "./body/SectionHeader";

export default function Layout() {
	return (
		<>
			<>
				<Header />
				<SectionHeader textH3={"کالکشن"} textdiv={"مشاهده همه"} />
			</>

			<main>
				<SwiperSection />
				<SectionHeader textH3={"ترندها"} textdiv={"مشاهده همه"} />
				<Trends />
			</main>

			<>
				<Footer />
			</>
		</>
	);
}
