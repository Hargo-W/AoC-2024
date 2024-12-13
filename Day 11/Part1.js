import {isEven} from "../sharedFunctions.js";

const input = `4189 413 82070 61 655813 7478611 0 8`

const splitString = (str) => {
    const firstHalf = str.slice(0, str.length / 2)
    const secondHalf = Number(str.slice(str.length / 2, str.length)).toString()
    return [firstHalf, secondHalf]
}

const blink = (stones) => {
    const newStones = []
    for (let i = 0; i < stones.length; i++) {
        if (stones[i] === '0') {
            newStones.push('1')
        } else if (isEven(stones[i].length)) {
            const [newStone1, newStone2] = splitString(stones[i])
            newStones.push(newStone1, newStone2)
        } else {
            newStones.push((Number(stones[i]) * 2024).toString())
        }
    }
    return newStones
}

let stones = input.split(' ')

for (let i = 0; i < 25; i++) {
    stones = blink(stones)
}

console.log(stones.length)