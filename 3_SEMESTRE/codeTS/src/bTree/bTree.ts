// A estrutura de árvore mais simples é a árvore binária. Uma árvore binária é uma estrutura de dados hierárquica na qual cada nó tem no máximo dois filhos, chamados de filho esquerdo e filho direito. Aqui está uma descrição básica da árvore binária:

// Nó (Node): Elemento que contém um valor ou chave e referências (ponteiros) para seus filhos.
// Raiz (Root): O nó superior da árvore. A árvore começa com este nó.
// Filho (Child): Um nó que é descendente de outro nó.
// Pai (Parent): Um nó que tem um ou mais nós filhos.
// Folha (Leaf): Um nó que não tem filhos.
// Subárvore (Subtree): Uma árvore composta por um nó e todos os seus descendentes.

export class Arvore {
  raiz: No;
  constructor(raiz: No) {
    this.raiz = raiz;
  }
  adicionar(no: No): void {
    if (!this.raiz.proximo_esquerdo) {
      this.raiz.proximo_esquerdo = no;
      return;
    }
    if (!this.raiz.proximo_direito) {
      this.raiz.proximo_direito = no;
      return;
    }
    const noAtual: No | null = this.raiz;
    while (noAtual) {
      if (!noAtual.proximo_esquerdo) {
        noAtual.proximo_esquerdo = no;
        return;
      }
    }
  }
}

export class No {
  proximo_esquerdo: No | null;
  proximo_direito: No | null;
  valor: number;
  constructor(valor: number) {
    this.proximo_direito = null;
    this.proximo_esquerdo = null;
    this.valor = valor;
  }
  rebalancear_filhos() {
    if (this.proximo_direito instanceof No && this.proximo_esquerdo instanceof No) {
      if (this.proximo_direito.valor < this.proximo_esquerdo.valor) {
        const temp = this.proximo_esquerdo;
        this.proximo_esquerdo = this.proximo_direito;
        this.proximo_direito = temp;
      }
    }
  }
}
