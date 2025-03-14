# Estrutura para o Projeto em Qualidade e Teste de Software

## Introdução

Foi proposto à "Equipe Go Horse" a elaboração de um projeto abrangendo a construção do Backend e Frontend de uma aplicação web voltado à *Locação de Brinquedos para Festas*. O desenvolvimento, segundo proposta feita, será desenvolvido de forma incremental, devendo ser submetido a testes de validação e de verificação, no intuito de aferir a qualidade atingida pelo software. O exercício foi proposto nos seguintes termos:

```plaintext
Desenvolvimento de um Sistema Locação de Brinquedos para Festas

Descrição de Negócio

A Casa das Festas Alegria faz locação de brinquedos (por exemplo, cama
elástica, piscina de bolinha e escorregador) para festas. Esta empresa gostaria de um
sistema que auxiliasse no controle das locações e devoluções dos brinquedos.
A empresa tem um Gerente (que será o administrador do site) e vários
funcionários, que utilizarão o sistema. Os funcionários têm funções diferentes na empresa
(por exemplo, tem o Caixa, o Almoxarife, etc). Portanto, sobre funcionários é importante
saber: cpf, nome, telefone e função. O gerente é responsável por incluir, alterar e excluir
dados dos funcionários no sistema.
O sistema deve permitir incluir, alterar e excluir dados de brinquedos. O
responsável por fazer isso é o Almoxarife. Sobre brinquedo é importante armazenar:
código único, nome, tipo de brinquedo, marca, data da aquisição e valor da locação.
Os brinquedos estão organizados por tipos (piscinas de bolinhas, escorregadores,
camas elásticas, jogos de bilhar, etc). Diante disso, o sistema deve permitir incluir e alterar
tipos de brinquedos. O responsável em inserir e alterar é o Almoxarife. Com relação a tipo
de brinquedo é importante saber: código único e nome do tipo.
É importante também que o sistema permita incluir e alterar dados dos clientes. O
responsável é por esses lançamentos é o Analista de Cadastro. Em relação a cliente é
importante saber: cpf, nome, endereço, data de nascimento e telefone.
A locação é feita diretamente na loja. O responsável por incluir dados de locação é
o Agente de Locação. Em uma mesma locação pode ser incluído mais de um brinquedo.
Sobre locação deve-se incluir: código único da locação, data e horário atual, CPF do
cliente, código único do brinquedo, valor unitário do item locado, valor total da locação e
data para devolução.
O pagamento é feito no momento da locação. A empresa aceita pagamentos
apenas em dinheiro. A inclusão dos dados, no sistema, referentes a pagamento de
locações é feito pelo Caixa. A inclusão de pagamento com dinheiro envolve os seguintes
dados: código único da locação, nome e cpf do cliente (o sistema busca e mostra esses
dados), data do pagamento, o valor da locação e o valor do pagamento.
É importante considerar que o sistema deve ser desenvolvido para utilizar na
internet. A Casa de Festas utiliza os navegadores Google Chrome e Mozilla Firefox. Além
disso, ela espera que o sistema seja fácil de utilizar, que tenha segurança quanto a
acessos indesejados e que seja confiável. Como medida de privacidade dos dados
gostaríamos que fosse possível cadastrar diferentes níveis de acessos aos usuários.
A construção do software seguirá as atividades fundamentais de um processo de
desenvolvimento incremental. Nesse sentido, faremos o levantamento, análise e projeto
dos requisitos, codificação e testes de partes do software. Ao mesmo tempo, aplicaremos
os testes de verificação e validação, conforme os conhecimentos adquiridos durante o
decorrer da disciplina.

Como vamos construir o software com o processo incremental. O primeiro
incremento será Incluir Locação de Brinquedos. Diante disso, será feito a análise,
projeto, codificação e testes para este incremento.
Na fase de análise deste incremento, é necessário fazer as seguintes
especificações:
1. Requisitos funcionais
2. Diagrama de Casos de Uso
3. Escrita do caso de uso principal do incremento de forma detalhada
4. Requisitos não funcionais
5. Diagrama ER
6. Diagrama de Classes
```

## Parte 1: Backend da aplicação

### Descrição dos requisitos funcionais

