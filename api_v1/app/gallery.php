<?php
include $_SERVER['DOCUMENT_ROOT'].'/api_tros/api_v1/database.php';
include $_SERVER['DOCUMENT_ROOT'].'/api_tros/api_v1/controllers/galleryController.php';

$headers = getallheaders();
switch ($_SERVER['REQUEST_METHOD']) {
    case 'POST':
        if($headers['action'] === 'newAlbum'){
            newAlbum($_POST, $headers['token']);
        }elseif($headers['action']=== 'newPhotos'){

        }
        break;

    case 'GET':

    break;
};
?>