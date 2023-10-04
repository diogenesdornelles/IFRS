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
