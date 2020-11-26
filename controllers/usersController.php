<?php
include $_SERVER['DOCUMENT_ROOT']."/api_tros/models/usersModel.php";

function createNewUser($username, $userpass){
    $obj = new Users($username, $userpass);
    echo $obj->createUser();
}

function returnAllUsers(){
    $obj = new Users();
    echo $obj->readAllUsers();
}

function returnOneUser($id){
    $obj = new Users();
    echo $obj->readOneUsers($id);
}

function changeUsername($id, $username){
    $obj = new Users();
    echo $obj->updateUsername($id, $username);
}

function changeUserpass($id, $userpass){
    $obj = new Users();
    echo $obj->updatePassword($id, $userpass);
}

?>