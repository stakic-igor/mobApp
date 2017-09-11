<?php
//send_email.php
$email_from = "no-reply@fensterplatz.ch";   //Absender falls keiner angegeben wurde
$sendermail_antwort = true;      //E-Mail Adresse des Besuchers als Absender. false= Nein ; true = Ja
$name_von_emailfeld = "Email";   //Feld in der die Absenderadresse steht
 
$empfaenger = "infos@fensterplatz.ch; //Empfänger-Adresse
$mail_cc = ""; //CC-Adresse, diese E-Mail-Adresse bekommt einer weitere Kopie
$betreff = "Neue Kontaktanfrage"; //Betreff der Email
 
$url_ok = "http://fensterplatz.ch/"; //Zielseite, wenn E-Mail erfolgreich versendet wurde
$url_fehler = "http://fensterplatz.ch/"; //Zielseite, wenn E-Mail nicht gesendet werden konnte
 
 
//Diese Felder werden nicht in der Mail stehen
$ignore_fields = array('submit');
 
 
 
 
//Datum, wann die Mail erstellt wurde
$name_tag = array();
$name_tag[0] = "Sonntag";
$name_tag[1] = "Montag";
$name_tag[2] = "Dienstag";
$name_tag[3] = "Mittwoch";
$name_tag[4] = "Donnerstag";
$name_tag[5] = "Freitag";
$name_tag[6] = "Samstag";
$num_tag = date("w");
$tag = $name_tag[$num_tag];
$jahr = date("Y");
$n = date("d");
$monat = date("m");
$time = date("H:i");
 
//Erste Zeile unserer Email
$msg = ":: Gesendet am $tag, den $n.$monat.$jahr - $time Uhr ::\n\n";
 
//Hier werden alle Eingabefelder abgefragt
while (list($name,$value) = each($_POST)) {
   if (in_array($name, $ignore_fields)) {
        continue; //Ignore Felder wird nicht in die Mail eingefügt
   }
   $msg .= "::: $name :::\n$value\n\n";
}
 
 
 
//E-Mail Adresse des Besuchers als Absender
if ($sendermail_antwort and isset($_POST[$name_von_emailfeld]) and filter_var($_POST[$name_von_emailfeld], FILTER_VALIDATE_EMAIL)) {
   $email_from = $_POST[$name_von_emailfeld];
}
 
$header="From: $email_from";
 
if (!empty($mail_cc)) {
   $header .= "\n";
   $header .= "Cc: $mail_cc";
}
 
 if(($_POST['code']) == $_SESSION['code']) { 
  $code = $_POST['code'];
  } else { 
  $error .= "Captcha wurde falsch eingegeben.";    
}

$mail_senden = mail($empfaenger,$betreff,$msg,$header);
 
 
//Weiterleitung, hier konnte jetzt per echo auch Ausgaben stehen
if($mail_senden){
  header("Location: ".$url_ok); //Mail wurde gesendet
  exit();
} else{
  header("Location: ".$url_fehler); //Fehler beim Senden
  exit();
}