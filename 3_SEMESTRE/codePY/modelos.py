from typing import List
from analista_cadastro import AnalistaCadastro
from modelo import Modelo
from repositorio import Repositorio


class Modelos(Repositorio[Modelo, AnalistaCadastro]):
    def __init__(self):
        super().__init__()
        self.__items: List[Modelo] = []

    def get_items(self) -> List[Modelo]:
        return self.__items

    def get_item(self, _id: str) -> Modelo:
        for modelo in self.__items:
            if modelo.id == _id:
                return modelo
        return None

    def adicionar_item(self, agente: AnalistaCadastro, modelo: Modelo):
        if isinstance(agente, AnalistaCadastro):
            self.__items.append(modelo)

    def contem(self, item: Modelo) -> bool:
        return item in self.__items

    def alterar_item(self, agente: AnalistaCadastro, _id: str, modelo: Modelo):
        for i, m in enumerate(self.__items):
            if m.id == _id and isinstance(agente, AnalistaCadastro):
                self.__items[i] = modelo
