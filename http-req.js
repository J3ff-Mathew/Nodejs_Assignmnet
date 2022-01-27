import fs from 'fs';
import http, { createServer } from 'http';
import { parse } from 'querystring';
const server = createServer((req, res) => {
    if (req.method === 'GET' && req.url == '/') {
        let data = fs.readFileSync('name&age.html');
        res.write(data);
        res.end()
    }
    else if (req.method === 'POST') {
        let body = ''
        req.on('data', (data) => {

            body = parse(data.toString())

            body = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>

<body class="text-center d-flex justify-content-center">
<table class='table table-dark'>
<thead><tr ><th class='text-center' colspan='2'> Data Rendered</th></tr></thead>
            <tbody>
            <tr><td>Name</td><td>${body.name}</td></tr>
            <tr><td>Age</td><td>${body.age}</td></tr>
            <tr><td>Phone</td><td>${body.phn}</td></tr>
            <tr><td>Mail</td><td>${body.mail}</td></tr>
            </tbody>
            </table>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous">
    </script>
</body>

</html>`
        });


        req.on('end', () => {

            res.writeHead(200, { 'Content-Type': 'text/html' });
            console.log(body)
            res.write(body, () => {

                res.end();

            });

        });
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });

        res.end(`<h1>404 ERROR could not find that Page</h1>`);
    }


});
server.listen(5000);