|RF|Requisito|Ator|Requisitos relacionados|
|:-:|:-|:-:|:-:|
|RF01|O sistema deve **gerenciar** informações sobre funcionários: *cpf, nome, senha, telefone e função*|Gerente(Administrador so site)||
|RF02|O sistema deve **gerenciar** informações sobre brinquedos: *código único, nome, tipo de brinquedo, marca, data da aquisição e valor da locação*|Almoxárife|RF03|
|RF03|O sistema deve **manter** informações sobre tipo de brinquedos: *código único e nome do tipo*|Almoxárife||
|RF04|O sistema deve **manter** informações sobre clientes: *cpf, nome, endereço, data de nascimento e telefone*|Analista de cadastro||
|RF05|O sistema deve **incluir** informações sobre locações:*código único da locação, data e horário atual, CPF do cliente, código único do brinquedo, valor unitário do item locado, valor total da locação e data para devolução*|Agente de locação|RF02,RF04|
|RF06|O sistema deve **incluir** informações sobre pagamento: *código único da locação, nome e cpf do cliente, data do pagamento, o valor da locação e o valor do pagamento*|Caixa|RF02,RF05|

**Definições**:

<dl>
  <dt><strong>Gerenciar:</strong></dt>
  <dd>Incluir, alterar e excluir.</dd>
  <dt><strong>Manter:</strong></dt>
  <dd>Incluir e alterar.</dd>
</dl>

### Descrição dos requisitos não funcionais

|RNF|Requisito|Ator (usuário)|Requisitos relacionados|
|:-:|:-:|:-:|:-:|
|RNF01|O sistema deve ser desenvolvido para utilizar na *internet*|xxx||
|RNF02|O sistema deve ser suportado nos navegadores Google *Chrome e Mozilla Firefox*|xxx||
|RNF03|O sistema deve ser fácil de utilizar|xxx||
|RNF04|O sistema deve ser seguro quanto à acessos indesejados e confiável|xxx||
|RNF05|O sistema deve possuir medidas de privacidade de dados|xxx||
|RNF06|O sistema deve permitir cadastrar diferentes níveis de acessos aos usuários|xxx||

### Descrição das regras de negócio

|RN|Regra de negócio|
|:-:|:-:|
|RNF01|O sistema deve permitir a inclusão de mais de um brinquedo na mesma locação|
|RNF02|A locação deve ser feita somente presencialmente na loja|
|RNF03|O pagamento é feito no momento da locação e em dinheiro|

### Diagrama de Casos de Uso

![diagrama-caso-uso](diagrama_caso_de_uso_app_locacao_incremento_1.png)

### Escrita do caso de uso principal do incremento de forma detalhada

|||
|:-|:-:|
|**Nome do caso de uso**|Gerenciar funcionário|
|**Escopo**|Permite incluir, alterar e excluir informações de funcionário|
|**Ator(es)**|Gerente|
|**Interessados e interesses**| Gerente: controle de dados da equipe|
|**Pré-condição**|Estar logado|
|**Pós-condição**|Que as informações de funcionário sejam incluídas, alteradas e excluídas com sucesso|

---

#### **Fluxo principal**

1. **Gerente** escolhe a opção **gerenciar funcionário**.
2. **Sistema** mostra três opções: *incluir*, *alterar* e *excluir*.
3. **Gerente** escolhe uma opção.
4. **Sistema** mostra a mensagem *Operação realizada com sucesso*.

---

#### **Fluxo alternativo**

##### 3.a. Opção Incluir

1. **Sistema** mostra o campo de preenchimento: **CPF**.
2. **Gerente** preenche o campo.
3. **Sistema** valida o campo:
   - **CPF já cadastrado:**
     1. **Sistema** mostra mensagem.
     2. **Sistema** retorna ao passo 2 do fluxo principal.
   - **CPF em branco ou incorreto:**
     1. **Sistema** mostra mensagem.
     2. **Sistema** retorna ao passo 1 do fluxo alternativo 3.a (opção incluir).
4. **Sistema** mostra os campos para preenchimento: **nome, telefone, senha, repete senha e função**.
5. **Gerente** preenche os campos.
6. **Sistema** valida os campos:
   - **Campos obrigatórios não preenchidos ou incorretos:**
     1. **Sistema** mostra mensagem.
     2. **Sistema** retorna ao passo 3.a.4 do fluxo alternativo.
   - **Senha não atinge os requisitos mínimos ou senhas não conferem:**
     1. **Sistema** mostra mensagem.
     2. **Sistema** retorna ao passo 3.a.4 do fluxo alternativo.
7. **Sistema** armazena os dados.

##### 3.b. Opção Alterar

1. **Sistema** mostra o campo de preenchimento: **CPF**.
2. **Gerente** preenche o campo.
3. **Sistema** valida o campo:
   - **CPF não cadastrado:**
     1. **Sistema** mostra mensagem.
     2. **Sistema** retorna ao passo 2 do fluxo principal.
4. **Sistema** busca e mostra os campos para alteração: **nome, telefone e função**.
5. **Gerente** altera os campos.
6. **Sistema** valida os campos:
   - **Campos obrigatórios não preenchidos ou incorretos:**
     1. **Sistema** mostra mensagem.
     2. **Sistema** retorna ao passo 3.b.4 do fluxo alternativo.
