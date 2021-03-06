class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(firstPoint, secondPoint) {
        const a = Math.pow(firstPoint.x - secondPoint.x, 2);
        const b = Math.pow(firstPoint.y - secondPoint.y, 2);
        const distance = Math.sqrt(a + b);

        return distance;
    }
}
