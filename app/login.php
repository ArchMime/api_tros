<?php
include $_SERVER['DOCUMENT_ROOT'].'/api_tros/database.php';
include $_SERVER['DOCUMENT_ROOT'].'/api_tros/controllers/usersController.php';

if(isset($_POST['username']) && isset($_POST['password'])){
    singInUser($_POST['username'], $_POST['password']);
}else{
    $auxArr = array('error' => 'no data');
        echo json_encode($auxArr);
}