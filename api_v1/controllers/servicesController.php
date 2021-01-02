<?php
include $_SERVER['DOCUMENT_ROOT'] . '/api_tros/api_v1/models/servicesModel.php';
include $_SERVER['DOCUMENT_ROOT'] . '/api_tros/api_v1/models/authjwtModel.php';

function getAllServices(){
    try {
        $response = Services::GetServices();
        echo json_encode($response);
    }  catch (Exception $e) {
        $auxArr = array('error' => $e->getMessage());
        echo json_encode($auxArr);
    }
}

function createNewService($data, $token){
    try {
        $newtoken = Authjwt::Check($token);
        $response = Services::newService($data);
        echo json_encode(["newtoken" => $newtoken, "response" => $response]);
    }  catch (Exception $e) {
        $auxArr = array('error' => $e->getMessage());
        echo json_encode($auxArr);
    }
}

function updateService($data, $token){
    try {
        $newtoken = Authjwt::Check($token);
        $response = Services::serviceUpdate($data);
        echo json_encode(["newtoken" => $newtoken, "response" => $response]);
    }  catch (Exception $e) {
        $auxArr = array('error' => $e->getMessage());
        echo json_encode($auxArr);
    }
}

function removeService($data, $token){
    try {
        $newtoken = Authjwt::Check($token);
        $response = Services::deleteService($data);
        echo json_encode(["newtoken" => $newtoken, "response" => $response]);
    }  catch (Exception $e) {
        $auxArr = array('error' => $e->getMessage());
        echo json_encode($auxArr);
    }
}
?>