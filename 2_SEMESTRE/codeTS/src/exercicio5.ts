// Aluno.ts
export class Aluno {
  constructor(
    public nome: string,
    public RG: string,
    public dataNascimento: string,
    public turma: Turma,
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
