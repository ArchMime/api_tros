<?php
include $_SERVER['DOCUMENT_ROOT'] . '/api_tros/api_v1/database.php';
include $_SERVER['DOCUMENT_ROOT'] . '/api_tros/api_v1/controllers/servicesController.php';
include $_SERVER['DOCUMENT_ROOT'] . '/api_tros/api_v1/header.php';



$headers = getallheaders();
switch ($_SERVER['REQUEST_METHOD']) {
    case 'POST':
        if($headers['action']=== 'add'){
            createNewService($_POST, $headers['token']);        
        } else if($headers['action']=== 'update'){
            updateService($_POST, $headers['token']);
        }else if($headers['action']=== 'delete'){
            removeService($_POST, $headers['token']);
        }

        break;

    case 'GET':
        getAllServices();
        break;
};
?>