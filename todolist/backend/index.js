const express = require("express");
const mongoose = require("mongoose");
const uri = "mongodb+srv://Node_learning:node123@cluster0.7tx6o.mongodb.net/Todo-list?retryWrites=true&w=majority";
const validation = require("./Validation")
const rolecontroller = require("./controller/role-controller");
const usercontroller = require("./controller/usercontroller");
const taskcontroller = require("./controller/task-controller");
const AutoIncrementFactory = require('mongoose-sequence');
const jwt = require("./verify_jwt");

const app = express();
const cors = require('cors');
app.use(cors())


// express is middle ware  
app.use(express.json())  //express run server live  
app.use(express.urlencoded({extended:true}))   //for create or scan emogis or othen sign 


//database
 mongoose.connect(uri,function(err)   //for link db to server
{
    if(err){
    console.log("db connection fail...");
    console.log(err);
    }
    else{

        console.log('db connected...')
    }

})

app.get("/", function (req,res) {
    res.write("welcome ");
    res.end();
    
});

// Roles

app.post("/role", validation.role_create_validate , rolecontroller.Addrole);
app.get("/get/roles", rolecontroller.getAllroles);
app.get("/getbyId/role/:roleId" , rolecontroller.getById);    
app.delete("/delete/role/:roleId" ,rolecontroller.deleterole);
app.put("/update/role/:roleId" , validation.role_update_validate , rolecontroller.updateRoleById);    


// User

app.post("/user", validation.User_create_validate ,usercontroller.Adduser);
app.get("/get/user", usercontroller.getAlluser);
app.get("/getbyId/user/:userId" , usercontroller.getuserById);
app.put("/update/user/:userId",validation.User_update_validate , usercontroller.updateUser);
app.delete("/delete/user/:userId",usercontroller.deleteuser);
app.post("/user/login",usercontroller.login_user);

// //Task

app.post("/task" ,validation.task_create_validate , taskcontroller.Addtask);
app.get("/get/task" , taskcontroller.getAlltask);
app.get("/getbyId/task/:taskId" , taskcontroller.getTaskById);
app.delete("/delete/task/:taskId", taskcontroller.deletetask);
app.put("/update/task/:taskId" , validation.task_update_validate , taskcontroller.updateTaskById);

app.listen(4000 ,function () {
    console.log("server at 4000");
});