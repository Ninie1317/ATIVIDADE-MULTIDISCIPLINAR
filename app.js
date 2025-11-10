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


// Nova classe Bebida representa uma bebida do cardápio
class Bebida {
  constructor(nome, preco, tamanhoMl, alcoolica = false) {
    this.nome = nome;
    this.preco = preco;
    this.tamanhoMl = tamanhoMl; // volume em ml
    this.alcoolica = alcoolica;
  }
  render() {
    return `${this.nome} (${this.tamanhoMl}ml) - R$${this.preco}${this.alcoolica ? ' (Alcoólica)' : ''}`;
  }
}

// Classe Cardapio agrega listas de pratos e bebidas
class Cardapio {
  constructor(pratos = [], bebidas = []) {
    this.pratos = pratos;
    this.bebidas = bebidas;
  }
  listarPratos() { return this.pratos.map(p => p.render()).join('<br>'); }
  listarBebidas() { return this.bebidas.map(b => b.render()).join('<br>'); }
}

// Copilot, por que criar Bebida e Cardapio?
 // → Bebida permite reaproveitar estrutura como fizemos em Prato, deixando claro atributos específicos (tamanho, alcoólica).
 // → Cardapio organiza coleções e centraliza lógica de listagem, evitando código duplicado na renderização.


// Teste simples
const artista1 = new Artista("Ana Castela", "Sertanejo");
const musica1 = new Musica("Boiadeira", artista1);

const restaurante1 = new Restaurante("Sabor Brasileiro", "Alameda das Cajaranas,900");

// Conjunto variado de pratos
const pratos = [
  new Prato("Feijoada", 25.9, "Prato típico com feijão preto e carnes."),
  new Prato("Moqueca de Peixe", 42.5, "Peixe cozido com leite de coco e dendê."),
  new Prato("Escondidinho de Carne Seca", 28.0, "Purê de mandioca recheado com carne seca."),
  new Prato("Pão de Queijo", 12.0, "Porção com 8 unidades crocantes."),
];

// Opções de bebidas
const bebidas = [
  new Bebida("Suco de Maracujá", 8.0, 300, false),
  new Bebida("Refrigerante", 7.0, 350, false),
  new Bebida("Água Mineral", 5.0, 500, false),
  new Bebida("Caipirinha", 18.0, 250, true),
];

const cardapio = new Cardapio(pratos, bebidas);

console.log(restaurante1.exibirInfo());
console.log('Pratos:'); pratos.forEach(p => console.log(p.render()));
console.log('Bebidas:'); bebidas.forEach(b => console.log(b.render()));
console.log(musica1.tocar());

// Renderização na página
const app = document.getElementById('app');
if (app) {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <h2>${restaurante1.nome}</h2>
    <p>${restaurante1.exibirInfo()}</p>

    <h3>Cardápio - Pratos</h3>
    <p>${cardapio.listarPratos()}</p>

    <h3>Bebidas</h3>
    <p>${cardapio.listarBebidas()}</p>

    <h3>Agora tocando</h3>
    <p>${musica1.tocar()}</p>
  `;
  app.appendChild(card);
}

// Entendimento pessoal:
// As classes permitem organizar o código em objetos, cada um com suas próprias funções.
// Isso facilita a manutenção e a expansão do projeto.
// O Copilot ajuda a gerar as estruturas, mas é importante entender o que cada parte faz.
