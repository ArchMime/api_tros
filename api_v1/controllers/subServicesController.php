<?php
include $_SERVER['DOCUMENT_ROOT'] . '/api_tros/api_v1/models/subServicesModel.php';
include $_SERVER['DOCUMENT_ROOT'] . '/api_tros/api_v1/models/authjwtModel.php';

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

function createNewSubService($data, $token){
    try {
        $newtoken = Authjwt::Check($token);
        $response = SubServices::newSubService($data);
        echo json_encode(["newtoken" => $newtoken, "response" => $response]);
    }  catch (Exception $e) {
        $auxArr = array('error' => $e->getMessage());
        echo json_encode($auxArr);
    }
}

function removeSubService($data, $token){
    try {
        $newtoken = Authjwt::Check($token);
        $response = SubServices::deleteSubService($data);
        echo json_encode(["newtoken" => $newtoken, "response" => $response]);
    }  catch (Exception $e) {
        $auxArr = array('error' => $e->getMessage());
        echo json_encode($auxArr);
    }
}

function updateSubService($data, $token){
    try {
        $newtoken = Authjwt::Check($token);
        $response = SubServices::subServiceUpdate($data);
        echo json_encode(["newtoken" => $newtoken, "response" => $response]);
    }  catch (Exception $e) {
        $auxArr = array('error' => $e->getMessage());
        echo json_encode($auxArr);
    }
}

?>