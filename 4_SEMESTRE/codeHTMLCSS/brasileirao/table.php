<?php

// 1) Você precisa criar um script em php responsável por gerar um vetor de objetos em JSON.
// A resposta terá a seguinte estrutura:
// [{time: '', v: 0, e:0, d: 0, gp: 0, gc: 0}]. Deve ter pelo menos 10 times na resposta.

function randomizacao_ponderada(array $amostra, array $pesos)
{
  $totalPesos = array_sum($pesos); // soma dos pesos
  $rand = mt_rand(1, $totalPesos); // numero aleatorio entre 1 e soma

  foreach ($amostra as $index => $opcao) {
    $rand -= $pesos[$index]; // se o peso for maior que numero aleatorio, retorna opção
    if ($rand <= 0) {
      return $opcao;
    }
  }
  return null;
}


$tabela = [
  ["time" => "Grêmio"],
  ["time" => "Internacional"],
  ["time" => "Botafogo"],
  ["time" => "Palmeiras"],
  ["time" => "Goiás"],
  ["time" => "São Paulo"],
  ["time" => "Flamengo"],
  ["time" => "Santos"],
  ["time" => "Cruzeiro"],
  ["time" => "Atlético Paranaense"],
  ["time" => "Atlético Mineiro"],
  ["time" => "Bahia"],
  ["time" => "Fortaleza"],
  ["time" => "Juventude"],
  ["time" => "Corinthians"],
  ["time" => "Vasco da Gama"],
  ["time" => "Cuiabá"],
  ["time" => "Red Bull Bragantino"],
  ["time" => "América Mineiro"],
  ["time" => "Fluminense"]
];

for ($i = 0; $i < count($tabela); $i++) {
  $tabela[$i]['v'] = 0;
  $tabela[$i]['e'] = 0;
  $tabela[$i]['d'] = 0;
  $tabela[$i]['gp'] = 0;
  $tabela[$i]['gc'] = 0;
}

$resultados = ["v", "e", "d"];

// Seleciona cada por vez, para atribuir uma condição de mandante
for ($i = 0; $i < count($tabela); $i++) {
  // Um time mandante recebe um visitante. Haverá um confronto de ida e um de volta.
  for ($j = 0; $j < count($tabela); $j++) {
    // pula se o time for o mesmo
    if ($i !== $j) {
      // seleciona um resultado aleatório para cada partida, tomando a condição de mandante, dentre 'v' (vitória), 'e' (empate) e 'd' (derrota)
      // há uma probabilidade de 50% do mandante ganhar, 30% de empatar e 20% de perder
      $resultado = $resultados[randomizacao_ponderada([0, 1, 2], [50, 30, 20])];

      $golsVisitante = rand(0, 3);

      if ($resultado === "v") {
        // se o mandante vencer, fará mais gols que o visitante
        $golsMandante = rand($golsVisitante + 1, $golsVisitante + 3);
      } elseif ($resultado === "e") {
        // se empatar, mesma quantia de gols entre equipes
        $golsMandante = $golsVisitante;
      } else {
        // se perder, mandante fica com 0 a gols visitante - 1
        $golsMandante = rand(0, $golsVisitante > 0 ? $golsVisitante - 1 : 0);
      }

      // incrementa estatísticas de resultados
      if ($resultado === "v") {
        $tabela[$i]['v']++;
        $tabela[$j]['d']++;
      } elseif ($resultado === "e") {
        $tabela[$i]['e']++;
        $tabela[$j]['e']++;
      } else {
        $tabela[$i]['d']++;
        $tabela[$j]['v']++;
      }

      // Atualiza demais campos
      $tabela[$i]['gp'] += $golsMandante;
      $tabela[$i]['gc'] += $golsVisitante;
  
      $tabela[$j]['gp'] += $golsVisitante;
      $tabela[$j]['gc'] += $golsMandante;
    }
  }
}

header('Content-Type: application/json');

echo json_encode($tabela, JSON_PRETTY_PRINT);