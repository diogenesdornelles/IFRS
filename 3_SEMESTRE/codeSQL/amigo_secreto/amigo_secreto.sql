-- This script was generated by the ERD tool in pgAdmin 4.
-- Please log an issue at https://github.com/pgadmin-org/pgadmin4/issues/new/choose if you find any bugs, including reproduction steps.

CREATE EXTENSION IF NOT EXISTS pgcrypto;

CREATE TABLE IF NOT EXISTS public.participante
(
    id_participante uuid DEFAULT gen_random_uuid(),
    nome character varying(50) NOT NULL,
    codinome character varying(50) NOT NULL,
    ramal character(3) NOT NULL,
    ativo boolean DEFAULT true,
    data_criacao date DEFAULT CURRENT_DATE,
    CONSTRAINT pk_participante PRIMARY KEY (id_participante)
);

CREATE TABLE IF NOT EXISTS public.sorteio
(
    id_sorteio uuid DEFAULT gen_random_uuid(),
    patrocinador uuid NOT NULL,
    ativo boolean DEFAULT true,
    data_criacao date DEFAULT CURRENT_DATE,
    CONSTRAINT pk_sorteio PRIMARY KEY (id_sorteio)
);

CREATE TABLE IF NOT EXISTS public.participante_sorteio
(
    id_participante_sorteio uuid DEFAULT gen_random_uuid(),
    id_sorteio uuid NOT NULL,
    id_participante uuid NOT NULL,
    ativo boolean DEFAULT true,
    data_criacao date DEFAULT CURRENT_DATE,
    CONSTRAINT pk_participante_sorteio PRIMARY KEY (id_participante_sorteio)
);

CREATE TABLE IF NOT EXISTS public.sorteio_resultado
(
    id_sorteio_resultado uuid DEFAULT gen_random_uuid(),
    amigo uuid NOT NULL,
    secreto uuid NOT NULL,
    ativo boolean DEFAULT true,
    data_criacao date DEFAULT CURRENT_DATE,
    CONSTRAINT pk_sorteio_resultado PRIMARY KEY (id_sorteio_resultado)
);

CREATE TABLE IF NOT EXISTS public.mensagem
(
    id_mensagem uuid DEFAULT gen_random_uuid(),
    emissor uuid NOT NULL,
    destinatario uuid NOT NULL,
    ativo boolean DEFAULT true,
    mensagem text NOT NULL,
    data_criacao date DEFAULT CURRENT_DATE,
    CONSTRAINT pk_mensagem PRIMARY KEY (id_mensagem)
);

CREATE TABLE IF NOT EXISTS public.aviso_geral
(
    aviso text NOT NULL,
    id_aviso_geral uuid DEFAULT gen_random_uuid(),
    emissor uuid NOT NULL,
    ativo boolean DEFAULT true,
    data_criacao date DEFAULT CURRENT_DATE,
    CONSTRAINT pk_aviso_geral PRIMARY KEY (id_aviso_geral)
);

CREATE TABLE IF NOT EXISTS public.sugestao
(
    id_sugestao uuid DEFAULT gen_random_uuid(),
    sugestao text NOT NULL,
    emissor uuid NOT NULL,
    ativo boolean DEFAULT true,
    data_criacao date DEFAULT CURRENT_DATE,
    CONSTRAINT pk_sugestao PRIMARY KEY (id_sugestao)
);

CREATE TABLE IF NOT EXISTS public.avaliacao
(
    id_avaliacao uuid DEFAULT gen_random_uuid(),
    avaliacao text NOT NULL,
    emissor uuid NOT NULL,
    ativo boolean DEFAULT true,
    data_criacao date DEFAULT CURRENT_DATE,
    CONSTRAINT pk_avaliacao PRIMARY KEY (id_avaliacao)
);

