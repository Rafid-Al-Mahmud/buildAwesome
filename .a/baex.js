const fs = require("fs");
const http = require("http");
const baex = {};
baex.config = {
    PORT: 3000,
    hostname: "localhost" || "127.0.0.1",
    routes: [[], []]
}
baex.server = http.createServer((req, res) => {
    res.send = (chunk, callback = false) => {
        res.write(chunk, callback);
    }

    res.writeHeader(200, { "Content-Type": "text/html" });
    if (req.url == "/");
    if (req.url == "/db");
    for (let i = 0; i < baex.config.routes[0].length; i++) {
        const url = baex.config.routes[0][i];
        const response = baex.config.routes[1][i];
        console.log(req.url + " & " + url);
        if (req.url == url || url == "" || url == "*") res.write(response);
        // else res.write(`<div style="text-align:center"><h2>No route name called "<span>${req.url}</span>"</h2><hr>BAEX</div>`)
    }
    console.log(`BAEX: http://${baex.config.hostname}:${baex.config.PORT} GET "${req.url}"`);
    res.end();
});
baex.listen = (port, hostname, callback) => baex.server.listen(port, hostname, callback);
baex.send = (path = "", responce = "") => {
    baex.config.routes[0].push(path);
    baex.config.routes[1].push(responce);
}
baex.sendFile = (path = "", file = "") => {
    fs.readFile(file, (err, data) => {
        if (err) throw err;
        baex.send(path, data);
    });
}
// baex.use = (folder = "") => {
//     fs.readdir(folder, (err, files) => {
//         files.forEach(file => {
//             fs.readFile(folder+file, (err, data) => {
//                 if (err) throw err;console.log(`
//                 folder: ${folder} & 
//                 files: ${files} & 
//                 file: ${file} & 
//                 folder+file: ${folder+file} 
//                 & path: ${folder.replace(/^\./,"")+file}  
//                 & error: ${err} 
//                 & routes: ${JSON.stringify(baex.config.routes[1])} 
//                 & data: 
// ${data}`);
//                 baex.send("/public/index.html", data);
//             });
//         });
//     });
// }

module.exports = {
    baex
};




















/*
const http = require('http');

const postData = JSON.stringify({
    'msg': 'Hello World!'
});

const options = {
    hostname: 'www.google.com',
    port: 80,
    path: '/upload',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
    }
};

const req = http.request(options, (res) => {
    console.log(`STATUS: ${res.statusCode}`);
    console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
        console.log(`BODY: ${chunk}`);
    });
    res.on('end', () => {
        console.log('No more data in response.');
    });
});

req.on('error', (e) => {
    console.error(`problem with request: ${e.message}`);
});

// Write data to request body
req.write(postData);
req.end();
*/