import React from "react";
import Header from "./header/Header";
import Footer from "./Footer/Footer";
import SectionHeader from "./body/SectionHeader";
import { Outlet, RouterProvider } from "react-router-dom";
import { router } from "../router";
import Trends from "./body/Trends";
import SwiperSection from "./body/SwiperSection";

export default function Layout() {
	return (
		<>
			<Outlet />
			{/* <>
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
			</> */}
		</>
	);
}
