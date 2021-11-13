const extractMinValue = (distances) => {
    let dmin = Infinity;
    let vmin = null;
    for (const [v, d] of distances.entries()) {
        if (d < dmin) {
            vmin = v;
            dmin = d;
        }
    }
    return {vmin, dmin};
}

const Dijkstra = (G, start_vertice) => {

}