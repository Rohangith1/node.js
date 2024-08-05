const path = require('path')
// console.log(__filename);
// console.log(__dirname);

// console.log(path.basename(__filename));
// console.log(path.basename(__dirname));
// console.log(path.extname(__filename));
// console.log(path.join("/hello", "/hii", "file.txt"));
// console.log(path.join("hello", "hii", "file.txt"));
// console.log(path.join("hello", "//hii", "file.txt"));
// console.log(path.join("hello", "hii/", "/file.txt"));
// console.log(path.join("hello", "hii", "../file.txt"));

// console.log(path.resolve("/hello", "/hii", "file.txt"));
// console.log(path.resolve("hello", "hii", "file.txt"));
// console.log(path.resolve("hello", "//hii", "file.txt"));
// console.log(path.resolve("hello", "///hii", "file.txt"));
// console.log(path.resolve("hello", "hii/", "/file.txt"));
// console.log(path.resolve("hello", "hii", "../file.txt"));

const pathProps = path.parse('/foo/bar/node.js');
console.log(pathProps) 