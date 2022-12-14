export const imageVarinatParent = {
    offscreen: { opacity: 0 },
    onscreen: {
        opacity: 1,
        transition: {
            delayChildren: 0.4
        }
    }
}
export const imageVariant = {
    offscreen: {
        scale: 0,
    },
    onscreen: {
        scale: 1,
        transition: {
            type: "anticipate",
            duration: 0.5,
        },
    },
};