/**
 * Created by xiao xia zheng on 2017-06-14.
 */

var mongoose = require('mongoose');

//create mongoose model: attribut -> type
var Todo = mongoose.model('Todo', {
    text:{
        type: String,
        require: true,
        minlength:1,
        trim:true  //to eliminate space
    },
    completed:{
        type: Boolean,
        default: false
    },
    completedAt:{type: Number}
});

module.exports = {Todo};