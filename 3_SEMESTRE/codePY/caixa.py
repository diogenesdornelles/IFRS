from funcionario import Funcionario


class Caixa(Funcionario):
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
        super().__init__(_id, nome, cpf, telefone, endereco, funcao, setor)
        self.funcao = "Caixa"
