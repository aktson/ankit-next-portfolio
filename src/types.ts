export interface IProject {
	id: string;
	attributes: {
		categories: { data: string[] };
		category: string | null;
		createdAt: string;
		github?: string;
		image: { data: {} };
		publishedAt: string;
		sliderImages: { data: string[] };
		stack: string;
		stacks: { data: string[] };
		summary: string;
		summaryEnglish: string;
		title: string;
		updatedAt: string;
		url?: string;
	};
}
export interface ISkills {
	id: string;
	attributes: {
		category: string;
		createdAt: string;
		img?: { data: {} };
		projects?: { data: [] };
		publishedAt: string;
		title: string;
		updatedAt?: string;
	};
}
