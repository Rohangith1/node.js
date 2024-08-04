// function hello() {
//     console.log("Hello World")
// }

// hello()

// 2.
// const addFn=require('./add')

// const sum = addFn(2, 3);
// const sum2=addFn(2,5)

// console.log(sum);
// console.log(sum2)

// console.log("there is nothing")

//
//path

// const path = require('path')
// console.log(__filename);
// console.log(__dirname);

// console.log(path.basename(__filename))
// console.log(path.basename(__dirname));
// console.log(path.extname(__filename))

// console.log(path.join('/hello', './hello','file.txt'))

//asyncronus way
const fs = require('fs');
// fs.readFile('file.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log(data)
// })

// const file = fs.readFileSync('file.txt', 'utf-8')
// console.log(file)

// fs.writeFile('text.txt', 'New file generate', (err) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log("File generated successfully")
// })

fs.writeFileSync("text2.txt", "New file generate through writeFilesync", "utf-8")
console.log("File2 generated successfully")
