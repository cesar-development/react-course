const fn = (a, b, c) => console.log(a, b, c)
const arr = [1, 2, 3, 4]

fn(...arr)

const arr1 = [4, 5]
const arr2 = [...arr, 2, 3]
const arr3 = arr
arr[0] = 'Im a string'

console.log(arr, arr1, arr2, arr3)

const obj1 = { a: 1, b: 2 }
const obj2 = { b: 3, c: 'Im a string' }

const obj3 = { ...obj1 }
obj1.a = 10

console.log(obj1, obj2, obj3)

const obj4 = { ...obj1, ...obj2 }
console.log(obj4)

const obj5 = {
  ...obj1,
  loading: true,
  data: {
    prop: 'Hello',
    message: 'World'
  }
}

console.log(obj5)
