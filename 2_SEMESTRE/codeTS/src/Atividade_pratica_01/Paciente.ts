import Convenio from './Convenio';
import Pessoa from './Pessoa';

export default class Paciente extends Pessoa {
  private _estadoCivil: string;
  private _localTrabalho: string;
  private _convenio: Convenio;
  constructor(
    id: string,
    nome: string,
    email: string,
    telefone: string,
    cpf: string,
    rg: string,
    dataNascimento: string,
    estadoCivil: string,
    localTrabalho: string,
    convenio: Convenio,
  ) {
    super(id, nome, email, telefone, cpf, rg, dataNascimento);
    (this._estadoCivil = estadoCivil),
      (this._localTrabalho = localTrabalho),
      (this._convenio = convenio);
  }

  get estadoCivil(): string {
    return this._estadoCivil;
  }
  set estadoCivil(valor: string) {
    this._estadoCivil = valor;
  }
  get localTrabalho(): string {
    return this._localTrabalho;
  }
  set localTrabalho(valor: string) {
    this._localTrabalho = valor;
  }
  get convenio(): Convenio {
    return this._convenio;
  }
  set convenio(valor: Convenio) {
    this._convenio = valor;
  }
}
