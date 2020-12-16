<?php
include $_SERVER['DOCUMENT_ROOT'] . '/api_tros/api_v1/models/servicesModel.php';
include $_SERVER['DOCUMENT_ROOT'].'/api_tros/api_v1/models/authjwtModel.php';

function getAllServices(){
    try {
        $response = Services::GetServices();
        echo json_encode($response);
    }  catch (Exception $e) {
        $auxArr = array('error' => $e->getMessage());
        echo json_encode($auxArr);
    }
}

?>