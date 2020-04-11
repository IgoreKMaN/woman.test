<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!--Отключает формирование ссылки у номера телефона на iOS-->
    <meta name="format-detection" content="telephone=no">
    <title>Поможем Владу</title>

    <!--<link rel="stylesheet" href="css/style.css">-->
       
    <script defer src="https://use.fontawesome.com/releases/v5.1.0/js/all.js"></script>
    
</head>

<body>
    <header>
    <form action="collected.php" method="POST">
        <input type="text" name="field1" />
        <button type="submit">Отправить</button>
    </form>
    
    
<?php
        
    $field1  = $_POST['field1'];
    file_put_contents('summ.txt', $field1);
    
        
?>

    </header>

    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="script/slick.min.js"></script>
    <script src="script/script.js"></script>
    
    
    
</body>

</html>
