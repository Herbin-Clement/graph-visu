import { D2toD1 } from '../lib.js';

const HORIZONTAL = 0;
const VERTICAL = 1;
const SUD = 0;
const EAST = 1;

const choose_orientation = (width, height) => {
    if (width < height) {
        return HORIZONTAL;
    } else if (height < width) {
        return VERTICAL;
    } else {
        return Math.random < 0.5 ? HORIZONTAL : VERTICAL;
    }
}

const divide = (graph, x, y, width, height, orientation, tmp) => {
    if (width < 2 || height < 2 || tmp === 0) return new Array(0);

    const horizontal = orientation === HORIZONTAL;

    let wall_x = x + (horizontal ? 0 : Math.floor(Math.random() * (width - 2)));
    let wall_y = y + (horizontal ? Math.floor(Math.random() * (height - 2)) : 0);

    const hole_x = wall_x + (horizontal ? Math.floor(Math.random() * width) : 0);
    const hole_y = wall_y + (horizontal ? 0 : Math.floor(Math.random() * height));

    const dx = horizontal ? 1 : 0;
    const dy = horizontal ? 0 : 1;

    const length = horizontal ? width : height;

    // const dir = horizontal ? SUD : EAST;
    
    let wall = [];

    for (let i = 0; i < length; i++) {
        if (wall_x !== hole_x || wall_y !== hole_y) {
            const id = D2toD1(wall_x, wall_y).id;
            if (graph.is_vertice(id)) {
                graph.remove_vertice(id);
                wall.push(id);
            }
        };
        wall_x += dx;
        wall_y += dy;
    }
    let nx = x;
    let ny = y;

    let next_width = horizontal ? width : wall_x - x + 1;
    let next_height = horizontal ? wall_y - y + 1 : height;
    const wall1 = divide(graph, nx, ny, next_width, next_height, choose_orientation(next_width, next_height), tmp - 1);
    wall = wall.concat(wall1);
    nx = horizontal ? x : wall_x + 1;
    ny = horizontal ? wall_y + 1 : y;

    next_width = horizontal ? width : x + width - wall_x - 1;
    next_height = horizontal ? y + height - wall_y - 1 : height;
    const wall2 = divide(graph, nx, ny, next_width, next_height, choose_orientation(next_width, next_height), tmp - 1);
    wall = wall.concat(wall2);
    return wall;
}

export { divide };