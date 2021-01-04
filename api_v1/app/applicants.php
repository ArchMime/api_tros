<?php
include $_SERVER['DOCUMENT_ROOT'] . '/api_tros/api_v1/database.php';
include $_SERVER['DOCUMENT_ROOT'] . '/api_tros/api_v1/controllers/applicantsController.php';
include $_SERVER['DOCUMENT_ROOT'] . '/api_tros/api_v1/header.php';


$headers = getallheaders();
switch ($_SERVER['REQUEST_METHOD']) {
    case 'POST':
        /**
         * POST create new application
         * request body/data
         * request body/file
         */
        if(isset($headers['action']) and $headers['action'] == 'update'){

            actualizateApplication($_POST['id'], $_POST['contacted'], $_POST['comment'], $headers['token']);

        }else{

            if(isset($_FILES['cv'])){
                $cv = $_FILES['cv'];
            } else {
                $cv = '';
            }
            
            $data = $_POST;
            createNewApplicant($cv, $data);
        }
        break;
    case 'GET':
        /**
         * GET list applications 
         * one request id-application
         * all request none
         */
        if (isset($headers['id-application'])) {
            returnOneApplication($headers['id-application'], $headers['token']);
        } else {
            returnAllApplicant($headers['token']);
        }
        break;
    case 'PUT':
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
