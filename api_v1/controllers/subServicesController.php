<?php
include $_SERVER['DOCUMENT_ROOT'] . '/api_tros/api_v1/models/subServicesModel.php';
include $_SERVER['DOCUMENT_ROOT'].'/api_tros/api_v1/models/authjwtModel.php';

function getAllSubServices(){
    try {
        $response = SubServices::GetSubServices();
        echo json_encode($response);
    }  catch (Exception $e) {
        $auxArr = array('error' => $e->getMessage());
        echo json_encode($auxArr);
    }
}

function getSubServicesByServices($serviceId){
    try {
        $response = SubServices::GetSubServicesByServiceId($serviceId);
        echo json_encode($response);
    }  catch (Exception $e) {
        $auxArr = array('error' => $e->getMessage());
        echo json_encode($auxArr);
    }
}

?>