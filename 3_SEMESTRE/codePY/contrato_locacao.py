class ContratoLocacao:
    def __init__(
        self,
        _id: str,
        cpf_cliente: str,
        data_locacao: str,
        data_hora_devolucao: str,
        placa: str,
        valor_unitario_locacao: float,
        valor_total_locacao: float,
    ):
        self.__id = _id
        self.__cpf_cliente = cpf_cliente
        self.__data_locacao = data_locacao
        self.__data_hora_devolucao = data_hora_devolucao
        self.__placa = placa
        self.__valor_unitario_locacao = valor_unitario_locacao
        self.__valor_total_locacao = valor_total_locacao

    @property
    def id(self) -> str:
        return self.__id

    @property
    def cpf_cliente(self) -> str:
        return self.__cpf_cliente

    @property
    def data_locacao(self) -> str:
        return self.__data_locacao

    @property
    def data_hora_devolucao(self) -> str:
        return self.__data_hora_devolucao

    @property
    def placa(self) -> str:
        return self.__placa

    @property
    def valor_unitario_locacao(self) -> float:
        return self.__valor_unitario_locacao

    @property
    def valor_total_locacao(self) -> float:
        return self.__valor_total_locacao

    @cpf_cliente.setter
    def cpf_cliente(self, cpf_cliente: str):
        self.__cpf_cliente = cpf_cliente

    @data_locacao.setter
    def data_locacao(self, data_locacao: str):
        self.__data_locacao = data_locacao

    @data_hora_devolucao.setter
    def data_hora_devolucao(self, data_hora_devolucao: str):
        self.__data_hora_devolucao = data_hora_devolucao

    @placa.setter
    def placa(self, placa: str):
        self.__placa = placa

    @valor_unitario_locacao.setter
    def valor_unitario_locacao(self, valor_unitario: float):
        self.__valor_unitario_locacao = valor_unitario

    @valor_total_locacao.setter
    def valor_total_locacao(self, valor_total: float):
        self.__valor_total_locacao = valor_total
