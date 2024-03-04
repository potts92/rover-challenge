# Notes
- Need to ensure that the position of the rover cannot exceed the bounds of the grid. I.e. its horizontal and vertical positions cannot be lower than 0, or higher than the relevant upper limit
- Need to ensure rover isn't outside of boundary on initial placement
- Need to ensure relevant errors are thrown if invalid variables are submitted for scenario creation, or rover movement
- Frontend: 
  - Landing page to contain a form taking plateau dimensions and rover dimensions and orientation
  - Form submits to a route that initialises plateau and rover and saves initialised classes to app variables and redirects to rover input form
  - Rover input form submits and moves rover
  - Position of rover displayed above rover input form