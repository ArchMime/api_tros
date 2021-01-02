<?php
include $_SERVER['DOCUMENT_ROOT'] . '/api_tros/api_v1/database.php';
include $_SERVER['DOCUMENT_ROOT'] . '/api_tros/api_v1/controllers/webDataController.php';
include $_SERVER['DOCUMENT_ROOT'] . '/api_tros/api_v1/header.php';


$headers = getallheaders();
switch ($_SERVER['REQUEST_METHOD']) {
    case 'POST':
        /**
         * post update webdata
         * headers request token
         * post request new data
         */
        updateData($_POST, $headers['token']);
        break;
    case 'GET':
        getData();
        break;
}
