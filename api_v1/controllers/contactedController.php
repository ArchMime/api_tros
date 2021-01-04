<?php
include $_SERVER['DOCUMENT_ROOT']."/api_tros/api_v1/models/contactedModel.php";
include $_SERVER['DOCUMENT_ROOT']."/api_tros/api_v1/models/authjwtModel.php";


function createNewMessage($archive, $data){
    $obj = new Contacted();
    try {
        $auxArr = $obj->createMessage($archive, $data);
        echo json_encode($auxArr);
        
    } catch (Exception $e) {
        $auxArr = array('error' => $e->getMessage());
        echo json_encode($auxArr);
    }
}

function readMessages($token){
    try {
        $newtoken = Authjwt::Check($token);
        $response = Contacted::readAllMessage();
        echo json_encode(["newtoken" => $newtoken, "response" => $response]);
    }  catch (Exception $e) {
        $auxArr = array('error' => $e->getMessage());
        echo json_encode($auxArr);
    }
}

function checkMessage($id, $token){
    try {
        $newtoken = Authjwt::Check($token);
        $response = Contacted::updateMessage($id);
        echo json_encode(["newtoken" => $newtoken, "response" => $response]);
    }  catch (Exception $e) {
        $auxArr = array('error' => $e->getMessage());
        echo json_encode($auxArr);
    }
}