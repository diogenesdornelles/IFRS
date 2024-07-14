from typing import List

from analista_cadastro import AnalistaCadastro
from repositorio import Repositorio
from veiculo import Veiculo


class Frota(Repositorio[Veiculo, AnalistaCadastro]):
    def __init__(self):
        super().__init__()
        self.__veiculos: List[Veiculo] = []

    def get_items(self) -> List[Veiculo]:
        return self.__veiculos

    def get_item(self, _id: str) -> Veiculo:
        for veiculo in self.__veiculos:
            if veiculo.id == _id:
                return veiculo
        return None

    def adicionar_item(self, agente: AnalistaCadastro, veiculo: Veiculo):
        if isinstance(agente, AnalistaCadastro):
            self.__veiculos.append(veiculo)

    def contem(self, item: Veiculo) -> bool:
        return item in self.__veiculos

    def alterar_item(self, agente: "AnalistaCadastro", _id: str, veiculo: Veiculo):
        for i, v in enumerate(self.__veiculos):
            if v.id == _id and isinstance(agente, AnalistaCadastro):
                self.__veiculos[i] = veiculo
