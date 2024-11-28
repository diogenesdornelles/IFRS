<?php
$vetor = json_decode(file_get_contents('dados.json')) ?? [];

$vetor[] = [
    'nome' => $_POST['curso'],
    'id' => count($vetor) + 1,
];

file_put_contents('dados.json', json_encode($vetor));

header('location: index.php');
?>