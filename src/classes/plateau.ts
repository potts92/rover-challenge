export class Plateau {
    private readonly x: number;
    private readonly y: number;

    /**
     * Creates a plateau with the given bounds if bounds are valid
     * @param x
     * @param y
     */
    constructor(x: number, y: number) {
        if (x < 0 || y < 0) throw new Error('Plateau bounds cannot be negative');
        this.x = x;
        this.y = y;
    }

    /**
     * Public getter for retriever the bounds of the plateau
     */
    getBounds() {
        return {
            'x': this.x,
            'y': this.y
        }
    }
};