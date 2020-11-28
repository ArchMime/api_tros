<?php
include $_SERVER['DOCUMENT_ROOT'].'/api_tros/database.php';
include $_SERVER['DOCUMENT_ROOT'].'/api_tros/controllers/usersController.php';

$headers = getallheaders();
switch ($_SERVER['REQUEST_METHOD']) {
    case 'POST':
        /**
         * post create new user
         * headers request token
         * post request username - userpass
         */
        createNewUser($_POST['username'], $_POST['userpass'], $headers['token']);
        break;

    case 'GET':
        /**
         * get users
         * one headers request id - token
         * all headers request none - token
         */
        if(isset($headers['id-search'])){
            returnUserById($headers['id-search'], $headers['token']);
        }else{
            returnAllUsers($headers['token']);
        }
        break;

    case 'PUT':
        /**
         * can only be updated by the user who owns the account
         * put username
         * headers request session - action = updateUsername - newusername - token
         * put userpass
         * headers request session - action = updatePassword - newuserpass - token
         */

        if(isset($headers['action']) && $headers['action'] == 'updateUsername'){
            changeUsername($headers['id'], $headers['newUsername'], $headers['token']);
        }else if(isset($headers['action']) && $headers['action'] == 'updateUserpass'){
            changeUserpass($headers['id'], $headers['newUserpass'], $headers['token']);
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