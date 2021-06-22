<?php

$myfile = fopen("pixel/pixel.txt", "r");

if($myfile) {

  $pixel = fread($myfile,filesize("pixel/pixel.txt"));
  fclose($myfile);
} else {

  $pixel = '';
}

?>
