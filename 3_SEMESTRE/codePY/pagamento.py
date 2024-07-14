class Pagamento:
    def __init__(self, _id: str, valor_recebido: float, data_hora_pagamento: str):
        self.__id = _id
        self.__valor_recebido = valor_recebido
        self.__data_hora_pagamento = data_hora_pagamento

    @property
    def id(self) -> str:
        return self.__id

    @property
    def valor_recebido(self) -> float:
        return self.__valor_recebido

    @property
    def data_hora_pagamento(self) -> str:
        return self.__data_hora_pagamento

    @valor_recebido.setter
    def valor_recebido(self, valor_recebido: float):
        self.__valor_recebido = valor_recebido

    @data_hora_pagamento.setter
    def data_hora_pagamento(self, data_hora_pagamento: str):
        self.__data_hora_pagamento = data_hora_pagamento
