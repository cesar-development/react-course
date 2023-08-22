const friends = ['Hector', 'Luis', 'Manuel', 'Aranza']
const enemies = ['Juan Carlos', 'Danna']
const teachers = ['Jorge', 'Ruth']

export const func1 = () => {
  console.log('Hello World')
}

function func2() {
  console.log('Other hello')
}

export { enemies, teachers, func2 }
export default friends
