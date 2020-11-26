<?php
include $_SERVER['DOCUMENT_ROOT'].'/api_tros/database.php';
include $_SERVER['DOCUMENT_ROOT'].'/api_tros/controllers/usersController.php';

$headers = getallheaders();
switch ($_SERVER['REQUEST_METHOD']) {
    case 'POST':
        /**
         * post create new user
         * headers request username - userpass
         */
        createNewUser($headers['username'], $headers['userpass']);
        break;

    case 'GET':
        /**
         * get users
         * one headers request id
         * all headers request none
         */
        if(isset($headers['id-search'])){
            returnOneUser($headers['id-search']);
        }else{
            returnAllUsers();
        }
        break;

    case 'PUT':
        /**
         * can only be updated by the user who owns the account
         * put username
         * headers request session - action = updateUsername - newusername
         * put userpass
         * headers request session - action = updatePassword - newuserpass
         */

        if(isset($headers['action']) && $headers['action'] == 'updateUsername'){
            changeUsername($headers['id'], $headers['newUsername']);
        }else if(isset($headers['action']) && $headers['action'] == 'updateUserpass'){
            changeUserpass($headers['id'], $headers['newUserpass']);
        }else{
            $arr = array("resp" => "error");
            return json_encode($arr);
        }
        break;

    case 'DELETE':
        echo "eliminar... no estoy seguro si agregarlo deberia agregar permisos...";
        break;
};

?>