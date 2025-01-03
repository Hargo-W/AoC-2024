import {getCharCoords, pad2dArray, stringTo2dArray} from "../sharedFunctions.js";

const input = `....#...................................#...............#.................#.......#...#...........................................
.........................#.........#....................................#...........................#......##..............##...#.
.....................................................................#.........................................#..#...............
.............#........#...............................................................................#......................#....
....#.#.................................#......................................#...#..#..........#....#.....#.............#.......
....................#.......#..............#.......#.#.............................#......................................#.......
..............................................................................................#......#....................#.......
.........#.#..#...............................#........#.#........................................................#..............#
....#...........#.......#.......#....#...#....#..........#..........#......#...#................#.........................#.......
.......#...........................................................................................#.................#...........#
..................#.#....#..............................#....................#.................#....#..........#..........#.......
...#...............#...................................................#................#.........................................
.................#..#.#.............#.#...................................#......................#....#..........#................
.#..................#........................#..........#...........................#.......#......................#.#............
......#...........................................#.....#.....#...........#...........................#..............#............
.........#...............................#.............................#.#.......................................................#
...#.........#.#........................#...#..............................................#...#...............#...#..#...........
..............................#.....................................#................#..........................#.........##......
..........#...........#.....#......#......#..............................#.....#......................................#...........
..........................#....#.........................................................#..................#...#.........#.......
......................................#...........#.........#...............................#.............#...............#.......
.......................#........#.#....#...#...#................................................................#......#..........
......................#...............#................#..#.#...........#...#.......................#.........#.........#..#......
....#.................#..........#............#....#..............................................................#.#.............
.........................................................................................................................#...##...
.....................#.......#................................................##.............#........#........................#..
........................#..#.....#.#...............#.......#.................#.............................................#.#....
......................................................................................#..#.............................#..........
..#........................................................#..........................#..............#.#.....................#....
...#...................#............#...#.....#....#..................................#.......................#...................
...#...........#..............#............................................................#....#.....#.....................#.....
........................#..............#...................#.....#..#.............................................................
.....#....................#....................##..........#..............#......#...............#..........#.....#..........##...
....#.......#..........................................................#....................................#.#..................#
#......#.#.................................#........................................................................#.........#...
...............................#......#......................#....................................................................
..............#..........................#....................................#..........#.............#..........................
.....#........#....#.........................#..#.................#.#.................#...........................................
.................#..................#.#................................#..#..................................#......#.............
...........................#.......................................................#...................#............#.............
.....................#.........#..#..........................#..................................#........#........................
..#................................................#.#.................................#.#..........#.....#......................#
..........................................................................#..................................................#.#..
..................................#..........................................#......................#.............................
.......#...............#..............................................#......................................................#....
..........................................^....................#..................................................................
.........#.........#.........................................................................................#......#....#........
.........#.........#..............................................................................................................
........#....#......................#...............#...........#..................#...........................................##.
......#............#...........#................................................................#.......#.........................
#.............................#..............................................................#..............#.....................
...................................#...........#...................................................#........#..........#..........
....#.....................................................................................................#...........#......#....
....................................................#....#...................................#....................................
............#........#............................#..........#.............................#.....#..#.#...........................
...........#.................................................................#.............#......................................
....#.........................................#.#.......#...............#...........................#............##...............
..................#..............#...#........................................................................#....#...........#..
.....................#.....#...#.....#.............#..............#...#...................................#.......................
.#...#.....#.............................................#...........#....#.......................................................
.#.....#.............................#................#......................#........................#.........................#.
......................#.........................................#.............................................#.................#.
...#...#....................#.................................................................#............#....#.......#.........
...........#......#...............................#.......#......#........#..........#...........................................#
......................#....#..............##...........................................................#..........#...............
.#......#.....................................................................#..#....#.....................#.....................
....##....#...#.........#.............................#.........#...................#.............#....#................#.........
..................................................................#...............................#...............................
....#.................#.#.........................................................................................................
........................#..........................#...........#...................................#.#.......#....................
...........#.....................................................................................#...............................#
...........................................#..................................#...................................................
.....#.........#......#..........#.........#.................................................................................#....
....#.....................#....#..#.........................................................................#..#..................
........................##..#........................#...#.........#.................#......................#..#....#.............
.............#................#.......#........#............................................................#......#..............
#....#................................#.............#..........#........#.....#...#..........##.....................#.............
......#...#......#..........................................................................................#....#..#.........#...
#.................#..............##....#........................#....#...........................................#..........#.#...
........................#.#..#........................................#.............................................##............
..........#.........#.........................................................................................##..................
....#....#...........#.................#......................#........................#...#....................................#.
.......#..................................#..................#...................#...............................#.....#.....#....
#................................#...........#................##...#............#.................................................
.............................#...#....................................#...................................#...#..........#...#....
.#......#.........#...#.......#.................##....#..................................................#...#....................
...........#........................................................................................................#.............
......................................#......#..........#.....#.....................#...................#.#.................#.....
.....................................#............#................................................................##.............
.......................................#....................#...........................................##..#.....................
..........................#.................................................................................#....................#
...........................................................#............#.........#..#....#.#............#.....#..................
....#.....................................#...........................................#........#.....................#............
.............#.............#................#..........................#......................#..........................#........
.........#.................#......#............#....#.#.............................#.......##......................#.#.......#...
..............................................................................................................#...................
#...#...............................................#...................#........................#...............#................
.......#...#.......#..#..#..#..........#..........................................................................................
......#.##....................#......#........#............#................#.............#...................#............#......
.....#..#......#.......................#..............................#...............................#...........................
.#.................................#......#..............................................#........................................
....#...........................#..#........#...............#..#.......................................#......##.#.........#......
..................................#..................#......................#.....................#.......#.....................#.
.........#....................#....#...............................................#...................................#..........
.........................................................#...#...............##..#...............................................#
.#..#.............#.............#....................................#....................#.....#..#..........................#...
.................#.........................#..#........................................#.................................#........
.....................#....#................................#......#...............................................................
...............#..........................#...........#.............................................................#.........#...
...........##.......#................#..............................#..........................#....##.....#...................#..
......................#........#........#.........#..................................................##..#........................
....#........................#......................#.#..................#....#..................#.....................#..........
.................#......#...#...................................#...............#....#.........#............................#.....
#.................#...............................#......#..#..............................................###...#.......#........
..........#...........#..........................................................................................................#
.......................#......................................#.................#.......#........#................................
..#.......#..#.............................................................................................................#......
#.........#......#........................#.#..............................................#...................##.................
...#....#.....................................#...................................................................................
.....................#.....................................................................#........................#.....#.......
.....#..#...............................................................##......#.#......#..#.#.......#........................#..
.......#..........#....................................#.........#.................#.................#.....................#......
..............##.................................................#................#.........#.#............#........#............#
.....................#.............#....................#...#.................#.........#........#................................
.............#...........................................#........................................................................
.....#...#.............#..............#..............#..................................................................#......#..
.....##...................................##.....#.....#..#.........#...............#..........#.....#............#.#...........#.
....#..................#.........#....................#....................#...#....#..............##............#..............#.
..................#..........#.#.....................................#....#..............#.......#.....#...............#......#..#
..............#.........#.............................................................................................#...........`

const boundsMarker = '@'
const grid = pad2dArray(stringTo2dArray(input), boundsMarker)

// up, right, down, left
const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]

const isBlocked = (location, direction) => {
    const newY = location[0] + direction[0]
    const newX = location[1] + direction[1]
    return grid[newY][newX] === '#'
}

const changeDirection = (currentDirection) => {
    const indexOfDirection = directions.indexOf(currentDirection)
    const indexOfNewDirection = indexOfDirection + 1 > directions.length - 1 ? 0 : indexOfDirection + 1
    return directions[indexOfNewDirection]
}

const markedX = new Set

const takeStep = (location, direction) => {
    if (grid[location[0]][location[1]] === boundsMarker) return

    if (isBlocked(location, direction)) direction = changeDirection(direction)

    markedX.add(location.toString())

    location = [location[0] + direction[0], location[1] + direction[1]]

    takeStep(location, direction)
}

takeStep(getCharCoords('^', grid), directions[0])

console.log(markedX.size)
