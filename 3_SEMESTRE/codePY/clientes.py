from typing import List
from analista_cadastro import AnalistaCadastro
from cliente import Cliente
from repositorio import Repositorio


class Clientes(Repositorio[Cliente, AnalistaCadastro]):
    def __init__(self):
        super().__init__()
        self.__items: List[Cliente] = []

    def get_items(self) -> List[Cliente]:
        return self.__items

    def get_item(self, _id: str) -> Cliente:
        for cliente in self.__items:
            if cliente.id == _id:
                return cliente
        return None

    def adicionar_item(self, agente: AnalistaCadastro, cliente: Cliente):
        if isinstance(agente, AnalistaCadastro):
            self.__items.append(cliente)

    def contem(self, item: Cliente) -> bool:
        return item in self.__items

    def alterar_item(self, agente: "AnalistaCadastro", _id: str, cliente: Cliente):
        for i, c in enumerate(self.__items):
            if c.id == _id and isinstance(agente, AnalistaCadastro):
                self.__items[i] = cliente
