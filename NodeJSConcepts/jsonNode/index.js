const fs = require('fs');
const data = {
    name: "ranjit",
    age: 29,
    contact: +9123453422
}

const jsonData = JSON.stringify(data);
console.log(jsonData); //o/p: {"name":"ranjit","age":29,"contact":9123453422}

// create a file and insert data
fs.writeFile('jsonData.json', jsonData, (err) => {
    console.log("JSON File created successfully")
})

//read the json file data
fs.readFile('jsonData.json', 'utf-8', (err, data) => {
    console.log(data) //o/p: {"name":"ranjit","age":29,"contact":9123453422}
    const orgData = JSON.parse(data);
    console.log(orgData) //o/p: { name: 'ranjit', age: 29, contact: 9123453422 }
})