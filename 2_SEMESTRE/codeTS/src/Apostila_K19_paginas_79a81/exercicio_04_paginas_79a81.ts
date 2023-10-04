export class Funcionario<T extends number, U extends string> {
  constructor(
    private _salario: T,
    private _nome: U,
  ) {}
}
