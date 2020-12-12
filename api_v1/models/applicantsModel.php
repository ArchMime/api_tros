<?php
include $_SERVER['DOCUMENT_ROOT'] . '/api_tros/api_v1/database.php';

class Applicants
{
    private $id;
    private $name;
    private $lastname;
    private $email;
    private $tel;
    private $secondTel;
    private $profession;
    private $trainings;
    private $monotax;
    private $cuit;
    private $message;
    private $cv_route;
    private $contacted;
    private $internal_comment;

    /*Constructor*/
    public function __construct($name = null, $lastname = null, $email = null, $tel = null, $secondTel = null, $profession = null, $trainings = null, $monotax = null, $cuit = null, $message = null, $cv_route = null)
    {
        $this->name = $name;
        $this->lastname = $lastname;
        $this->email = $email;
        $this->tel = $tel;
        $this->secondTel = $secondTel;
        $this->profession = $profession;
        $this->trainings = $trainings;
        $this->monotax = $monotax;
        $this->message = $message;
        $this->cv_route = $cv_route;
    }
    /*Getters*/
    /*Setters*/

    /*Methods*/
    /*Create*/
    public function createApplicant($cv,  $data){
        if (isset($cv['name'])) {
            $type = $cv['type'];
            $size = $cv['size'];
            $super_type = explode("/", $type);
        
            if($size <= 3000000 && $super_type[0] == 'text' || $super_type[0] == 'application' || $super_type[0] == 'image' ){
        
                $dest = $_SERVER['DOCUMENT_ROOT'] . '/api_tros/api_v1/uploads/';
                $relativeDest = './api_tros/api_v1/uploads/';
                move_uploaded_file($cv['tmp_name'], $dest . $cv['name']);
                $cv_route = $dest . $cv['name'];
                $ext = pathinfo($cv_route, PATHINFO_EXTENSION);
                $new_cv_route = $dest . 'cv-' . $data['name'] . '-' . $data['lastname'] . '-' . $data['cuit'] . '.' . $ext;
                rename($cv_route, $new_cv_route);
                //$new_cv_route = $relativeDest . 'cv-' . $data['name'] . '-' . $data['lastname'] . '-' . $data['cuit'] . '.' . $ext;
        
            }else{
                $new_cv_route= '';
            }
        }
        
        global $conn;
        $stm = "INSERT INTO `applicants`( `name`, `lastname`, `email`, `tel`, `secondTel`, `profession`, `training`, `monotax`, `cuit`, `message`, `cv_route`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        $result = mysqli_prepare($conn, $stm);
        $validate = mysqli_stmt_bind_param($result, 'sssssssisss', $data['name'], $data['lastname'],$data['email'], $data['tel'], $data['secondTel'], $data['profession'], $data['training'], $data['monotax'], $data['cuit'], $data['message'], $new_cv_route);
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
            $validate = mysqli_stmt_bind_result($result, $id, $name, $lastname, $email, $tel, $secondTel, $profession, $trainings, $monotax, $cuit, $message, $cv_route, $contacted, $internal_comment);
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
                    "cv" => $cv_route,
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
            $validate = mysqli_stmt_bind_result($result, $id, $name, $lastname, $email, $tel, $secondTel, $profession, $trainings, $monotax, $cuit, $message, $cv_route, $contacted, $internal_comment);
            while (mysqli_stmt_fetch($result)) {
                $applicationArr = array(
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
                    "cv" => $cv_route,
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