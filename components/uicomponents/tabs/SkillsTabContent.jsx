import React from "react";
import Image from "next/image";

function TabsInner({ data }) {
	return (
		<>
			{data &&
				data?.map((result) => {
					return (
						// <Flip right cascade >
						<div key={result.id}>
							<div className="skills tooltip-neutral text-base-100" data-tip={result.attributes.title}>
								<Image src={result.attributes.img.data.attributes.url} alt={result.attributes.title} width={32} height={32} />
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
