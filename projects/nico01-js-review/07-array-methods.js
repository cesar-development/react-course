const arr = [-5, -1, -2, -3, -4]

const r = arr.filter((el, i) => {
  console.log(i)
  return el >= -2
})
console.log(r)

const mapped1 = arr.map((el) => `<h1>${el}</h1>`)
console.log(mapped1)

const users = [
  { id: 1, name: 'Chanchito feliz' },
  { id: 2, name: 'Chanchito triste' },
  { id: 3, name: 'Chanchito emocionado' },
  { id: 4, name: 'Felipe' },
]

const mapped2 = users.map((user) => `<h1>${user.name}</h1>`)
console.log(mapped2)

const r1 = arr.reduce((acc, el) => acc + el, 0)
const getMax = (a, b) => Math.max(a, b)
const r2 = arr.reduce(getMax)
const r3 = users.reduce((acc, el) => 
  `${acc === '' ? '' : `${acc}, `}${el.name}`
, '')
const r4 = users.reduce((acc, el) => {
  if (el.id < 2) {
    return acc
  }

  return acc.concat(el)
}, [])

console.log({
  r1,
  r2,
  r3,
  r4,
})
