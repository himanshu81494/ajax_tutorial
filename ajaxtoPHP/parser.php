<?php
header('Access-Control-Allow-Origin: *');
echo 'Thank you <strong>'
.$_POST['firstname'].' '
.$_POST['lastname'].' '
.'</strong>, says the PHP file';
?>