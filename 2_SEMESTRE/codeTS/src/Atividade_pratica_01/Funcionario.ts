import Cargo from './Cargo';
import Login from './Login';
import Pessoa from './Pessoa';

export default class Funcionario extends Pessoa {
  private _cargo: Cargo;
  private _salario: number;
  private _login: Login;
  constructor(
    id: string,
    nome: string,
    email: string,
    telefone: string,
    cpf: string,
    rg: string,
    dataNascimento: string,
    cargo: Cargo,
    salario: number,
    login: Login,
  ) {
    super(id, nome, email, telefone, cpf, rg, dataNascimento);
    (this._cargo = cargo), (this._salario = salario), (this._login = login);
  }

  get cargo(): Cargo {
    return this._cargo;
  }
  set cargo(valor: Cargo) {
    this._cargo = valor;
  }
  get salario(): number {
    return this._salario;
  }
  set salario(valor: number) {
    this._salario = valor;
  }
  get login(): Login {
    return this._login;
  }
  set login(valor: Login) {
    this._login = valor;
  }
}
