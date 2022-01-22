import Graph from "./Graph/Graph.js";

const w = 30;
const h = 20;
// const w = 58;
// const h = 27;

const y_initial = Math.floor(h / 2);
const x_start_initial = Math.floor(w / 4);
const x_end_initial = Math.floor(3 * w / 4);

const createGridGraph = (w, h) => {
    const graph = new Graph(w, h);
    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            const {id} = D2toD1(j, i);
            if (i < h - 1 && j < w - 1) { // Toute les cases sauf derniere ligne et derniere colonne
                // console.log(id);
                graph.add_edges(id, id + 1)
                graph.add_edges(id, id + w);
                // console.log(id, graph.neighbors(id));
            } else if (i < h - 1 && j === w - 1) { // Derniere colonne
                graph.add_edges(id, id + w);
            } else if (i === h - 1 && j < w - 1) { // derniere ligne
                graph.add_edges(id, id + 1);
            }
        }
    }
    return graph;
}


const getPath = (prev, start, end) => {
    const path = [];
    let current_node = end;
    while (current_node !== start) {
        path.push(current_node);
        current_node = prev[current_node];
    }
    path.push(current_node);
    return path.reverse();
}

const D2toD1 = (x,y) => {
    return {id:x + y * w}
}

const D1toD2 = (id) => {
    return {y: Math.floor(id / w), x: id % w}
}

export { createGridGraph, getPath, h , w, D2toD1, D1toD2, x_start_initial, x_end_initial, y_initial };