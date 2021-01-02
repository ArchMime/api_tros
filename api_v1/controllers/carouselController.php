<?php
include $_SERVER['DOCUMENT_ROOT'] . '/api_tros/api_v1/models/carouselModel.php';
include $_SERVER['DOCUMENT_ROOT'] . '/api_tros/api_v1/models/authjwtModel.php';

function getSelectedCarouselImg(){
    try {
        $response = Carusel::getSelectedImages();
        echo json_encode($response);
    }  catch (Exception $e) {
        $auxArr = array('error' => $e->getMessage());
        echo json_encode($auxArr);
    }
}

?>