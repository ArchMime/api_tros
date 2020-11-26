<?php

use Firebase\JWT\JWT;

class Authjwt
{
    private static $secret_key = 'TroskeyPrivate@';
    private static $encrypt = ['HS256'];

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

    public static function createToken($username, $id)
    {
        $time = time();

        $token = array(
            'iat' => $time,
            'exp' => $time + (15 * 60),
            'aud' => self::Aud(),
            'data' => [
                'username' => $username,
                'id' => $id
            ]
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

        return self::createToken($decode->data->username, $decode->data->id);

    }
}
