export const stringTo2dArray = (text) => {
    return text.split('\n').map(line => line.split(''))
}

export const pad2dArray = (grid, padChar) => {
    grid.unshift(Array(grid[0].length).fill(padChar))
    grid.push(Array(grid[0].length).fill(padChar))
    for (let i = 0; i < grid.length; i++) {
        grid[i].unshift(padChar)
        grid[i].push(padChar)
    }
    return grid
}

export const isEven = (n) => {
    return n % 2 === 0;
}