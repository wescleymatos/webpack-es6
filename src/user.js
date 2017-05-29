export class User {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    get nome() {
        return this.nome;
    }

/*    nomeCompleto() {  
        return `${this.nome} ${this.sobrenome}`;  
    }*/
}