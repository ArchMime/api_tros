<?php
include $_SERVER['DOCUMENT_ROOT'] . '/api_tros/database.php';
include $_SERVER['DOCUMENT_ROOT'] . '/api_tros/controllers/applicantsController.php';

$headers = getallheaders();
switch ($_SERVER['REQUEST_METHOD']) {
    case 'POST':
        /**
         * POST create new application
         * request body/data
         * request body/file
         */
        $cv = $_FILES['cv'];
        $data = $_POST;
        createNewApplicant($cv, $data);
        break;
    case 'GET':
        /**
         * GET list applications 
         * one request id-application
         * all request none
         */
        if (isset($headers['id-application'])) {
            returnOneApplication($headers['id-application']);
        } else {
            returnAllApplicant();
        }
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
        actualizateApplication($id_app, $contacted, $coment);
        break;
    case 'DELETE':
        /**
         * DELETE remove aplicant
         * request id_remove
         * pendient remove cv file
         */
        $id = $headers['id_remove'];
        removeAplicantion($id);
        break;
};
?>
