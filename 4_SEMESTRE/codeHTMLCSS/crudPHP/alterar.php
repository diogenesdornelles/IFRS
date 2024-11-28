<?php
$vetor = json_decode(file_get_contents('dados.json')) ?? [];
$nome_curso = $_POST['curso'];
$id = $_GET['id'];

if (!ctype_digit($id)) {
    die('ID inválido.');
}

foreach ($vetor as $curso) {
    if ((int) $curso->id === (int) $id) {
        $curso->nome = $nome_curso;
        break;
    } 
}

file_put_contents('dados.json', json_encode($vetor));

header('location: index.php');
?>