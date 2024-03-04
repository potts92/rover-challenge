import express from 'express';

import {Rover} from '../../classes/rover';
import {Plateau} from '../../classes/plateau';

const router = express.Router();

let plateau: Plateau;
let rover: Rover;

router.post('/', (req, res) => {
    try {
        //initialise plateau
        plateau = new Plateau(req.body['plateau-x'], req.body['plateau-y']);
        req.app.set('plateau', plateau)
    } catch (e) {
        return res.status(400).json({error: `Plateau could not be created: ${e}`});
    }

    try {
        //initialise rover
        rover = new Rover(req.body['rover-x'], req.body['rover-y'], req.body['rover-direction'], plateau);
        req.app.set('rover', rover);
    } catch (e) {
        return res.status(400).json({error: `Rover could not be created: ${e}`});
    }

    //redirect to move form
    res.redirect('/move');
});

export default router;