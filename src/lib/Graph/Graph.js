export default class Graph {
    constructor(nbCol, nbRow) {
        this.vertices = new Map();
    }

    add_vertice(v) {
        this.vertices.set(v, []);
    }

    remove_vertice(v) {
        this.vertices.delete(v);
    }

    add_edges(u, v) {
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
}