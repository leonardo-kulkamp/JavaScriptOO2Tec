class aluno{
    constructor(nome, matricula, notas){
        this.nome = nome
        this.matricula = matricula
        this.notas = notas
    }
    
    calculaMedia(){
        let soma = 0
        for (let i = 0; i < this.notas.length; i ++){
            soma += this.notas[i];
        }
        return soma / this.notas.length;
    }

    obterStatus(){
        const media = this.calculaMedia()

        if (media >= 7){
            return "Aprovado"
        } else if (media >= 5){
            return "Recuperação"
        } else{
            return "Reprovado"
        }
    }
    exibirRelatorio(){
        console.log(`Relatório do Aluno ${this.nome}`);
        console.log(`Matrícula: ${this.matricula}`);
        console.log(`Média Final: ${this.calculaMedia()}`);
        console.log(`Status: ${this.obterStatus()}`);
    }
}

let turma = [
    new aluno(`Gabriel`, `CGM050`, [9.0, 8.5, 9.5]),
    new aluno(`Sophia`, `CGM051`, [9.0, 9.5, 9.0]),
    new aluno(`Eduarda`, `CGM052`, [4.0, 2.5, 3.5]),
    new aluno(`Gabriel`, `CGM053`, [3.0, 4.5, 5.5]),
    new aluno(`Olliver`, `CGM050`, [9.0, 9.5, 9.5])
]

console.log(turma[1]);

for (let i = 0; i < turma.length; i ++ ){
    turma [i].exibirRelatorio();
}

// let aluno1 = new aluno(`Pedro`, 850650, [9.5, 9.0, 8.5]);
// console.log(aluno1.calculaMedia());
// console.log(aluno1.obterStatus());
// aluno1.exibirRelatorio();