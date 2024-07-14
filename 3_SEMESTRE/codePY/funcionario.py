from pessoa import Pessoa


class Funcionario(Pessoa):
    def __init__(
        self,
        _id: str,
        nome: str,
        cpf: str,
        telefone: str,
        endereco: str,
        funcao: str,
        setor: str,
    ):
        super().__init__(_id, nome, cpf, telefone)
        self.__endereco = endereco
        self.__funcao = funcao
        self.__setor = setor

    @property
    def endereco(self) -> str:
        return self.__endereco

    @endereco.setter
    def endereco(self, endereco: str):
        self.__endereco = endereco

    @property
    def funcao(self) -> str:
        return self.__funcao

    @funcao.setter
    def funcao(self, funcao: str):
        self.__funcao = funcao

    @property
    def setor(self) -> str:
        return self.__setor

    @setor.setter
    def setor(self, setor: str):
        self.__setor = setor
