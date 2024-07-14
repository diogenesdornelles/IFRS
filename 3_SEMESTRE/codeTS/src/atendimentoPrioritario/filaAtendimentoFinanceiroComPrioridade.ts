import { FilaAtendimentoComPrioridade } from './filaAtendimentoComPrioridade';

export class FilaAtendimentoFinanceiroComPrioridade extends FilaAtendimentoComPrioridade {
  constructor() {
    super();
    this.cod = 'F';
  }
}
