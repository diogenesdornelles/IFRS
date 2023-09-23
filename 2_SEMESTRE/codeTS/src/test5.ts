import { Turma, Aluno } from './exercicio5';

const turma1 = new Turma('diurno', '6ª Fundamental', 'DIU6FP', 'Presencial');

const aluno1 = new Aluno('João', '981121111554', '25/09/2005', turma1);

console.log(aluno1.turma.periodo);
console.log(aluno1.turma.serie);
console.log(aluno1.turma.sigla);
console.log(aluno1.turma.tipoEnsino);
