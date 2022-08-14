const ReminderModel = require("../model/reminder-model");

module.exports.addreminder = function (req ,  res ) {
    console.log(req.body);
     
    let reminder = new ReminderModel({
        
        reminderType : req.body.reminderType,
        reminderName:req.body.reminderName,
        role:req.body.role,
        user:req.body.user,
        list:req.body.list,
        
        
        
    });

    reminder.save(function (err , data) {
        if(err){
            res.json({msg:"err" , status:-1 , data:err});
        }else{
            res.json({msg:"reminder added..", status:200 , data : data});
        }
        
    });
};

module.exports.getAllreminder = function (req , res ) {
    ReminderModel.find()
    .populate("role").populate("user").populate("list").populate("task")
    .exec(function (err , reminder) {
        if(err){
            res.json({msg:"err" , status:-1 , data:err});
        }else{
            res.json({msg:"reminder returned..", status:200 , data : reminder});
        }
    });
};

module.exports.updatereminder = function (req , res ) {

    ReminderModel.updateOne({_id:req.body.reminderid},
    {
        reminderType:req.body.reminderName,
    },
     
    function (err , success) {
        if(err){
            res.json({msg:"err" , status : -1 , data:err});
        }else{
            res.json({msg:"reminder updated..", status:200 , data : data});
        }
        
    }
    
    );
    
};

module.exports.deletereminder = function (req , res ) {
    
    let reminderid = req.params.reminderid;

    ReminderModel.deleteOne({_id:reminderid}, function (err ,data) {
        if(err){
            res.json({msg:"err", status:-1 , data : err});
        }else{
            res.json({msg:"reminder deleted.." , status:200 , data :data});
        }
        
    });
};

module.exports.getReminderById = function (req , res) {
    let id = req.params.reminderId

    ReminderModel.findById({_id:id})
    .populate("role").populate("user").populate("list").populate("task")
    .exec(function (err , data) {
        if(err){
            res.json({msg:"err",status:-1,data:err});
        }else{
            res.json({msg:"Reminder returned.." ,status:200 , data:data});
        }
        
    });
    
};

module.exports.updateReminderById = function (req,res) {
    let id = req.params.reminderId;

    let reminderType = req.body.reminderType;

    ReminderModel.updateOne({_id:id},{reminderName:reminderName , reminderType:reminderType})
     .populate("role").populate("user").populate("list").populate("task")
     .exec(function (err , data) {
        if(err){
            res.json({msg:"err",status:-1,data:err});
        }else{
            res.json({msg:"Reminder returned..", status:200 , data:data});
        }
    });
};