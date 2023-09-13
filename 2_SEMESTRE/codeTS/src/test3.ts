import { Aluno, Funcionario, Turma } from './exercicio3';

// import { Aluno } from './Aluno';
const aluno1 = new Aluno('Jão', '981121111554', '25/09/2005');
const aluno2 = new Aluno('Maria', '151115445155', '13/10/2006');

class TestaAluno {
  public static showNome(aluno: Aluno): void {
    console.log(aluno.nome);
  }
  public static showRG(aluno: Aluno): void {
    console.log(aluno.RG);
  }
  public static showDataNascimento(aluno: Aluno): void {
    console.log(aluno.dataNascimento);
  }
}

TestaAluno.showNome(aluno1);
TestaAluno.showRG(aluno1);
TestaAluno.showDataNascimento(aluno1);

TestaAluno.showNome(aluno2);
TestaAluno.showRG(aluno2);
TestaAluno.showDataNascimento(aluno2);

// import { Funcionario } from './Funcionario';
const funcionario1 = new Funcionario('zelador', 2000);
const funcionario2 = new Funcionario('merendeira', 1500);

class TestaFuncionario {
  public static showCargo(funcionario: Funcionario): void {
    console.log(funcionario.cargo);
  }
  public static showSalario(funcionario: Funcionario): void {
    console.log(funcionario.salario);
  }
}

TestaFuncionario.showCargo(funcionario1);
TestaFuncionario.showSalario(funcionario1);

TestaFuncionario.showCargo(funcionario2);
TestaFuncionario.showSalario(funcionario2);

// import { Turma } from './Turma';
const turma1 = new Turma('diurno', '6ª Fundamental', 'DIU6FP', 'Presencial');
const turma2 = new Turma('diurno', '8ª Fundamental', 'DIU8FP', 'Presencial');

class TestaTurma {
  public static showPeriodo(turma: Turma): void {
    console.log(turma.periodo);
  }
  public static showSerie(turma: Turma): void {
    console.log(turma.serie);
  }
  public static showSigla(turma: Turma): void {
    console.log(turma.sigla);
  }
  public static showTipoEnsino(turma: Turma): void {
    console.log(turma.tipoEnsino);
  }
}

TestaTurma.showPeriodo(turma1);
TestaTurma.showSerie(turma1);
TestaTurma.showSigla(turma1);
TestaTurma.showTipoEnsino(turma1);

TestaTurma.showPeriodo(turma2);
TestaTurma.showSerie(turma2);
TestaTurma.showSigla(turma2);
TestaTurma.showTipoEnsino(turma2);