ALTER TABLE IF EXISTS public.sorteio
    ADD CONSTRAINT fk_sorteio_patrocinador FOREIGN KEY (patrocinador)
    REFERENCES public.participante (id_participante) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.participante_sorteio
    ADD CONSTRAINT fk_participante_sorteio_participante FOREIGN KEY (id_participante)
    REFERENCES public.participante (id_participante) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.participante_sorteio
    ADD CONSTRAINT fk_participante_sorteio_sorteio FOREIGN KEY (id_sorteio)
    REFERENCES public.sorteio (id_sorteio) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.sorteio_resultado
    ADD CONSTRAINT fk_sorteio_resultado_amigo FOREIGN KEY (amigo)
    REFERENCES public.participante_sorteio (id_participante_sorteio) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.sorteio_resultado
    ADD CONSTRAINT fk_sorteio_resultado_secreto FOREIGN KEY (secreto)
    REFERENCES public.participante_sorteio (id_participante_sorteio) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.mensagem
    ADD CONSTRAINT fk_mensagem_emissor FOREIGN KEY (emissor)
    REFERENCES public.participante_sorteio (id_participante_sorteio) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.mensagem
    ADD CONSTRAINT fk_mensagem_destinatario FOREIGN KEY (destinatario)
    REFERENCES public.participante_sorteio (id_participante_sorteio) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.aviso_geral
    ADD CONSTRAINT fk_aviso_geral_emissor FOREIGN KEY (emissor)
    REFERENCES public.participante (id_participante) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.sugestao
    ADD CONSTRAINT fk_sugestao_emissor FOREIGN KEY (emissor)
    REFERENCES public.participante_sorteio (id_participante_sorteio) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.avaliacao
    ADD CONSTRAINT fk_avaliacao_emissor FOREIGN KEY (emissor)
    REFERENCES public.participante_sorteio (id_participante_sorteio) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;



-- Inserindo participantes
INSERT INTO public.participante (nome, codinome, ramal)
VALUES
('João Silva', 'Jão', '101'),
('Maria Oliveira', 'Mia', '102'),
('Carlos Souza', 'Carlão', '103');

-- Inserindo sorteios
INSERT INTO public.sorteio (patrocinador)
VALUES
((SELECT id_participante FROM public.participante WHERE nome = 'João Silva')),
((SELECT id_participante FROM public.participante WHERE nome = 'Maria Oliveira'));

-- Inserindo participante_sorteio
INSERT INTO public.participante_sorteio (id_sorteio, id_participante)
VALUES
((SELECT id_sorteio FROM public.sorteio WHERE patrocinador = (SELECT id_participante FROM public.participante WHERE nome = 'João Silva')), (SELECT id_participante FROM public.participante WHERE nome = 'Carlos Souza')),
((SELECT id_sorteio FROM public.sorteio WHERE patrocinador = (SELECT id_participante FROM public.participante WHERE nome = 'Maria Oliveira')), (SELECT id_participante FROM public.participante WHERE nome = 'João Silva'));

-- Inserindo sorteio_resultado
INSERT INTO public.sorteio_resultado (amigo, secreto)
VALUES
((SELECT id_participante_sorteio FROM public.participante_sorteio WHERE id_participante = (SELECT id_participante FROM public.participante WHERE nome = 'Carlos Souza')), (SELECT id_participante_sorteio FROM public.participante_sorteio WHERE id_participante = (SELECT id_participante FROM public.participante WHERE nome = 'João Silva')));

-- Inserindo mensagens
INSERT INTO public.mensagem (emissor, destinatario, mensagem)
VALUES
((SELECT id_participante_sorteio FROM public.participante_sorteio WHERE id_participante = (SELECT id_participante FROM public.participante WHERE nome = 'Carlos Souza')), (SELECT id_participante_sorteio FROM public.participante_sorteio WHERE id_participante = (SELECT id_participante FROM public.participante WHERE nome = 'João Silva')), 'Feliz Natal!'),
((SELECT id_participante_sorteio FROM public.participante_sorteio WHERE id_participante = (SELECT id_participante FROM public.participante WHERE nome = 'João Silva')), (SELECT id_participante_sorteio FROM public.participante_sorteio WHERE id_participante = (SELECT id_participante FROM public.participante WHERE nome = 'Maria Oliveira')), 'Boas Festas!');

-- Inserindo aviso_geral
INSERT INTO public.aviso_geral (aviso, emissor)
VALUES
('Aviso importante para todos!', (SELECT id_participante_sorteio FROM public.participante_sorteio WHERE id_participante = (SELECT id_participante FROM public.participante WHERE nome = 'João Silva')));

-- Inserindo sugestão
INSERT INTO public.sugestao (sugestao, emissor)
VALUES
('Podemos melhorar o sorteio ano que vem.', (SELECT id_participante_sorteio FROM public.participante_sorteio WHERE id_participante = (SELECT id_participante FROM public.participante WHERE nome = 'Maria Oliveira')));

-- Inserindo avaliação
INSERT INTO public.avaliacao (avaliacao, emissor)
VALUES
('Foi um ótimo sorteio!', (SELECT id_participante_sorteio FROM public.participante_sorteio WHERE id_participante = (SELECT id_participante FROM public.participante WHERE nome = 'Carlos Souza')));

COMMIT;