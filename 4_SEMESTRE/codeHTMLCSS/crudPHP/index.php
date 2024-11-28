<?php
$vetor = json_decode(file_get_contents('dados.json')) ?? [];

require_once('header.php')
?>

<body>
    <a href="tela_inserir.php">Novo Curso</a>
    <table class="table">
        <thead>
        <tr>
        <th>ID</th>
        <th>Nome</th>
        <th colspan="2">Ações</th>
        </tr>
        </thead>
        <tbody>
            <?php
            foreach($vetor as $curso) {
                print "
                <tr>
                    <td>{$curso->id}</td>
                    <td>{$curso->nome}</td>
                    <td><a href='tela_alterar.php?id={$curso->id}'><i class='bi bi-pencil'></i></td>
                    <td><a href='deletar.php?id={$curso->id}'><i class='bi bi-trash ft-red'></i></td>
                </tr>
                ";
            }
            if (count($vetor) === 0) {
                print "<td colspan=2>Nenhum item</td>";
            }
            ?>
        </tbody>
    </table>
</body>
</html>