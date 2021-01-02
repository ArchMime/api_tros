<?php
include $_SERVER['DOCUMENT_ROOT'] . '/api_tros/api_v1/database.php';
include $_SERVER['DOCUMENT_ROOT'] . '/api_tros/api_v1/controllers/usersController.php';
include $_SERVER['DOCUMENT_ROOT'] . '/api_tros/api_v1/header.php';


if(isset($_POST['username']) && isset($_POST['password']) && isset($_POST['action']) && $_POST['action'] == 'login'){
    singInUser($_POST['username'], $_POST['password']);
}elseif (isset($_POST['action']) && $_POST['action'] == 'validate') {
    validateLogin($_POST['username'], $_POST['id'], $_POST['token']);
}else{
    $auxArr = array('error' => 'no data');
        echo json_encode($auxArr);
}