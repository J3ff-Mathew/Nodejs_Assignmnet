import http from 'http';

const server = http.createServer((req, res) => {
    console.log('in port 5000 in create server')
    if (req.url == '/') {
        res.write('Inside the home')
    }
    else if (req.url == '/about') {
        res.write('Inside the About')
    }
    else if (req.url == '/post') {
        res.write('Inside the Posts')
    }
    res.end();
})
server.listen(5000);
console.log('in port 5000')