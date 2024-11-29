// 2) Ao carregar a página HTML, um script em javascript deve fazer uma requisição assíncrona para o script php e, 
// após receber a resposta, deve criar uma tabela adicionando (e calculando) as colunas dinâmicas (número de jogos, pontos, saldo de gols e aproveitamento).


// 3) A tabela precisa apresentar os dados na seguinte classificação: número de pontos, número de vitórias, saldo e número de gols pró.

// 4) Você precisa adicionar no cabeçalho da tabela um botão em cada uma das colunas e , ao clicar nesse botão, você deve apresentar o resultado ordenado
//  por essa coluna específica. Por exemplo, se clicar me gols pró, você deve apresentar os times classificados apenas por gols pró.

// v, d, e,  gc, gp, time, pontos, jogos, saldo, aproveitamento

/**
 * Classe que executa o gerenciamento da tabela
 *
 * @class TableManager
 */
class TableManager {
  /**
   * Creates an instance of TableManager.
   * @param {string} apiEndpoint endpoint para obtenção de dados
   * @param {string} tableBodyId id do corpo da tabela
   * @param {string} tableHeadId id fdo cabeçalho da tabela
   * @param {string} sortBtnsClass clsse dos botões de ordenação
   * @memberof TableManager
   */
  constructor(apiEndpoint, tableBodyId, tableHeadId, sortBtnsClass) {
    this.apiEndpoint = apiEndpoint;
    this.tbody = document.getElementById(tableBodyId);
    this.thead = document.getElementById(tableHeadId);
    this.sortBtnsClass = sortBtnsClass;
    this.table = [];
  }

  /**
   * Cria dinamicamente o cabeçalho da tabela
   *
   * @memberof TableManager
   */
  createHead() {
    const headers = [
      { label: "Colocação", key: "colocacao", ord: 'asc' },
      { label: "Time", key: "time", ord: 'asc' },
      { label: "Pontos", key: "pontos", ord: 'desc' },
      { label: "Vitórias", key: "v", ord: 'desc' },
      { label: "Saldo de Gols", key: "saldo", ord: 'desc' },
      { label: "Gols Pró", key: "gp", ord: 'desc' },
      { label: "Gols Contra", key: "gc", ord: 'asc' },
      { label: "Empates", key: "e", ord: 'asc' },
      { label: "Derrotas", key: "d", ord: 'asc' },
      { label: "Jogos", key: "jogos", ord: 'asc' },
      { label: "Aproveitamento", key: "aproveitamento", ord: 'desc' },
    ];

    const row = document.createElement('tr');
    row.classList.add('fade-in')
    headers.forEach(header => {
      const th = document.createElement('th');
      th.innerHTML = `
        <span>${header.label}</span>
        <i class="${this.sortBtnsClass} ${header.ord === 'desc' ? 'bi-caret-up-fill' : ``}" data-key="${header.key}" data-ord=${header.ord}></i>
      `;
      row.appendChild(th);
    });

    this.thead.innerHTML = ""; // Limpa o cabeçalho atual
    this.thead.appendChild(row);
  }

