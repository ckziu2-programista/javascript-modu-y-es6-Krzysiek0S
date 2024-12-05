import { mathObject } from './index.js'

const add = mathObject.add()
const subtract = mathObject.subtract()
const multiply = mathObject.multiply()
const divide = mathObject.divide()

console.log(`${add(2, 5)}`)
console.log(`${subtract(5,3)}`)
console.log(`${multiply(2, 5)}`)
console.log(`${divide(10, 2)}`)