from clientes import Clientes
from frota import Frota
from funcionarios import Funcionarios
from gerentes import Gerentes
from marcas import Marcas
from modelos import Modelos


class Locadora:
    def __init__(self):
        self.frota = Frota()
        self.clientes = Clientes()
        self.marcas = Marcas()
        self.modelos = Modelos()
        self.gerentes = Gerentes()
        self.funcionarios = Funcionarios()
