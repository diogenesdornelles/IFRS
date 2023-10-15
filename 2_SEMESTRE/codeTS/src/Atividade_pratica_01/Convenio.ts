export default class Convenio {
  private _convenio: string;
  constructor(convenio: string) {
    this._convenio = convenio;
  }
  get convenio(): string {
    return this._convenio;
  }
  set convenio(valor: string) {
    this._convenio = valor;
  }
}
