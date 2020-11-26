<?php
$conn = mysqli_connect(
    'localhost',
    'root',
    '',
    'api_tros'
);
if ( !$conn ) {
    die( 'connect error: '.mysqli_connect_error() );
  }
?>