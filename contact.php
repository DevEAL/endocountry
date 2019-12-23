<?php 
	$response = array();
	$name = (isset($_POST['name'])) ? filter_var($_POST['name'], FILTER_SANITIZE_STRING) : null ;
	$email = (isset($_POST['email'])) ? filter_var($_POST['email'], FILTER_SANITIZE_EMAIL) : null ;
    $asunto = (isset($_POST['asunto'])) ? filter_var($_POST['asunto'], FILTER_SANITIZE_STRING) : null ;
	$message = (isset($_POST['message'])) ? filter_var($_POST['message'], FILTER_SANITIZE_STRING) : null ;

if ($name!=null && $email!=null &&  $asunto!=null && $message!=null) {

	$msg = "<p><strong>Un nuevo mensaje ha sido enviado desde Endocountry:</strong></p>
	<p><strong>Nombre: </strong>".$name."</p>
	<p><strong>Asunto: </strong>".$asunto."</p>
	<p><strong>E-Mail: </strong>".$email."</p>
	<p><strong>Mensaje: </strong>".$message."</p>";
	$title = "Nuevo mensaje de contacto en Endocountry";
	//$to = 'ariasgonzalezcamilo@gmail.com';
	$to = 'contacto@endocountry.com';
	$headers  = 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
	$headers .= 'To: '.$to.'' . "\r\n";
	$headers .= 'From: Servicio Al Cliente <no-reply@endocountry.com>' . "\r\n";
	$headers .= 'Content-Type: text/html; charset=UTF-8';
	
	$subject = 'Un nuevo mensaje ha sido enviado desde Endocountry';	

	if(mail( $to, $subject, $msg, $headers ) ) {
		$response['success'] = true;
	}else{
		$response = "Error : Intente Nuevamente";
	}
}

echo json_encode($response);

?>