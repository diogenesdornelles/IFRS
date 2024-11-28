<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $validReq = isset($_POST['questions']) && is_array($_POST['questions']) && count($_POST['questions']) === 5;
    
    if ($validReq) {
        $questions = $_POST['questions'];
        $answers = [
            ['correct' => 'B'],
            ['correct' => 'C'],
            ['correct' => 'C'],
            ['correct' => 'A'],
            ['correct' => 'E'],
        ];

        $total = 0;

        for ($i = 1; $i <= count($questions); $i++) {
            $pos = $i - 1;
            $answers[$pos]['question'] = $i;
            if (isset($questions[$i]["answer"])) {
                $answers[$pos]['user'] = $questions[$i]["answer"];
                $answers[$pos]['score'] = $questions[$i]["answer"] === $answers[$pos]["correct"] ? 1 : 0;
                if ($answers[$pos]['score'] > 0) $total++;
            } else {
                $validReq = false;
            }

        }
    }
}
?>


<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./assets/css/resposta.css">
    <link rel="stylesheet" href="./assets/css/style.css">
    <link rel="stylesheet" href="./assets/css/reset.css">
    <link rel="stylesheet" href="./assets/css/fonts.css">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Faculty+Glyphic&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');
    </style>
    <title>Resultado</title>
</head>
<header class="questionario__header">
    <h2 class="questionario__h2">SIMULADO</h2>
    <a type="button" class="return__button faculty-400" id="btn-return" href='index.html'>Voltar</a>
</header>

