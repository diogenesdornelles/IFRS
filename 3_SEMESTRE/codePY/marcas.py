from typing import List
from analista_cadastro import AnalistaCadastro
from marca import Marca
from repositorio import Repositorio


class Marcas(Repositorio[Marca, AnalistaCadastro]):
    def __init__(self):
        super().__init__()
        self.__items: List[Marca] = []

    def get_items(self) -> List[Marca]:
        return self.__items

    def get_item(self, _id: str) -> Marca:
        for marca in self.__items:
            if marca.id == _id:
                return marca
        return None

    def adicionar_item(self, agente: AnalistaCadastro, marca: Marca):
        if isinstance(agente, AnalistaCadastro):
            self.__items.append(marca)

    def contem(self, item: Marca) -> bool:
        return item in self.__items

    def alterar_item(self, agente: AnalistaCadastro, _id: str, marca: Marca):
        for i, m in enumerate(self.__items):
            if m.id == _id and isinstance(agente, AnalistaCadastro):
                self.__items[i] = marca
