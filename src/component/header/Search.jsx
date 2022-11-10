import React, { useContext } from "react";
import {
	SearchOutlined,
	UserOutlined,
	LogoutOutlined,
} from "@ant-design/icons";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Button, Modal, Space } from "antd";
import { UserContext } from "../../context/UserContext";
import { NavLink } from "react-router-dom";

export default function Search() {
	const value = useContext(UserContext);

	// confirm modal
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
			<Button type="primary" size="large" icon={<SearchOutlined />}>
				Search
			</Button>
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
