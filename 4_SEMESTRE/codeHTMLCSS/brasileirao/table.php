<?php

// 1) Você precisa criar um script em php responsável por gerar um vetor de objetos em JSON.
// A resposta terá a seguinte estrutura:
// [{time: '', v: 0, e:0, d: 0, gp: 0, gc: 0}]. Deve ter pelo menos 10 times na resposta.

function weighted_random(array $choices, array $weights)
{
  $totalWeight = array_sum($weights);
  $rand = mt_rand(1, $totalWeight);

  foreach ($choices as $index => $choice) {
    $rand -= $weights[$index];
    if ($rand <= 0) {
      return $choice;
    }
  }
  return null;
}


$tabela = [
  ["time" => "Grêmio", "v" => 0, "e" => 0, "d" => 0, "gp" => 0, "gc" => 0],
  ["time" => "Internacional", "v" => 0, "e" => 0, "d" => 0, "gp" => 0, "gc" => 0],
  ["time" => "Botafogo", "v" => 0, "e" => 0, "d" => 0, "gp" => 0, "gc" => 0],
  ["time" => "Palmeiras", "v" => 0, "e" => 0, "d" => 0, "gp" => 0, "gc" => 0],
  ["time" => "Goiás", "v" => 0, "e" => 0, "d" => 0, "gp" => 0, "gc" => 0],
  ["time" => "São Paulo", "v" => 0, "e" => 0, "d" => 0, "gp" => 0, "gc" => 0],
  ["time" => "Flamengo", "v" => 0, "e" => 0, "d" => 0, "gp" => 0, "gc" => 0],
  ["time" => "Santos", "v" => 0, "e" => 0, "d" => 0, "gp" => 0, "gc" => 0],
  ["time" => "Cruzeiro", "v" => 0, "e" => 0, "d" => 0, "gp" => 0, "gc" => 0],
  ["time" => "Atlético Paranaense", "v" => 0, "e" => 0, "d" => 0, "gp" => 0, "gc" => 0],
  ["time" => "Atlético Mineiro", "v" => 0, "e" => 0, "d" => 0, "gp" => 0, "gc" => 0],
  ["time" => "Bahia", "v" => 0, "e" => 0, "d" => 0, "gp" => 0, "gc" => 0],
  ["time" => "Fortaleza", "v" => 0, "e" => 0, "d" => 0, "gp" => 0, "gc" => 0],
  ["time" => "Juventude", "v" => 0, "e" => 0, "d" => 0, "gp" => 0, "gc" => 0],
  ["time" => "Corinthians", "v" => 0, "e" => 0, "d" => 0, "gp" => 0, "gc" => 0],
  ["time" => "Vasco da Gama", "v" => 0, "e" => 0, "d" => 0, "gp" => 0, "gc" => 0],
  ["time" => "Cuiabá", "v" => 0, "e" => 0, "d" => 0, "gp" => 0, "gc" => 0],
  ["time" => "Coritiba", "v" => 0, "e" => 0, "d" => 0, "gp" => 0, "gc" => 0],
  ["time" => "Red Bull Bragantino", "v" => 0, "e" => 0, "d" => 0, "gp" => 0, "gc" => 0],
  ["time" => "América Mineiro", "v" => 0, "e" => 0, "d" => 0, "gp" => 0, "gc" => 0],
  ["time" => "Fluminense", "v" => 0, "e" => 0, "d" => 0, "gp" => 0, "gc" => 0]
];

$resultados = ["v", "e", "d"];

// Seleciona cada por vez, para atribuir uma condição de mandante
for ($i = 0; $i < count($tabela); $i++) {
  // Um time mandante recebe um visitante. Haverá um confronto de ida e um de volta.
  for ($j = 0; $j < count($tabela); $j++) {
    // pula se o time for o mesmo
    if ($i !== $j) {
      // seleciona um resultado aleatório para cada partida, tomando a condição de mandante, dentre 'v' (vitória), 'e' (empate) e 'd' (derrota)
      // há uma probabilidade de 50% do mandante ganhar, 30% de empatar e 20% de perder
      $resultado = $resultados[weighted_random([0, 1, 2], [50, 30, 20])];

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