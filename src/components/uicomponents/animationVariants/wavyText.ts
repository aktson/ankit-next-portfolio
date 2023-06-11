export const wavyTextParent = {
	hidden: {
		opacity: 0,
	},
	visible: (i = 1) => ({
		opacity: 1,
		transition: {
			staggerChildren: 0.05,
			delayChildren: 0.1 * i,
		},
	}),
};

export const wavyTextChild = {
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			type: "spring",
			damping: 12,
			stiffness: 200,
		},
	},
	hidden: {
		opacity: 0,
		scale: 0,

		transition: {
			type: "spring",
			damping: 12,
			stiffness: 200,
		},
	},
};

export const wavyText = {
	offscreen: {
		opacity: 1,
		y: 0,
		transition: {
			type: "spring",
			damping: 12,
			stiffness: 200,
		},
	},
	hidden: {
		onscreen: 0,
		y: 20,

		transition: {
			type: "spring",
			damping: 12,
			stiffness: 200,
		},
	},
};
