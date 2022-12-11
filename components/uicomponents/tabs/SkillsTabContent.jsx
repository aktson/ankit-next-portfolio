import React from "react";
// import Flip from "react-reveal/Flip";

function TabsInner({ data }) {
	return (
		<>
			{data &&
				data.map((result) => {
					return (
						// <Flip right cascade >
						<div key={result.id}>
							<div className="skills tooltip-neutral text-base-100" data-tip={result.attributes.title}>
								<img src={result.attributes.img.data.attributes.url} alt={result.attributes.title} className="tech-logos " />
								<p>{result.attributes.title}</p>
							</div>
						</div>
						// </Flip>
					);
				})}
		</>
	);
}

export default TabsInner;
