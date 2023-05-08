// https://www.youtube.com/watch?v=IOfDoyP1Aq0

const {Person} = require("./person") // {} entre colchetes evita que precise instanciar a classe

const person = new Person('Kassio', '000.111.222-33', '12/06/1988' )

// console.log(person.meunome())

console.log(`Me chamo ${person.meunome()} e nasci dia ${person.datanascimento()}.`)