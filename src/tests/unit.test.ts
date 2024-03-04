import {describe, test, expect, beforeAll} from "@jest/globals";
import {Plateau} from "../classes/plateau";
import {Rover} from "../classes/rover";

let plateau: Plateau;
const xBoundary = 5;
const yBoundary = 5;
describe('Unit test', () => {
    beforeAll(()=> {
        //initialise plateau class
        plateau = new Plateau(xBoundary, yBoundary);
    });
    test('Attempt to move left when on left boundary', () => {
       const rover = new Rover(0, 3, 'W', plateau);

        expect(() => rover.move('M')).toThrow('Rover has hit the boundary');
    });
    test('Attempt to move down when on bottom boundary', () => {
       const rover = new Rover(3, 0, 'S', plateau);

        expect(() => rover.move('M')).toThrow('Rover has hit the boundary');
    });
    test('Attempt to move right when on right boundary', () => {
       const rover = new Rover(xBoundary, 3, 'E', plateau);

        expect(() => rover.move('M')).toThrow('Rover has hit the boundary');
    });
    test('Attempt to move up when on top boundary', () => {
       const rover = new Rover(3, yBoundary, 'N', plateau);

        expect(() => rover.move('M')).toThrow('Rover has hit the boundary');
    });
    test('Move one unit in each direction', () => {
        const initialX = 3;
        const initialY = 3;
        const initialDirection = 'N';
        const rover = new Rover(initialX, initialY, initialDirection, plateau);

        const position = rover.move('LMLMLMLM');

        expect(position).toBe(`${initialX} ${initialY} ${initialDirection}`);
    });
    test('Provided input/ expected output', () => {
        const initialX = 1;
        const initialY = 2;
        const initialDirection = 'N';
        const rover = new Rover(initialX, initialY, initialDirection, plateau);

        const position = rover.move('LMLMLMLMM');

        expect(position).toBe('1 3 N');
    });
    test('Initialise rover outside of plateau bounds', () => {
        expect(() => {
            new Rover(xBoundary + 1, yBoundary + 1, 'N', plateau)
        }).toThrow('Rover is out of bounds');
    });
    test('Initialise invalid plateau', () => {
        expect(() => {
            new Plateau(-1, 5)
        }).toThrow('Plateau bounds cannot be negative');
    });
});