import React from "react";
import { useState, useEffect } from "react";
import { baseUrl } from "../../settings/settings";
import Loader from "./Loader";

function Progress() {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetchData();
	}, []);

	async function fetchData() {
		const url = baseUrl + "api/progresses?populate=*";
		const response = await fetch(url);
		const results = await response.json();

		setData(results.data);
		setLoading(false);
	}

	if (loading) {
		return <Loader />;
	} else {
		return (
			<div className="grid grid-cols-2 gap-2 p-2 justify-center ">
				{data.map((progressItem) => {
					const title = progressItem.attributes.title;
					const percentage = progressItem.attributes.total;
					const image = progressItem.attributes.img.data.attributes.url;
					const id = progressItem.id;

					return (
						<div className=" para-progress tooltip" data-tip={title} key={id}>
							<img src={image} alt={title} className="tech-logos " />
							<progress className="progress-bar" value={percentage} max="100"></progress>
						</div>
					);
				})}
			</div>
		);
	}
}

export default Progress;
