<?php
include $_SERVER['DOCUMENT_ROOT'] . '/api_tros/api_v1/models/galleryModel.php';
include $_SERVER['DOCUMENT_ROOT'].'/api_tros/api_v1/models/authjwtModel.php';

function newAlbum($data, $token = null){
    try {
        //$newtoken = Authjwt::Check($token);
        $response = Gallery::createAlbum($data);
        echo json_encode([/*"newtoken"=>$newtoken, */"response"=> $response]);
    }  catch (Exception $e) {
        $auxArr = array('error' => $e->getMessage());
        echo json_encode($auxArr);
    }
}

function addImages($uploadFiles, $data){
    $response = Gallery::addImage($uploadFiles, $data);
    echo "dff";
}

?>