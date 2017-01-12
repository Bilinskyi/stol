<?
if ($_SERVER["REQUEST_METHOD"] == "POST") {
	function send_mail($to, $subject, $message, $headers)
	{
		$phone         = $_POST["phone"];
		$email         = $_POST["email"];
		$formname      = $_POST["formname"];
		$time          = $_POST["time"];
		$long_2        = $_POST["long_2"];
		$step5number   = $_POST["step5number"];
		$step6model    = $_POST["step6model"];
		$radius1       = $_POST["radius1"];
		$radius2       = $_POST["radius2"];
		$radius3       = $_POST["radius3"];
		$radius4       = $_POST["radius4"];
		$radius5       = $_POST["radius5"];
		$radius6       = $_POST["radius6"];
		$radius7       = $_POST["radius7"];
		$radius8       = $_POST["radius8"];
		$radius2_1     = $_POST["radius2_1"];
		$radius2_2     = $_POST["radius2_2"];
		$radius2_3     = $_POST["radius2_3"];
		$radius2_4     = $_POST["radius2_4"];
		$height1_1     = $_POST["height1_1"];
		$width1_1      = $_POST["width1_1"];
		$widthadd1_1   = $_POST["widthadd1_1"];
		$heightadd1_1  = $_POST["heightadd1_1"];
		$widthadd1_2   = $_POST["widthadd1_2"];
		$heightadd1_2  = $_POST["heightadd1_2"];
		$height2_1     = $_POST["height2_1"];
		$height2_2     = $_POST["height2_2"];
		$width2_1      = $_POST["width2_1"];
		$width2_2      = $_POST["width2_2"];
		$widthadd2_1   = $_POST["widthadd2_1"];
		$heightadd2_1  = $_POST["heightadd2_1"];
		$widthadd2_2   = $_POST["widthadd2_2"];
		$heightadd2_2  = $_POST["heightadd2_2"];
		$height3_1     = $_POST["height3_1"];
		$height3_2     = $_POST["height3_2"];
		$width3_1      = $_POST["width3_1"];
		$width3_2      = $_POST["width3_2"];
		$widthadd3_1   = $_POST["widthadd3_1"];
		$heightadd3_1  = $_POST["heightadd3_1"];
		$widthadd3_2   = $_POST["widthadd3_2"];
		$heightadd3_2  = $_POST["heightadd3_2"];
		$height4_1     = $_POST["height4_1"];
		$height4_2     = $_POST["height4_2"];
		$width4_1      = $_POST["width4_1"];
		$width4_2      = $_POST["width4_2"];
		$widthadd4_1   = $_POST["widthadd4_1"];
		$heightadd4_1  = $_POST["heightadd4_1"];
		$widthadd4_2   = $_POST["widthadd4_2"];
		$heightadd4_2  = $_POST["heightadd4_2"];
		$add1          = $_POST["add1"];
		$add2          = $_POST["add2"];
		$bort          = $_POST["bort"];
		$viewbort      = $_POST["viewbort"];
		$height        = $_POST["height"];
		$longest       = $_POST["longest"];
		$panel         = $_POST["panel"];
		$shape2        = $_POST["shape2"];
		$s_height_s1   = $_POST["s_height_s1"];
		$s_width_s1    = $_POST["s_width_s1"];
		$h_l           = $_POST["h_l"];
		$w_l_top       = $_POST["w_l_top"];
		$w_top         = $_POST["w_top"];
		$h_t_right     = $_POST["h_t_right"];
		$h_r           = $_POST["h_r"];
		$w_b           = $_POST["w_b"];
		$type          = $_POST["type"];
		$manufacturer1 = $_POST["manufacturer1"];
		$manufacturer2 = $_POST["manufacturer2"];
		$color1        = $_POST["color1"];
		$color2        = $_POST["color2"];
		$thickness     = $_POST["thickness"];
		$shape1        = $_POST["shape1"];
		$numb1         = $_POST["numb1"];
		$numb2         = $_POST["numb2"];
		$numb3         = $_POST["numb3"];
		$numb4         = $_POST["numb4"];
		$numb5         = $_POST["numb5"];
		$numb6         = $_POST["numb6"];
		$numb7         = $_POST["numb7"];
		$numb8         = $_POST["numb8"];
		$numb9         = $_POST["numb9"];
		$numb10        = $_POST["numb10"];
		$numb11        = $_POST["numb11"];
		$numb12        = $_POST["numb12"];
		$stepseven1    = $_POST["stepseven1"];
		$stepseven2    = $_POST["stepseven2"];
		$stepseven3    = $_POST["stepseven3"];
		$stepseven4    = $_POST["stepseven4"];
		$stepseven5    = $_POST["stepseven5"];
		$stepseven6    = $_POST["stepseven6"];
		$st7n_1        = $_POST["st7n_1"];
		$st7n_2        = $_POST["st7n_2"];
		$st7n_3        = $_POST["st7n_3"];
		$st7n_4        = $_POST["st7n_4"];
		$st7n_5        = $_POST["st7n_5"];
		$st7n_6        = $_POST["st7n_6"];
		$st8n_1        = $_POST["st8n_1"];
		$st8n_2        = $_POST["st8n_2"];
		$st8n_3        = $_POST["st8n_3"];
		$st9n_1        = $_POST["st9n_1"];
		$st9n_2        = $_POST["st9n_2"];
		$numberfloor   = $_POST["numberfloor"];
		$to            = "1unitedcrew@gmail.com";
		if (isset($time)) {
			$message = "$phone<br>$time<br>$formname";
		} else if (isset($type)) {
			$message = "Телефон: $phone<br><br>Тип столешницы: $type<br>производитель: $manufacturer1<br>Цвет камня: $color1<br>Толщина столешницы: $thickness<br>";
			if ($shape1 == 'Прямая') {
				$message .= "<br>Форма изделия: $shape1<br>$radius1<br>$radius2<br>$radius3<br>$radius4<br>Высота: $height1_1<br>Ширина: $width1_1<br>";
				if (!empty($add1)) {
					$message .= "<br><br>$add1<br>Высота: $heightadd1_1<br>Ширина: $widthadd1_1<br>";
				}
				if (!empty($add2)) {
					$message .= "<br><br>$add2<br>Высота: $heightadd1_2<br>Ширина: $widthadd1_2<br>";
				}
			}
			if ($shape1 == 'Г-образная Левая') {
				$message .= "<br>Форма изделия: $shape1<br>$radius1<br>$radius2<br>$radius3<br>$radius4<br>$radius5<br>$radius6
			<br>Высота (left): $height2_1<br>Высота (right): $height2_2<br>
			Ширина (top): $width2_1<br>Ширина (bottom): $width2_2<br>";
				if (!empty($add1)) {
					$message .= "<br><br>$add1<br>Высота: $heightadd2_1<br>Ширина: $widthadd2_1<br>";
				}
				if (!empty($add2)) {
					$message .= "<br><br>$add2<br>Высота: $heightadd2_2<br>Ширина: $widthadd2_2<br>";
				}
			}
			if ($shape1 == 'Г-образная Правая') {
				$message .= "<br>Форма изделия: $shape1<br>$radius1<br>$radius2<br>$radius3<br>$radius4<br>$radius5<br>$radius6
			<br>Высота (left): $height3_1<br>Высота (right): $height3_2<br>
			Ширина (top): $width3_1<br>Ширина (bottom): $width3_2<br>";
				if (!empty($add1)) {
					$message .= "<br><br>$add1<br>Высота: $heightadd3_1<br>Ширина: $widthadd3_1<br>";
				}
				if (!empty($add2)) {
					$message .= "<br><br>$add2<br>Высота: $heightadd3_2<br>Ширина: $widthadd3_2<br>";
				}
			}
			if ($shape1 == 'П-образная') {
				$message .= "<br>Форма изделия: $shape1<br>$radius1<br>$radius2<br>$radius3<br>$radius4<br>$radius5<br>$radius6<br>$radius7<br>$radius8
			<br>Высота (left): $height4_1<br>Высота (right): $height4_2<br>
			Ширина (top): $width4_1<br>Ширина (bottom): $width4_2<br>";
				if (!empty($add1)) {
					$message .= "<br><br>$add1<br>Высота: $heightadd4_1<br>Ширина: $widthadd4_1<br>";
				}
				if (!empty($add2)) {
					$message .= "<br><br>$add2<br>Высота: $heightadd4_2<br>Ширина: $widthadd4_2<br>";
				}
			}
			if (!empty($bort)) {
				$message .= "<br>$bort<br>Высота бортика: $height<br>Длина бортика: $longest<br>Вид бортика: $viewbort<br>";
			}
			if (!empty($panel)) {
				$message .= "<br><br>$panel<br>Производитель (шаг4): $manufacturer2<br>Цвет (шаг4): $color2<br>";
				if ($shape2 == 'Стеновая панель прямоугольная') {
					$message .= "Форма стеновой панели: $shape2<br>$radius2_1<br>$radius2_2<br>$radius2_3<br>$radius2_4<br>высота: $s_height_s1<br>ширина: $s_width_s1<br>";
				}
				if ($shape2 == 'Стеновая панель под вытяжку') {
					$message .= "Форма стеновой панели: $shape2<br>высота (left): $h_l<br> ширина (left-top): $w_l_top<br>ширина (top): $w_top<br>высота (top-right): $h_t_right<br>
				высота (right): $h_r<br>ширина (bottom): $w_b<br>";
				}
			}
			$message .= "<br>Длина кромки: $long_2<br>Номер кромки: $step5number<br>";
			if (!empty($step6model)) {
				$message .= "МОДЕЛЬ (ш6): $step6model<br>Колличество: ";
				if (!empty($numb1)) {
					$message .= " $numb1<br>";
				}
				if (!empty($numb2)) {
					$message .= " $numb2<br>";
				}
				if (!empty($numb3)) {
					$message .= " $numb3<br>";
				}
				if (!empty($numb4)) {
					$message .= " $numb4<br>";
				}
				if (!empty($numb5)) {
					$message .= " $numb5<br>";
				}
				if (!empty($numb6)) {
					$message .= " $numb6<br>";
				}
				if (!empty($numb7)) {
					$message .= " $numb7<br>";
				}
				if (!empty($numb8)) {
					$message .= " $numb8<br>";
				}
				if (!empty($numb9)) {
					$message .= " $numb9<br>";
				}
				if (!empty($numb10)) {
					$message .= " $numb10<br>";
				}
				if (!empty($numb11)) {
					$message .= " $numb11<br>";
				}
				if (!empty($numb12)) {
					$message .= " $numb12<br>";
				}
			}
			if (!empty($st7n_1)) {
				$message .= "<br><br>$st7n_1<br>колличество: $stepseven1";
			}
			if (!empty($st7n_2)) {
				$message .= "<br><br>$st7n_2<br>колличество: $stepseven2";
			}
			if (!empty($st7n_3)) {
				$message .= "<br><br>$st7n_3<br>колличество: $stepseven3";
			}
			if (!empty($st7n_4)) {
				$message .= "<br><br>$st7n_4<br>колличество: $stepseven4";
			}
			if (!empty($st7n_5)) {
				$message .= "<br><br>$st7n_5<br>колличество: $stepseven5";
			}
			if (!empty($st7n_6)) {
				$message .= "<br><br>$st7n_6<br>колличество: $stepseven6";
			}
			$message .= "<br><br>$st8n_1<br>$st8n_2<br>$st8n_3<br><br>$st9n_1<br>$st9n_2<br>Количество этажей: $numberfloor";
		} else {
			$message = "$phone<br>$email<br>$formname";
		}
		$subject = "Заявка с сайта";
		$headers = "Content-type: text/html; charset=utf-8 \r\n";
		$from    = "=?UTF-8?B?" . base64_encode("1unitedcrew@gmail.com") . "?= <1unitedcrew@gmail.com";
		$headers .= "From: $from\r\n";
		$headers .= "Reply-To: $email\r\n";
		$result = mail($to, $subject, $message, $headers);
	} {
		send_mail($to, $subject, $message, $headers);
		echo 'true';
	}
}
?>