7. **Sistema** insere os dados.

##### 3.c. Operação Excluir

1. **Sistema** mostra o campo de preenchimento: **CPF**.
2. **Gerente** preenche o campo.
3. **Sistema** valida o campo:
   - **CPF não cadastrado:**
     1. **Sistema** mostra mensagem.
     2. **Sistema** retorna ao passo 2 do fluxo principal.
4. **Sistema** busca os dados e mostra: **nome, função, cpf, telefone**.
5. **Sistema** mostra a mensagem: “Deseja excluir?”.
6. **Sistema** apresenta duas opções: **excluir** e **cancelar**.
7. Dependendo da escolha:
   - **Opção Cancelar:**
     1. **Sistema** finaliza a operação.
   - **Opção Excluir:**
     1. **Sistema** exclui os dados.

---

|||
|:-|:-:|
|**Nome do caso de uso**|Gerenciar brinquedo|
|**Escopo**|Permite incluir, alterar e excluir informações de brinquedos|
|**Ator(es)**|Almoxárife|
|**Interessados e interesses**|Almoxárife: controle de dados sobre brinquedos|
|**Pré-condição**|Estar logado|
|**Pós-condição**|Que as informações de brinquedo sejam incluídas, alteradas e excluídas com sucesso|

---

#### **Fluxo principal**

1. **Almoxárife** escolhe a opção **Gerenciar brinquedo**.
2. **Sistema** mostra três opções: *incluir*, *alterar* e *excluir*.
3. **Almoxárife** escolhe uma opção.
4. **Sistema** mostra a mensagem *Operação realizada com sucesso*.

---

#### **Fluxo alternativo**

##### 3.a. Opção Incluir

1. **Sistema** mostra o campo de preenchimento: **NOME**.
2. **Almoxárife** preenche o campo.
3. **Sistema** mostra lista com nomes compatíveis.
4. **Sistema** valida o campo:
   - **Brinquedo já cadastrado:**
     1. **Sistema** mostra mensagem.
     2. **Sistema** retorna ao passo 2 do fluxo principal.
   - **Nome em branco ou incorreto:**
     1. **Sistema** mostra mensagem.
     2. **Sistema** retorna ao passo 1 do fluxo alternativo 3.a (opção incluir).
5. **Sistema** mostra lista com **tipo de brinquedo**.
6. **Almoxárife** seleciona tipo.
7. **Sistema** mostra os campos de preenchimento: **marca, data da aquisição e valor da locação**.
8. **Sistema** valida os campos:
   - **Campos obrigatórios não preenchidos ou incorretos:**
     1. **Sistema** mostra mensagem.
     2. **Sistema** retorna ao passo 3.a.7 do fluxo alternativo.
9. **Sistema** gera código único.
10. **Sistema** armazena os dados.

##### 3.b. Opção Alterar

1. **Sistema** mostra o campo de preenchimento: **CÓDIGO**.
2. **Almoxárife** preenche o campo.
3. **Sistema** valida o campo:
   - **CÓDIGO não cadastrado:**
     1. **Sistema** mostra mensagem.
     2. **Sistema** retorna ao passo 2 do fluxo principal.
4. **Sistema** busca e mostra os campos para alteração: **nome, tipo de brinquedo, marca, data da aquisição e valor da locação**
5. **Almoxárife** altera os campos.
6. **Sistema** valida os campos:
   - **Campos obrigatórios não preenchidos ou incorretos:**
     1. **Sistema** mostra mensagem.
     2. **Sistema** retorna ao passo 3.b.4 do fluxo alternativo.
7. **Sistema** insere os dados.

##### 3.c. Operação Excluir

1. **Sistema** mostra o campo de preenchimento: **CÓDIGO**.
2. **Almoxárife** preenche o campo.
3. **Sistema** valida o campo:
   - **CÓDIGO não encontrado:**
     1. **Sistema** mostra mensagem.
     2. **Sistema** retorna ao passo 2 do fluxo principal.
4. **Sistema** busca os dados e mostra: **nome, tipo, marca, código, data da aquisição e valor da locação**.
5. **Sistema** mostra a mensagem: “Deseja excluir?”.
6. **Sistema** apresenta duas opções: **excluir** e **cancelar**.
7. Dependendo da escolha:
   - **Opção Cancelar:**
     1. **Sistema** finaliza a operação.
   - **Opção Excluir:**
     1. **Sistema** exclui os dados.

---

|||
|:-|:-:|
|**Nome do caso de uso**|Manter tipo de brinquedo|
|**Escopo**|Permite incluir e alterar informações de tipo de brinquedos|
|**Ator(es)**|Almoxárife|
|**Interessados e interesses**|Almoxárife: controle de dados sobre tipo de brinquedos|
|**Pré-condição**|Estar logado|
|**Pós-condição**|Que as informações de tipo de brinquedo sejam incluídas e alteradas com sucesso|

