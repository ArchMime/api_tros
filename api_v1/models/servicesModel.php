<?php
include $_SERVER['DOCUMENT_ROOT'] . '/api_tros/api_v1/database.php';

class Services
{
    /*
    public static function UpdateWebData($data)
    {
        global $conn;
        $id = 1;
        $stm = "UPDATE `webdata` SET `presentacion`=?,`footer_msj`=?,`tel_contact`=?,`mail_contact`=?,`afip_code`=?, `afip_link`=? WHERE id = ?";
        $result = mysqli_prepare($conn, $stm);
        $validate = mysqli_stmt_bind_param($result, 'ssssssi', $data['presentacion'],  $data['footer_msj'], $data['tel_contact'], $data['mail_contact'], $data['afip_code'], $data['afip_link'], $id);
        $validate = mysqli_stmt_execute($result);
        if ($validate) {
            $arr = array("resp" => "success");
            return $arr;
        } else {
            $arr = array("resp" => "error");
            return $arr;
        }
    }
    */

    public static function newService($data)
    {
        global $conn;
        $stm = "INSERT INTO `services`(`id`, `name`, `description`, `value`) VALUES (null, ?, ?,?)";
        $result = mysqli_prepare($conn, $stm);
        $validate = mysqli_stmt_bind_param($result, 'ssi', $data['name'],  $data['description'], $data['value']);
        $validate = mysqli_stmt_execute($result);
        if ($validate) {
            $arr = array("resp" => "success");
            return $arr;
        } else {
            $arr = array("resp" => "error", "error" => mysqli_error($conn));
            return $arr;
        }
    }

    public static function GetServices()
    {
        global $conn;
        $stm = "SELECT * FROM `services`";
        $result = mysqli_prepare($conn, $stm);
        $validate = mysqli_stmt_execute($result);
        if ($validate) {
            $validate = mysqli_stmt_bind_result($result, $id, $name, $description, $value);
            $servicesArray = array();
            while (mysqli_stmt_fetch($result)) {
                $auxArr = array(
                    "id" => $id,
                    "name" => $name,
                    "description" => $description,
                    "value" => $value
                );
                array_push($servicesArray, $auxArr);
            }
            return $servicesArray;
        }
    }
}
?>