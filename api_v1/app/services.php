<?php
include $_SERVER['DOCUMENT_ROOT'].'/api_tros/api_v1/database.php';
include $_SERVER['DOCUMENT_ROOT'].'/api_tros/api_v1/controllers/servicesController.php';
include $_SERVER['DOCUMENT_ROOT'].'/api_tros/api_v1/header.php';


$headers = getallheaders();
switch ($_SERVER['REQUEST_METHOD']) {
    case 'POST':
        createNewService($_POST);        
        break;

    case 'GET':
        getAllServices();
    break;
};
?>