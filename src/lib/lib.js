import Graph from "./Graph/Graph.js";

const w = 58;
const h = 27;

const y_initial = Math.floor(h / 2);
const x_start_initial = Math.floor(w / 4);
const x_end_initial = Math.floor(3 * w / 4);

const createGridGraph = (w, h) => {
    const graph = new Graph(w, h);
    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            const {id} = D2toD1(j, i);
            if (i < h - 1 && j < w - 1) { // Toute les cases sauf derniere ligne et derniere colonne
                graph.add_edges(id, id + 1)
                graph.add_edges(id, id + w);
            } else if (i < h - 1 && j === w - 1) { // Derniere colonne
                graph.add_edges(id, id + w);
            } else if (i === h - 1 && j < w - 1) { // derniere ligne
                graph.add_edges(id, id + 1);
            }
        }
    }
    return graph;
}

const D2toD1 = (x,y) => {
    return {id:x + y * w}
}

const D1toD2 = (id) => {
    return {x: Math.floor(id / w), y: id % w}
}

export { createGridGraph, h , w, D2toD1, D1toD2, x_start_initial, x_end_initial, y_initial };