
const express = require('express')
const app = express()
const port = 8080;
const path = require("path");

app.use(express.urlencoded({extended : true}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname , "views"));

app.use(express.static(path.join(__dirname , "public")));

let posts = [
{    
    username : "Shaurya",
    content : "REST Class"
},
{
    username : "Anubha",
    content : "Mother"
},
{
    username : "Sanjay",
    content : "Father"
}
]
app.get("/posts", (req,res) => {
    res.render("index.ejs" , {posts});
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
const express = require("express");
const app = express();

let port = 8080;

app.listen(port, () => {     //app.listen is used to listen to the request send to the server by the client//
    console.log(`App is listening to the port${port}`);
})
app.get("/", (req,res) => { //.get is used to provide different responses for different paths
    res.send("Welcome to the Root Path");
});
app.get("/login", (req,res) => {
    res.send("You reached at the login path");
});
app.get("/home", (req,res) => {
    res.send("You reached at the Home path");
});
app.get("/:username/:id", (req,res) => {
    let {username , id} = req.params;
    let htmlStr = `<center><h1>Welcome to the page of ${username} along with the id ${id}</h1></center>`
    res.send(htmlStr);
});
app.get("/search", (req,res) => {
    let {q} = req.query;
    if(!q){
        res.send(`<h1>Nothing Searched</h1>`)
    }
    else{
        res.send(`<h1>Results for searched query : ${q}</h1>`);
    }
});
app.get("/*splat", (req,res) =>{
    res.send("This path does not exist");
})

// app.use((req,res) => { //app.use is used to receive the request of the client and respond it to the client//
//     // console.log(req); this determines that express can even represent objects unlike other languages
//     console.log("Request Received");
//     res.send("<h1>This is a response in HTML</h1> <ul><li>YOYOYOYO</li></ul>")//In res.send we can determine what should be shown to the client once his/her request is received.It can send and object,array,string anything as a response desired to our choice.
// });
