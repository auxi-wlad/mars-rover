# The Mars Rover 🚀

## The Situation

NASA is planning to land a squad of robotic rovers on a plateau on Mars.
This plateau, which is strangely rectangular, has to be navigated by the rovers so that their onboard cameras can get a full view of the surrounding terrain to send back to Earth.

## Your Task

Your job is to develop an API that moves the rovers around on the plateau.

In this API, a rover is made up of two parts:

- Its position on a grid (represented by an `X,Y` coordinate pair).
- The compass direction it's facing (represented by a letter, one of `N`, `S`, `E`, `W`).

### Input

The program takes a string of one-character move commands as input.

- `L` and `R` rotate the direction the rover is facing around its axis by 90 degrees.
- `M` moves the rover one grid square forward in the direction it is currently facing.

### Output

The program's output is the final position of the rover after all the move commands have been executed.
The position is shown as a set of coordinates and a direction, separated by colons to form a string.
For example, a rover at position `2:3:W` is at square `(2,3)`, facing west.

### Examples

| Input       | Output  |
|-------------|---------|
| `""`        | `0:0:N` |
| `"MMRMMLM"` | `2:3:N` |
