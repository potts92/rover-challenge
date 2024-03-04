# Notes
- Need to ensure that the position of the rover cannot exceed the bounds of the grid. I.e. its horizontal and vertical positions cannot be lower than 0, or higher than the relevant upper limit
- Need to ensure rover isn't outside of boundary on initial placement
- Landing page to contain a form (taking plateau dimensions, rover dimensions and orientation and rover inputs)
  - Form submits to a route that initialises plateau and rover, and submits inputs
  - Position and orientation of rover then rendered