class Pessoa{
    constructor(nome, idade, profissao){
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
    }

    saudar(){
        console.log(`Olá! Meu nome é ${this.nome}! Tenho ${this.idade} anos e minha profissão é ${this.profissao}!`)
    }
    fazerAniversario(){
        this.idade += 1;
        console.log(`Feliz aniversário, agora o ${this.nome} tem ${this.idade}.`)
    }
}

let pessoa1 = new Pessoa ("Pedro", 21, "Professor");
pessoa1.saudar();
pessoa1.fazerAniversario();