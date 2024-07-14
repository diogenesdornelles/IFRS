class Marca:
    def __init__(self, _id: str, marca: str):
        self.__id = _id
        self.__marca = marca

    @property
    def id(self) -> str:
        return self.__id

    @property
    def marca(self) -> str:
        return self.__marca

    @marca.setter
    def marca(self, marca: str):
        self.__marca = marca
