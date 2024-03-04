import {Plateau} from './plateau';
import {RoverPosition} from "../interfaces/rover";

export class Rover {
    private x: number;
    private y: number;
    private direction: string;
    private directions: { [key: string]: number } = {
        'N': 1,
        'E': 2,
        'S': 3,
        'W': 4
    };
    private plateau: Plateau;

    /**
     * Creates a new Rover if coordinates are inside the bounds of the plateau.
     * If the coordinates are outside the bounds of the plateau, an error will be thrown.
     * @param x
     * @param y
     * @param direction
     * @param plateau
     */
    constructor(x: number, y: number, direction: string, plateau: Plateau) {
        if (plateau.getBounds().x < x || plateau.getBounds().y < y) throw new Error('Rover is out of bounds');
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.plateau = plateau;
    }

    /**
     * Attempt to move the rover in the direction it is facing
     * If facing a boundary, the rover will not move and will throw an error.
     * @private
     */
    private moveForward() {
        const bounds = this.plateau.getBounds();

        switch (this.direction) {
            case 'N':
                if (bounds.y === this.y) throw new Error('Rover has hit the boundary');
                this.y++;
                break;
            case 'S':
                if (0 === this.y) throw new Error('Rover has hit the boundary');
                this.y--;
                break;
            case 'E':
                if (bounds.x === this.x) throw new Error('Rover has hit the boundary');
                this.x++;
                break;
            case 'W':
                if (0 === this.x) throw new Error('Rover has hit the boundary');
                this.x--;
                break;
        }

        return this;
    }

    /**
     * Turns the rover to the left.
     * @returns {Rover}
     */
    private turnLeft(): Rover {
        let mappedDirection = this.directions[this.direction];
        mappedDirection--;

        //handles if the previous direction was previously the first in our list
        if (mappedDirection < 1) mappedDirection = 4;

        //retrieve the new direction from our hash map of directions
        this.direction = Object.keys(this.directions).find(key => this.directions[key] === mappedDirection);

        return this;
    }

    /**
     * Turns the rover to the right.
     * @returns {Rover}
     */
    private turnRight(): Rover {
        let mappedDirection = this.directions[this.direction];
        mappedDirection++;

        //handles if the previous direction was previously the last in our list
        if (mappedDirection > 4) mappedDirection = 1;

        //retrieve the new direction from our hash map of directions
        this.direction = Object.keys(this.directions).find(key => this.directions[key] === mappedDirection);

        return this;
    }

    /**
     * Takes a string input of chained movements to make.
     * L - Turn the rover to the left
     * R - Turn the rover to the right
     * M - Move the rover forward
     * All other values will be ignored.
     * @param input
     * @returns {RoverPosition}
     */
    move(input: string): RoverPosition {
        for (let i = 0; i < input.length; i++) {
            switch (input[i]) {
                case 'L':
                    this.turnLeft();
                    break;
                case 'R':
                    this.turnRight();
                    break;
                case 'M':
                    this.moveForward();
                    break;
            }
        }

        return this.getPosition();
    }

    /**
     * Returns the current position of the rover.
     * @returns {RoverPosition}
     */
    getPosition(): RoverPosition {
        return `${this.x} ${this.y} ${this.direction}`;
    }
}