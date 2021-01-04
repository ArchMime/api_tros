<?php
include $_SERVER['DOCUMENT_ROOT'] . '/api_tros/api_v1/database.php';
include $_SERVER['DOCUMENT_ROOT'] . '/api_tros/api_v1/controllers/contactedController.php';
include $_SERVER['DOCUMENT_ROOT'] . '/api_tros/api_v1/header.php';


$headers = getallheaders();
switch ($_SERVER['REQUEST_METHOD']) {
    case 'POST':
        if(isset($headers['action']) and $headers['action'] == 'update'){
            checkMessage($_POST['id'], $headers['token']);
        } else {
            if(isset($_FILES['archive'])){
                $archive = $_FILES['archive'];
            } else {
                $archive = '';
            }
            echo($_POST['name']);
            $data = $_POST;
            createNewMessage($archive, $data);
        }
        break;
    case 'GET':
        readMessages($headers['token']);
        break;
    case 'PUT':
        /**
         * PUT actualizate applicants
         * request id_app - contacted (true or false) - coment
         *
         */
        $id_app = $headers['id_app'];
        $contacted = $headers['contacted'];
        $coment = $headers['coment'];
        actualizateApplication($id_app, $contacted, $coment, $headers['token']);
        break;
    case 'DELETE':
        /**
         * DELETE remove aplicant
         * request id_remove
         * pendient remove cv file
         */
        $id = $headers['id_remove'];
        removeAplicantion($id, $headers['token']);
        break;
};
?>
