class Modelo:
    def __init__(self, _id: str, id_marca: str, modelo: str):
        self.__id = _id
        self.__id_marca = id_marca
        self.__modelo = modelo

    @property
    def id(self) -> str:
        return self.__id

    @property
    def id_marca(self) -> str:
        return self.__id_marca

    @id_marca.setter
    def id_marca(self, id_marca: str):
        self.__id_marca = id_marca

    @property
    def modelo(self) -> str:
        return self.__modelo

    @modelo.setter
    def modelo(self, modelo: str):
        self.__modelo = modelo
