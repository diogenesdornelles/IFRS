import Cargo from './Cargo';
import Consulta from './Consulta';
import Convenio from './Convenio';
import Funcionario from './Funcionario';
import Login from './Login';
import Medico from './Medico';
import Paciente from './Paciente';
import { Status } from './Status';

const c = new Cargo('1dff-987v', 'Enfermeiro');

const lf = new Login('usuario', '123456');

const f = new Funcionario(
  'efrv_125f',
  'João da Silva',
  'joao.silva@gmail.com',
  '54-981351478',
  '185.897.889-42',
  '6978421562',
  '15/02/1983',
  c,
  2500,
  lf,
);

const lm = new Login('usuario', '123456');

const m = new Medico(
  '48rf_178f',
  'Matheus Robalo',
  'matheus.robalo@gmail.com',
  '54-987456231',
  '987.741.955-01',
  '9986197235',
  '23/07/1978',
  11589,
  lm,
);

const conv = new Convenio('Unimed');

const p = new Paciente(
  '98wq_41rr',
  'Paulo Ventura',
  'paulo.ventura@gmail.com',
  '54-987546231',
  '987.741.955-01',
  '87924435564',
  '30/09/1978',
  'solteiro',
  'Farina S/A.',
  conv,
);

const cons = new Consulta();

type TAgendamento = Consulta | null;

type TTestarImplementacao = (
  f: Funcionario,
  m: Medico,
  p: Paciente,
  id: string,
  data: string,
) => TAgendamento;

const testarImplementacao: TTestarImplementacao = (
  f: Funcionario,
  m: Medico,
  p: Paciente,
  id: string,
  data: string,
): TAgendamento => {
  let consultaAgendada: TAgendamento;
  if (f.login.isValid(f.login)) {
    consultaAgendada = cons.agendarConsulta(id, data, f, m, p);
  } else {
    console.log('Usuário ou senha incorretos');
    return null;
  }
  if (consultaAgendada.status === Status.Espera && m.login.isValid(m.login)) {
    consultaAgendada.status = Status.Atendido;
    return consultaAgendada;
  } else {
    console.log('Usuário ou senha incorretos');
    return null;
  }
};

// Simulando situação em que senha e usuário para médico e funcionário estão corretos
const consulta: TAgendamento = testarImplementacao(f, m, p, 'rg67_14tt', '24/11/2023');
console.log(consulta);

// Simulando situação em que o funcionário errou o usuário
lf.usuario = 'user';
testarImplementacao(f, m, p, 'sass_891e', '06/12/2023');

// Simulando situação em que o médico errou senha
lm.senha = '12345';
testarImplementacao(f, m, p, 'rff0_87ew', '04/12/2023');
