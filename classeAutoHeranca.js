class Automovel {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    exibirDetalhes(){
        return `${this.marca}, ${this.modelo}, ${this.ano}`
    }
}
class Carro extends Automovel{
    constructor(marca, modelo, ano, portas){
        super(marca, modelo, ano);
        this.portas = portas;
    }
}

class Moto extends Automovel{
    constructor(marca, modelo, cilindrada, categoria){
        super(marca, modelo, cilindrada);
        this.cilindrada = cilindrada;
        this.categoria = categoria;
    }

    exibirDetalhes(){
        return `${this.marca}, ${this.modelo}, ${this.cilindrada}`
    }
}

moto1 = new Moto("Honda", "CB500X", 500, "Adventure");
console.log(moto1.exibirDetalhes());
let carro1 = new Carro("Toyota", "SW4", 2025, 5);
console.log(carro1.exibirDetalhes());