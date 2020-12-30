<?php
include $_SERVER['DOCUMENT_ROOT'] . '/api_tros/api_v1/database.php';

class SubServices
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
    public static function GetSubServices()
    {
        global $conn;
        $stm = "SELECT * FROM `subservices`";
        $result = mysqli_prepare($conn, $stm);
        $validate = mysqli_stmt_execute($result);
        if ($validate) {
            $validate = mysqli_stmt_bind_result($result, $id,$service, $name, $description, $value);
            $subServicesArray = array();
            while (mysqli_stmt_fetch($result)) {
                $auxArr = array(
                    "id" => $id,
                    "service" => $service,
                    "name" => $name,
                    "description" => $description,
                    "value" => $value
                );
                array_push($subServicesArray, $auxArr);
            }
            return $subServicesArray;
        }
    }

    public static function GetSubServicesByServiceId($id)
    {
        global $conn;
        $stm = "SELECT * FROM `subservices` WHERE `service` = ?";
        $result = mysqli_prepare($conn, $stm);
        $validate = mysqli_stmt_bind_param($result, 'i', $id);
        $validate = mysqli_stmt_execute($result);
        if ($validate) {
            $validate = mysqli_stmt_bind_result($result, $id,$service, $name, $description, $value);
            $subServicesArray = array();
            while (mysqli_stmt_fetch($result)) {
                $auxArr = array(
                    "id" => $id,
                    "service" => $service,
                    "name" => $name,
                    "description" => $description,
                    "value" => $value
                );
                array_push($subServicesArray, $auxArr);
            }
            return $subServicesArray;
        }
    }
}
?>