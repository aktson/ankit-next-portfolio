
export const imageVariant = {
    offscreen: {
        scale: 0,
        translateX: 150
    },
    onscreen: {
        scale: 1,
        translateX: 0,
        transition: {
            type: "spring",
            duration: 0.5,
            bounce: 0.3, stiffness: 200
        },
    },
};