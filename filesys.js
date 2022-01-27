import fs from 'fs';

// asynchronous

// fs.readFile('products.json', (err, data) => {
//     if (err)
//         throw err;
//     console.log(data.toString());
// });

// syncronous
let data = fs.readFileSync('products.json').toString();
console.log(data);

//write

fs.writeFile('products.json', '[{"id": 11,"name": "Product11","price": "999","quantity": "23","image": "./images/na10.jpg"}', (err) => {
    if (err) throw err;
    console.log("written successfully");
})
fs.appendFile('products.json', ',{"id": 12,"name": "Product12","price": "999","quantity": "23","image": "./images/na10.jpg"}]', (err) => {
    if (err) throw err;
    console.log("Append successfully");
})


