import http, { createServer } from 'http';
import fs from 'fs'

const server = createServer((req, res) => {
    if (req.url == '/readfile') {
        let data = fs.readFileSync('products.json').toString();
        res.write(data);
    }
    else if (req.url == '/writefile') {
        fs.writeFile('products.json', '[{"id": 11,"name": "Product11","price": "999","quantity": "23","image": "./images/na10.jpg"}', (err) => {
            if (err) throw err;
            console.log("written successfully");
        })
    }
    else if (req.url == '/appendfile') {
        fs.appendFile('products.json', ',{"id": 12,"name": "Product12","price": "999","quantity": "23","image": "./images/na10.jpg"}]', (err) => {
            if (err) throw err;
            console.log("Append successfully");
        })
    }
    else if (req.url == '/deletefile') {
        fs.unlink('products.json', (err) => { if (err) throw err; })
    }
    else if (req.url == '/renamefile') {
        fs.rename('products.json', 'savage.json')
        fs.rename('savage.json', 'products.json')
    }
    res.end()
});
server.listen(3000);