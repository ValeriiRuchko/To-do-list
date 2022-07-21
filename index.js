const express = require('express');
const app = express();
const port = 3000; 

const bodyParser = require('body-parser');

//custom module
const date = require(__dirname + "/date.js");

var items = ["Buy food", "Cook food", "Eat food"];
var workItems = [];

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    let day = date.getDay();
    
    res.render("list", {listTitle: day, newListItems: items});
})

app.post("/", (req, res) => {
    let item = req.body.new_list_item;

    if(req.body.list === "Work") {
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    }
})

app.get("/work", (req, res) => {
    res.render("list", {listTitle: "Work list", newListItems: workItems});
})

app.post("/work", (req, res) => {
    let item = req.body.new_list_item;
    workItems.push(item);
    res.redirect("/work");
})

app.listen(port, ()=> {
    console.log(`App listening on port ${port}`);
})