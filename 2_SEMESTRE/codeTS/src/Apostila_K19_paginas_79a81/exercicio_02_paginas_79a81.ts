export class Funcionario<T extends string, U extends number> {
  constructor(
    public salario: T,
    public nome: U,
  ) {}
}
