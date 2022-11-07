import React, { useContext } from "react";

import { SearchOutlined, UserOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { UserContext } from "../../context/UserContext";
import { NavLink } from "react-router-dom";

export default function Search() {
	const value = useContext(UserContext);

	return (
		<div className="navBtn-container">
			<Button type="primary" size="large" icon={<SearchOutlined />}>
				Search
			</Button>
			{value.user ? (
				<Button
					type="primary"
					size="large"
					style={{ textTransform: "capitalize" }}
					icon={<UserOutlined />}
				>
					{value.user.username}
				</Button>
			) : (
				<NavLink to="./login">
					<Button type="primary" size="large" icon={<UserOutlined />}>
						Sign Up
					</Button>
				</NavLink>
			)}
		</div>
	);
}
