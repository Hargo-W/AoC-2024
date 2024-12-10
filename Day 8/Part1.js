import {stringTo2dArray} from "../sharedFunctions.js";

const input = `...............e...........j6.....................
.....1...............................t.....i......
.....4.......3..............x..tL......m..........
.......L.....................Dxj..................
4....X..................F.....................m...
.............4.......x....F........k..............
......3...................t..........i.........Z..
....L..................y.....F..e.....Z...........
X.............1........C..........i...D...........
........4.....................D.....k.X...m.......
...1...............D........e......6..............
...3.Y...................................m8.......
..OL.........................x....Z....g..........
....3......5.........................6j...........
...................J..5r.F..k...y.................
.......................................Z..a.......
...........................5........j.........a.u.
...p..............Y....X..........................
...O.........................kd...................
........................t.................i.......
..................J..............u...........z....
.O.....9.............J..............p..u..........
.....9............................................
l...6.....1........e......I................a......
...................................az.............
........M.......J...................gI....z.......
.......Y...l...........p......g....d.......W......
........5l....9................d.....g............
.A....9.l.Y............I..............B.......s...
..................................K.....B.........
....M.............7.......8..........h.....K......
.......0f...oc..............G...d7.......z...s..yW
...M........0...........Gf.....................T..
................r......G..................w....h..
...........cP................G.8.R..............T.
.................A.............N............u..B..
..H.c..b............................K...CB.....y..
......c...bP...2............7..K..................
......b.o....0.......P.............s........h.R...
......2........f..S........8.....................R
U....2..............p..............7..............
.HE..b......A.............N..............w....C...
................................N.............w...
.........E...........M................W.......T...
......E...rS2...........W....................N....
.....SP..n.....r..0...............................
.....H..............A............................w
..........n..U....................s...............
..n.So.....U................f.....................
Ho................................................`

const grid = stringTo2dArray(input)
const yMax = grid.length
const xMax = grid[0].length

const antennas = {}

for (let y = 0; y < yMax; y++) {
    for (let x = 0; x < xMax; x++) {
        const char = grid[y][x]
        if (char === '.') continue
        if (!antennas[char]) antennas[char] = []
        antennas[char].push([y, x])
    }
}

const antinodes = new Set

const addAntinodes = (coords1, coords2) => {
    const delta1 = [coords1[0] - coords2[0], coords1[1] - coords2[1]]
    const delta2 = [coords2[0] - coords1[0], coords2[1] - coords1[1]]

    const possibleAntinodes = []
    possibleAntinodes.push([coords1[0] + delta1[0], coords1[1] + delta1[1]])
    possibleAntinodes.push([coords2[0] + delta2[0], coords2[1] + delta2[1]])

    possibleAntinodes.forEach((antinode) => {
        if (antinode[0] > yMax - 1 || antinode[0] < 0) return
        if (antinode[1] > xMax - 1 || antinode[1] < 0) return
        antinodes.add(antinode.toString())
    })
}

for (let antenna in antennas) {
    const locations = antennas[antenna]
    for (let i = 0; i < locations.length; i++) {
        const currentLocation = locations[i]
        for (let y = 0; y < locations.length; y++) {
            if (i === y) continue
            const otherLocation = locations[y]
            addAntinodes(currentLocation, otherLocation)
        }
    }
}
console.log(antinodes.size)