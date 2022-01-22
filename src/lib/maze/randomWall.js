import { D2toD1 } from '../lib.js';

const randomWall = (w, h, id_start, id_end) => {
    const treshold = 0.25;
    const walls = [];
    for (let i = 0; i < w; i ++) {
        for (let j = 0; j < h; j ++) {
            if (Math.random() < treshold) {
                const id = D2toD1(i, j).id;
                if (id !== id_start && id !== id_end) {
                    walls.push(id);
                }
            }
        }
    }
    return shuffleWall(walls);
}

const shuffleWall = (Wall) => {
    for (let i = Wall.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const tmp = Wall[i];
        Wall[i] = Wall[j];
        Wall[j] = tmp;
    }
    return Wall;
}
  

export { randomWall };