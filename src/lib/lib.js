import Graph from "./Graph/Graph.js";
import { Dijkstra } from "./Dijkstra/Dijktra.js";

const createGraph = () => {
    const graph = new Graph();
    graph.add_edges(0, 1);
    graph.add_edges(1, 2);
    graph.add_edges(2, 3);
    graph.add_edges(0, 3);
    graph.add_edges(3, 4);
    console.log(Dijkstra(graph, 0));
}

export { createGraph };