/* Las funciones function tienen acceso al contexto de this, por lo que
las podemos usar como si fueran clases. */
function func() {
  this.prop = 'Cesar Villalobos Olmos'
}

func.prototype.sayHello = function() {
  console.log('Hello')
}

const myObjectFunc = new func()
console.log(myObjectFunc)
myObjectFunc.sayHello()
console.log(myObjectFunc.__proto__)

/* FAT Arrow functions: No tienen acceso al contexto de this. */
const myArrowFunc = (num1) => {
  return num1 * Math.PI
}

const result = myArrowFunc(10)
console.log(result)
