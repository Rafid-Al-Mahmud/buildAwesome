const node = {}
const req = {}
const res = {}
//(?:[^/][\d\w\.]+)+$ || (?<=\/)[^\/\?#]+(?=[^\/]*$)
req.url = location.pathname.match(/(?<=\/)[^\/\?#]+(?=[^\/]*$)/) === null ? "" : location.pathname.match(/(?<=\/)[^\/\?#]+(?=[^\/]*$)/)[0];
res.write = (responce) => document.querySelector("*").innerHTML = responce;
res.sendFile = (filename) => function () {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        document.querySelector("*").innerHTML = this.responseText;
    }
    xhttp.open("GET", filename);
    xhttp.send();
}
if (req.url === "") res.sendFile("./index.html");