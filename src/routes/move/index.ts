import express from 'express';

import {Rover} from '../../classes/rover';
import {RoverInstructions} from "../../interfaces/rover";

const router = express.Router();

router.post('/', (req, res) => {
    //move rover based on form input
    const input: RoverInstructions = req.body.input;

    try {
        const rover: Rover = req.app.get('rover');
        rover.move(input);
    } catch (e) {
        return res.status(400).json({error: `Invalid commands: ${e}`});
    }

    res.redirect('/move');
});

router.get('/', (req, res) => {
    const rover: Rover = req.app.get('rover');

    res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Move Rover</title>
</head>
<body>
    <p>Rover position: ${rover.getPosition()}</p>
    <form action="/move" method="post">
        <label for="input">Move rover</label>
        <input name="input" id="input" type="text"/>
        <input type="submit">
    </form>
</body>
</html>
`);
});

export default router;