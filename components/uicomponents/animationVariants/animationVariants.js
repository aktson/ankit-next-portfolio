export const cardVariantsParent = {
    offscreen: { opacity: 0 },
    onscreen: {
        opacity: 1,
        transition: {
            staggerDirection: 1,
            staggerChildren: 0.4
        }

    }
}

export const cardVariants = {
    offscreen: {
        y: 20,
    },
    onscreen: {
        y: 0,
        rotate: -10,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
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

export const imageVariant = {
    offscreen: {
        scale: 0,
        translateX: 150
    },
    onscreen: {
        scale: 1,
        // translateX: 0,
        transition: {
            type: "spring",
            duration: 0.5,
            bounce: 0.3,
            stiffness: 200
        },
    },
};