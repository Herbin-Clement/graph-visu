import Graph from "./Graph/Graph.js";
import { Dijkstra } from "./Dijkstra/Dijktra.js";

const createGridGraph = (w, h) => {
    const graph = new Graph();
    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            const id = i * h + j;
            if (i < h - 1 && j < w - 1) {
                graph.add_edges(id, id + 1)
                graph.add_edges(id, id + w);
            } else if (i < h - 1 && j === w - 1) {
                graph.add_edges(id, id + w);
            } else if (i === h - 1 && j < w - 1) {
                graph.add_edges(id, id + 1);
            }
        }
    }
    return graph;
}

export { createGridGraph };