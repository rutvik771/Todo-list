const ListModel = require("../model/list-model");

module.exports.addlist=function (req , res) {
    
    console.log(req.body);

    let list = new ListModel({
        listId : req.body.listId,
        listName : req.body.listName,
        
    });

    list.save(function (err , suceess) {
        if(err){
        console.log(err);
        res.json({msg:"err" ,status:-1 , data:err});
        }else{
            res.json({msg:"list added.." , status:200 , data : req.body});
        }
    });
};

    module.exports.getAlllists=function (req , res) {
        ListModel.find()
        .populate("role").populate("user")
        .exec(function (err , lists) {
            if(err){
                console.log(err);
                res.json({msg:"err" , status:-1, data:err})
            }else{
               res.json({msg:"Lists returned.." , status:200 , data:lists})
            }
            
        });
        
    };

    module.exports.getListById = function (req , res) {
        let id = req.params.listId

        ListModel.findById({_id:id})
        .populate("role").populate("user")
        .exec(function (err , data) {
            if(err){
                res.json({msg:"err",status:-1,data:err});
            }else{
                res.json({msg:"List returned.." ,status:200 , data:data});
            }
            
        });
        
    };

   module.exports.updateListById = function (req,res) {
       let id = req.params.listId;
       let listName = req.body.listName;

       ListModel.updateOne({_id:id} , {listName:listName})
       .populate('role').populate('user')
       .exec(function (err , data) {
           if(err){
               ({msg:"err" , status:-1 , data:err})
           }else{
               ({msg:"List returned.." , status:200 , data:data})
           }
           
       });
   };

    module.exports.updatelist=function (req , res) {
        ListModel.updateOne(
            {
                _id : req.body.listId
            },
            
            {
                listName:req.body.listName,
            },
            function (err,data) {
                if(err){
                    res.json({msg:"err", status:-1, data:err});
                }else{
                    res.json({msg:"lists updated.." , status:200 , data:data});
                }
                
            }
        );
        
    };

    module.exports.deletelist= function (req , res) {
        let listId = req.params.listId;

        ListModel.deleteOne({_id:listId} , function (err ,data) {
            if(err){
                res.json({msg:"err" , status:-1 , data:err});
            }else{
                res.json({msg:"list deleted.." , status:200 , data:data});
            }
            
        });

    };