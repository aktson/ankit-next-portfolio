export const cardVariantsParent = {
    offscreen: { y: 5 },
    onscreen: {
        y: 0,
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
export const projectCardVariants = {
    offscreen: {
        scale: 0.9,
    },
    onscreen: {
        scale: 1,

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
        transition: {
            type: "spring",
            duration: 0.5,
            bounce: 0.3,
            stiffness: 200
        },
    },
};

const headingVariant = {
    offscreen: {
        translateX: -100,
        opacity: 0,
    },
    onscreen: {
        translateX: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.9,
            stiffness: 100,
        },
    },
};
