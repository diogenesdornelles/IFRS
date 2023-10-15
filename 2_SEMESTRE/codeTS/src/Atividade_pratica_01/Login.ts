export default class Login {
  private _usuario: string;
  private _senha: string;
  constructor(usuario: string, senha: string) {
    (this._usuario = usuario), (this._senha = senha);
  }
  get usuario(): string {
    return this._usuario;
  }
  set usuario(valor: string) {
    this._usuario = valor;
  }
  get senha(): string {
    return this._senha;
  }
  set senha(valor: string) {
    this._senha = valor;
  }
  isValid(login: Login): boolean {
    return login.usuario === 'usuario' && login.senha === '123456';
  }
}
