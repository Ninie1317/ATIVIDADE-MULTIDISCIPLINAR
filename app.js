// app.js

// Classe Restaurante representa um restaurante com nome e endereço
class Restaurante {
  constructor(nome, endereco) {
    this.nome = nome;
    this.endereco = endereco;
  }

  exibirInfo() {
    return `${this.nome} localizado em ${this.endereco}`;
  }
}

// Copilot, o que é um 'constructor'?
 // → O 'constructor' é um método especial que é chamado quando criamos um novo objeto da classe.
 // → Ele serve para inicializar as propriedades (como nome e endereço).

// Copilot, por que usamos 'this'?
 // → 'this' se refere ao próprio objeto criado a partir da classe. Permite acessar as propriedades dentro dos métodos.


// Classe Prato representa um prato de comida no cardápio
class Prato {
  constructor(nome, preco, descricao) {
    this.nome = nome;
    this.preco = preco;
    this.descricao = descricao;
  }

  render() {
    return `${this.nome} - R$${this.preco}: ${this.descricao}`;
  }
}

// Copilot, por que o método 'render' é útil?
 // → O método 'render' facilita exibir o prato formatado, mantendo a lógica de apresentação dentro da própria classe.


// Classe Artista representa um músico ou banda
class Artista {
  constructor(nome, generoMusical) {
    this.nome = nome;
    this.generoMusical = generoMusical;
  }

  bio() {
    return `${this.nome} é um artista do gênero ${this.generoMusical}.`;
  }
}

// Copilot, qual é o papel dessa classe?
 // → Essa classe encapsula as informações de um artista, permitindo criar vários objetos sem repetir código.


// Classe Música representa uma música vinculada a um artista
class Musica {
  constructor(titulo, artista) {
    this.titulo = titulo;
    this.artista = artista; // associação com a classe Artista
  }

  tocar() {
    return `Tocando "${this.titulo}" de ${this.artista.nome}`;
  }
}

// Copilot, por que usamos outra classe dentro desta?
 // → Isso é um exemplo de composição: uma Música contém um objeto Artista.
 // → Assim, podemos reaproveitar a estrutura e relacionar os dados entre si.


// Teste simples
const artista1 = new Artista("Ludmilla", "Pop/Funk");
const musica1 = new Musica("Socadona", artista1);

const restaurante1 = new Restaurante("Sabor Brasileiro", "Rua das Flores, 123");
const prato1 = new Prato("Feijoada", 25.90, "Prato típico com feijão preto e carnes.");

console.log(restaurante1.exibirInfo());
console.log(prato1.render());
console.log(musica1.tocar());

// Renderização na página
const app = document.getElementById('app');
if (app) {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <h2>${restaurante1.nome}</h2>
    <p>${restaurante1.exibirInfo()}</p>

    <h3>Prato do dia</h3>
    <p>${prato1.render()}</p>

    <h3>Agora tocando</h3>
    <p>${musica1.tocar()}</p>
  `;
  app.appendChild(card);
}
