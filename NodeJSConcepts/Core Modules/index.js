const fs = require('fs');

// fs.writeFileSync('read.txt', "This is a first line to be printed");

// fs.writeFileSync('read.txt', "THis will over write the first line")

// fs.appendFileSync('read.txt', " this will print next line and never over write the previous content");

// const buf_data = fs.readFileSync('read.txt');
// console.log(buf_data); //o/p: <Buffer 54 48 69 73 20 77 69 6c 6c 20 6f 76 65 72 20 77 72 69 74 65 20 74 68 65 20 66 69 72 73 74 20 6c 69 6e 65 74 68 69 73 20 77 69 6c 6c 20 70 72 69 6e 74 ... 124 more bytes>
                       //Nodejs includes an additional data type which is Buffer. 
                       //It is mainly used to store binary data while reading from a file or receiving packets over a network.

// const orig_data = buf_data.toString();
// console.log(orig_data); //o/p: THis will over write the first linethis will print next line and never over write the previous content this will print next line and never over write the previous content

fs.renameSync('read.txt', 'readwrite.txt');