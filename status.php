<?php
/* 
Simple PHP script to check the realm status of your server
Coded by: Syke
**************
Copy and paste this code into a document called 'status.php'

Place this line of code in your main page --> <?php include 'status.php'; ?>
This will display the server status where ever you place this line of code
Your web page must have the .php extension for this to work

NOTE: If the realm is down the page may take longer to load
I suggest using javascript and an iframe to display the realm
status after the page has been loaded.
*/
$host = "144.76.153.163";            //The IP of the machine your server is hosted on
$world_port = 8085;                // The port of your realm (default 8129 for ArcEmu)
$realm_name = "Your Realm Here";   //Pretty much explains itself

//Don't edit below unless you know what you are doing.
$world = @fsockopen($host, $world_port, $err, $errstr, 2);
if(!$world){
    echo "<img src='img/down.gif' /><font color='white'> " . $realm_name . "</font> is <font style='color: red; font-weight: bold;'>OFFLINE</font>";
}else{
    echo "<img src='img/up.gif' /><font color='white'> " . $realm_name . "</font> is <font style='color: green; font-weight: bold;'>ONLINE</font>";
    fclose($world);
}
?>
