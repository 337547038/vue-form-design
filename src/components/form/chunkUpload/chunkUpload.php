<?php
//PHP服务端接收示例代码
header("Access-Control-Allow-Origin: *");

/* $picname = $_FILES['file']['name'];
move_uploaded_file($_FILES['file']['tmp_name'],'upload/'.$picname);
echo json_encode('upload/'.$picname); */


$file = $_FILES['file'];
$chunkNumber = $_POST['chunkNumber'];
$totalChunks = $_POST['totalChunks'];
$filename = $_POST['filename'];

$public_dir = 'upload';
$dir = '/';
$all_dir = $public_dir . $dir;
  if (!is_dir($all_dir)) mkdir($all_dir, 0777, true);
       $saveFileName = $all_dir . '/' . $filename . '__' . $chunkNumber;
        move_uploaded_file($file['tmp_name'], $saveFileName);
        $res['code'] = 0;
        $res['msg'] = 'error';
        $res['file_path'] = '';
        if ($chunkNumber === $totalChunks) {
            $blob = '';
            for ($i = 1; $i <= $totalChunks; $i++) {
                $blob .= file_get_contents($all_dir . '/' . $filename . '__' . $i);
            }
            file_put_contents($all_dir . '/' . $filename, $blob);
            for ($i = 1; $i <= $totalChunks; $i++) {
                @unlink($all_dir . '/' . $filename . '__' . $i);
            }
            if (file_exists($all_dir . '/' . $filename)) {
                $res['code'] = 2;
                $res['msg'] = 'success';
                $res['file_path'] = $dir . '/' . $filename;
            }
       } else {
            if (file_exists($all_dir . '/' . $filename . '__' . $chunkNumber)) {
                $res['code'] = 1;
                $res['msg'] = 'waiting';
                $res['file_path'] = '';
            }
      }
      echo json_encode($res);
       // return $res;

?>
