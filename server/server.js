/**
 * Created by xiao xia zheng on 2017-06-14.
 */
//require lib
    var express = require('express');
    var bodyparser = require('body-parser'); // take json to convert to object to attachted request object

//require module
    var {mongoose} = require('./db/mongoose');
    var {Todo} = require('./model/todo');
    var {User} = require('./model/user');

//set up basic application
var app = express();

//configurate middleware: use sth(lib, module to access to their function)
app.use(bodyparser.json()); //with this mw, we can send a json to express app

//create new ressouce: post -> send json obj to server w/text property,
//sever get the text property to create new model, then send back to client w/completed model
// url + callback
app.post('/todos', (req, res) => {
    //create sth and send it to
    var todo = new Todo({text: req.body.text});

    todo.save().then((doc) =>{res.send(doc)}, (e) =>{res.sned(e)}); //send back the info/err msg to client
});


app.listen(3000, () =>{
    console.log('Started on port 3000');
})



module.exports = {app}