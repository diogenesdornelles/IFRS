from typing import List


class Devolucao:
    def __init__(
        self,
        _id: str,
        placas_veiculos: List[str],
        cpf_cliente: str,
        data_devolucao: str,
        data_planejada_devolucao: str,
        valores_unitarios_veiculos_devolvidos: List[float],
        valor_multa: float,
        valor_total_devolucao: float,
    ):
        self.__id = _id
        self.__placas_veiculos = placas_veiculos
        self.__cpf_cliente = cpf_cliente
        self.__data_devolucao = data_devolucao
        self.__data_planejada_devolucao = data_planejada_devolucao
        self.__valores_unitarios_veiculos_devolvidos = (
            valores_unitarios_veiculos_devolvidos
        )
        self.__valor_multa = valor_multa
        self.__valor_total_devolucao = valor_total_devolucao

    @property
    def id(self) -> str:
        return self.__id

    @property
    def placas_veiculos(self) -> List[str]:
        return self.__placas_veiculos

    @property
    def cpf_cliente(self) -> str:
        return self.__cpf_cliente

    @property
    def data_devolucao(self) -> str:
        return self.__data_devolucao

    @property
    def data_planejada_devolucao(self) -> str:
        return self.__data_planejada_devolucao

    @property
    def valores_unitarios_veiculos_devolvidos(self) -> List[float]:
        return self.__valores_unitarios_veiculos_devolvidos

    @property
    def valor_multa(self) -> float:
        return self.__valor_multa

    @property
    def valor_total_devolucao(self) -> float:
        return self.__valor_total_devolucao

    @placas_veiculos.setter
    def placas_veiculos(self, placas_veiculos: List[str]):
        self.__placas_veiculos = placas_veiculos

    @cpf_cliente.setter
    def cpf_cliente(self, cpf_cliente: str):
        self.__cpf_cliente = cpf_cliente

    @data_devolucao.setter
    def data_devolucao(self, data_devolucao: str):
        self.__data_devolucao = data_devolucao

    @data_planejada_devolucao.setter
    def data_planejada_devolucao(self, data_planejada_devolucao: str):
        self.__data_planejada_devolucao = data_planejada_devolucao

    @valores_unitarios_veiculos_devolvidos.setter
    def valores_unitarios_veiculos_devolvidos(
        self, valores_unitarios_veiculos_devolvidos: List[float]
    ):
        self.__valores_unitarios_veiculos_devolvidos = (
            valores_unitarios_veiculos_devolvidos
        )

    @valor_multa.setter
    def valor_multa(self, valor_multa: float):
        self.__valor_multa = valor_multa

    @valor_total_devolucao.setter
    def valor_total_devolucao(self, valor_total_devolucao: float):
        self.__valor_total_devolucao = valor_total_devolucao
