const UserModel = require("../model/usermodel");
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const Adduser = function (req, res) {
  console.log(req.body);
  let password = req.body.password;
  let encpassword = bcrypt.hashSync(password, 10);

  let user = new UserModel({
    name: req.body.name,
    email: req.body.email,
    password: encpassword,
    gender: req.body.gender,
    dateofbirth: req.body.dateofbirth,
    isAdmin: req.body.isAdmin,
  });

  const errors = validationResult(req);

  if (errors.isEmpty()) {
    user.save(function (err, data) {
      if (err) {
        console.log(err);
        res.json({ status: 401, message: err, data: {} });
      } else {
        console.log(data.isAdmin);
        if (data.isAdmin == true) {
          const Access_token = jwt.sign(
            { _id: data._id, email: data.email },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "1h" }
          );
          console.log(Access_token);
        }
        res.json({ status: 200, message: " User data added ", data: data });
      }
    });
  } else {
    res.json({ status: 401, message: errors.errors[0].msg, data: {} });
  }
};

const getAlluser = function (req, res) {
  UserModel.find(function (err, data) {
    if (err) {
      res.json({ status: 401, message: err, data: {} });
    } else {
      res.json({ status: 200, message: " Users data received ", data: data });
    }
  });
};

const getuserById = function (req, res) {
  let id = req.params.userId;
  UserModel.findById({ _id: id }, function (err, data) {
    if (err) {
      res.json({ status: 401, message: err, data: {} });
    } else {
      res.json({ status: 200, message: " User data received ", data: data });
    }
  });
};

//updateuserbyid

const updateUser = function (req, res) {
  let id = req.params.userId;
  let name = req.body.name;
  let email = req.body.email;
  let gender = req.body.gender;
  let dateofbirth = req.body.dateofbirth;

  const errors = validationResult(req);

  if (errors.isEmpty()) {
    UserModel.updateOne(
      { _id: id },
      { name: name, email: email, gender: gender, dateofbirth: dateofbirth },
      function (err, data) {
        if (err) {
          res.json({ status: 401, message: err, data: {} });
        } else {
          res.json({ status: 200, message: " User data updated ", data: data });
        }
      }
    );
  } else {
    res.json({ status: 401, message: errors.errors[0].msg, data: {} });
  }
};

const deleteuser = function (req, res) {
  let userId = req.params.userId;

  UserModel.deleteOne({ _id: userId }, function (err, data) {
    if (err) {
      res.json({ status: 401, message: err, data: {} });
    } else {
      res.json({ status: 200, message: " User data deleted ", data: data });
    }
  });
};

const login_user = function (req, res) {
  let email = req.body.email;
  let password = req.body.password;

  let isCorrect = false;

  UserModel.findOne({ email: email }, function (err, data) {
    if (data) {
      let ans = bcrypt.compareSync(password, data.password);
      if (ans == true) {
        isCorrect = true;
      }
    }
    if (isCorrect == false) {
      res.json({ status: 401, message: "invalid credentials", data: {} });
    } else {
      res.json({ status: 200, message: "Login successful..", data: data });
    }
  });
};

module.exports = {
  Adduser,
  getAlluser,
  getuserById,
  updateUser,
  deleteuser,
  login_user,
};