---

#### **Fluxo principal**

1. **Almoxárife** escolhe a opção **Manter tipo de brinquedo**.
2. **Sistema** mostra três opções: *incluir* e *alterar*.
3. **Almoxárife** escolhe uma opção.
4. **Sistema** mostra a mensagem *Operação realizada com sucesso*.

---

#### **Fluxo alternativo**

##### 3.a. Opção Incluir

1. **Sistema** mostra o campo de preenchimento: **NOME**.
2. **Almoxárife** preenche o campo.
3. **Sistema** mostra lista com nomes de tipos compatíveis.
4. **Sistema** valida o campo preenchido:
   - **Tipo de brinquedo já cadastrado:**
     1. **Sistema** mostra mensagem.
     2. **Sistema** retorna ao passo 2 do fluxo principal.
   - **Nome em branco ou incorreto:**
     1. **Sistema** mostra mensagem.
     2. **Sistema** retorna ao passo 1 do fluxo alternativo 3.a (opção incluir).
5. **Sistema** gera código único.
6. **Sistema** armazena os dados.

##### 3.b. Opção Alterar

1. **Sistema** mostra o campo de preenchimento: **CÓDIGO**.
2. **Almoxárife** preenche o campo.
3. **Sistema** valida o campo:
   - **CÓDIGO não cadastrado:**
     1. **Sistema** mostra mensagem.
     2. **Sistema** retorna ao passo 2 do fluxo principal.
4. **Sistema** busca e mostra os campos para alteração: **nome**
5. **Almoxárife** altera os campos.
6. **Sistema** valida os campos:
   - **Campos obrigatórios não preenchidos ou incorretos:**
     1. **Sistema** mostra mensagem.
     2. **Sistema** retorna ao passo 4 do fluxo alternativo.
7. **Sistema** insere os dados.

---

|||
|:-|:-:|
|**Nome do caso de uso**|Manter cliente|
|**Escopo**|Permite incluir e alterar informações de clientes|
|**Ator(es)**|Analista de cadastro|
|**Interessados e interesses**|Analista de cadastro: controle de dados sobre clientes|
|**Pré-condição**|Estar logado|
|**Pós-condição**|Que as informações de cliente sejam incluídas e alteradas com sucesso|

---

#### **Fluxo principal**

1. **Analista de cadastro** escolhe a opção **Manter cliente**.
2. **Sistema** mostra três opções: *incluir* e *alterar*.
3. **Analista de cadastro** escolhe uma opção.
4. **Sistema** mostra a mensagem *Operação realizada com sucesso*.

---

#### **Fluxo alternativo**

##### 3.a. Opção Incluir

1. **Sistema** mostra o campo de preenchimento: **CPF**.
2. **Analista de cadastro** preenche o campo.
3. **Sistema** valida o campo:
   - **CPF já cadastrado:**
     1. **Sistema** mostra mensagem.
     2. **Sistema** retorna ao passo 2 do fluxo principal.
   - **CPF em branco ou incorreto:**
     1. **Sistema** mostra mensagem.
     2. **Sistema** retorna ao passo 1 do fluxo alternativo 3.a (opção incluir).
4. **Sistema** mostra os campos para preenchimento: **nome, endereço, data de nascimento e telefone**.
5. **Analista de cadastro** preenche os campos.
6. **Sistema** valida os campos:
   - **Campos obrigatórios não preenchidos ou incorretos:**
     1. **Sistema** mostra mensagem.
     2. **Sistema** retorna ao passo 3.a.4 do fluxo alternativo.
7. **Sistema** armazena os dados.

##### 3.b. Opção Alterar

1. **Sistema** mostra o campo de preenchimento: **CPF**.
2. **Analista de cadastro** preenche o campo.
3. **Sistema** valida o campo:
   - **CPF não cadastrado:**
     1. **Sistema** mostra mensagem.
     2. **Sistema** retorna ao passo 2 do fluxo principal.
4. **Sistema** busca e mostra os campos para alteração: **nome, cpf, endereço, data de nascimento e telefone** altera os campos.
5. **Sistema** valida os campos:
   - **Campos obrigatórios não preenchidos ou incorretos:**
     1. **Sistema** mostra mensagem.
     2. **Sistema** retorna ao passo 4 do fluxo alternativo.
6. **Sistema** insere os dados.

---

|||
|:-|:-:|
|**Nome do caso de uso**|Incluir locações|
|**Escopo**|Permite incluir informações de locações|
|**Ator(es)**|Analista de locação|
|**Interessados e interesses**|Analista de locação: controle de dados sobre locações|
|**Pré-condição**|Estar logado|
|**Pós-condição**|Que as informações de locação sejam incluídas e alteradas com sucesso|

