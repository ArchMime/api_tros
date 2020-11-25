<?php
include '../database.php';

$new_conecction = $conn;

class Users
{
    private $id;
    private $username;
    private $userpass;
    
    /*Constructor*/
    public function __construct($username, $userpass, $id = null)
    {
        $auxpass = password_hash($userpass, PASSWORD_DEFAULT);
        $this->username = $username;
        $this->userpass = $auxpass;
        $this->id = $id;
    }
    
    /*Getters*/
    public function getUsername(){
        return $this->username;
    }
    public function getUserpass(){
        return $this->userpass;
    }
    public function getId(){
        return $this->id;
    }
    /*Setters*/
    public function setUsername($username){
        $this->username = $username;
    }
    public function setUserpass($userpass){
        $auxpass = password_hash($userpass, PASSWORD_DEFAULT);
        $this->$auxpass;
    }
    /*Methods*/
    /*Create*/
    public function createUser(){
        global $new_conecction;
        $stm = "INSERT INTO users('id', 'username', 'userpass') VALUES(NULL, ?, ?)";
        $result = mysqli_prepare($new_conecction, $stm);
        $validate = mysqli_stmt_bind_param($result, 'ss', $this->username, $this->userpass);
        $validate = mysqli_stmt_execute($result);
        if($validate){
            $arr = array( "resp"=>"created");
            return json_encode($arr);
        }else{
            $arr = array("resp"=>"error");
            return json_encode($arr);
        }
    }
    /*Read*/
    /*all*/
    public function readAllUsers(){
        global $new_conecction;
        $stm = "SELECT 'id', 'username', 'userpass' FROM users";
        $result = mysqli_prepare($new_conecction, $stm);
        $validate = mysqli_stmt_execute($result);
        if($validate){
            $validate = mysqli_stmt_bind_result($result, $id, $username, $userpass);
            $usersArray = array();
            while (mysqli_stmt_fetch($result)) {
                $obj = new Users($username, $userpass, $id);
                $usersArray[$id] = $obj;
            }
            return json_encode($usersArray);
        }
    }
}

?>