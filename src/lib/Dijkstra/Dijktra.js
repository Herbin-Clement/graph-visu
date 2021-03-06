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
    console.log("yo");
    let vertices = G.get_vertices();
    let prev = new Array(G.get_nb_vertice());
    let display = [];
    const distances = initialiseDistance(start_vertice, vertices);
    let i = 0;
    while (vertices.length !== 0 && i < 5) {
        const {vmin, dmin, tmp} = extractMinValue(distances, vertices);
        vertices = tmp;
        if (dmin === Infinity) break;
        for (const neighbor of G.neighbors(vmin)) {
            if (distances.get(neighbor) > dmin + 1) {
                distances.set(neighbor, dmin + 1);
                prev[neighbor] = vmin;
                display.push(neighbor);
                if (neighbor === end_vertice) return { prev, display, found: true };
            }
        }
    }
    console.log("yo");
    return { prev, display, found: false };
}

export { Dijkstra };