export interface Conta {
  deposita(valor: number): void;
  saca(valor: number): void;
  getSaldo(): number;
}
