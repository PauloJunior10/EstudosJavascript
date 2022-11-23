class person{
  constructor(name){
    this._name = name
  }

  get name(){
    return this._name
  }

  set name(value){
    this._name = value
  }

}

const person2 = new person('Frodo')

console.log(person2.name)