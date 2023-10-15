import Login from './Login';
import Pessoa from './Pessoa';

export default class Medico extends Pessoa {
  private _crm: number;
  private _login: Login;
  constructor(
    id: string,
    nome: string,
    email: string,
    telefone: string,
    cpf: string,
    rg: string,
    dataNascimento: string,
    crm: number,
    login: Login,
  ) {
    super(id, nome, email, telefone, cpf, rg, dataNascimento);
    (this._crm = crm), (this._login = login);
  }

  get crm(): number {
    return this._crm;
  }
  set crm(valor: number) {
    this._crm = valor;
  }
  get login(): Login {
    return this._login;
  }
  set login(valor: Login) {
    this._login = valor;
  }
}
