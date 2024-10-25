const fs = require('fs');


// sync function
// no need call back
fs.existsSync("demo1.txt")
  
 const handle = (result) => {
  if (result) {
    console.log("found");
  }
  else {
    console.log("not found");
  }
}
// fs.exists("demo.txt",(result) => {
//   if (result) {
//     console.log("found");
//   }
//   else {
//     console.log("not found");
//   }
// })

// fs.readFile("demo1.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   else {
//     console.log(data);
//   }
// })

// fs.unlink("demo1.js", function (err) {
//   if (err) {
//     console.log(err);
//   }
//   else {
//     console.log("success");
//   }
// })
// fs.appendFile("demo1.txt", " and try to added new something", function (err) {
//   if (err) {
//     console.log(err);
//   }
//   else {
//     console.log("success");
//   }
// })


// fs.rename("demo1.js", "demo1.txt", function (err) {
//   if (err) {
//     console.log(err);
//   }
//   else {
//     console.log("success");
//   }
// })
// fs.writeFile("demo1.js", "this is for test 1", function (err) {
//   if (err) {
//     console.log(err);
//   }
//   else {
//     console.log("success");
//   }
// })