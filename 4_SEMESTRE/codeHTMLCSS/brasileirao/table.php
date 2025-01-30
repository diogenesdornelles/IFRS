<?php

// 1) Você precisa criar um script em php responsável por gerar um vetor de objetos em JSON.
// A resposta terá a seguinte estrutura:
// [{time: '', v: 0, e:0, d: 0, gp: 0, gc: 0}]. Deve ter pelo menos 10 times na resposta.

// Função para criar a tabela base de times com estatísticas zeradas
function criarTabelaTimes(): array {
    $times = [
        "Grêmio", "Internacional", "Botafogo", "Palmeiras", "Goiás", "São Paulo",
        "Flamengo", "Santos", "Cruzeiro", "Atlético Paranaense", "Atlético Mineiro",
        "Bahia", "Fortaleza", "Juventude", "Corinthians", "Vasco da Gama",
        "Cuiabá", "Red Bull Bragantino", "América Mineiro", "Fluminense"
    ];

    // Inicializa cada time com as estatísticas zeradas
    return array_map(function($time) {
        return [
            "time" => $time,
            "v" => 0,
            "e" => 0,
            "d" => 0,
            "gp" => 0,
            "gc" => 0
        ];
    }, $times);
}

// Função para gerar resultados aleatórios ponderados
function randomizacaoPonderada(array $amostra, array $pesos): mixed {
    $totalPesos = array_sum($pesos); // soma dos pesos =  100
    $rand = mt_rand(1, $totalPesos); // numero aleatorio entre 1 e soma de pesos (1 a 100)

    foreach ($amostra as $index => $opcao) {
        $rand -= $pesos[$index]; // decrementa aleatorio de pesos, em ordem
        // quando rand for 0 ou negativo, retorna valor da amostra
        if ($rand <= 0) {
            return $opcao;
        }
    }
    return null;
}

// Função para simular uma partida entre dois times
function simularPartida(array &$mandante, array &$visitante, array $resultados): void {
    // seleciona um resultado aleatório para cada partida, tomando a condição de mandante, dentre 'v' (vitória), 'e' (empate) e 'd' (derrota)
    // há uma probabilidade de 50% do mandante ganhar, 30% de empatar e 20% de perder
    $resultado = $resultados[randomizacaoPonderada([0, 1, 2], [50, 30, 20])];
    // determina randomicamente numero de gols do visitante
    $golsVisitante = rand(0, 3);

    if ($resultado === "v") {
        // se o mandante vencer, fará mais gols que o visitante
        $golsMandante = rand($golsVisitante + 1, $golsVisitante + 3);
    } elseif ($resultado === "e") {
        // se empatar, mesma quantia de gols entre equipes
        $golsMandante = $golsVisitante;
    } else {
        // garantir que visitante faça ao menos um gol, caso vença
        $golsVisitante = $golsVisitante < 1 ? 1 : $golsVisitante;
        // se perder, mandante fica com 0 a gols visitante - 1
        $golsMandante = rand(0, $golsVisitante - 1);
    }

    // incrementa estatísticas de resultados
    if ($resultado === "v") {
        $mandante['v']++;
        $visitante['d']++;
    } elseif ($resultado === "e") {
        $mandante['e']++;
        $visitante['e']++;
    } else {
        $mandante['d']++;
        $visitante['v']++;
    }

    // Atualiza demais campos
    $mandante['gp'] += $golsMandante;
    $mandante['gc'] += $golsVisitante;

    $visitante['gp'] += $golsVisitante;
    $visitante['gc'] += $golsMandante;
}

// Função para simular o campeonato
function simularCampeonato(array &$tabela): void {
    // resultados possíveis em uma partida
    $resultados = ["v", "e", "d"];

    // Seleciona cada por vez, para atribuir uma condição de mandante
    for ($i = 0; $i < count($tabela); $i++) {
        // Um time mandante recebe um visitante. Haverá um confronto de ida e um de volta.
        for ($j = 0; $j < count($tabela); $j++) {
            // pula se o time for o mesmo
            if ($i !== $j) {
                simularPartida($tabela[$i], $tabela[$j], $resultados);
            }
        }
    }
}

// Função principal para gerar o JSON
function gerarTabelaCampeonatoJSON(): string {
    $tabela = criarTabelaTimes();
    simularCampeonato($tabela);
    return json_encode($tabela, JSON_PRETTY_PRINT);
}

// determina um retorno JSON em headers
header('Content-Type: application/json');
echo gerarTabelaCampeonatoJSON();
