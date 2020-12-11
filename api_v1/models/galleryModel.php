<?php
include $_SERVER['DOCUMENT_ROOT'] . '/api_tros/api_v1/database.php';

class Gallery
{
    public static function createAlbum($data){
        if (isset($data['name']) && isset($data['description'])){
            $name = $data['name'];
            $description = $data['description'];
        }else{
            throw new Exception('Not data.');
        }
        global $conn;
        $stm = "INSERT INTO `album`(`name`, `description`) VALUES (?, ?)";
        $result = mysqli_prepare($conn, $stm);
        $validate = mysqli_stmt_bind_param($result, 'ss', $name, $description);
        $validate = mysqli_stmt_execute($result);
        if ($validate) {
            $path = $_SERVER['DOCUMENT_ROOT']."/api_tros/api_v1/images/".$name;
            if (!is_dir($path)) {
                mkdir($path, 0777, true);
            }
            return array("resp" => "created");
        } else {
            return array("resp" => "error", "error"=>mysqli_error($conn));
        }
    }

    public static function addImage($data, $album){
        $path = $_SERVER['DOCUMENT_ROOT']."/api_tros/api_v1/images/".$album;

    }

}

?>