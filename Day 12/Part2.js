import {pad2dArray, stringTo2dArray} from "../sharedFunctions.js";

const input = `AAAAAA
AAABBA
AAABBA
ABBAAA
ABBAAA
AAAAAA`

const padChar = '#'

const map = pad2dArray(stringTo2dArray(input), padChar)

const mapped = []

const hasBeenMapped = (coords) => {
    return mapped.includes(coords.toString());
}

const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]

// const countNeighbours = (tile, area) => {
//     const stringAgrea = area.map(String)
//     const leftNeighbour = [tile[0], tile[1] - 1]
//     const rightNeighbour = [tile[0], tile[1] + 1]
//     const topNeighbour = [tile[0] - 1, tile[1]]
//     const bottomNeighbour = [tile[0] + 1, tile[1]]
//     const neighbourCoords = [leftNeighbour, rightNeighbour, topNeighbour, bottomNeighbour]
//
//     let count = 0
//
//     neighbourCoords.forEach( coord => {
//         if (stringAgrea.includes(coord.toString())) count++
//     })
//     return count
// }

const getCornerAmount = (tile, area) => {
    const stringAgrea = area.map(String)
    const left = stringAgrea.includes([tile[0], tile[1] - 1].toString())
    const topLeft = stringAgrea.includes([tile[0] - 1, tile[1] - 1].toString())
    const topMid = stringAgrea.includes([tile[0] - 1, tile[1]].toString())
    const topRight = stringAgrea.includes([tile[0] - 1, tile[1] + 1].toString())
    const right = stringAgrea.includes([tile[0], tile[1] + 1].toString())
    const botLeft = stringAgrea.includes([tile[0] + 1, tile[1] - 1].toString())
    const botMid = stringAgrea.includes([tile[0] + 1, tile[1]].toString())
    const botRight = stringAgrea.includes([tile[0] + 1, tile[1] + 1].toString())
    const neighbours = [left, topLeft, topMid, topRight, right, botLeft, botMid, botRight]

    if (neighbours.every(neighbour => {
        return neighbour === true
    })) return 0
    if ()

}

const countSides = (area) => {
    let cornerCount = 0
    area.forEach(tile => {
        cornerCount += getCornerAmount(tile, area)
    })
    return cornerCount
}

const explorePlot = (y, x) => {
    const currentPlant = map[y][x]
    let area = [];

    const exploreTiles = (y, x) => {
        if (hasBeenMapped([y, x])) return
        if (map[y][x] !== currentPlant) return
        area.push([y, x])
        mapped.push([y, x].toString())

        directions.forEach(direction => {
            const newY = y + direction[0]
            const newX = x + direction[1]
            exploreTiles(newY, newX)
        })
    }
    exploreTiles(y, x, currentPlant)

    const sides = countSides(area)
    console.log(sides)

    return area.length * sides
}

let finalSum = 0

for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map.length; x++) {
        if (hasBeenMapped([y, x])) continue
        if (map[y][x] !== padChar) finalSum += explorePlot(y, x)
    }
}

console.log(finalSum)