export function createSrcSet(imageUrl: string) {
    const imageWidths = [320, 480, 800, 1200, 1600];
    const srcSet = imageWidths.map((width) => {
        return `${imageUrl.replace('dynamic', `w=${width},sharpen=3 ${width}w`)}`;
    });

    return srcSet.join(', ');
}


export function gaussianFilter(image: HTMLImageElement, canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) {
    // Retrieve the image from the DOM.
    // Create a canvas element.
    // Create a context to the canvas.
    // Set the width and height of the canvas element to match the image.
    canvas.width = image.width;
    canvas.height = image.height;

    // Draw the image to the canvas.
    context.drawImage(image, 0, 0);

    // Get the image data from the canvas.
    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);

    // Apply the gaussian blur filter to the image data.
    const filtered = gaussianBlur(imageData.data, 5);

    // Set the image data back to the canvas.
    context.putImageData(new ImageData(filtered, canvas.width, canvas.height), 0, 0);
}

function gaussianBlur(points: Uint8ClampedArray, radius: number) {
    const kernel = gaussianKernel(radius);
    const width = Math.sqrt(points.length);
    const half = Math.floor(width / 2);
    const output = [];

    for (let i = 0; i < points.length; i++) {
        const x = i % width;
        const y = Math.floor(i / width);
        let sum = 0;

        for (let j = 0; j < kernel.length; j++) {
            const x1 = x + j % width - half;
            const y1 = y + Math.floor(j / width) - half;

            if (x1 >= 0 && x1 < width && y1 >= 0 && y1 < width) {
                sum += points[x1 + y1 * width] * kernel[j];
            }
        }

        output[i] = sum;
    }

    return new Uint8ClampedArray(output);
}

function gaussianKernel(radius: number) {
    const size = radius * 2 + 1;
    const kernel = [];
    let sum = 0;

    for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
            const value = gaussian(x - radius, y - radius, radius / 2);
            kernel.push(value);
            sum += value;
        }
    }

    return kernel.map((value) => value / sum);
}

function gaussian(x: number, y: number, sigma: number) {
    return (1 / (2 * Math.PI * sigma * sigma)) * Math.exp(-(x * x + y * y) / (2 * sigma * sigma));
}