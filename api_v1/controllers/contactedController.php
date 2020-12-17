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
