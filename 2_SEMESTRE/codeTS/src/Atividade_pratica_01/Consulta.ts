import Funcionario from './Funcionario';
import Medico from './Medico';
import Paciente from './Paciente';
import { Status } from './Status';

export default class Consulta {
  private _id: string;
  private _dataConsulta: string;
  private _funcionario: Funcionario;
  private _medico: Medico;
  private _paciente: Paciente;
  private _status: Status;

  get id(): string {
    return this._id;
  }
  set id(valor: string) {
    this._id = valor;
  }
  get dataConsulta(): string {
    return this._dataConsulta;
  }
  set dataConsulta(valor: string) {
    this._dataConsulta = valor;
  }
  get funcionario(): Funcionario {
    return this._funcionario;
  }
  set funcionario(valor: Funcionario) {
    this._funcionario = valor;
  }
  get medico(): Medico {
    return this._medico;
  }
  set medico(valor: Medico) {
    this._medico = valor;
  }
  get paciente(): Paciente {
    return this._paciente;
  }
  set paciente(valor: Paciente) {
    this._paciente = valor;
  }
  get status(): Status {
    return this._status;
  }
  set status(valor: Status) {
    this._status = valor;
  }
  agendarConsulta(
    id: string,
    dataConsulta: string,
    funcionario: Funcionario,
    medico: Medico,
    paciente: Paciente,
  ): Consulta {
    const consulta = new Consulta();
    consulta.id = id;
    consulta.dataConsulta = dataConsulta;
    consulta.funcionario = funcionario;
    consulta.medico = medico;
    consulta.paciente = paciente;
    consulta.status = Status.Espera;
    return consulta;
  }
  excluirConsulta(consulta: Consulta): void {
    consulta.status = Status.Cancelado;
  }

  atenderConsulta(consulta: Consulta): void {
    consulta.status = Status.Atendido;
  }
}
