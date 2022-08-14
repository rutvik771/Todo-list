const { body} = require('express-validator');

var role_create_validate = [
 body("roleName").notEmpty().withMessage("roleName is required").isString().withMessage("Invalid roleName")
  ]

 var role_update_validate = [
    body("roleName").isString().withMessage("Invalid roleName")
     ]

 var User_create_validate = [
 
      body("name").notEmpty().withMessage("name is required").isString().withMessage("Invalid User name"),
      body("email").notEmpty().withMessage("user_email is required").isEmail().withMessage("Invalid User Email"),
      body("password").notEmpty().withMessage("password is required").isLength({ min: 8 }).withMessage("please provide your 8 character password ")
      .matches(/^(?=.*[a-z])/).withMessage("please provide atleast one Lowercase character")
      .matches(/^(?=.*[A-Z])/).withMessage("please provide atleast one Uppercase character")
      .matches(/^(?=.*\d)/).withMessage("please provide atleast one Number character")
      .matches(/^(?=.*[@$!%#*?&])/).withMessage("please provide atleast one Special character"),
      body("gender").notEmpty().withMessage("gender is required").isString().withMessage("Invalid User Gender"),
      body("dateofbirth").notEmpty().withMessage("dateofbirth is required").isDate().withMessage("Invalid User Birth-date"),
      body("isAdmin").optional({nullable: true , checkFalsy: true}).isBoolean().withMessage("Invalid value"),
    ]

    var User_update_validate = [
 
      body("name").optional({nullable: true , checkFalsy: true}).notEmpty().withMessage("name is required").isString().withMessage("Invalid User name"),
      body("email").optional({nullable: true , checkFalsy: true}).notEmpty().withMessage("user_email is required").isEmail().withMessage("Invalid User Email"),
      body("password").optional({nullable: true , checkFalsy: true}).notEmpty().withMessage("password is required").isLength({ min: 8 }).withMessage("please provide your 8 character password ")
      .matches(/^(?=.*[a-z])/).withMessage("please provide atleast one Lowercase character")
      .matches(/^(?=.*[A-Z])/).withMessage("please provide atleast one Uppercase character")
      .matches(/^(?=.*\d)/).withMessage("please provide atleast one Number character")
      .matches(/^(?=.*[@$!%#*?&])/).withMessage("please provide atleast one Special character"),
      body("gender").optional({nullable: true , checkFalsy: true}).notEmpty().withMessage("gender is required").isString().withMessage("Invalid User Gender"),
      body("dateofbirth").optional({nullable: true , checkFalsy: true}).notEmpty().withMessage("dateofbirth is required").isDate().withMessage("Invalid User Birth-date"),
    ]   

    var task_create_validate = [
 
      body("taskName").notEmpty().withMessage("taskName is required").isString().withMessage("Invalid taskName"),
      body("completed_taskName").optional({nullable: true , checkFalsy: true}).isBoolean().withMessage("Invalid value"),
    ]
    var task_update_validate = [
 
      body("taskName").optional({nullable: true , checkFalsy: true}).isString().withMessage("Invalid taskName"),
      body("completed_taskName").optional({nullable: true , checkFalsy: true}).isBoolean().withMessage("Invalid value"),
    ]
  module.exports = {role_create_validate , role_update_validate ,User_create_validate , User_update_validate , task_create_validate , task_update_validate}