import React from "react";
import { Button } from "antd";

export default function Footer() {
	return (
		<footer className="Footer">
			<div> طراحی با💙، تمامی حقوق برای هکس دانلود محفوظ است.</div>
			<div className="FooterLinks">
				<Button type="primary">درباره ی ما</Button>
				<Button type="primary">تماس با ما</Button>
				<Button type="primary">گزارش باگ</Button>
			</div>
		</footer>
	);
}
