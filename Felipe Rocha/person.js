class Person{
  // É um método especial executado no momento em que a classe é instanciada, além disso os atributos da classe são definidos dentro deste método.
  constructor (nome, cpf, nascimento) {
    this.nome = nome
    this.cpf = cpf
    this.nascimento = nascimento

    console.log('constructor executado')
    }
    meunome(){
      //return `Meu nome é ${this.nome}.`
      return this.nome
    }
    meucpf(){
      return this.cpf
    }
    datanascimento(){
      return this.nascimento
    }
}

// exportando a classe
module.exports = {
  Person,
}

