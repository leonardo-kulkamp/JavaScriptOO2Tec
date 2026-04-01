class Carro{
    constructor(nome, marca, ano){
        this.nome = nome;
        this.marca = marca;
        this.ano = ano;
    }

    apresentacao(){
        console.log(`Olá! O nome do Carro é ${this.nome}! A marca é ${this.marca} e o ano dele é ${this.ano}!`)
    }
    
}

let carro1 = new Carro ("Toyota SW4", "TOYOTA", "2024");
carro1.apresentacao();