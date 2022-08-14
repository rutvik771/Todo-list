const RoleModel = require("../model/role-model");
const { validationResult } = require("express-validator");

const Addrole = function (req, res) {
  let role = new RoleModel({
    roleId: req.body.roleId,
    roleName: req.body.roleName,
  });

  const errors = validationResult(req);

  if (errors.isEmpty()) {
    role.save(function (err, data) {
      if (err) {
        console.log(err);
        res.json({ status: 401, message: err, data: {} });
      } else {
        res.json({ status: 200, message: " role data added ", data: data });
      }
    });
  } else {
    res.json({ status: 401, message: errors.errors[0].msg, data: {} });
  }
};

//get by id
const getById = function (req, res) {
  let id = req.params.roleId;
  RoleModel.findById({ _id: id }, function (err, data) {
    if (err) {
      res.json({ status: 401, message: err, data: {} });
    } else {
      res.json({ status: 200, message: " role is received ", data: data });
    }
  });
};

const getAllroles = function (req, res) {
  RoleModel.find(function (err, data) {
    if (err) {
      res.json({ status: 401, message: err, data: {} });
    } else {
      res.json({ status: 200, message: " roles are received ", data: data });
    }
  });
};

//upadateBy Id
const updateRoleById = function (req, res) {
  let id = req.params.roleId;
  let roleName = req.body.roleName;

  const errors = validationResult(req);

  if (errors.isEmpty()) {
    RoleModel.updateOne(
      { _id: id },
      { roleName: roleName },
      function (err, data) {
        if (err) {
          res.json({ status: 401, message: err, data: {} });
        } else {
          res.json({ status: 200, message: " role are updated ", data: data });
        }
      }
    );
  } else {
    res.json({ status: 401, message: errors.errors[0].msg, data: {} });
  }
};


const deleterole = function (req, res) {
  let roleId = req.params.roleId;
  RoleModel.deleteOne({ _id: roleId }, function (err, data) {
    if (err) {
      res.json({ status: 401, message: err, data: {} });
    } else {
      res.json({ status: 200, message: " role is deleted ", data: data });
    }
  });
};

module.exports = { Addrole, getAllroles, getById, updateRoleById , deleterole };
