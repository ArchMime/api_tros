<?php
include 'database.php';

switch ($_SERVER['REQUEST_METHOD']) {
    case 'POST':
        echo "guardar\n";
        $headers = getallheaders();

        echo $headers['name'] ."\n". $headers['token'];
        break;

    case 'GET':
        echo "listar";
        break;

    case 'PUT':
        echo "actualizar";
        break;

    case 'DELETE':
        echo "eliminar";
        break;
};

?>