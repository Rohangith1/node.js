//async



const { log } = require("console");
const fs = require("fs");

// fs.readFile("demo.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(data);
// });

//sync

//read
// const fileContent = fs.readFileSync('demo.txt', 'utf-8')
// console.log(fileContent)

// fs.writeFile('text.txt', 'This is me again yoo', (err) => {
//     if (err) {
//         console.error(err)
//         return
//     }
//     log('file written successfully')
// })

// fs.writeFileSync('text2.txt', "hiiii", 'utf-8');
// log("new generated")

// fs.stat('demo.txt', (err, stats) => {
//     if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(stats);
// })

// const stats = fs.statSync('demo.txt')
// log(stats)

//new directory

// fs.mkdir('new_Directory', (err) => { if (err) { log(err); return; } log('directory Created') })
    

// fs.rmdir("new_Directory", (err) => {
//       if (err) {
//         log(err);
//         return;
//       }
//       log("directory removed");
//     });

//delete-file
//async
// fs.unlink('demo.txt', (err) => { if (err) { log(err); return}log('file Deleted')})
//sync
fs.unlinkSync("text.txt")
 
  log("file Deleted.........");
