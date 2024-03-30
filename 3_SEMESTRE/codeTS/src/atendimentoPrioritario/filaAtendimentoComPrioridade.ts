import { FilaComPrioridade } from "./filaComPrioridade"
import { Cliente } from "./cliente";


export class FilaAtendimentoComPrioridade extends FilaComPrioridade {
  private _ordem: number;
  private _cod: string;

  constructor() {
    super();
    this._ordem = 1001;
    this._cod = '';
  };
  protected get cod(): string {
    return this._cod;
  }
  protected set cod(value: string) {
    this._cod = value;
  }
  protected get ordem(): number {
    return this._ordem;
  }
  public filaAtendimentoVazia() {
    return this._estaVazia();
  }
  public fornecerSenha(cliente: Cliente): void {
    let ordemStr = String(this.tamanho + this.ordem);
    this._enfileirar(cliente);
    cliente.senha = this.cod + ordemStr.slice(ordemStr.length - 3, ordemStr.length);
  }
  public realizarAtendimento(): string {
    this._ordem++;
    return this._desenfileirar().toString();
  };
  public atualizarFilaAtendimento(): string {
    return this._toString();
  }
} 

