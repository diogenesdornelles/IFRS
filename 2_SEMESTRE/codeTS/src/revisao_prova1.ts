/* eslint-disable @typescript-eslint/no-unused-vars */
class Pessoa {
  private _nome: string;

  private _datanasc: string;

  private _pai: Pessoa | null;

  private _mae: Pessoa | null;

  constructor(nome: string, datanasc: string, pai: Pessoa | null, mae: Pessoa | null) {
    this._nome = nome;
    this._datanasc = datanasc;
    this._pai = pai;
    this._mae = mae;
  }
  public get nome(): string {
    return this._nome;
  }
  public set nome(value: string) {
    this._nome = value;
  }
  public get datanasc(): string {
    return this._datanasc;
  }
  public set datanasc(value: string) {
    this._datanasc = value;
  }
  public setPai(value: Pessoa) {
    this._pai = value;
  }
  public setMae(value: Pessoa) {
    this._mae = value;
  }
  public getPai(): string {
    return this._pai?.nome ?? 'Sem nome ainda';
  }
  public getMae(): string {
    return this._mae?.nome ?? 'Sem nome ainda';
  }

  // retorna true se for irmão
  public isIrmao(pessoa: Pessoa): boolean {
    return this._pai === pessoa._pai || this._mae === pessoa._mae;
  }

  // retorna true se for tio
  public isTio(pessoa: Pessoa): boolean {
    const result: boolean[] = [];
    if (pessoa._pai) {
      result.push(this.isIrmao(pessoa._pai) ?? false);
    }
    if (pessoa._mae) {
      result.push(this.isIrmao(pessoa._mae) ?? false);
    }
    return result.includes(true);
  }

  // retorna true se for sobrinho
  public isSobrinho(pessoa: Pessoa): boolean {
    const result: boolean[] = [];
    if (this._pai) {
      result.push(this._pai.isIrmao(pessoa) ?? false);
    }
    if (this._mae) {
      result.push(this._mae.isIrmao(pessoa) ?? false);
    }
    return result.includes(true);
  }

  // retorna true se for primo
  public isPrimo(pessoa: Pessoa): boolean {
    if (this.isIrmao(pessoa)) return false;
    if (pessoa._mae && pessoa._pai) {
      if (this._mae) {
        return this._mae.isIrmao(pessoa._mae) || this._mae.isIrmao(pessoa._pai);
      }
      if (this._pai) {
        return this._pai.isIrmao(pessoa._pai) || this._pai.isIrmao(pessoa._mae);
      }
    }
    return false;
  }

  // retorna o parentesco
  public getParentesto(pessoa: Pessoa): string {
    if (this._pai?._pai === pessoa) {
      return 'é Neto(a)';
    }
    if (this._mae?._mae === pessoa) {
      return 'é Neto(a)';
    }
    if (this === pessoa._pai) {
      return 'é Pai';
    }
    if (this === pessoa._mae) {
      return 'é Mãe';
    }
    if (this._pai === pessoa) {
      return 'é Filho(a)';
    }
    if (this._mae === pessoa) {
      return 'é filho(a)';
    }
    if (this.isIrmao(pessoa)) {
      return 'é Irmao(ã)';
    }
    if (this.isTio(pessoa)) {
      return 'é Tio(a)';
    }
    if (this.isSobrinho(pessoa)) {
      return 'é Sobrinho(a)';
    }
    if (this.isPrimo(pessoa)) {
      return 'é Primo(a)';
    }
    return 'Não é parente';
  }
}

// avós
const joao = new Pessoa('Joao', '05/08/1978', null, null);
const maria = new Pessoa('Maria', '25/03/1979', null, null);

const irene = new Pessoa('Irene', '12/07/1975', null, null);
const mario = new Pessoa('Mario', '01/05/1970', null, null);

const henrique = new Pessoa('Henrique', '09/04/1992', null, null);
const karen = new Pessoa('Karen', '20/01/1987', null, null);

const isabela = new Pessoa('Isabela', '07/03/1972', null, null);
const joaquim = new Pessoa('Joaquim', '28/08/1975', null, null);

// filhos
const joana = new Pessoa('Joana', '20/09/2000', joao, maria);
const otavio = new Pessoa('Otavio', '21/11/2003', joao, maria);

const marco = new Pessoa('Marco', '13/10/1997', mario, irene);
const isadora = new Pessoa('Isadora', '19/04/1998', mario, irene);

const gabriela = new Pessoa('Gabriela', '03/02/1990', henrique, karen);
const lucas = new Pessoa('Lucas', '12/05/1989', henrique, karen);

const marcela = new Pessoa('Marcela', '02/11/2013', joaquim, isabela);
const nathan = new Pessoa('Nathan', '16/09/2018', joaquim, isabela);

// netos

const alice = new Pessoa('Alice', '05/07/2021', otavio, isadora);
const carla = new Pessoa('Carla', '30/03/2023', otavio, isadora);
const ana = new Pessoa('Ana', '30/03/2019', otavio, isadora);

const bruna = new Pessoa('Bruna', '14/12/2020', marco, joana);
const bruno = new Pessoa('Bruno', '11/11/2022', marco, joana);
const olivia = new Pessoa('Olivia', '24/12/1996', marco, joana);

const daniel = new Pessoa('Daniel', '18/09/2019', lucas, marcela);
const emilia = new Pessoa('Emilia', '11/11/2022', lucas, marcela);
const fabio = new Pessoa('Fabio', '25/06/2023', lucas, marcela);

const enzo = new Pessoa('Enzo', '18/09/2019', nathan, gabriela);
const valentina = new Pessoa('Valentina', '11/11/2022', nathan, gabriela);
const pedro = new Pessoa('Pedro', '25/06/2023', nathan, gabriela);

// console.log(joana.isIrmao(otavio)); // true
// console.log(joana.isIrmao(marco)); // true
// console.log(joana.isIrmao(isadora)); // false

// console.log(joana.isTio(alice)); // true
// console.log(joana.isTio(enzo)); // false

// console.log(bruna.isPrimo(alice)); // true
// console.log(daniel.isPrimo(enzo)); // true

// console.log(pedro.isPrimo(ana)); // false
// console.log(valentina.isPrimo(bruno)); // false

const printer = (p1: Pessoa, p2: Pessoa): void => {
  console.log(`${p1.nome} ${p1.getParentesto(p2)} de ${p2.nome}`);
};

const pessoas: Array<Pessoa[]> = [
  [enzo, daniel],
  [nathan, enzo],
  [enzo, gabriela],
  [enzo, karen],
  [ana, isabela],
  [marcela, daniel],
  [olivia, carla],
  [emilia, fabio],
  [bruna, otavio],
];

pessoas.forEach((par) => {
  printer(par[0], par[1]);
});
