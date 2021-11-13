const extractMinValue = (distances, vertices) => {
    let dmin = Infinity;
    let vmin = null;
    for (const [v, d] of distances.entries()) {
        if (d < dmin) {
            vmin = v;
            dmin = d;
        }
    }
    distances.delete(vmin);
    vertices = vertices.filter((v) => v !== vmin);
    return {vmin, dmin};
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
    const vertices = G.get_vertices();
    const distances = initialiseDistance(start_vertice, vertices);
    while (distances.size !== 0) {
        const {vmin, dmin} = extractMinValue(distances, vertices)
        for (const neighbor of G.neighbors(vmin)) {
            distances.set(v, Math.min(distances.get(v), dmin + 1));
        }
    }
    return distances;
}

