<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
  <style>
    <?php include "./css/style.css" ?>
  </style>
  <title>Seo Checker</title>
</head>

<body>
  <?php
  $message = "";
  if (isset($_POST["submit"])) {
    $target_dir = "test/";
    $target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
    $uploadOk = 1;
    // $imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));
    
    if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
      $message = "The file " . basename($_FILES["fileToUpload"]["name"]) . " has been uploaded. Click Analyze to test the file";
      //opening the uploaded file to process it
      $file = fopen($target_file, 'r') or die("Unable to open the file!");
      $fileData = fread($file, filesize($target_file));
      fclose($file);
      //adding the script tag to the read file
      // $toFind = "</body>";
      // $indexOfBody = strpos($fileData, $toFind);
      // $strBeforeBody = substr($fileData, 0, $indexOfBody);
      // $strRemaining = substr($fileData, $indexOfBody);
      // $script = "<script src='../js/app.js'></script>";
      // $finalStr = $strBeforeBody . $script . $strRemaining;

      //opening the test.html to write data into it
      $fileW = fopen("test/test.html", "w") or die("Unable to open the file!");
      fwrite($fileW, $fileData);
      fclose($fileW);
    } else {
      $message = "Sorry, there was an error uploading your file.";
    }
  }
  ?>
  <div class="contaier">
    <header>
      <div class="selectBtnContainer">
        <h3>Select your file</h3>
        <form action="index.php" method="post" id="form" enctype="multipart/form-data">
          <input type="file" name="fileToUpload" id="fileToUpload" accept=".html,.htm,.txt,.png" class="selectBtn btn" />
          <input type="submit" name="submit" class="btn submit">
        </form>
      </div>
      <div class="uploadBtnContainer">
        <p class="selectMessage"><?php echo $message ?></p>
        <button class="analyzeBtn btn">Analyze</button>
      </div>
    </header>
    <main>
      <h3 class="pageMessage"></h3>
      <iframe class="iframe"></iframe>

      <ul class="warningList"></ul>

    </main>
  </div>
  <script src="./js/app.js"></script>
</body>

</html>