---

**Fluxo principal**

1. **Agente de locação** clica sobre a opção *Incluir locação*.
2. **Sistema** mostra campo preenchimento: **CPF**.
3. **Agente de locação** preenche o campo.
4. **Sistema** valida campo.
5. **Sistema** mostra listagem com **códigos únicos, nome de brinquedos e valor unitário dos brinquedos**.
6. **Agente de locação** seleciona o brinquedo.
7. **Sistema** valida a seleção.
8. **Sistema** mostra campo: **Data de devolução**.
9. **Agente de locação** preenche campo.
10. **Sistema** valida o campo.
11. **Sistema** mostra mensagem *Item incluído com sucesso*.
12. **Sistema** mostra mensagem *Deseja locar outro brinquedo?*.

- caso resposta *Sim*, repete passos 5 a 12. Caso resposta *Não*, segue:

13. **Sistema** calcula valor total da locação.
14. **Sistema** registra data e hora atual.
15. **Sistema** registra código único.
16. **Sistema** salva dados.
17. **Sistema** mostra mensagem “Operação realizada com sucesso”;

---

**Fluxo alternativo**

##### Item 4 do fluxo principal

- **CPF não cadastrado:**

     1. **Sistema** mostra mensagem.
     2. **Sistema** retorna ao menu principal.

- **CPF em branco ou incorreto:**

     1. **Sistema** mostra mensagem.
     2. **Sistema** retorna ao fluxo principal 2 (opção informar CPF).

##### Item 7 do fluxo principal

- **O(s) brinquedo(s) se encontra(m) locado(s):**

     1. **Sistema** mostra mensagem.
     2. **Sistema** retorna ao fluxo principal 5 (listagem de itens).

##### Item 10 do fluxo principal

- **Data em branco ou incorreta:**

     1. **Sistema** mostra mensagem.
     2. **Sistema** retorna ao fluxo principal 8 (informar data de devolução).

---

|||
|:-|:-:|
|**Nome do caso de uso**|Incluir pagamentos|
|**Escopo**|Permite incluir informações de pagamento|
|**Ator(es)**|Caixa|
|**Interessados e interesses**|Caixa: controle de dados sobre pagamentos|
|**Pré-condição**|Estar logado|
|**Pós-condição**|Que as informações de pagamento sejam incluídas e alteradas com sucesso|

---

**Fluxo principal**

1. **Caixa** clica sobre a opção *Incluir pagamento*.
2. **Sistema** mostra campo preenchimento: **CPF**.
3. **Caixa** preenche o campo.
4. **Sistema** valida campo.
5. **Sistema** mostra nome e cpf do cliente.
6. **Sistema** mostra listagem com locações em aberto **código único, nomes de brinquedos, valor unitário dos brinquedos e valor total da locação**.
7. **Caixa** seleciona a locação objeto de pagamento.
8. **Sistema** mostra campo: **Valor do pagamento**.
9. **Caixa** preenche o campo.
10. **Sistema** valida o campo.
11. **Sistema** registra data e hora atual.
12. **Sistema** registra código único.
13. **Sistema** salva dados.
14. **Sistema** mostra mensagem *Operação realizada com sucesso*;

---

**Fluxo alternativo**

##### Item 4 do fluxo principal

- **CPF não cadastrado:**

     1. **Sistema** mostra mensagem.
     2. **Sistema** retorna ao menu principal.

- **CPF em branco ou incorreto:**

     1. **Sistema** mostra mensagem.
     2. **Sistema** retorna ao fluxo principal 2 (opção informar CPF).

##### Item 6 do fluxo principal

- **Não há locações em aberto:**

     1. **Sistema** mostra mensagem.
     2. **Sistema** retorna ao fluxo principal.

##### Item 10 do fluxo principal

- **Valor em branco ou incorreto:**

     1. **Sistema** mostra mensagem.
     2. **Sistema** retorna ao fluxo principal 8 (informar valor).

- **Valor insuficiente:**

     1. **Sistema** mostra mensagem.
     2. **Sistema** retorna ao fluxo principal 8 (informar valor).

---

### ERD

tabela funcionarios

- cpf(pk), nome, telefone, senha e função (senha para permitir autenticação e autorização)

Um funcionario (gerente) pode cadastrar muitos funcionários.

tabela brinquedos

- código único(pk), nome, tipo de brinquedo, marca, data da aquisição, valor da locação

Um funcionario (almoxárife) pode cadastrar muitos brinquedos.

tabela tipo_brinquedo

- código único(pk), nome do tipo

Um funcionario (almoxárife) pode cadastrar muitos tipos de brinquedos.

