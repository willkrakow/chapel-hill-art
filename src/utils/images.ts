export function createSrcSet(imageUrl: string) {
    const imageWidths = [320, 480, 800, 1200, 1600];
    const srcSet = imageWidths.map((width) => {
        return `${imageUrl.replace('dynamic', `w=${width},sharpen=3 ${width}w`)}`;
    });

    return srcSet.join(', ');
}
