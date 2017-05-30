class User {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }
}

export default User;