tabela clientes

- cpf(pk), nome, endereço, data de nascimento, telefone

Um funcionario (analista de cadastro) pode cadastrar muitos clientes.

tabela locacoes

- código único da locação(pk), data e horário atual, CPF do cliente(fk) (obtidos por query: valor total da locação c/ sum em locacoes_brinquedos)

Um funcionario (agente de locação) pode incluir muitas locações.
Um cliente pode possuir várias locações. Por outro lado, uma locação pode pertencer a somente um cliente.

tabela brinquedos_loocacoes

- código único (pk), valor unitário, código da locação (fk) e data de devolução

Um funcionario (agente de locação) pode incluir muitos brinquedos em uma mesma locação.
Uma locação pode possuir vários brinquedos. Um brinquedo locado pode estar em apenas uma locação.

tabela pagamentos

- código único do pagamento(pk), código único da locação(fk), código único cliente(fk), data do pagamento, o valor do pagamento (obtidos por query: nome e cpf do cliente em clientes e o valor da locação c/ sum() em locacoes_brinquedos)

Um funcionario (caixa) pode incluir muitos pagamentos.
Um cliente pode efetuar vários pagamentos. Uma locação sofre um pagamento de um cliente específico.
Um pagamento se refere a somente uma locação. Uma locação possui apenas um pagamento.

O Schema da aplicação fica melhor delineado no ERD abaixo:

![ERD](./erd_locacao_incremento_1.png "Erd para o sistema de locação")

Código SQL para a geração das tabelas:

```sql
-- This script was generated by the ERD tool in pgAdmin 4.
-- Please log an issue at https://github.com/pgadmin-org/pgadmin4/issues/new/choose if you find any bugs, including reproduction steps.
BEGIN;


CREATE TABLE IF NOT EXISTS public.brinquedos
(
    cod uuid NOT NULL,
    nome character varying(255) COLLATE pg_catalog."default" NOT NULL,
    tipo_bringuedo uuid NOT NULL,
    marca character varying(255) COLLATE pg_catalog."default" NOT NULL,
    data_aquisicao date NOT NULL,
    valor_locacao numeric(10, 2) NOT NULL,
    CONSTRAINT pk_cod_brinquedo PRIMARY KEY (cod)
);

CREATE TABLE IF NOT EXISTS public.clientes
(
    cpf character(11) COLLATE pg_catalog."default" NOT NULL,
    nome character varying(255) COLLATE pg_catalog."default" NOT NULL,
    endereco character varying(255) COLLATE pg_catalog."default" NOT NULL,
    data_nascimento date NOT NULL,
    telefone character varying(11) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT pk_cpf_cliente PRIMARY KEY (cpf)
);

CREATE TABLE IF NOT EXISTS public.funcionarios
(
    cpf character(11) COLLATE pg_catalog."default" NOT NULL,
    nome character varying(255) COLLATE pg_catalog."default" NOT NULL,
    telefone character varying(11) COLLATE pg_catalog."default" NOT NULL,
    funcao character varying(40) COLLATE pg_catalog."default" NOT NULL,
    senha character varying(30) NOT NULL,
    CONSTRAINT pk_cpf_funcionario PRIMARY KEY (cpf)
);

CREATE TABLE IF NOT EXISTS public.locacoes
(
    cod uuid NOT NULL,
    data_hora date NOT NULL DEFAULT now(),
    cpf_cliente character(11) COLLATE pg_catalog."default" NOT NULL,
    valor_item numeric(10, 2) NOT NULL,
    data_devolucao date NOT NULL,
    CONSTRAINT fk_cod_locacao PRIMARY KEY (cod)
);

CREATE TABLE IF NOT EXISTS public.pagamentos
(
    cod uuid NOT NULL,
    cpf_cliente character(11) COLLATE pg_catalog."default" NOT NULL,
    cod_locacao uuid NOT NULL,
    data_pagamento date NOT NULL DEFAULT now(),
    valor_pagamento numeric(10, 2) NOT NULL,
    valor_locacao numeric(10, 2) NOT NULL,
    CONSTRAINT pk_cod_pagamento PRIMARY KEY (cod),
    CONSTRAINT unique_cod_locacao UNIQUE (cod_locacao)
);

CREATE TABLE IF NOT EXISTS public.tipo_brinquedo
(
    cod uuid NOT NULL,
    nome character varying(255) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT pk_cod_tipo_brinquedo PRIMARY KEY (cod)
);

CREATE TABLE IF NOT EXISTS public.brinquedos_locados
(
    cod uuid NOT NULL,
    valor_unitario numeric(10, 2) NOT NULL,
    cod_locacao uuid NOT NULL,
    data_devolucao date NOT NULL,
    CONSTRAINT pk_cod_brinquedo_locado PRIMARY KEY (cod)
);

ALTER TABLE IF EXISTS public.brinquedos
    ADD CONSTRAINT fk_brinquedo_tipo_brinquedo FOREIGN KEY (tipo_bringuedo)
    REFERENCES public.tipo_brinquedo (cod) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.locacoes
    ADD CONSTRAINT fk_cpf_cliente_cliente FOREIGN KEY (cpf_cliente)
    REFERENCES public.clientes (cpf) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.pagamentos
    ADD CONSTRAINT fk_cod_locacao_pagamento FOREIGN KEY (cod_locacao)
    REFERENCES public.locacoes (cod) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;
CREATE INDEX IF NOT EXISTS unique_cod_locacao
    ON public.pagamentos(cod_locacao);


ALTER TABLE IF EXISTS public.pagamentos
    ADD CONSTRAINT fk_cpf_cliente_pagamento FOREIGN KEY (cpf_cliente)
    REFERENCES public.clientes (cpf) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.brinquedos_locados
    ADD CONSTRAINT fk_brinquedo_locado_locacao FOREIGN KEY (cod_locacao)
    REFERENCES public.locacoes (cod) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;

END;
```


