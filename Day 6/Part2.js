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

const isBlocked = (location, direction, map) => {
    const newY = location[0] + direction[0]
    const newX = location[1] + direction[1]
    return map[newY][newX] === '#'
}

const rotateClockwise = (currentDirection) => {
    const indexOfDirection = directions.indexOf(currentDirection)
    const indexOfNewDirection = indexOfDirection + 1 === directions.length ? 0 : indexOfDirection + 1
    return directions[indexOfNewDirection]
}

let count = 0

const walkRoute = (map, location, direction, previousPath) => {
    while (true) {
        if (map[location[0]][location[1]] === boundsMarker) return
        
        while (isBlocked(location, direction, map)) direction = rotateClockwise(direction)

        const path = location.toString() + '->' + direction.toString()

        if (previousPath.has(path)) {
            count++
            return
        } else {
            previousPath.add(path)
        }

        location = [location[0] + direction[0], location[1] + direction[1]]
    }
}

const startingCoords = getCharCoords('^', grid)

for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[0].length; x++) {
        if (grid[y][x] !== '.') continue

        const tempGrid = grid.map(row => [...row])
        tempGrid[y][x] = '#'
        walkRoute(tempGrid, startingCoords, directions[0], new Set)
    }
}

console.log(count)
