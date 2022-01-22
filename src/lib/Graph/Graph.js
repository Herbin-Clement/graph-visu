import { D1toD2 } from "../lib";

export default class Graph {
    constructor(w, h) {
        this.vertices = new Map();
        this.w = w;
        this.h = h;
        this.nb_node = w * h;
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
        // console.log(this.get_nb_vertice());
    }

    toggle_vertice(v) {
        const {x, y} = D1toD2(v);
        console.log(`id:${v}, x:${x}, y:${y}, w:${this.w}, h:${this.h} `);
        if (this.vertices.has(v)) {
            this.remove_vertice(v);
        } else {
            const neighbors = [];
            if (x !== this.w - 1) {
                if (this.vertices.has(v + 1)) {
                    neighbors.push(v + 1);
                    console.log(v+1);
                }
            }
            if (x !== 0) {
                if (this.vertices.has(v - 1)) {
                    neighbors.push(v - 1);
                    console.log(v-1);
                }
            }
            if (y !== this.h - 1) {
                if (this.vertices.has(v + this.w)) {
                    neighbors.push(v + this.w); 
                    console.log(v+this.w);
                }
            }
            if (y !== 0) {
                if (this.vertices.has(v - this.w)) {
                    neighbors.push(v - this.w);
                    console.log(v-this.w);
                }
            }
            neighbors.forEach(u => {
                if (this.is_vertice(u) && u > 0 && u < this.w * this.h) this.add_edges(v, u);
            });

        }
    }

    is_vertice(v) {
        return !(this.vertices.get(v) === undefined);
    }

    add_edges(u, v) {
        if (u < this.nb_node && u >= 0 && v < this.nb_node && v >= 0) {
            if (!this.is_vertice(u)) this.add_vertice(u)
            if (!this.is_vertice(v)) this.add_vertice(v)
            const tmp_u = this.vertices.get(u);
            const tmp_v = this.vertices.get(v);
            tmp_u.push(v);
            tmp_v.push(u);
            this.vertices.set(u, tmp_u);
            this.vertices.set(v, tmp_v);
        }
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
        const res = this.vertices.get(id);
        if (res === undefined) return [];
        return res;
    }

    get_nb_vertice() {
        return this.vertices.size;
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
        console.log(this.neighbors(0));
        const res = new Array(this.h).fill(0).map(() => new Array(this.w).fill(false));
        return res;
    }
}