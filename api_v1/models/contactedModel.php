<?php
include $_SERVER['DOCUMENT_ROOT'] . '/api_tros/api_v1/database.php';

class Contacted
{

    /*Methods*/
    /*Create*/
    public static function createMessage($archive,  $data){
        if (isset($archive['name'])) {
            $type = $archive['type'];
            $size = $archive['size'];
            $super_type = explode("/", $type);
        
            if($size <= (3 * 1024 * 1024) && $super_type[0] == 'text' || $super_type[0] == 'application' || $super_type[0] == 'image' ){
        
                $dest = $_SERVER['DOCUMENT_ROOT'] . '/api_tros/api_v1/uploads/';
                $relativeDest = './api_tros/api_v1/uploads/';
                move_uploaded_file($archive['tmp_name'], $dest . $archive['name']);
                $archive_route = $dest . $archive['name'];
                $ext = pathinfo($archive_route, PATHINFO_EXTENSION);
                $new_archive_route = $dest . 'archive-' . $data['name'] . '-' . $data['lastname'] . '.' . $ext;
                rename($archive_route, $new_archive_route);
                $new_archive_route = $relativeDest . 'archive-' . $data['name'] . '-' . $data['lastname'] . '.' . $ext;
        
            }else{
                $new_archive_route= '';
            }
        }
        
        global $conn;
        $stm = "INSERT INTO `contacted`( `name`, `lastname`, `email`, `tel`, `message`, `archive`) VALUES (?, ?, ?, ?, ?, ?)";
        $result = mysqli_prepare($conn, $stm);
        $validate = mysqli_stmt_bind_param($result, 'ssssss', $data['name'], $data['lastname'],$data['email'], $data['tel'], $data['message'], $new_archive_route);
        $validate = mysqli_stmt_execute($result);

        if ($validate) {
            $arr = array("resp" => "created");
            return $arr;
        } else {

            $arr = array("resp" => "error", "error"=>mysqli_error($conn));
            return $arr;
        }
    }
    /*Read*/
    public function readAllApplications(){
        global $conn;
        mysqli_set_charset($conn, 'utf8');
        $stm = "SELECT * FROM `applicants`";
        $result = mysqli_prepare($conn, $stm);
        $validate = mysqli_stmt_execute($result);
        if ($validate) {
            $validate = mysqli_stmt_bind_result($result, $id, $name, $lastname, $email, $tel, $secondTel, $profession, $trainings, $monotax, $cuit, $message, $archive_route, $contacted, $internal_comment);
            $applicationsArray = array();
            while (mysqli_stmt_fetch($result)) {
                $auxArr = array(
                    "id" => $id,
                    "name" => $name,
                    "lastname" => $lastname,
                    "tel" => $tel,
                    "secondTel" => $secondTel,
                    "profession" => $profession,
                    "trainings" => $trainings,
                    "monotax" => $monotax,
                    "cuit" => $cuit,
                    "message" => $message,
                    "archive" => $archive_route,
                    "contacted" => $contacted,
                    "internal_comment" => $internal_comment
                );
                array_push($applicationsArray, $auxArr);
            }
            return $applicationsArray;
        }
    }

    public function readOneApplications($id){
        global $conn;
        mysqli_set_charset($conn, 'utf8');
        $stm = "SELECT * FROM `applicants` WHERE id = ?";
        $result = mysqli_prepare($conn, $stm);
        $validate = mysqli_stmt_bind_param($result, 'i', $id);
        $validate = mysqli_stmt_execute($result);
        if ($validate) {
            $validate = mysqli_stmt_bind_result($result, $id, $name, $lastname, $email, $tel, $secondTel, $profession, $trainings, $monotax, $cuit, $message, $archive_route, $contacted, $internal_comment);
            while (mysqli_stmt_fetch($result)) {
                $applicationArr = array(
                    "id" => $id,
                    "name" => $name,
                    "lastname" => $lastname,
                    "tel" => $tel,
                    "message" => $message,
                    "archive" => $archive_route,
                    "contacted" => $contacted,
                    "internal_comment" => $internal_comment
                );
            }
            if (isset($applicationArr)) {
                return $applicationArr;
            } else {
                $arr = array("resp" => "error", "error"=>mysqli_error($conn));
                return $arr;
            }        }
    }
    /*Update*/
    function updateApplication($id, $contacted, $internal_comment){
        global $conn;
        $stm = "UPDATE `applicants` SET `contacted`= ?, `internal_comment` = ?  WHERE id = ?";
        $result = mysqli_prepare($conn, $stm);
        $validate = mysqli_stmt_bind_param($result, 'isi', $contacted, $internal_comment, $id);
        $validate = mysqli_stmt_execute($result);
        if ($validate) {
            $arr = array("resp" => "success");
            return $arr;
        } else {
            $arr = array("resp" => "error");
            return $arr;
        }
    }
    /*Delete*/
    function deleteAplicant($id){
        global $conn;
        $stm = "DELETE FROM `applicants` WHERE id = ?";
        $result = mysqli_prepare($conn, $stm);
        $validate = mysqli_stmt_bind_param($result, 'i', $id);
        $validate = mysqli_stmt_execute($result);
        if ($validate) {
            $arr = array("resp" => "success");
            return $arr;
        } else {
            $arr = array("resp" => "error");
            return $arr;
        }
    }
};
?>