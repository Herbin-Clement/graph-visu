const BreadthFirstSearch = (G, start_vertice, end_vertice) => {
    const res = [];
    let prev = new Array(G.get_nb_vertice());
    const display = [];
    const already_visited = new Array(G.get_nb_vertice()).map((e) => false);
    let to_treat = [];
    to_treat.push(start_vertice);
    while (to_treat.length !== 0) {
        const current_node = to_treat.shift();
        if (!already_visited[current_node]) {
            display.push(current_node);
            res.push(current_node);
            if (current_node === end_vertice) return { prev, display, found: true };   
            already_visited[current_node] = true;
            const neighbors = G.neighbors(current_node);
            for (const n of neighbors) {
                if (!already_visited[n]) {
                    to_treat.push(n);
                    prev[n] = current_node;
                }
            };
        }
    }
    return { prev, display, found: false };
}

const DepthFirstSearch = (G, start_vertice, end_vertice) => {
    const res = [];
    let prev = new Array(G.get_nb_vertice());
    const display = [];
    const already_visited = new Array(G.get_nb_vertice()).map((e) => false);
    let to_treat = [];
    to_treat.push(start_vertice);
    while (to_treat.length !== 0) {
        const current_node = to_treat.pop();
        if (!already_visited[current_node]) {
            display.push(current_node);
            res.push(current_node);
            if (current_node === end_vertice) return { prev, display, found: true };   
            already_visited[current_node] = true;
            const neighbors = G.neighbors(current_node);
            for (const n of neighbors) {
                if (!already_visited[n]) {
                    to_treat.push(n);
                    prev[n] = current_node;
                }
            };
        }
    }
    return { prev, display, found: false };   
}

export { BreadthFirstSearch, DepthFirstSearch };