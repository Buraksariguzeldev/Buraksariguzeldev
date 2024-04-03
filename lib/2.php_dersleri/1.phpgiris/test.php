<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP ve HTML Sayfası</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
        }
        .container {
            padding: 10px;
        }
        .kirmizi-metin {
            color: red;
        }
        hr {
            border: 1px solid red;
        }
        @media only screen and (max-width: 500px) {
            body {
         
  
            }
            a {
                display: block;
                margin-bottom: 10px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
<hr />
        <a href="../../../İndex.html">İndex.html</a>
<hr />
        <a href="../../lib.html">Lib</a>
<hr />
        <a href="../../../docs/php/phpkullanim.html">Php kullanim</a>
<hr />

        <?php
            echo "Merhaba, PHP dünyası!";
            echo "Nasıl gidiyor?";
        ?>

        <div>
            <p class="kirmizi-metin">Bu bir HTML paragrafıdır ve kırmızı renkte yazıdır.</p>
        </div>
    </div>
</body>
</html>