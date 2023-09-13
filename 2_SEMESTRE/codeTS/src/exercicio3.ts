// Aluno.ts
export class Aluno {
  constructor(
    public nome: string,
    public RG: string,
    public dataNascimento: string,
  ) {}
}

// Funcionario.ts
export class Funcionario {
  constructor(
    public cargo: string,
    public salario: number,
  ) {}
}

// Turma.ts
export class Turma {
  constructor(
    public periodo: string,
    public serie: string,
    public sigla: string,
    public tipoEnsino: string,
  ) {}
}
