export const cardVariantsParent = {
    offscreen: { opacity: 0 },
    onscreen: {
        opacity: 1,
        transition: {
            staggerDirection: 1,
            staggerChildren: 0.2
        }
    }
}

export const cardVariants = {
    offscreen: {
        y: 200,
        opacity: 0,
    },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.9,
            stiffness: 100,
        },
    },
};


export const skillsCardVariants = {
    offscreen: {
        scale: 0,
        opacity: 0,
    },
    onscreen: {
        scale: 1,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.9,
            stiffness: 100,
        },
    },
}

