<?php
include $_SERVER['DOCUMENT_ROOT']."/api_tros/models/applicantsModel.php";

function createNewApplicant($cv, $data){
    $obj = new Applicants();
    echo $obj->createApplicant($cv, $data);
}

function returnAllApplicant($token){
    try {
        $newtoken = Authjwt::Check($token);
        $obj = new Applicants();
        $response =  $obj->readAllApplications();
        echo json_encode(["newtoken"=>$newtoken, "response"=> $response]);
    }  catch (Exception $e) {
        $auxArr = array('error' => $e->getMessage());
        echo json_encode($auxArr);
    }
}

function returnOneApplication($id, $token){
    try {
        $newtoken = Authjwt::Check($token);
        $obj = new Applicants();
        $response = $obj->readOneApplications($id);
        echo json_encode(["newtoken"=>$newtoken, "response"=> $response]);
    }  catch (Exception $e) {
        $auxArr = array('error' => $e->getMessage());
        echo json_encode($auxArr);
    }
}

function actualizateApplication($id, $contacted, $comment, $token){
    try {
        $newtoken = Authjwt::Check($token);
        $obj = new Applicants();
        $response = $obj->updateApplication($id, $contacted, $comment);
        echo json_encode(["newtoken"=>$newtoken, "response"=> $response]);
    }  catch (Exception $e) {
        $auxArr = array('error' => $e->getMessage());
        echo json_encode($auxArr);
    }
}

function removeAplicantion($id, $token){
    try {
        $newtoken = Authjwt::Check($token);
        $obj = new Applicants();
        $response = $obj -> deleteAplicant($id);
        echo json_encode(["newtoken"=>$newtoken, "response"=> $response]);
    }  catch (Exception $e) {
        $auxArr = array('error' => $e->getMessage());
        echo json_encode($auxArr);
    }
}