const mongoose=require('mongoose');

let ListSchema =new mongoose.Schema({
    listId :{
        type:String,
    },
    listName:{
        type:String
    },
    role:{
         type:mongoose.Schema.Types.ObjectId,
         ref:"role"
    },
    user: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
    }
});

const ListModel = mongoose.model("list",ListSchema)
module.exports = ListModel;