### UML

```plantuml
@startuml
' Definição da classe App
class App {
  - app: Express
  + constructor()
  - initializeMiddlewares(): void
  - initializeRoutes(): void
}

' Representa a dependência com o Express
class Express

' Representa a rota dos livros (bookRouter)
class BookRouter

' Representa as dependências de documentação da API
class SwaggerUi
class SwaggerDocument

' Relações de dependência
App ..> Express : usa
App ..> BookRouter : usa
App ..> SwaggerUi : usa
App ..> SwaggerDocument : usa

@enduml
```

### Estruturação de pastas no Backend

Esta estrutura foi pensada para projetos de APIs em Node.js seguindo o padrão MVC (Model-View-Controller) e utilizando TypeScript para garantir tipagem e manutenibilidade. O objetivo é facilitar a escalabilidade, a organização e a separação de responsabilidades. A seguir, veja uma descrição detalhada de cada diretório e suas responsabilidades:

```plaintext
dist/                       
  // Diretório gerado após a compilação/transpilação (ex: TypeScript para JavaScript)
  
src/
├── config/                 
│   // Armazena arquivos de configuração, como variáveis de ambiente, conexões com banco de dados,
│   // integrações externas, e configurações de bibliotecas.
│   └── index.ts            // Exemplo: centraliza e exporta as configurações.
│
├── controllers/            
│   // Contém os controladores, responsáveis por receber e tratar as requisições HTTP.
│   // Cada controlador atua como intermediário entre a camada de rotas e a lógica de negócio.
│   └── UserController.ts   // Exemplo: métodos para criar, ler, atualizar e deletar usuários.
│
├── middlewares/            
│   // Armazena middlewares que interceptam requisições para validação, autenticação,
│   // tratamento de erros, log, etc.
│   └── authMiddleware.ts   // Exemplo: middleware para verificar token de autenticação.
│
├── services/               
│   // Implementa a lógica de negócio e regras específicas da aplicação.
│   // Pode incluir integrações com APIs externas, cálculos ou operações que não
│   // são específicas de um controlador.
│   └── UserService.ts      // Exemplo: lógica para processamento de dados de usuários.
│
├── routes/                 
│   // Define as rotas da API e as associa aos respectivos controladores.
│   // Facilita o gerenciamento e a organização dos endpoints.
│   └── userRoutes.ts       // Exemplo: rotas para operações de usuários.
│
├── uploads/                
│   // Pasta para armazenar arquivos enviados pelo usuário (ex: imagens, documentos).
│   // É importante garantir segurança e organização (ex: subpastas por tipo de arquivo ou usuário).
│
├── schemas/                
│   // Define a estrutura dos documentos do banco de dados.
│   // Exemplo: usando Mongoose, é onde são configuradas as propriedades, tipos, validações e índices.
│   └── userSchema.ts       // Exemplo: schema do modelo de usuário.
│
├── models/                 
│   // Define os modelos que serão usados para interagir com o banco de dados.
│   // Geralmente, estes modelos são criados a partir dos schemas (ex: via mongoose.model).
│   └── User.ts             // Exemplo: model do usuário que encapsula o schema e os métodos de acesso.
│
├── utils/                  
│   // Contém funções utilitárias e helpers que podem ser reutilizados por outras partes da aplicação.
│   └── validators/         
│       // Funções específicas para validação de dados de entrada (ex: sanitização, formato de email).
│       └── userValidator.ts
│
├── types/                  
│   // Define tipos e interfaces TypeScript para melhorar a robustez e a manutenção do código.
│   └── interfaces/         
│       // (Opcional) Interfaces específicas para estruturar dados ou contratos entre camadas.
│       └── IUser.ts
│
├── app.ts                  
│   // Configura e inicializa o servidor Express, conecta middlewares e rotas.
│
└── main.ts                 
    // Ponto de entrada da aplicação. Pode incluir inicializações, conexão com o banco de dados
    // e disparar o servidor.
    
tests/
└── ...                     
  // Testes unitários, de integração e end-to-end. Organização dos testes pode seguir a mesma
  // estrutura da pasta src para facilitar a correlação entre código e testes.

config/                    
└── ...                     
  // Arquivos de configuração para build, deploy, variáveis de ambiente específicas para cada ambiente
  // (desenvolvimento, homologação, produção), entre outros.

locales/
└── ...                     
  // Arquivos de internacionalização (i18n), com traduções e configurações para múltiplos idiomas.


```

