class Animal{
    fazerSom(){
        console.log("Som genérico de animal...");
    }
}

class Cachorro extends Animal{
    fazerSom(){
        console.log("AU AU AU AU 🐶🐶🐶")
    }
}

class Gato extends Animal{
    fazerSom(){
        console.log("MIAU MIAU MIAU 🐱🐱🐱")
    }
}

class Vaca extends Animal{
    fazerSom(){
        console.log("MUUUU MUUUU MUUUU 🐮🐮🐮")
    }
}

class Pato extends Animal{
    fazerSom(){
        console.log("QUAC QUAC QUAC QUAC 🦆🦆🦆")
    }
}

class Passarinho extends Animal{
    fazerSom(){
        console.log("FIU FIU FIU FIU 🐦🐦🐦")
    }
}

const meusObjetos = [new Cachorro(),new Gato(), new Vaca(), new Pato(), new Passarinho()];

for (let i = 0; i < meusObjetos.length; i++) {
    meusObjetos[i].fazerSom();
}


