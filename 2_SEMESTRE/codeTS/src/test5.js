"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var exercicio5_1 = require("./exercicio5");
var turma1 = new exercicio5_1.Turma('diurno', '6ª Fundamental', 'DIU6FP', 'Presencial');
var aluno1 = new exercicio5_1.Aluno('João', '981121111554', '25/09/2005', turma1);
console.log(aluno1.turma.periodo);
console.log(aluno1.turma.serie);
console.log(aluno1.turma.sigla);
console.log(aluno1.turma.tipoEnsino);
