<?php
	session_start();
	if(isset($_POST["data"]))
		$_SESSION["data"] = $_POST["data"];

?><!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>ForDOU</title>
	<link href="css/bootstrap.css" rel="stylesheet">
	<style>
		td {
			padding: 5px;
			border: 1px solid #ccc;
			cursor: pointer;
		}

		tr:hover td {
			background: #ffe2c5;
		}
	</style>
	<?php if(isset($_SESSION["data"])) {
			$data = $_SESSION["data"];
			echo "<script>var base = ['$data']</script>";
		} 		
	?>
</head>
	<body>
		<form method="POST">
			<input type="hidden" name="data" class="data">
			<input type="submit" class="add" name="add" value="ADD">
			<input type="submit" class="sort" name="sort" value="RAND">
		</form>
		
		<table class="myTable" cellspacing="0" border="1">
		  <tbody>

		  </tbody>
		</table>
		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
		<script src="http://malsup.github.com/jquery.form.js"></script> 
	    <script src="js/app.js"></script>
	</body>
</html>