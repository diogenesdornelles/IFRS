// módulo test1.ts

import { Carro, Motorista } from './exercicio1';

const focus: Carro = new Carro('Ford', 'Focus', 'Verde', '123456789', 400);
const oswaldo: Motorista = new Motorista('Oswaldo', '1234567');
const kwid: Carro = new Carro('Renault', 'Kwid', 'Branco', '123456789', -400);
const lucia: Motorista = new Motorista('Lucia', '1234567');
const polo: Carro = new Carro('VW', 'Polo', 'cinza', '123456789', 50);
const marco: Motorista = new Motorista('Marco', '1234567');

//  Não é possivel setar atributos diretamente, pois não há configuração de setter.
try {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  focus.cor = 'green';
} catch (error) {
  if (error instanceof TypeError) {
    console.log('Atributo não pode ser definido.');
  }
}

type Acao = 'acelerar' | 'frear';

type TesteParametros = {
  numero: number;
  acao: Acao;
};

type ExecutaTeste = (carro: Carro, motorista: Motorista, ...testes: TesteParametros[]) => void;

const executaTeste: ExecutaTeste = (
  carro: Carro,
  motorista: Motorista,
  ...testes: TesteParametros[]
): void => {
  testes.forEach((teste) => {
    if (teste.acao === 'acelerar') {
      for (let i = 0; i < teste.numero; i++) {
        carro.acelerar();
      }
      motorista.dirigirCarro(carro);
    } else {
      for (let i = 0; i < teste.numero; i++) {
        carro.frear();
      }
      motorista.dirigirCarro(carro);
    }
  });
};

// test 1
executaTeste(focus, oswaldo, { numero: 301, acao: 'acelerar' }, { numero: 350, acao: 'frear' });
// test 2
executaTeste(kwid, lucia, { numero: 301, acao: 'acelerar' }, { numero: 350, acao: 'frear' });
// test 3
executaTeste(polo, marco, { numero: 150, acao: 'acelerar' }, { numero: 100, acao: 'frear' });
