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

export const AnimatedCharacters = (props) => {
    // Framer Motion variant object, for controlling animation
    const item = {
        offscreen: {
            y: "200%",
            color: "#0055FF",
            transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 }
        },
        onscreen: {
            y: 0,
            color: "#FF0088",
            transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 }
        }
    };
}