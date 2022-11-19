import Footer from "../Footer/Footer";
import { useState } from "react";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { imgBaseURL, posterImg } from "../../apiConfig";
import { Col, Radio, Row } from "antd";
import { UnorderedListOutlined } from "@ant-design/icons";
import "../../module/profile.css";

export default function Profile() {
	const [visibel, setVisibel] = useState(false);
	const { user, session, watchListMove } = useContext(UserContext);
	console.log(watchListMove);
	const navigate = useNavigate();
	return (
		<>
			{user ? (
				<>
					<header>
						<div className="headre_profile">
							<div id="logo">
								<NavLink to={"/"}>
									<img src="./src/picture/logo2.svg" />
								</NavLink>
							</div>
						</div>
					</header>

					<div className="container_avator">
						<Row gutter={[16, 16]}>
							<Col xs={24} sm={8} md={6} lg={6}>
								<div className="sidebar">
									{user.avatar.tmdb.avatar_path ? (
										<div className="avator">
											<img
												src={posterImg(
													user.avatar.tmdb.avatar_path,
													"original"
												)}
											/>
										</div>
									) : (
										<>
											<div className="avator_titel">
												<h2>{user.username}</h2>
											</div>
										</>
									)}
									<div className="slide-barname">{user.username}</div>
									<div
										className="slide-barname"
										onClick={() => setVisibel(!visibel)}
									>
										My Watchlist
										<UnorderedListOutlined />
									</div>
									<div className="slide-barname">Exit</div>
								</div>
							</Col>
							<Col xs={24} sm={16} md={18} lg={18}>
								<div className="content">
									<Row gutter={[16, 16]}>
										{" "}
										{visibel ? (
											watchListMove.map((item) => (
												<div className="watchlist">
													<Col xs={24} sm={4} md={4} lg={4}>
														<div className="watchlist-img">
															<img
																src={posterImg(item.poster_path, "original")}
															></img>
														</div>
													</Col>
													<Col xs={24} sm={20} md={20} lg={20}>
														<h2>{item.original_title}</h2>
													</Col>
												</div>
											))
										) : (
											<></>
										)}
									</Row>
								</div>
							</Col>
						</Row>
					</div>
				</>
			) : (
				<Navigate to="/" replace true />
			)}
			<div className="drop_menu"></div>

			<Footer />
		</>
	);
}
