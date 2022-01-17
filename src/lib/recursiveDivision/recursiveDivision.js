const HORIZONTAL = 0;
const VERTICAL = 1;

const choose_orientation = (width, height) => {
    if (width < height) {
        return HORIZONTAL;
    } else if (height < width) {
        return VERTICAL;
    } else {
        return Math.random < 0.5 ? HORIZONTAL : VERTICAL;
    }
}

const divide = (graph, x, y, width, height, orientation) => {
    if (width < 2 || height < 2) return 0;

    
}