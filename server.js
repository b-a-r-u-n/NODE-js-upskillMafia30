const http = require("http");
const fs = require("fs");

const PORT = 3000;
const HOST = "127.0.0.1";
const home = fs.readFileSync("./HTML/Home.html" , "utf-8");
const about = fs.readFileSync("./HTML/About.html" , "utf-8");
const contact = fs.readFileSync("./HTML/Contact.html" , "utf-8");
const error = fs.readFileSync("./HTML/Error.html" , "utf-8");

const  server = http.createServer((req,res) => {
    if(req.url === "/")
        res.end(home);
    else if(req.url === "/about")
        res.end(about);
    else if(req.url === "/contact")
        res.end(contact)
    else{
        res.writeHead(404, {'content-type': "text/html"})
        res.end(error);
    }
})

server.listen(PORT,HOST,() => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
})