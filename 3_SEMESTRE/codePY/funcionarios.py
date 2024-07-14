from typing import List
from funcionario import Funcionario
from gerente import Gerente
from repositorio import Repositorio


class Funcionarios(Repositorio[Funcionario, Gerente]):
    def __init__(self):
        super().__init__()
        self.__items: List[Funcionario] = []

    def get_items(self) -> List[Funcionario]:
        return self.__items

    def get_item(self, _id: str) -> Funcionario:
        for cliente in self.__items:
            if cliente.id == _id:
                return cliente
        return None

    def adicionar_item(self, agente: Gerente, cliente: Funcionario):
        if isinstance(agente, Gerente):
            self.__items.append(cliente)

    def contem(self, item: Funcionario) -> bool:
        return item in self.__items

    def alterar_item(self, agente: Funcionario, _id: str, cliente: Funcionario):
        for i, c in enumerate(self.__items):
            if c.id == _id and isinstance(agente, Gerente):
                self.__items[i] = cliente
