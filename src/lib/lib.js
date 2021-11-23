import Graph from "./Graph/Graph.js";
import { Dijkstra } from "./Dijkstra/Dijktra.js";

const w = 10;
const h = 5;

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

export { createGridGraph, h , w, D2toD1, D1toD2 };