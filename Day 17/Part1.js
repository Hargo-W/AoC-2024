const input = `Register A: 61657405
Register B: 0
Register C: 0

Program: 2,4,1,2,7,5,4,3,0,3,1,7,5,5,3,0`

const [rawRegisters, rawProgram] = input.split('\n\n')

let [registerA, registerB, registerC] = rawRegisters.split('\n').map(line => line.split(': ')[1]).map(Number)

const program = rawProgram.split(': ')[1].split(',')

const getComboOperand = (value) => {
    if (value <= 3) return value
    if (value === 4) return registerA
    if (value === 5) return registerB
    if (value === 6) return registerC
    if (value >= 7) console.error('INVALID PROGRAM', value)
}

const output = []

const instructions = {
    0: (operand) => {
        registerA = Math.floor(registerA / Math.pow(2, getComboOperand(operand)))
    },
    1: (operand) => {
        registerB ^= operand
    },
    2: (operand) => {
        registerB = getComboOperand(operand) % 8
    },
    3: (operand) => {
        if (registerA === 0) return
        return operand
    },
    4: (operand) => {
        registerB ^= registerC
    },
    5: (operand) => {
        output.push(getComboOperand(operand) % 8)
    },
    6: (operand) => {
        registerB = Math.floor(registerA / Math.pow(2, getComboOperand(operand)))
    },
    7: (operand) => {
        registerC = Math.floor(registerA / Math.pow(2, getComboOperand(operand)))
    },
}

for (let i = 0; i < program.length; i) {
    const opcode = program[i]
    const operand = Number(program[i + 1])

    const potentialJump = instructions[opcode](operand)
    if (potentialJump !== undefined) i = potentialJump
    else i += 2
}

console.log(output.toString())