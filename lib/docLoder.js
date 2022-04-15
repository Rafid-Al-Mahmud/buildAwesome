function loadDoc(element = "document.body", method = "GET", href = "", callback = () => { }, ...options) {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        if (options[0] === true && options[1] === "all_headers") element.innerHTML =
            this.getAllResponseHeaders();
        else if (options[0] === true && options[1] === "headers") element.innerHTML =
            this.getResponseHeaders();
        else if (options[0] === true && options[1] === "response") element.innerHTML =
            this.responseText;
        else element.innerHTML =
            this.responseText;
        callback(
            {
                all_headers: this.getAllResponseHeaders(),
                headers: this.getResponseHeaders(),
                response: this.responseText
            }
        )
    }
    xhttp.open(method, href);
    xhttp.send();
}