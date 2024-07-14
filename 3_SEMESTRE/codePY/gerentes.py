from typing import List
from gerente import Gerente
from repositorio import Repositorio


class Gerentes(Repositorio[Gerente, Gerente]):
    def __init__(self):
        super().__init__()
        self.__items: List[Gerente] = []

    def get_items(self) -> List[Gerente]:
        return self.__items

    def get_item(self, _id: str) -> Gerente:
        for cliente in self.__items:
            if cliente.id == _id:
                return cliente
        return None

    def adicionar_item(self, agente: Gerente, cliente: Gerente):
        if isinstance(agente, Gerente):
            self.__items.append(cliente)

    def contem(self, item: Gerente) -> bool:
        return item in self.__items

    def alterar_item(self, agente: Gerente, _id: str, cliente: Gerente):
        for i, c in enumerate(self.__items):
            if c.id == _id and isinstance(agente, Gerente):
                self.__items[i] = cliente
