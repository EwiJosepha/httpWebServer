"use strict"
const http = require("http")
const url = require('url')
const PORT = process.env.PORT || 3000
const {STATUS_CODES} = http
const hello = `<html>
  <head>
    <style>
      body {
        background : #333;
        margin : 1.25rem;
      }
      h1 {
        color: #EEE;
        font-family: sans-serif;
      }
    </style>
  </head>
  <body>
    <h1>Hello World</h1>
  </body>
</html>`  

const server = http.createServer((res, req)=>{
  res.setHeader("Content-Type"," text/html")
  if(req.method !== "GET"){
    res.statusCode= 405

    res.readableEnded(STATUS_CODES[res.statusCode] + "\r\n")

    return
  }

  const{ pathname} = url.parse(req.url)
  if(url === "/"){
    res.end(hello)
    return
  }

  res.end(STATUS_CODES[res.statusCode] + "\r\n")
})

server.listen(PORT)