import React from "react";

import { SearchOutlined, UserOutlined } from "@ant-design/icons";
import { Button } from "antd";

export default function Search() {
	return (
		<div className="navBtn-container">
			<Button type="primary" size="large" icon={<SearchOutlined />}>
				Search
			</Button>
			<Button type="primary" size="large" icon={<UserOutlined />}>
				Sign In
			</Button>
		</div>
	);
}
