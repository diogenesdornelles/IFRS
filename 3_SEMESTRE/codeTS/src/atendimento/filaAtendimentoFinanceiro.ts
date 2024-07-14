import { FilaAtendimento } from './filaAtendimento';

export class FilaAtendimentoFinanceiro extends FilaAtendimento {
  constructor() {
    super();
    this.cod = 'F';
  }
}
