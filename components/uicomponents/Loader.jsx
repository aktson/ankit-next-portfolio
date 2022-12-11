import React from "react";

function Loader() {
	return (
		<div className=" shadow-lg rounded-md p-4 max-w-sm w-full mx-auto">
			<p className="mb-2 text-center animate-pulse text-slate-400">Laster data, vennligst vent...</p>
			<div className="animate-pulse flex space-x-4">
				<div className="rounded-full bg-slate-400 h-10 w-10"></div>
				<div className="flex-1 space-y-6 py-1">
					<div className="h-2 bg-slate-400 rounded"></div>
					<div className="space-y-3">
						<div className="grid grid-cols-3 gap-4">
							<div className="h-2 bg-slate-400 rounded col-span-2"></div>
							<div className="h-2 bg-slate-400 rounded col-span-1"></div>
						</div>
						<div className="h-2 bg-slate-400 rounded"></div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Loader;
