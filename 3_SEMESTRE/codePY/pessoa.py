class Pessoa:
    def __init__(self, _id: str, nome: str, cpf: str, telefone: str):
        self.__id = _id
        self.__nome = nome
        self.__cpf = cpf
        self.__telefone = telefone

    @property
    def id(self) -> str:
        return self.__id

    @property
    def nome(self) -> str:
        return self.__nome

    @nome.setter
    def nome(self, nome: str):
        self.__nome = nome

    @property
    def cpf(self) -> str:
        return self.__cpf

    @cpf.setter
    def cpf(self, cpf: str):
        self.__cpf = cpf

    @property
    def telefone(self) -> str:
        return self.__telefone

    @telefone.setter
    def telefone(self, telefone: str):
        self.__telefone = telefone

    def logar(self):
        pass

    def deslogar(self):
        pass
