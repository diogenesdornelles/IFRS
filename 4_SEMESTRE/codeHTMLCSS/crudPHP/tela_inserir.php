<?php 
require_once('header.php')
?>
<body>
    <form action="inserir.php" method="post">
        <label class="form-label" for="curso">Nome</label>
        <input class="form-control" type="text" name="curso" id="curso">
        <a class="link-offset-2 link-underline link-underline-opacity-10" href="index.php">Voltar</a>
        <button type="submit" class="btn btn-primary">Salvar</button>
    </form>
</body>
</html>