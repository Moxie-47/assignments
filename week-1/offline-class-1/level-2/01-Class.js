
class Animal {// we can add attributes to the class as per required
  constructor(name, legCount) {
    this.name = name
    this.legCount = legCount
  }
  static myType(){
    console.log("Animal!")
  }
  describe() {
    return `${this.name} has ${this.legCount} legs`
  }
}


let dog = new Animal("Sahil", 5) ;
console.log(dog.describe()) ;
console.log(dog.name) ;
console.log(dog.legCount) ;
// console.log(Animal.describe()) // ---> will give an error as speak is an object function not a class function unlike myType so can't call any non class function using class directly but can call myType function as it is a class function
console.log(Animal.myType())
