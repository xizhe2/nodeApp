/**
 * Created by xiao xia zheng on 2017-06-14.
 */
var mongoose = require('mongoose');

//create mongoose model: attribut -> type
var User = mongoose.model('User',{
    name:{
        type: String,
        require: true,
        minlength:1,
        trim:true  //to eliminate space
    },
    age:{
        type: Number,
        require: false,
        minlength:1,
        trim:true  //to eliminate space
    }
});

module.exports = {User};