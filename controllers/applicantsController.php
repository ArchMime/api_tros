<?php
include $_SERVER['DOCUMENT_ROOT']."/api_tros/models/applicantsModel.php";

function createNewApplicant($cv, $data){
    $obj = new Applicants();
    echo $obj->createApplicant($cv, $data);
}

function returnAllApplicant(){
    $obj = new Applicants();
    echo $obj->readAllApplications();
}
function returnOneApplication($id){
    $obj = new Applicants();
    echo $obj->readOneApplications($id);
}

function actualizateApplication($id, $contacted, $comment){
    $obj =new Applicants();
    echo $obj->updateApplication($id, $contacted, $comment);
}

function removeAplicantion($id){
    $obj = new Applicants();
    echo $obj -> deleteAplicant($id);
}