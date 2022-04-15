for (i = 0; i < document.querySelectorAll("contextmenu").length; i++) {
    document.querySelectorAll("contextmenu")[i].innerHTML =
        `
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
    `;
}
var contextElement = document.getElementsByClassName("context-menu")[0];
window.addEventListener("contextmenu", function (event) {
    event.preventDefault();
    contextElement.style.top = event.offsetY + "px";
    contextElement.style.left = event.offsetX + "px";
    contextElement.classList.add("active");
});
window.addEventListener("click", () =>
    contextElement.classList.remove("active")
)