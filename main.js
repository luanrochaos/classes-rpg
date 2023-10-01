class Heroi{
    constructor(nome, idade, tipo, ataque) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.ataque = ataques[tipo];
    }

    atacar() {
        console.log(`O ${this.tipo} atacou usando ${this.ataque}!`);
    }
}

const ataques = {"mago": "magia", "guerreiro": "espada", "monge": "artes marciais", "ninja": "shuriken"};

let mago = new Heroi("Jorge", 80, "mago");
let guerreiro = new Heroi("Jorge2", 80, "guerreiro");
let monge = new Heroi("Jorge3", 80, "monge");
let ninja = new Heroi("Jorge4", 80, "ninja");

mago.atacar();
guerreiro.atacar();
monge.atacar();
ninja.atacar();