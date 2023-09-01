// módulo exercicio.ts

export class Carro {
  private _marca: string;
  private _modelo: string;
  private _cor: string;
  private _placa: string;
  private _velocidade: number;
  constructor(marca: string, modelo: string, cor: string, placa: string, velocidade: number) {
    if (velocidade <= 0) {
      velocidade = 0;
    }
    if (velocidade >= 300) {
      velocidade = 300;
    }
    this._marca = marca;
    this._modelo = modelo;
    this._cor = cor;
    this._placa = placa;
    this._velocidade = velocidade;
  }

  get modelo(): string {
    return this._modelo;
  }
  get marca(): string {
    return this._marca;
  }
  get cor(): string {
    return this._cor;
  }
  get placa(): string {
    return this._placa;
  }
  get velocidade(): number {
    return this._velocidade;
  }
  acelerar(): void {
    if (this._velocidade <= 299) this._velocidade++;
  }
  frear(): void {
    if (this._velocidade >= 1) this._velocidade--;
  }
}

export class Motorista {
  constructor(
    private _nome: string,
    private _cnh: string,
  ) {}
  dirigirCarro(carro: Carro): void {
    console.log(
      `${this._nome} está dirigindo seu ${carro.modelo} à velocidade de ${carro.velocidade} km/h`,
    );
  }
}
