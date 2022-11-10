import React, { useContext, useState } from "react";
import {
	SearchOutlined,
	UserOutlined,
	LogoutOutlined,
} from "@ant-design/icons";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Button, Modal, Space } from "antd";
import { UserContext } from "../../context/UserContext";
import { NavLink } from "react-router-dom";
import "../../module/search.css";

export default function Search() {
	const value = useContext(UserContext);
	//handle searchbox begin
	const [isSearchOpen, setIsSearchOpen] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	if (menuOpen) {
		document.body.style.overflow = "hidden";
	} else {
		document.body.style.overflow = "initial";
	}

	function openSearchBox() {
		setIsSearchOpen(true);
		setMenuOpen(true);
	}

	function closeSearchBox() {
		setIsSearchOpen(false);
		setMenuOpen(false);
	}
	//handle searchbox end
	// confirm modal begin
	const { confirm } = Modal;

	const showConfirm = () => {
		confirm({
			title: "Do you Want to log out?",
			icon: <ExclamationCircleOutlined />,
			content: "",
			onOk() {
				value.logOut();
			},
			onCancel() {
				console.log("Cancel");
			},
		});
	};
	//// confirm modal end

	return (
		<div className="navBtn-container">
			<Button
				type="primary"
				size="large"
				icon={<SearchOutlined />}
				onClick={openSearchBox}
			>
				Search
			</Button>
			{/* search area begin */}
			<div className={`search_box${isSearchOpen ? " opened" : ""}`}>
				<div className="search_box_header">
					<div className="search_box_header_close">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 320 512"
							onClick={closeSearchBox}
						>
							<path d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"></path>
						</svg>
					</div>
				</div>
				<div className="search_box_body_wrapper">
					<form class="search_box_body_form" action="" method="get">
						<button type="submit" class="search_box_body_form_btn">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
								<path d="M508.5 481.6l-129-129c-2.3-2.3-5.3-3.5-8.5-3.5h-10.3C395 312 416 262.5 416 208 416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c54.5 0 104-21 141.1-55.2V371c0 3.2 1.3 6.2 3.5 8.5l129 129c4.7 4.7 12.3 4.7 17 0l9.9-9.9c4.7-4.7 4.7-12.3 0-17zM208 384c-97.3 0-176-78.7-176-176S110.7 32 208 32s176 78.7 176 176-78.7 176-176 176z"></path>
							</svg>
						</button>
						<input
							type="text"
							name="search"
							class="search_box_body_form_input"
							placeholder="Search here..."
							autocomplete="off"
						/>
					</form>
					<div class="search_box_body_results"></div>
				</div>
			</div>
			{/* search area end */}

			{value.user ? (
				<>
					<Button
						type="primary"
						size="large"
						style={{ textTransform: "capitalize" }}
						icon={<UserOutlined />}
					>
						{value.user.username}
					</Button>
					<LogoutOutlined onClick={showConfirm} />
				</>
			) : (
				<NavLink to="/login">
					<Button type="primary" size="large" icon={<UserOutlined />}>
						Sign Up
					</Button>
				</NavLink>
			)}
		</div>
	);
}
