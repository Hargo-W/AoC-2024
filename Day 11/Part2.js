import {isEven} from "../sharedFunctions.js";

const input = `4189 413 82070 61 655813 7478611 0 8`

const splitString = (str) => {
    const firstHalf = str.slice(0, str.length / 2)
    const secondHalf = Number(str.slice(str.length / 2, str.length)).toString()
    return [firstHalf, secondHalf]
}

const updateCache = (cache, stone, count) => {
    if (cache[stone] !== undefined) {
        cache[stone] += count
    } else {
        cache[stone] = count
    }
}

const blink = (stones) => {
    const newStones = {}
    for (const stone in stones) {
        const stoneCount = stones[stone]
        if (stone === '0') {
            updateCache(newStones, '1', stoneCount)
        } else if (isEven(stone.length)) {
            const [newStone1, newStone2] = splitString(stone)
            updateCache(newStones, newStone1, stoneCount)
            updateCache(newStones, newStone2, stoneCount)
        } else {
            updateCache(newStones, (Number(stone) * 2024).toString(), stoneCount)
        }
    }
    return newStones
}

let stoneCache = {}

input.split(' ').forEach((stone) => {
    updateCache(stoneCache, stone, 1)
})

for (let i = 0; i < 75; i++) {
    stoneCache = blink(stoneCache)
}

const sum = Object.values(stoneCache).reduce((acc, value) => acc + value, 0)
console.log(sum)