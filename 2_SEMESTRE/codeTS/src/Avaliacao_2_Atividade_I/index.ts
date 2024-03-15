export abstract class Employee {
  private _name: string;
  constructor(name: string) {
    this._name = name;
  }
  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }
  abstract getPay(): number;
}

class Salaried extends Employee {
  private _salary: number;
  constructor(name: string, salary: number) {
    super(name);
    this._salary = salary;
  }

  getPay(): number {
    return this._salary;
  }
}

class Hourly extends Employee {
  private _hourlyRate: number = 40.0;
  private _hours: number;
  constructor(name: string, hours: number) {
    super(name);
    this._hours = hours;
  }

  getPay(): number {
    return this._hours * this._hourlyRate;
  }

  addHours(hours: number): void {
    if (hours > 0) this._hours += hours;
  }
}

type TGetFolha = <T extends Employee>(employees: T[]) => number;

const getFolha: TGetFolha = (employees) => {
  let total: number = 0;
  employees.forEach((employee: Employee) => {
    total += employee.getPay();
  });
  return total;
};

const employeeA: Employee = new Salaried('John', 1500);

const employeeB: Employee = new Salaried('Anna', 3500);

const employeeC: Employee = new Salaried('Robert', 10000);

const employeeD: Employee = new Hourly('Jeff', 30);

const employeeE: Employee = new Hourly('Logan', 25);

const employeeF: Employee = new Hourly('Scott', 32);

const employees: Array<Employee> = [
  employeeA,
  employeeB,
  employeeC,
  employeeD,
  employeeE,
  employeeF,
];

const total = getFolha(employees);

console.log('Total: R$', total.toFixed(2));

// class Conta {
//   private _numeroDaConta: number;

//   private _titular: string;

//   private _saldo: number;

//   constructor(numeroDaConta: number, titular: string, saldo: number) {
//     this._numeroDaConta = numeroDaConta;
//     this._titular = titular;
//     this._saldo = saldo;
//   }

//   get numeroDaConta(): number {
//     return this._numeroDaConta;
//   }
//   set numeroDaConta(value: number) {
//     this._numeroDaConta = value;
//   }
//   get titular(): string {
//     return this._titular;
//   }
//   set titular(value: string) {
//     this._titular = value;
//   }
//   get saldo(): number {
//     return this._saldo;
//   }
//   set saldo(value: number) {
//     this._saldo = value;
//   }
// }

interface IFormaGeometrica {
  area(): number;
  comprimento(): number;
}

class Circle implements IFormaGeometrica {
  private _radius: number;

  constructor(radius: number) {
    this._radius = radius;
  }

  area(): number {
    return Math.PI * Math.pow(this._radius, 2);
  }

  comprimento(): number {
    return 2 * Math.PI * this._radius;
  }
}
