<?php
include $_SERVER['DOCUMENT_ROOT'] . "/api_tros/api_v1/models/applicantsModel.php";
include $_SERVER['DOCUMENT_ROOT'] . "/api_tros/api_v1/models/authjwtModel.php";


function createNewApplicant($cv, $data)
{
    try {
        $obj = new Applicants();
        $auxArr = $obj->createApplicant($cv, $data);
        echo json_encode($auxArr);
    } catch (Exception $e) {
        $auxArr = array('error' => $e->getMessage());
        echo json_encode($auxArr);
    }
}

function returnAllApplicant($token)
{
    try {
        $newtoken = Authjwt::Check($token);
        $obj = new Applicants();
        $response =  $obj->readAllApplications();
        echo json_encode(["newtoken" => $newtoken, "response" => $response]);
    } catch (Exception $e) {
        $auxArr = array('error' => $e->getMessage());
        echo json_encode($auxArr);
    }
}

function returnOneApplication($id, $token)
{
    try {
        $newtoken = Authjwt::Check($token);
        $obj = new Applicants();
        $response = $obj->readOneApplications($id);
        echo json_encode(["newtoken" => $newtoken, "response" => $response]);
    } catch (Exception $e) {
        $auxArr = array('error' => $e->getMessage());
        echo json_encode($auxArr);
    }
}

function actualizateApplication($id, $contacted, $comment, $token)
{
    try {
        $newtoken = Authjwt::Check($token);
        $obj = new Applicants();
        $response = $obj->updateApplication($id, $contacted, $comment);
        echo json_encode(["newtoken" => $newtoken, "response" => $response]);
    } catch (Exception $e) {
        $auxArr = array('error' => $e->getMessage());
        echo json_encode($auxArr);
    }
}

function removeAplicantion($id, $token)
{
    try {
        $newtoken = Authjwt::Check($token);
        $obj = new Applicants();
        $response = $obj->deleteAplicant($id);
        echo json_encode(["newtoken" => $newtoken, "response" => $response]);
    } catch (Exception $e) {
        $auxArr = array('error' => $e->getMessage());
        echo json_encode($auxArr);
    }
}
?>