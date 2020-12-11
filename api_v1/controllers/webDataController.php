<?php
include $_SERVER['DOCUMENT_ROOT']."/api_tros/api_v1/models/webDataModel.php";
include $_SERVER['DOCUMENT_ROOT']."/api_tros/api_v1/models/authjwtModel.php";


function updateData($data, $token){
    try {
        $newtoken = Authjwt::Check($token);
        $response = WebData::UpdateWebData($data);
        echo json_encode(["newtoken"=>$newtoken, "response"=> $response]);
    }  catch (Exception $e) {
        $auxArr = array('error' => $e->getMessage());
        echo json_encode($auxArr);
    }
}

function getData(){
    try {
        $response = WebData::GetWebData();
        echo json_encode(["response"=> $response]);
    }  catch (Exception $e) {
        $auxArr = array('error' => $e->getMessage());
        echo json_encode($auxArr);
    }
}