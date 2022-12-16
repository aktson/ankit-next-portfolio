export const wavyTextParent = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            // staggerChildren: 0.05,
            // delayChildren: 0.1,
        },
    }
};

export const wavyTextChild = {
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            damping: 12,
            stiffness: 200,
        },
    },
    hidden: {
        opacity: 0,
        scale: 0.2,
        transition: {
            type: "spring",
            damping: 12,
            stiffness: 200,
        },
    },
};