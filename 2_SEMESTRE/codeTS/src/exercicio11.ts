// Atividade - Exercícios Fixação - Apostila K19 - Página 79 até 81 Tarefa

// exercicio 02
// export class Funcionario<T extends string, U extends number> {
//   constructor(
//     public salario: T,
//     public nome: U,
//   ) {}
// }

// exercicio 04
// export class Funcionario<T extends string, U extends number> {
//   constructor(
//     private salario: T,
//     private nome: U,
//   ) {}
// }

// exercicio 07
export class Funcionario<U extends number, T extends string> {
  constructor(
    private _salario: U,
    private _nome: T,
  ) {}
  get salario(): U {
    return this._salario;
  }
  set salario(value: U) {
    if (value > 0) this._salario = value;
  }
  get nome(): T {
    return this._nome;
  }
  set nome(value: T) {
    if (value) this._nome = value;
  }
}

// exercicio 09 parece prejudicado, pois pede para utilizar recursos de outra IDE. Getters e setters já implementado em exercício 07.
