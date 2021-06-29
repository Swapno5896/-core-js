const person = {
    firstName:'swapno',
    lastName:'mondol',
    age:11,
    fullName: () =>{
      return this.firstName + this.lastName
    }
}
const a  = person.fullName()
console.log(a);