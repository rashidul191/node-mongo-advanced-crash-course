const test = require("./other");
 console.log(test.name)
const oneF = test.functionOne(3, 2);
// console.log(oneF);

// core module
const http = require("http");

const server = http.createServer((req, res) => {
  res.end("hello nodejs");
});

const PORT = 5000;
server.listen(PORT);

console.log(`server is running st port: ${PORT}`);




