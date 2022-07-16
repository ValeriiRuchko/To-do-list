const express = require('express');
const app = express();
const port = 3000; 

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    var today = new Date();
    if(today.getDay() === 1 || today.getDay() === 2){
        res.send("Yay, what a time to be alive, it's pure weekend party!");
    }
    else {
        res.write("I'm devastated and sad :( ");
        res.write("Let's all eat some ice-cream here");
        res.send();
    }
})

app.listen(port, ()=> {
    console.log(`App listening on port ${port}`);
})