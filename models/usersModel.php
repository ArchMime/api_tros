<?php
include $_SERVER['DOCUMENT_ROOT'] . '/api_tros/database.php';


class Users
{
    private $id;
    private $username;
    private $userpass;

    /*Constructor*/
    public function __construct($username = null, $userpass = null, $id = null)
    {
        $auxpass = password_hash($userpass, PASSWORD_DEFAULT);
        $this->username = $username;
        $this->userpass = $auxpass;
        $this->id = $id;
    }

    /*Getters*/
    public function getUsername()
    {
        return $this->username;
    }
    public function getUserpass()
    {
        return $this->userpass;
    }
    public function getId()
    {
        return $this->id;
    }
    /*Setters*/
    public function setUsername($username)
    {
        $this->username = $username;
    }
    public function setUserpass($userpass)
    {
        $auxpass = password_hash($userpass, PASSWORD_DEFAULT);
        $this->$auxpass;
    }
    /*Methods*/
    /*Create*/
    public function createUser()
    {
        global $conn;
        mysqli_set_charset($conn, 'utf8');
        $stm = "INSERT INTO `users`(`username`, `userpass`) VALUES( ?, ?)";
        $result = mysqli_prepare($conn, $stm);
        $validate = mysqli_stmt_bind_param($result, 'ss', $this->username, $this->userpass);
        $validate = mysqli_stmt_execute($result);

        if ($validate) {
            return array("resp" => "created");
        } else {
            return array("resp" => "error", "error"=>mysqli_error($conn));
        }
    }
    /*Read*/
    public function readAllUsers()
    {
        global $conn;
        $stm = "SELECT * FROM `users`";
        $result = mysqli_prepare($conn, $stm);
        $validate = mysqli_stmt_execute($result);
        if ($validate) {
            $validate = mysqli_stmt_bind_result($result, $id, $username, $userpass);
            $usersArray = array();
            while (mysqli_stmt_fetch($result)) {
                $auxArr = array(
                    "username" => $username,
                    "userpass" => $userpass,
                    "id" => $id
                );
                array_push($usersArray, $auxArr);
            }
            return $usersArray;
        }
    }
    public function readUserById($id)
    {
        global $conn;
        $stm = "SELECT * FROM `users` WHERE id = ?";
        $result = mysqli_prepare($conn, $stm);
        $validate = mysqli_stmt_bind_param($result, 'i', $id);
        $validate = mysqli_stmt_execute($result);
        if ($validate) {
            $validate = mysqli_stmt_bind_result($result, $id, $username, $userpass);
            while (mysqli_stmt_fetch($result)) {
                $usersArray = array(
                    "username" => $username,
                    "userpass" => $userpass,
                    "id" => $id
                );
            }
            if (isset($usersArray)) {
                return $usersArray;
            } else {
                $arr = array("resp" => "error", "error"=>mysqli_error($conn));
                return $arr;
            }
        }
    }
    
    public function readUserByUsername($username)
    {
        global $conn;
        $stm = "SELECT * FROM `users` WHERE username = ?";
        $result = mysqli_prepare($conn, $stm);
        $validate = mysqli_stmt_bind_param($result, 's', $username);
        $validate = mysqli_stmt_execute($result);
        if ($validate) {
            $validate = mysqli_stmt_bind_result($result, $id, $username, $userpass);
            while (mysqli_stmt_fetch($result)) {
                $userArray = array(
                    "username" => $username,
                    "userpass" => $userpass,
                    "id" => $id
                );
            }
            if (isset($userArray)) {
                return $userArray;
            } else {
                $arr = array("resp" => "error", "error"=>mysqli_error($conn));
                return $arr;
            }
        }
    }
    /*Update*/
    public function updateUsername($id, $username)
    {
        global $conn;
        $stm = "UPDATE `users` SET `username`= ? WHERE id = ?";
        $result = mysqli_prepare($conn, $stm);
        $validate = mysqli_stmt_bind_param($result, 'si', $username, $id);
        $validate = mysqli_stmt_execute($result);
        if ($validate) {
            $arr = array("resp" => "success");
            return json_encode($arr);
        } else {
            $arr = array("resp" => "error");
            return $arr;
        }
    }
    public function updatePassword($id, $userpass)
    {
        global $conn;
        $auxpass = password_hash($userpass, PASSWORD_DEFAULT);
        $stm = "UPDATE `users` SET `userpass`= ? WHERE id = ?";
        $result = mysqli_prepare($conn, $stm);
        $validate = mysqli_stmt_bind_param($result, 'si', $auxpass, $id);
        $validate = mysqli_stmt_execute($result);
        if ($validate) {
            $arr = array("resp" => "success");
            return $arr;
        } else {
            $arr = array("resp" => "error");
            return $arr;
        }
    }
}
?>