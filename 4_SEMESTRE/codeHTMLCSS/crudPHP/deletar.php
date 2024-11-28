<?php
$vetor = json_decode(file_get_contents('dados.json')) ?? [];
$id = $_GET['id'];

if (!ctype_digit($id)) {
    die('ID inválido.');
}

foreach ($vetor as $key => $curso) {
    if ((int) $curso->id === (int) $id) {
        unset($vetor[$key]); 
        break;
    }
}

$vetor = array_values($vetor);
foreach ($vetor as $index => $curso) {
    $curso->id = $index + 1;
}

file_put_contents('dados.json', json_encode($vetor));

header('location: index.php');
?>