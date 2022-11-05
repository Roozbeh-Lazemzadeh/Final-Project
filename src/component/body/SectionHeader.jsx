import { Col, Radio, Row } from "antd";
import "../../module/SectionHeader.css";

export default function SectionHeader(props) {
	return (
		<section className="section-header">
			<h3> {props.textH3}</h3>
			<div className="toggle_section">
				<Row>
					<Col span={12}>
						<Radio.Group defaultValue="a" buttonStyle="solid">
							<Radio.Button value="a">Movies</Radio.Button>
							<Radio.Button value="b">TV</Radio.Button>
							<Radio.Button value="c">All</Radio.Button>
						</Radio.Group>
					</Col>
				</Row>
			</div>
		</section>
	);
}
