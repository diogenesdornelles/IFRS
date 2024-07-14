from locadora import Locadora
from analista_cadastro import AnalistaCadastro
from cliente import Cliente


locadora = Locadora()
analista = AnalistaCadastro(
    1, "Eduardo", "000000000", "549729738", "rua 1", "Analista", "Cadastro"
)
cliente = Cliente(1, "Rui", "3829034723", "54123-23", "17-03-86", "rua sei la")

locadora.clientes.adicionar_item(
    analista, cliente
)

print(locadora.clientes.get_items())
