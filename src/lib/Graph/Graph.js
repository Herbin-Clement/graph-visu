export default class Graph {
    constructor(w, h) {
        this.vertices = new Map();
        this.w = w;
        this.h = h;
    }

    add_vertice(v) {
        if (!this.is_vertice(v)) this.vertices.set(v, []);
    }

    remove_vertice(v) {
        this.vertices.delete(v);
        for (let [vertice, neighbors] of this.vertices.entries()) {
            neighbors = neighbors.filter((e) => e !== v);
            this.vertices.set(vertice, neighbors);
        }
    }

    is_vertice(v) {
        return !(this.vertices.get(v) === undefined);
    }

    add_edges(u, v) {
        if (!this.is_vertice(u)) this.add_vertice(u)
        if (!this.is_vertice(v)) this.add_vertice(v)
        const tmp_u = this.vertices.get(u);
        const tmp_v = this.vertices.get(v);
        tmp_u.push(v);
        tmp_v.push(u);
        this.vertices.set(u, tmp_u);
        this.vertices.set(v, tmp_v);
    }

    remove_edges(u, v) {
        let tmp_u = this.vertices.get(u);
        let tmp_v = this.vertices.get(v);
        tmp_u = tmp_u.filter(e => e !== v);
        tmp_v = tmp_v.filter(e => e !== u);
        this.vertices.set(u, tmp_u);
        this.vertices.set(v, tmp_v);
    }

    neighbors(id) {
        return this.vertices.get(id);
    }

    get_nb_vertice() {
        return this.vertices.length;
    }

    get_vertices() {
        const res = [];
        for (const key of this.vertices.keys()) {
            res.push(key);
        }
        return res;
    }

    get_edges() {
        const res = new Set();
        for (const [vertice, neighbors] of this.vertices.entries()) {
            for (const neighbor of neighbors) {
                const edge = new Set();
                edge.add(vertice);
                edge.add(neighbor);
                res.add(edge);
            }
        }
        return res;
    }

    getGraphRepresentation() {
        // const vertices = this.get_vertices();
        const res = new Array(this.h).fill(new Array(this.w).fill(false));
        return res;
    }
}