<body class="faculty-400">
    <?php if ($_SERVER['REQUEST_METHOD'] === 'POST' && $validReq): ?>
        <form class="form__form" action="#" method="#">

            <section class="question__section">
                <p class="question__p"><strong>1</strong>Os tipos de prata normalmente vendidos são 975, 950 e 925. Essa
                    classificação é feita de acordo com a sua pureza. Por exemplo, a prata 975 é a substância constituída de 975
                    partes de prata pura
                    e 25 partes de cobre em 1000 partes da substância. Já a prata 950 é constituída de 950 partes de
                    prata pura e 50 de cobre em 1000; e a prata 925 é constituída de 925 partes de prata pura e 75
                    partes de cobre em 1000. Um ourives possui 10 gramas de prata 925 e deseja obter 40 gramas de
                    prata 950 para produção de uma joia. Nessas condições, quantos gramas de prata e de cobre,
                    respectivamente, devem ser fundidos com os 10 gramas de prata 925? <strong>(ENEM 2018)</strong></p>
                <input type="radio" name="questions[1][answer]" id="q1a" value="A">
                <label for="q1a" class="answer__label"><strong>A&#41;</strong> 29,25 e 0,75</label>
                <input checked type="radio" name="questions[1][answer]" id="q1b" value="B">
                <label for="q1b" class="answer__label"><strong>B&#41;</strong> 28,75 e 1,25 (correta)</label>
                <input type="radio" name="questions[1][answer]" id="q1c" value="C">
                <label for="q1c" class="answer__label"><strong>C&#41;</strong> 28,50 e 1,50</label>
                <input type="radio" name="questions[1][answer]" id="q1d" value="D">
                <label for="q1d" class="answer__label"><strong>D&#41;</strong> 27,75 e 2,25</label>
                <input type="radio" name="questions[1][answer]" id="q1e" value="E">
                <label for="q1e" class="answer__label"><strong>E&#41;</strong> 25,00 e 5,00</label>
                <p class="resposta__p">Você respondeu: <?= $questions[1]["answer"]; ?></p>
            </section>
            <section class="question__section">
                <p class="question__p"><strong>2</strong>Um edifício tem a numeração dos andares iniciando no térreo (T), e
                    continuando com primeiro, segundo, terceiro, ..., até o último andar. Uma criança entrou no elevador e,
                    tocando
                    no painel,
                    seguiu uma sequência de andares, parando, abrindo e fechando a porta em diversos andares. A
                    partir de onde entrou a criança, o elevador subiu sete andares, em seguida desceu dez, desceu
                    mais treze, subiu nove, desceu quatro e parou no quinto andar, finalizando a sequência. Considere
                    que, no trajeto seguido pela criança, o elevador parou uma vez no último andar do edifício.
                    De acordo com as informações dadas, o último andar do edifício é o <strong>(ENEM 2018)</strong>
                </p>
                <input type="radio" name="questions[2][answer]" id="q2a" value="A">
                <label for="q2a" class="answer__label"><strong>A&#41;</strong> 16º</label>
                <input type="radio" name="questions[2][answer]" id="q2b" value="B">
                <label for="q2b" class="answer__label"><strong>B&#41;</strong> 22º</label>
                <input checked type="radio" name="questions[2][answer]" id="q2c" value="C">
                <label for="q2c" class="answer__label"><strong>C&#41;</strong> 23º (correta)</label>
                <input type="radio" name="questions[2][answer]" id="q2d" value="D">
                <label for="q2d" class="answer__label"><strong>D&#41;</strong> 25º</label>
                <input type="radio" name="questions[2][answer]" id="q2e" value="E">
                <label for="q2e" class="answer__label"><strong>E&#41;</strong> 32º</label>
                <p class="resposta__p">Você respondeu: <?= $questions[2]["answer"]; ?></p>
            </section>
            <section class="question__section">
                <p class="question__p"><strong>3</strong>Desde a Grécia Antiga, sabe-se que a soma
                    dos números ímpares consecutivos, a partir do 1, é sempre um quadrado perfeito. Como
                    exemplo, tem-se
                    <br>
                    1 = 1&#178;
                    <br>
                    1 + 3 = 2&#178;
                    <br>
                    1 + 3 + 5 = 3&#178;
                    <br>
                    1 + 3 + 5 + 7 = 4&#178;
                    <br>
                    Então, a soma de todos os números ímpares menores do que 100 é <strong>(UFRGS 2019)</strong>
                </p>
                <input type="radio" name="questions[3][answer]" id="q3a" value="A">
                <label for="q3a" class="answer__label"><strong>A&#41;</strong> 42&#178;</label>
                <input type="radio" name="questions[3][answer]" id="q3b" value="B">
                <label for="q3b" class="answer__label"><strong>B&#41;</strong> 49&#178;</label>
                <input checked type="radio" name="questions[3][answer]" id="q3c" value="C">
                <label for="q3c" class="answer__label"><strong>C&#41;</strong> 50&#178; (correta)</label>
                <input type="radio" name="questions[3][answer]" id="q3d" value="D">
                <label for="q3d" class="answer__label"><strong>D&#41;</strong> 99&#178;</label>
                <input type="radio" name="questions[3][answer]" id="q3e" value="E">
                <label for="q3e" class="answer__label"><strong>E&#41;</strong> 100&#178;</label>
                <p class="resposta__p">Você respondeu: <?= $questions[3]["answer"]; ?></p>
            </section>
            <section class="question__section">
                <p class="question__p"><strong>4</strong>Um prisma reto de base hexagonal regular
                    tem a mesma altura de um prisma cuja base
                    é um triângulo equilátero. Considere h a
                    medida da aresta da base do prisma
                    hexagonal e t a medida da aresta da base do
                    prisma triangular. Se ambos os prismas têm o
                    mesmo volume, então a razão
                    t/h vale <strong>(UFRGS 2019)</strong></p>
                <input checked type="radio" name="questions[4][answer]" id="q4a" value="A">
                <label for="q4a" class="answer__label"><strong>A&#41;</strong> 1/&#8730;6 (correta)</label>
                <input type="radio" name="questions[4][answer]" id="q4b" value="B">
                <label for="q4b" class="answer__label"><strong>B&#41;</strong> 1/6</label>
                <input type="radio" name="questions[4][answer]" id="q4c" value="C">
                <label for="q4c" class="answer__label"><strong>C&#41;</strong> 1</label>
                <input type="radio" name="questions[4][answer]" id="q4d" value="D">
                <label for="q4d" class="answer__label"><strong>D&#41;</strong> &#8730;6</label>
                <input type="radio" name="questions[4][answer]" id="q4e" value="E">
                <label for="q4e" class="answer__label"><strong>E&#41;</strong> 6</label>
                <p class="resposta__p">Você respondeu: <?= $questions[4]["answer"]; ?></p>
            </section>
            <section class="question__section">
                <p class="question__p"><strong>5</strong>Uma cozinheira produz docinhos especiais por encomenda. Usando uma
                    receita-base de massa, ela prepara uma porção, com a qual produz 50 docinhos maciços de formato esférico, com
                    2
                    cm de diâmetro. Um cliente encomenda 150 desses docinhos, mas pede que cada um tenha formato esférico com 4 cm
                    de diâmetro. A cozinheira pretende preparar o número exato de porções da receita-base de massa necessário para
                    produzir os docinhos dessa encomenda. Quantas porções da receita-base de massa ela deve preparar para atender
                    esse cliente? <strong>(Enem 2022)</strong></p>
                <input type="radio" name="questions[5][answer]" id="q5a" value="A">
                <label for="q5a" class="answer__label"><strong>A&#41;</strong> 2</label>
                <input type="radio" name="questions[5][answer]" id="q5b" value="B">
                <label for="q5b" class="answer__label"><strong>B&#41;</strong> 3</label>
                <input type="radio" name="questions[5][answer]" id="q5c" value="C">
                <label for="q5c" class="answer__label"><strong>C&#41;</strong> 6</label>
                <input type="radio" name="questions[5][answer]" id="q5d" value="D">
                <label for="q5d" class="answer__label"><strong>D&#41;</strong> 12</label>
                <input checked type="radio" name="questions[5][answer]" id="q5e" value="E">
                <label for="q5e" class="answer__label"><strong>E&#41;</strong> 24 (correta)</label>
                <p class="resposta__p">Você respondeu: <?= $questions[5]["answer"]; ?></p>
            </section>
        </form>
        <table>
            <thead>
                <tr>
                    <th>Questão</th>
                    <th>Correta</th>
                    <th>Resposta</th>
                    <th>Score</th>
                </tr>
            </thead>
            <tbody>
                <?php foreach ($answers as $answer): ?>
                    <tr>
                        <td><?= $answer['question'] ?></td>
                        <td><?= $answer['correct'] ?></td>
                        <td><?= $answer['user'] ?></td>
                        <td><?= $answer['score'] ?></td>
                    </tr>
                <?php endforeach; ?>
            </tbody>
            <tfoot>
                <tr>
                    <td colspan="3">
                        Total
                    </td>
                    <td>
                        <?= $total ?>
                    </td>
                </tr>
            </tfoot>
        </table>
    <?php else: ?>
        <a class="error__a" href="index.html">Responda ao questionário primeiro de forma completa!</a>
    <?php endif; ?>
    <footer>
    </footer>
</body>

</html>