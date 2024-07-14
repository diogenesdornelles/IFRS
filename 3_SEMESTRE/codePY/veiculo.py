class Veiculo:
    def __init__(
        self,
        _id: str,
        marca,
        modelo,
        ano_fabricacao: int,
        cor: str,
        chassi: str,
        placa: str,
    ):
        self.__id = _id
        self.__marca = marca
        self.__modelo = modelo
        self.__ano_fabricacao = ano_fabricacao
        self.__cor = cor
        self.__chassi = chassi
        self.__placa = placa

    @property
    def id(self) -> str:
        return self.__id

    @property
    def marca(self):
        return self.__marca

    @marca.setter
    def marca(self, marca):
        self.__marca = marca

    @property
    def modelo(self):
        return self.__modelo

    @modelo.setter
    def modelo(self, modelo):
        self.__modelo = modelo

    @property
    def ano_fabricacao(self) -> int:
        return self.__ano_fabricacao

    @ano_fabricacao.setter
    def ano_fabricacao(self, ano: int):
        self.__ano_fabricacao = ano

    @property
    def cor(self) -> str:
        return self.__cor

    @cor.setter
    def cor(self, cor: str):
        self.__cor = cor

    @property
    def chassi(self) -> str:
        return self.__chassi

    @chassi.setter
    def chassi(self, chassi: str):
        self.__chassi = chassi

    @property
    def placa(self) -> str:
        return self.__placa

    @placa.setter
    def placa(self, placa: str):
        self.__placa = placa
