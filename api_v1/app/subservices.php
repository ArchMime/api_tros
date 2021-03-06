<?php
include $_SERVER['DOCUMENT_ROOT'] . '/api_tros/api_v1/database.php';
include $_SERVER['DOCUMENT_ROOT'] . '/api_tros/api_v1/controllers/subServicesController.php';
include $_SERVER['DOCUMENT_ROOT'] . '/api_tros/api_v1/header.php';


$headers = getallheaders();
switch ($_SERVER['REQUEST_METHOD']) {
    case 'POST':
        if($headers['action'] === 'add'){
            createNewSubService($_POST, $headers['token']);
        }elseif($headers['action']=== 'update'){
            updateSubService($_POST, $headers['token']);
        }elseif($headers['action']=== 'delete'){
            removeSubService($_POST, $headers['token']);
        }
        break;

    case 'GET':
        if($headers['action'] === 'getall'){
            getAllSubServices();
        } elseif($headers['action'] === 'getbyserviceid'){
            getSubServicesByServices($headers['servicesid']);
        }
    break;
};
?>