  /**
   * Cria dinamicamente as linhas do corpo da tabela
   *
   * @param {string} info informações sobre o time
   * @param {string} _class classe css adicional
   * @return {void} 
   * @memberof TableManager
   */
  createRow(info, _class) {
    return `
      <tr class="${_class} reveal fade-in">
        <td>${info.colocacao}</td> 
        <td>${info.time}</td>
        <td>${info.pontos}</td>
        <td>${info.v}</td>
        <td>${info.saldo}</td>
        <td>${info.gp}</td>
        <td>${info.gc}</td>
        <td>${info.e}</td>
        <td>${info.d}</td>
        <td>${info.jogos}</td>
        <td>${(info.aproveitamento * 100).toFixed(2)}%</td>
      </tr>`;
  }
  /**
   * renderiza o corpo da tabela
   *
   * @memberof TableManager
   */
  renderTable() {
    this.tbody.innerHTML = ""; // Limpa o corpo da tabela
    this.table.forEach(info => {
      const row = info.colocacao <= 4 ? this.createRow(info, 'liberta')
        : info.colocacao <= 6 ? this.createRow(info, 'pre-liberta')
          : info.colocacao <= 12 ? this.createRow(info, 'sula')
            : info.colocacao >= 17 ? this.createRow(info, 'degola')
              : this.createRow(info, '');
      this.tbody.innerHTML += row;
    });
  }
  /**
   * Calcula as colunas pontos, jogos, saldo, aproveitamento
   *
   * @memberof TableManager
   */
  calculateCols() {
    this.table.forEach(item => {
      item['pontos'] = item['v'] * 3 + item['e'];
      item['jogos'] = item['v'] + item['e'] + item['d'];
      item['saldo'] = item['gp'] - item['gc'];
      item['aproveitamento'] = item['pontos'] / (item['jogos'] * 3);
    });
    this.sortTable();
  }
  /**
   * executa a classificação dos times por pontos, vitorias, saldo e gols pró
   *
   * @memberof TableManager
   */
  sortTable() {
    this.table.sort((a, b) =>
      b.pontos - a.pontos || // desc
      b.v - a.v ||  // desc
      b.saldo - a.saldo || // desc
      b.gp - a.gp // desc
    );

    this.table.forEach((item, i) => {
      item['colocacao'] = i + 1;
    });

    this.renderTable();
  }
  /**
   * Reordena a tabela de acordo com uma coluna (key) e um modo (asc | desc)
   *
   * @param {string} key chave pela qual se deve ordenar
   * @param {string} ord ordenação: ascendente ou descendente
   * @memberof TableManager
   */
  sortByKeys(key, ord) {
    this.table.sort((a, b) => {
      if (ord === 'asc') {
        // Ordenação crescente
        if (typeof a[key] === 'number') return a[key] - b[key];
        if (typeof a[key] === 'string') return a[key].localeCompare(b[key]);
      } else if (ord === 'desc') {
        // Ordenação decrescente
        if (typeof a[key] === 'number') return b[key] - a[key];
        if (typeof a[key] === 'string') return b[key].localeCompare(a[key]);
      }
      return 0; // Caso não seja nem 'asc' nem 'desc'
    });
    this.renderTable();
  }

  /**
   * Adiciona ouvintes aos botões de ordenação
   *
   * @memberof TableManager
   */
  addListeners() {
    const sortBtns = document.querySelectorAll(`.${this.sortBtnsClass}`);
    sortBtns.forEach(btn => {
      btn.addEventListener('click', e => {
        const key = e.currentTarget.getAttribute('data-key');
        let originalOrd = e.currentTarget.getAttribute('data-ord');

        // Alternar entre 'asc' e 'desc'
        let newOrd = originalOrd === 'asc' ? 'desc' : 'asc';
        e.currentTarget.setAttribute('data-ord', newOrd);

        e.currentTarget.classList.toggle('bi-caret-up-fill', originalOrd === 'asc');
        e.currentTarget.classList.toggle('bi-caret-down-fill', originalOrd === 'desc');
        if (this.table.length > 0 && key && newOrd) {
          this.sortByKeys(key, newOrd);
        }
      });
    });
  }

  /**
   * Busca dados junto ao script server side
   *
   * @memberof TableManager
   */
  async fetchTable() {
    try {
      const response = await fetch(this.apiEndpoint);
      this.table = await response.json();
      if (this.table.length > 0) {
        this.calculateCols();
      } else {
        this.tbody.innerHTML = "<p>Nenhum dado encontrado.</p>";
      }
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
      this.tbody.innerHTML = "<p>Erro ao buscar dados. Tente novamente mais tarde.</p>";
    }
  }
  /**
   * inicializa o pipelide de construção da tabela
   *
   * @memberof TableManager
   */
  async init() {
    this.createHead();
    await this.fetchTable();
    this.addListeners();
  }
}

const tableManager = new TableManager('table.php', 'table-body', 'table-head', 'bi-caret-down-fill');
tableManager.init();
