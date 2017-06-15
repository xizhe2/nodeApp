/**
 * Created by xiao xia zheng on 2017-06-14.
 */
//require mongoose module
var mongoose = require('mongoose');

//connect mongoose to mongoDB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {mongoose}

