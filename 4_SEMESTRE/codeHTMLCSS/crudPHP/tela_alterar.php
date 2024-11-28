<?php
$vetor = json_decode(file_get_contents('dados.json')) ?? [];
$id = $_GET['id'];

if (!ctype_digit($id)) {
    die('ID inválido.');
}

$curso_alterar = null;

foreach ($vetor as $curso) {
    if ((int) $curso->id === (int) $id) {
        $curso_alterar = $curso;
        break;
    } 
}

if (!$curso_alterar) {
    die('Curso não encontrado.');
}
require_once('header.php');
?>

<body>
    <form action="alterar.php?id=<?=$curso_alterar->id?>" method="post">
        <label for="curso">Nome</label>
        <input type="text" name="curso" id="curso" value="<?= $curso_alterar->nome?>">
        <a href="index.php">Voltar</a>
        <button>Salvar</button>
    </form>
    
</body>
</html>