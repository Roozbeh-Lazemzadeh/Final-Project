export default function SectionHeader(props) {
	return (
		<section className="colection-List">
			<div className="section-header">
				<h3> {props.textH3}</h3>
				<div className="more-action"> مشاهده همه</div>
			</div>
		</section>
	);
}
