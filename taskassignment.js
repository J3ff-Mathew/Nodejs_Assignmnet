import http, { createServer } from 'http';
import fs from 'fs';
import { parse } from 'querystring';

const form = () => {
    let body = ''
    let data = fs.readFileSync('empdtls.txt').toString();
    data = JSON.parse(data);
    let table = '';
    data.map((ele, index) => {
        table += `<tr id='${index}'>
        <td>${ele.id}</td>
        <td>${ele.name}</td>
        <td>${ele.phone}</td>
        <td>${ele.mail}</td>
        <td><button class='btn btn-danger' onClick='deleteTable(${index})'}>Delete</button></td>
        </tr>`
    })
    body = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Render Employee</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>

<body>
    <ul class="nav nav-pills navbar navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand navbar-dark" href="#">NeoSoft</a>
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="http://localhost:3000">Homepage</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="http://localhost:3000/addemployee">Add Employee</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Welcome Back:Administrator</a>
            </li>
        </div>
    </ul>

    <div class="text-center d-flex justify-content-center">
            <table class="m-5 table table-dark">
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>Employee Name</th>
                        <th>Employee Contact No.</th>
                        <th>Employee Email</th>
                        <th>Actions<th>
                    </tr>
                </thead>
                <tbody>
${table}
                </tbody>
            </table>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous">
    </script>
    <script>
    function deleteTable(index){
        document.getElementById(index).remove();
    }
    </script>
</body>

</html>`
    return body;
}
const server = createServer((req, res) => {
    if (req.url == '/') {
        //loading emp details
        res.write(form());

    }
    else if (req.method === 'POST' && req.url == '/addemployee') {
        //submitted data to be rendered and added to text file
        console.log('in post')
        let body = ''
        req.on('data', (data) => {

            body = parse(data.toString());
        })
        console.log(body)
        req.on('end', () => {

            res.writeHead(200, { 'Content-Type': 'text/html' });
            console.log(body);
            let data = fs.readFileSync('empdtls.txt').toString();
            data = data.slice(0, -1);
            fs.writeFileSync('empdtls.txt', `${data},{"id":"${body.id}","name":"${body.name}","phone":"${body.phn}","mail":"${body.mail}"}]`)
        });
        res.writeHead(301, { "Location": "http://localhost:3000" });



    }
    else if (req.url == '/addemployee') {
        //adding the employee
        let data = fs.readFileSync('EmployeeForm.html').toString();
        res.write(data);
    }

    res.end()
});
server.listen(3000);