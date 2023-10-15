export default class Cargo {
  private _id: string;
  private _cargo: string;
  constructor(id: string, cargo: string) {
    (this._id = id), (this._cargo = cargo);
  }
  get id(): string {
    return this._id;
  }
  set id(valor: string) {
    this._id = valor;
  }
  get cargo(): string {
    return this._cargo;
  }
  set cargo(valor: string) {
    this._cargo = valor;
  }
}
