document.querySelector("*").innerHTML=`
<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Document</title>
<!--<link rel="stylesheet" type="text/css" href="../style.css">-->
<style>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

.context-menu {
    position: fixed;
    z-index: 10000;
    width: 150px;
    background-color: #1b1a1a;
    transform: scale(0);
    transform-origin: top left;
    user-select: none;
    -ms-content-zooming: zoom;
}

.context-menu.active {
    transform: scale(1);
    transition: transform 200ms ease-in-out;
}

.context-menu .item {
    padding: 8px 10px;
    font-size: 15px;
    color: #eee;
}

.context-menu .item:hover {
    padding: 8px 10px;
    font-size: 15px;
    background-color: #555;
}

.context-menu .item i {
    display: inline-block;
    margin-right: 5px;
}

.context-menu .item hr {
    margin: 2px 0px;
    border-color: #555;
}

.flex-c-center {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.flex-r-center {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.product-logo{user-select: none;padding: 0 10px;margin: 0 5px;}

nav {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    -webkit-box-shadow: 20px 20px 80px 10px #00000010;
    -moz-box-shadow: 20px 20px 80px 10px #00000010;
    box-shadow: 20px 20px 80px 10px #00000010;
    display: flex;
}

.tablist {
    list-style-type: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.tablist>li {
    padding: 20px;
}

.tablist>li>a {
    color: inherit;
    text-decoration: none;
}

.tablist li a:hover {
    background-color: #D9EDF7;
    color: #00A0C6;
    cursor: pointer;
}

k:hover {
    color: red;
    cursor: url(../../lib/5453183.cur) 4 12, initial;
}

.top-nav {
    display: flex;
}

/* Extra small devices (phones, 0px and up) */
@media only screen and (min-width: 0px) {
    *{font-size: 100%;}
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
    *{font-size: 100%;}
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
    *{font-size: 100%;}
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
    *{font-size: 100%;}
}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
    *{font-size: 100%;}
}
</style>
<meta http-eqiv="refresh" content="0">
</head>

<body>
<div class="context-menu">
    <div class="item">
        <div class="fa fa-" onclick="document.execCommand('cut')">Cut</div>
    </div>
    <div class="item">
        <div class="fa fa-" onclick="document.execCommand('copy')">Copy</div>
    </div>
    <div class="item">
        <div class="fa fa-" onclick="document.execCommand('paste')">Paste</div>
    </div>
    <div class="item">
        <div class="fa fa-" onclick="location.reload()">Reload</div>
    </div>
    <hr>
    <div class="item">
        <div class="fa fa-" onclick="history.back()" ondblclick="history.go(-2)">Back</div>
    </div>
    <div class="item">
        <div class="fa fa-" onclick="history.forward()" ondblclick="history.go(2)">Forward</div>
    </div>
    <div class="item">
        <div class="fa fa-" onclick="print()">Print</div>
    </div>
</div>
<header>
    <nav class="top-nav">
        <div class="product-logo flex-c-center">
            <h1>buildAwesome</h1>
        </div>
        <ul class="tablist">
            <li><a href="">HOME</a></li>
            <li><a href="">ALL APPS</a></li>
        </ul>
    </nav>
</header>
<main>
    <div class="app"><iframe src="${appLink}" frameborder="0" style="width: 100%;height: 600px;-webkit-overflow-scrolling: touch;"></iframe></div>
    <!-- <iframe src="calculator.html" frameborder="0" style="height: 80vh;width: 100%;"></iframe> -->
</main>
<footer>

</footer>
<script>
    // loadDoc(document.querySelector('main'),'GET','./calculator.html')
    // contextmenu.init({
    //     name:"print",
    //     id:1,
    //     action:"click"=()=>print()
    // });
    var contextElement = document.getElementsByClassName("context-menu")[0];
    window.addEventListener("contextmenu", function (event) {
        event.preventDefault();
        contextElement.style.top = event.offsetY + "px";
        contextElement.style.left = event.offsetX + "px";
        contextElement.classList.add("active");
    });
    window.addEventListener("click", () =>
        contextElement.classList.remove("active")
    );
    document.querySelector(".app>iframe").contentDocument.querySelector("*").style.overflow="hidden";
</script>
</body>

</html>
`;