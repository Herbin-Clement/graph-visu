import Graph from "../Graph/Graph";

const extractMinValue = (distances, vertices) => {
    let dmin = Infinity;
    let vmin = null;
    for (const v of vertices) {
        const d = distances.get(v);
        if (d < dmin) {
            vmin = v;
            dmin = d;
        }
    }
    vertices = vertices.filter((v) => v !== vmin);
    console.log(vertices);
    return {vmin, dmin, tmp: vertices};
}

const initialiseDistance = (start_vertice, vertices) => {
    const distances = new Map();
    for (const v of vertices) {
        distances.set(v, Infinity);
    }
    distances.set(start_vertice, 0);
    return distances;
}

const Dijkstra = (G, start_vertice) => {
    let count = 5;
    console.log("yo");
    let vertices = G.get_vertices();
    console.log("vertices", vertices);
    const distances = initialiseDistance(start_vertice, vertices);
    while (vertices.length !== 0) {
        count-=1;
        const {vmin, dmin, tmp} = extractMinValue(distances, vertices);
        vertices = tmp;
        for (const neighbor of G.neighbors(vmin)) {
            distances.set(neighbor, Math.min(distances.get(neighbor), dmin + 1));
        }
    }
    return distances;
}

export { Dijkstra };