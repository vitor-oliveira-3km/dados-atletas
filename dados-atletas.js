class Atleta {
    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;

        this.categoria = this.calculaCategoria();
        this.imc = this.calculaIMC();
        this.mediaValida = this.calculaMediaValida();
    }

    calculaCategoria() {
        if (this.idade >= 9 && this.idade <= 11) {
            return "Infantil";
        } else if (this.idade >= 12 && this.idade <= 13) {
            return "Juvenil";
        } else if (this.idade >= 14 && this.idade <= 15) {
            return "Intermediário";
        } else if (this.idade >= 16 && this.idade <= 30) {
            return "Adulto";
        } else {
            return "Sem categoria";
        }
    }

    calculaIMC() {
        return this.peso / (this.altura * this.altura);
    }

    calculaMediaValida() {
        const notasOrdenadas = [...this.notas].sort((a, b) => a - b);
        notasOrdenadas.shift();
        notasOrdenadas.pop();  

        const soma = notasOrdenadas.reduce((acc, nota) => acc + nota, 0);
        const media = soma / notasOrdenadas.length;

    
        return media.toString().replace(".", ",");
    }

    obtemNomeAtleta() { return this.nome; }
    obtemIdadeAtleta() { return this.idade; }
    obtemPesoAtleta() { return this.peso; }
    obtemAlturaAtleta() { return this.altura; }
    obtemNotasAtleta() { return this.notas; }
    obtemCategoria() { return this.categoria; }
    obtemIMC() { return this.imc; }
    obtemMediaValida() { return this.mediaValida; }
}


// Aqui um exemplo

const atleta = new Atleta(
    "Cesar Abascal",
    30,
    80,
    1.7,
    [10, 9.34, 8.42, 10, 7.88]
);

console.log("Nome: " + atleta.obtemNomeAtleta());
console.log("Idade: " + atleta.obtemIdadeAtleta());
console.log("Peso: " + atleta.obtemPesoAtleta());
console.log("Altura: " + atleta.obtemAlturaAtleta());
console.log("Notas: " + atleta.obtemNotasAtleta());
console.log("Categoria: " + atleta.obtemCategoria());
console.log("IMC: " + atleta.obtemIMC());
console.log("Média válida: " + atleta.obtemMediaValida());