const rest = (a, b, ...arguments) => {
  console.log({ a, b })
  console.log({ arguments })
}

rest(1, 2, 3, 4, 5, 6)

const obj = {
  a: 1, b: 2, c: 3, d: 4, e: 5
}
const { a, b, ...restOfObj } = obj
console.log(a, b, restOfObj)

const arr = [1, 2, 3, 4, 5, 6]
const [x, y, ...restOfArr] = arr
console.log(x, y, restOfArr)
