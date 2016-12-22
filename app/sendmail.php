<?
if($_SERVER["REQUEST_METHOD"] == "POST")
{
 // Функция отправки email
	function send_mail($to, $subject, $message, $headers)
	{



	// $popup = $_POST["popup"];

		$phone = $_POST["phone"];
		$email = $_POST["email"];
		$formname = $_POST["formname"];
		$time = $_POST["time"];


		$radius1 = $_POST["radius1"];
		$radius2 = $_POST["radius2"];
		$radius3 = $_POST["radius3"];
		$radius4 = $_POST["radius4"];
		$radius5 = $_POST["radius5"];
		$radius6 = $_POST["radius6"];
		$radius7 = $_POST["radius7"];
		$radius8 = $_POST["radius8"];

	$height1_1 = $_POST["height1_1"]; // прямая высота 1
	$width1_1 = $_POST["width1_1"];   // прямая ширина 1

	$widthadd1_1 = $_POST["widthadd1_1"]; //прямая ширина остров
	$heightadd1_1 = $_POST["heightadd1_1"]; // прямая высота остров
	$widthadd1_2 = $_POST["widthadd1_2"]; // прямая ширина барная стойка
	$heightadd1_2 = $_POST["heightadd1_2"]; // прямая высотра барная стойка

	$height2_1 = $_POST["height2_1"]; // Г-ОБРАЗНАЯ / ЛЕВАЯ выс. л
	$height2_2 = $_POST["height2_2"]; // Г-ОБРАЗНАЯ / ЛЕВАЯ выс. пр.
	$width2_1 = $_POST["width2_1"]; // Г-ОБРАЗНАЯ / ЛЕВАЯ ширина верх.
	$width2_2 = $_POST["width2_2"]; // Г-ОБРАЗНАЯ / ЛЕВАЯ ширина ниж.

	$widthadd2_1 = $_POST["widthadd2_1"]; //Г-ОБРАЗНАЯ / ЛЕВАЯ  ширина остров
	$heightadd2_1 = $_POST["heightadd2_1"]; // Г-ОБРАЗНАЯ / ЛЕВАЯ  высота остров
	$widthadd2_2 = $_POST["widthadd2_2"]; // Г-ОБРАЗНАЯ / ЛЕВАЯ  ширина барная стойка
	$heightadd2_2 = $_POST["heightadd2_2"]; // Г-ОБРАЗНАЯ / ЛЕВАЯ  высотра барная стойка


	$height3_1 = $_POST["height3_1"]; // Г-ОБРАЗНАЯ / ПРАВАЯ выс. л
	$height3_2 = $_POST["height3_2"]; // Г-ОБРАЗНАЯ / ПРАВАЯ выс. пр.
	$width3_1 = $_POST["width3_1"]; // Г-ОБРАЗНАЯ / ПРАВАЯ ширина верх.
	$width3_2 = $_POST["width3_2"]; // Г-ОБРАЗНАЯ / ПРАВАЯ ширина ниж.

	$widthadd3_1 = $_POST["widthadd3_1"]; //Г-ОБРАЗНАЯ / ПРАВАЯ  ширина остров
	$heightadd3_1 = $_POST["heightadd3_1"]; // Г-ОБРАЗНАЯ / ПРАВАЯ  высота остров
	$widthadd3_2 = $_POST["widthadd3_2"]; // Г-ОБРАЗНАЯ / ПРАВАЯ  ширина барная стойка
	$heightadd3_2 = $_POST["heightadd3_2"]; // Г-ОБРАЗНАЯ / ПРАВАЯ  высотра барная стойка

	$add1 = $_POST["add1"]; // добавить остров
	$add2 = $_POST["add2"]; // добавить барную стойку









	$type = $_POST["type"]; // тип столешницы
	$manufacturer1 = $_POST["manufacturer1"]; // ПРОИЗВОДИТЕЛ Шаг 2
	$color1 = $_POST["color1"]; // цвет камня шаг 2
	$thickness = $_POST["thickness"]; // Толщина столешницы: шаг 3
	$shape1 = $_POST["shape1"]; // форма изделия шаг 3


	$to  = "1unitedcrew@gmail.com";  

	if (isset($time)) {
		$message = "$phone<br>$time<br>$formname";
	} else if (isset($type)) {
		$message = "$type<br>$manufacturer1<br>$color1<br>$thickness<br>";
		if ($shape1 == 'Прямая') {
			$message .= "$shape1<br>$radius1<br>$radius2<br>$radius3<br>$radius4<br>Высота: $height1_1<br>Ширина: $width1_1<br>";
			if (!empty($add1)) {
				$message .= "$add1<br>Высота: $heightadd1_1<br>Ширина: $widthadd1_1<br>";
			}
			if (!empty($add2)) {
				$message .= "$add2<br>Высота: $heightadd1_2<br>Ширина: $widthadd1_2<br>";
			}
		} if ($shape1 == 'Г-образная Левая') {
			$message .= "$shape1<br>$radius1<br>$radius2<br>$radius3<br>$radius4<br>$radius5<br>$radius6
			<br>Высота (left): $height2_1<br>Высота (right): $height2_2<br>
			Ширина (top): $width2_1<br>Ширина (bottom): $width2_2<br>"; 
			if (!empty($add1)) {
				$message .= "$add1<br>Высота: $heightadd2_1<br>Ширина: $widthadd2_1<br>";
			}
			if (!empty($add2)) {
				$message .= "$add2<br>Высота: $heightadd2_2<br>Ширина: $widthadd2_2<br>";
			}
		} if ($shape1 == 'Г-образная Правая') {
			$message .= "$shape1<br>$radius1<br>$radius2<br>$radius3<br>$radius4<br>$radius5<br>$radius6
			<br>Высота (left): $height3_1<br>Высота (right): $height3_2<br>
			Ширина (top): $width3_1<br>Ширина (bottom): $width3_2<br>"; 
			if (!empty($add1)) {
				$message .= "$add1<br>Высота: $heightadd3_1<br>Ширина: $widthadd3_1<br>";
			}
			if (!empty($add2)) {
				$message .= "$add2<br>Высота: $heightadd3_2<br>Ширина: $widthadd3_2<br>";
			}
		}
	} else {
		$message = "$phone<br>$email<br>$formname";
	}

	$subject = "Заявка с сайта"; 

	
	$headers  = "Content-type: text/html; charset=utf-8 \r\n";
	$from = "=?UTF-8?B?".base64_encode("1unitedcrew@gmail.com")."?= <1unitedcrew@gmail.com";
	$headers .= "From: $from\r\n";
	$headers .= "Reply-To: $email\r\n";

	$result = mail($to, $subject, $message, $headers);
} 

{
		// Отправка email
	send_mail($to, $subject, $message, $headers);      
	echo 'true'; 
}

}
?>