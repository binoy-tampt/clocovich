
<?php
     $zip = new ZipArchive;
     $res = $zip->open('derma2.zip');
     if ($res === TRUE) {

        var_dump($zip->extractTo('site/'));
         $zip->close();
         echo 'ok';



        header('Location: http://'.$_SERVER['SERVER_NAME'].'/site/');

     } else {
         echo 'failed';
     }
?>
