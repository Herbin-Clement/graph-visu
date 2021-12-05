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

const Dijkstra = (G, start_vertice, end_vertice) => {
    let vertices = G.get_vertices();
    let prev = new Array(G.get_nb_vertice);
    const distances = initialiseDistance(start_vertice, vertices);
    while (vertices.length !== 0) {
        const {vmin, dmin, tmp} = extractMinValue(distances, vertices);
        vertices = tmp;
        for (const neighbor of G.neighbors(vmin)) {
            if (distances.get(neighbor) > dmin + 1) {
                distances.set(neighbor, dmin + 1);
                prev[neighbor] = vmin;
                if (neighbor == end_vertice) return {distances, prev};
            }
        }
    }
    return { distances, prev };
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

export { Dijkstra, getPath };