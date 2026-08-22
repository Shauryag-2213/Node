const express = require('express')
const app = express()
const port = 8080;
const path = require("path");
const {v4: uuidv4} = require('uuid')


app.use(express.urlencoded({extended : true}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname , "views"));

app.use(express.static(path.join(__dirname , "public")));

let posts = [
{   
    id : uuidv4(),
    username : "Shaurya",
    content : "REST Class"
},
{
    id : uuidv4(),
    username : "Anubha",
    content : "Mother"
},
{
    id : uuidv4(),
    username : "Sanjay",
    content : "Father"
}
]
app.get("/posts", (req,res) => {
    res.render("index.ejs" , {posts});
})

app.get("/posts/new", (req,res) => {
    res.render("form.ejs");
})

app.get("/posts/:id", (req,res) => {
    let {id} = req.params;
    console.log(id);
    let post = posts.find((p) => id === p.id)
    res.render("show.ejs", {post});
})

app.post("/posts", (req,res) => {
    let {username ,content} = req.body;
    let id = uuidv4();
    posts.push({ id, username ,content})
    res.redirect("/posts");
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))