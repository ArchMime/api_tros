<?php
include $_SERVER['DOCUMENT_ROOT']."/api_tros/api_v1/models/usersModel.php";
include $_SERVER['DOCUMENT_ROOT']."/api_tros/api_v1/models/authjwtModel.php";

function singInUser($username, $password){
    try {
        $obj = new Users();
        $user = $obj->readUserByUsername($username);
        if (!empty($user['userpass']) && password_verify($password, $user['userpass'])){
            $auxArr = array('token' => Authjwt::createToken($user['username'], $user['id']), 'username'=>$user['username'], 'userid'=>$user['id']);
            echo json_encode($auxArr);
        } else {
            throw new Exception('Credenciales no validas');
        }
    } catch (Exception $e) {
        $auxArr = array('error' => $e->getMessage());
        echo json_encode($auxArr);
    }
}

function validateLogin($username, $id, $token){
    try {
        $obj = new Users();
        $user = $obj->readUserById($id);
        if (!empty($user['username']) && $user['username'] == $username){
            $auxArr = array('token' => Authjwt::ValidateData($token, $id, $username));
            echo json_encode($auxArr);
        } else {
            throw new Exception('data not valid');
        }
    } catch (Exception $e) {
        $auxArr = array('error' => $e->getMessage());
        echo json_encode($auxArr);
    }
}

function createNewUser($username, $userpass, $token){
    try {
        $newtoken = Authjwt::Check($token);
        $obj = new Users($username, $userpass);
        $response = $obj->createUser();
        echo json_encode(["newtoken"=>$newtoken, "response"=> $response]);
    }  catch (Exception $e) {
        $auxArr = array('error' => $e->getMessage());
        echo json_encode($auxArr);
    }

}

function returnAllUsers($token){
    try {
        $newtoken = Authjwt::Check($token);
        $obj = new Users();
        $response = $obj->readAllUsers();
        echo json_encode(["newtoken"=>$newtoken, "response"=> $response]);
    }  catch (Exception $e) {
        $auxArr = array('error' => $e->getMessage());
        echo json_encode($auxArr);
    }
}

function returnUserById($id, $token){
    try {
        $newtoken = Authjwt::Check($token);
        $obj = new Users();
        $response = $obj->readUserById($id);
        echo json_encode(["newtoken"=>$newtoken, "response"=> $response]);
    }  catch (Exception $e) {
        $auxArr = array('error' => $e->getMessage());
        echo json_encode($auxArr);
    }
}

function changeUsername($id, $username, $token){

    try {
        $newtoken = Authjwt::Check($token);
        $data = Authjwt::GetData($token);
        if ($id != $data->id){
            throw new Exception('Not authorized.');
        }
        $obj = new Users();
        $response = $obj->updateUsername($id, $username);
        echo json_encode(["newtoken"=>$newtoken, "response"=> $response]);
    }  catch (Exception $e) {
        $auxArr = array('error' => $e->getMessage());
        echo json_encode($auxArr);
    }
}

function changeUserpass($id, $userpass, $token){
    try {
        $newtoken = Authjwt::Check($token);
        $data = Authjwt::GetData($token);
        if ($id != $data->id){
            throw new Exception('Not authorized.');
        }
        $obj = new Users();
        $response = $obj->updatePassword($id, $userpass);
        echo json_encode(["newtoken"=>$newtoken, "response"=> $response]);
    }  catch (Exception $e) {
        $auxArr = array('error' => $e->getMessage());
        echo json_encode($auxArr);
    }
}

?>