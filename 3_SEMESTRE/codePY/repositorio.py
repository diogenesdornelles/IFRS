from typing import List, TypeVar, Generic
from abc import ABC, abstractmethod

# Definição dos tipos genéricos
T = TypeVar("T")
U = TypeVar("U")


class Repositorio(ABC, Generic[T, U]):
    def __init__(self):
        self._items: List[T] = []

    @abstractmethod
    def get_items(self) -> List[T]:
        pass

    @abstractmethod
    def get_item(self, id: str) -> T:
        pass

    @abstractmethod
    def adicionar_item(self, agente: U, item: T):
        pass

    @abstractmethod
    def contem(self, item: T) -> bool:
        pass

    @abstractmethod
    def alterar_item(self, agente: U, _id: str, item: T):
        pass
