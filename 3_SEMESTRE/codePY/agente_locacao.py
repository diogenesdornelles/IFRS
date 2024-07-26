from funcionario import Funcionario


class AgenteLocacao(Funcionario):
    """_summary_

    Args:
        Funcionario (_type_): _description_
    """
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
        """_summary_

        Args:
            _id (str): _description_
            nome (str): _description_
            cpf (str): _description_
            telefone (str): _description_
            endereco (str): _description_
            funcao (str): _description_
            setor (str): _description_
        """
        super().__init__(_id, nome, cpf, telefone, endereco, funcao, setor)
        self.funcao = "Analista de Cadastro"
