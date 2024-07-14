from typing import List
from agente_locacao import AgenteLocacao
from caixa import Caixa
from contrato_locacao import ContratoLocacao
from devolucao import Devolucao
from pagamento import Pagamento
from pessoa import Pessoa


class Cliente(Pessoa):
    def __init__(
        self,
        _id: str,
        nome: str,
        cpf: str,
        telefone: str,
        data_nascimento: str,
        endereco: str,
    ):
        super().__init__(_id, nome, cpf, telefone)
        self.__contratos_locacao: List[ContratoLocacao] = []
        self.__devolucoes: List[Devolucao] = []
        self.__pagamentos: List[Pagamento] = []
        self.__data_nascimento = data_nascimento
        self.__endereco = endereco

    @property
    def data_nascimento(self) -> str:
        return self.__data_nascimento

    @data_nascimento.setter
    def data_nascimento(self, data_nascimento: str):
        self.__data_nascimento = data_nascimento

    @property
    def endereco(self) -> str:
        return self.__endereco

    @endereco.setter
    def endereco(self, endereco: str):
        self.__endereco = endereco

    def visualizar_historico_locacao(self) -> List[ContratoLocacao]:
        return self.__contratos_locacao

    def adicionar_contrato(
        self, agente: AgenteLocacao, contrato_locacao: ContratoLocacao
    ):
        if isinstance(agente, AgenteLocacao):
            self.__contratos_locacao.append(contrato_locacao)

    def get_contrato(self, _id: str) -> ContratoLocacao:
        for contrato in self.__contratos_locacao:
            if contrato.id == _id:
                return contrato
        return None

    def contem_contrato(self, _id: str) -> bool:
        return any(contrato.id == _id for contrato in self.__contratos_locacao)

    def adicionar_devolucao(self, agente: AgenteLocacao, devolucao: Devolucao):
        if isinstance(agente, AgenteLocacao):
            self.__devolucoes.append(devolucao)

    def get_devolucao(self, _id: str) -> Devolucao:
        for devolucao in self.__devolucoes:
            if devolucao.id == _id:
                return devolucao
        return None

    def contem_devolucao(self, _id: str) -> bool:
        return any(devolucao.id == _id for devolucao in self.__devolucoes)

    def adicionar_pagamento(self, agente: Caixa, pagamento: Pagamento):
        if isinstance(agente, Caixa):
            self.__pagamentos.append(pagamento)

    def get_pagamento(self, _id: str) -> Pagamento:
        for pagamento in self.__pagamentos:
            if pagamento.id == _id:
                return pagamento
        return None

    def contem_pagamento(self, _id: str) -> bool:
        return any(pagamento.id == _id for pagamento in self.__pagamentos)
