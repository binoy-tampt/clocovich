<?php

$txt = '';
$dn = false;

if(isset($_POST['px']) && $_POST['px']) {

  $myfile = fopen("pixel.txt", "w") or die("Unable to open file!");

  $txt = $_POST['px'];

  if( fwrite($myfile, $txt) ) {

    $dn = true;

  }
  fclose($myfile);
} else {

  $myfile = fopen("pixel.txt", "r");

  if($myfile) {

    $txt = fread($myfile,filesize("pixel.txt"));
  }
}

?>

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Пиксель</title>
  </head>
  <body>

    <div class="" style="margin:50px 50px">

    </div>

      <form class="" action="" method="post">

        <label <?= ($dn ? 'style="color:green"' : '') ?> for="">Pixel:<input type="text" name="px" value="<?= $txt ?>"></label>
        <input type="submit" name="ok" value="OK">
      </form>
  </body>
</html>