## Parte 2: Frontend da aplicação

### Introdução ao Frontend

Nossa aplicação fará uso de ReactJS, o qual consiste em uma biblioteca JavaScript para produzir views, mais precisamente, Single Page Application (SPA), no próprio front-end da aplicação.

Assim, será implementada uma abordagem conhecida como arquitetura cliente-servidor, com frontend desacoplado; ou, mais comumente, chamado de arquitetura headless.

A camada de apresentação (frontend) é responsável por renderizar a interface do usuário, como dito.

O Backend, por sua vez, irá se dedicar à lógica de negócio e à manipulação dos dados por meio de APIs, no caso uma api REST, escrita em nodeJS. Essa separação permite uma maior flexibilidade, escalabilidade e facilita a manutenção, pois cada camada pode evoluir de forma independente.

Atualmente, embora não se tenha algo muito bem definido na literatura, aceita-se como melhor arquitetura em ReactJS a execução de projetos baseados em componentes, organizados de forma modular, permitindo escalabilidade, manutenabilidade e testabilidade.

Para tanto, adota-se aqui a componentização e o atomic designs. Neste cenário, tem-se como escopo garantir que a aplicação seja subdividida em pequenos componentes reutilizáveis, que se agrupam em grau de complexidade, do menor para o maior, até perfazerem o todo.

Aplicações React costumam dividir os componentes em duas categorias básicas maiores, quais sejam: componentes inteligentes ou “containers”, os quais se encarregam da operacionalização lógica de regras de negócio, controlar estados e renderização com base em busca em APIs; e os componentes “dumbs”, que se preocupam apenas com a apresentação da UI, mediante passagem de props.

### Estruturação de pastas no Frontend

A seguir, conforme proposto, a estrutura de pastas organizada e escalável para um projeto React:

```plaintext
public/
└── index.html              // Arquivo HTML principal da aplicação, que serve de "container" para o bundle do React

src/
├── assets/                 // Recursos estáticos da aplicação
│   ├── images/             // Imagens, ícones e outros gráficos
│   ├── fonts/              // Arquivos de fontes
│   └── styles/             // Estilos globais (útil se não houver uma pasta "styles" separada)
│
├── components/             // Componentes reutilizáveis da interface
│   ├── containers/         // Componentes “inteligentes” que contêm lógica e estado
│   └── templates/          // Componentes “presentacionais” (dumb components) focados apenas na UI, como header e footer
│
├── hooks/                  // Custom hooks para lógica reutilizável (ex.: gerenciamento de formulários, chamadas à API)
│
├── context/                // Providers e configurações da Context API para gerenciamento de estado global
│
├── reducers/               // Redutores para gerenciamento de estados mais complexos (ex.: com Redux ou hooks customizados)
│
├── services/               // Serviços para comunicação com o backend (ex.: chamadas API, centralização de requisições HTTP)
│
├── utils/                  // Funções utilitárias e helpers
│   └── validators/         // Funções para validação de dados de entrada, sanitização e formatação
│
├── types/                  // Definições de tipos e interfaces TypeScript
│   └── interfaces/         // (Opcional) Interfaces específicas para definir contratos e estruturas de dados
│
├── App.tsx                 // Componente raiz que define a estrutura global e o roteamento da aplicação
└── main.tsx                // Ponto de entrada da aplicação; responsável por renderizar o App no DOM
│
tests/
└── ...                     // Testes unitários, de integração e E2E; a estrutura dos testes pode espelhar a do src para facilitar a correlação
│
config/
└── ...                     // Arquivos de configuração (ex.: variáveis de ambiente, configurações de build e deploy)
│
styles/                    // (Opcional) Pasta para estilos globais, temas e mixins, caso não estejam centralizados em assets
│
locales/
└── ...                     // Arquivos de internacionalização (i18n) para suportar múltiplos idiomas


```
