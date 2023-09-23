"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Turma = exports.Aluno = void 0;
// Aluno.ts
var Aluno = /** @class */ (function () {
    function Aluno(nome, RG, dataNascimento, turma) {
        this.nome = nome;
        this.RG = RG;
        this.dataNascimento = dataNascimento;
        this.turma = turma;
    }
    return Aluno;
}());
exports.Aluno = Aluno;
// Turma.ts
var Turma = /** @class */ (function () {
    function Turma(periodo, serie, sigla, tipoEnsino) {
        this.periodo = periodo;
        this.serie = serie;
        this.sigla = sigla;
        this.tipoEnsino = tipoEnsino;
    }
    return Turma;
}());
exports.Turma = Turma;
