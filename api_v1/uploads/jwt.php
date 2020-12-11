<?php
use Firebase\JWT\JWT;

include $_SERVER['DOCUMENT_ROOT'].'/api_tros/vendor/autoload.php';


/*
class Auth
{
    private static $secret_key = 'Sdw1s9x8@ewy';
    private static $encrypt = ['HS256'];
    private static $aud = null;

    public static function SignIn($data)
    {
        $time = time();

        $token = array(
            'exp' => $time + (20*60),
            'aud' => self::Aud(),
            'data' => $data
        );

        return JWT::encode($token, self::$secret_key);
    }

    public static function Check($token)
    {
        if(empty($token))
        {
            throw new Exception("Invalid token supplied.");
        }

        $decode = JWT::decode(
            $token,
            self::$secret_key,
            self::$encrypt
        );

        if($decode->aud !== self::Aud())
        {
            throw new Exception("Invalid user logged in.");
        }
    }

    public static function GetData($token)
    {
        return JWT::decode(
            $token,
            self::$secret_key,
            self::$encrypt
        )->data;
    }

    private static function Aud()
    {
        $aud = '';

        if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
            $aud = $_SERVER['HTTP_CLIENT_IP'];
        } elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
            $aud = $_SERVER['HTTP_X_FORWARDED_FOR'];
        } else {
            $aud = $_SERVER['REMOTE_ADDR'];
        }

        $aud .= @$_SERVER['HTTP_USER_AGENT'];
        $aud .= gethostname();

        return sha1($aud);
    }
}
*/
$time = time();
$key = 'allalakey';
$encrypt = ['HS256'];
$token = array(
    'iat' => $time,
    'exp' => $time + (15*60),
    'data' => [
        'id' => 1, 
        'name'=> 'elbato', 
        'otradata' => 'nosequemas..f'
    ]
    );
try {
    
    $jwt = JWT::encode($token, $key);
    echo $jwt."  fin";
    $decode = JWT::decode($jwt,$key, $encrypt);
    $jsonaux = json_encode($decode);
    
    $arraux = (array) json_decode($jsonaux);
    echo "<br>id: ". $decode->data->id."<br>";
    echo $jsonaux;
} catch (Exception $e) {
    echo "<br><br><br>".$e->getMessage();
}
?>