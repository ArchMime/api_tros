<?php
include $_SERVER['DOCUMENT_ROOT'] . '/api_tros/api_v1/database.php';

class WebData
{
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
    public static function GetWebData()
    {
        global $conn;
        $id = 1;
        $stm = "SELECT * FROM `webdata` WHERE id = ?";
        $result = mysqli_prepare($conn, $stm);
        $validate = mysqli_stmt_bind_param($result, 'i', $id);
        $validate = mysqli_stmt_execute($result);
        if ($validate) {
            $validate = mysqli_stmt_bind_result($result, $id, $presentacion, $footer_msj, $tel_contact, $mail_contact, $afip_code, $afip_link);
            while (mysqli_stmt_fetch($result)) {
                $usersArray = array(
                    "id" => $id,
                    "presentacion" => $presentacion,
                    "footer_msj" => $footer_msj,
                    "tel_contact" => $tel_contact,
                    "mail_contact" => $mail_contact,
                    "afip_code" => $afip_code,
                    "afip_link" => $afip_link
                );
            }
            if (isset($usersArray)) {
                return $usersArray;
            }
            $arr = array("resp" => "error", "error" => mysqli_error($conn));
            return $arr;
        }
    }
}
?>