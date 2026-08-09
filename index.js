const express = require("express");
const app = express();
console.dir(app);
let port = 8080;
app.listen(port, () => {     //app.listen is used to listen to the request send to the server by the client//
    console.log(`App is listening to the port${port}`);
})
app.get("/", (req,res) => { //.get is used to provide different responses for different paths
    res.send("You reached at the root path");
});
app.get("/login", (req,res) => {
    res.send("You reached at the login path");
});
app.get("/home", (req,res) => {
    res.send("You reached at the Home path");
});
app.get("*", (req,res) =>{
    res.send("This path does not exist");
})
app.post("/", (req,res) => {
    res.send("You sent a post request to the root path.");
});
// app.use((req,res) => { //app.use is used to receive the request of the client and respond it to the client//
//     // console.log(req); this determines that express can even represent objects unlike other languages
//     console.log("Request Received");
//     res.send("<h1>This is a response in HTML</h1> <ul><li>YOYOYOYO</li></ul>")//In res.send we can determine what should be shown to the client once his/her request is received.It can send and object,array,string anything as a response desired to our choice.
// });
