const http = require("node:http")
const server =http.createServer((res, req)=>{
  if(res === "/"){
    res.end("hello world")

  }else if(res === "./about"){
    res.end("hello continent")
  }

})

server.listen(3000)