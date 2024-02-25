const http = require("http")
const {readFileSync} = require("fs")
// const { createServer } = require("node:http")
const {json} = ('react-router-dom')

const homepage = readFileSync("./imageapp/index.html")
const homestyles = readFileSync("./imageapp/styles.css")

const server = http.createServer ((res, req)=>{
  // res.setHeaders(200,"Content-Type", text.html)
  // res.end(homepage)
  const url = res.url

  if(url === "/"){
    res.writeHead(200, {"content-type": "text/html"})
    res.write("home page")
    res.end()
  }

  else if (url === "/about"){
    res.writeHead(200, {"content-type": "text/html"})
    res.write(homepage)
    res.end()
  }
  else if (url === "styles.css"){
    res.writeHead(200, {"content-type": "text/css"})
    res.write(styles)
    res.end()
  }
  else {
    res.writeHead(404, { "content-type": "text/html" })
  }
 
})

server.listen(3000)

