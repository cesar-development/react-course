const MyClass = class {
  constructor(name) {
    this.name = name
  }
}

const myClass = new MyClass('John')
console.log(myClass)

class Friend {
  prop = 'My Property'
  #imPrivate
  static imStatic = 'My Static Property'

  constructor(name, prop, imPrivate) {
    this.name = name
    this.prop = prop
    this.#imPrivate = imPrivate
  }

  speak() {
    console.log(`Mi nombre es: ${this.name} y soy ${this.#imPrivate ? 'private': 'public' }`)
  }

  static eat() {
    console.log(`${this.imStatic} is eating!!!`)
  }
}

Friend.eat()

const friend = new Friend('John', 'My Property', true)
console.log(friend)
friend.speak()
