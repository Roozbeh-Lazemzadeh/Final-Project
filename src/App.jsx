import Card from "./component/Card/Card";
import Footer from "./component/Footer/Footer";
import Header from "./component/header/Header";
import SwiperSection from "./component/body/SwiperSection";
import SectionHeader from "./component/body/SectionHeader";
import Trends from "./component/body/Trends";
import Layout from "./component/Layout";
import "./module/normalize.css";
import "./module/reset.css";
import "antd/dist/antd.css";
import "./module/header.css";
import "./module/footer.css";
import "./module/Card.css";
import "./module/swiper.css";

function App() {
	return (
		<>
			{/* <Header />
      <SectionHeader textH3={"کالکشن"} textdiv={"مشاهده همه"} />
      <SwiperSection />

      <SectionHeader textH3={"ترندها"} textdiv={"مشاهده همه"} />
      <Trends />
      <SectionHeader textH3={"جدیدترین دوبله ها "} textdiv={"مشاهده همه"} />
      <Footer /> */}
			<Layout />
		</>
	);
}

export default App;
