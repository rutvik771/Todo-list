const TaskModel = require("../model/task-model");
const { validationResult } = require("express-validator");

const Addtask = function (req, res) {
  console.log(req.body);

  let task = new TaskModel({
    taskName: req.body.taskName,
    completed_taskName: req.body.completed_taskName,
    user: req.body.user,
  });

  const errors = validationResult(req);

  if (errors.isEmpty()) {
    task.save(function (err, data) {
      if (err) {
        console.log("err");
        res.json({ status: 401, message: err, data: {} });
      } else {
        res.json({ status: 200, message: " Task added", data: data });
      }
    });
  } else {
    res.json({ status: 401, message: errors.errors[0].msg, data: {} });
  }
};

const getAlltask = function (req, res) {
  TaskModel.find({})
    .exec(function (err, data) {
      if (err) {
        res.json({ status: 401, message: err, data: {} });
      } else {
        res.json({ status: 200, message: " Tasks are received", data: data });
      }
    });
};

const deletetask = function (req, res) {
  let taskId = req.params.taskId;

  TaskModel.deleteOne({ _id: taskId }, function (err, data) {
    if (err) {
      res.json({ status: 401, message: err, data: {} });
    } else {
      res.json({ status: 200, message: " Task is deleted", data: data });
    }
  });
};

const getTaskById = function (req, res) {
  let id = req.params.taskId;

  TaskModel.findById({ _id: id })
    .populate("user")
    .exec(function (err, data) {
      if (err) {
        res.json({ status: 401, message: err, data: {} });
      } else {
        res.json({ status: 200, message: " Task is received", data: data });
      }
    });
};

const updateTaskById = function (req, res) {
  let id = req.params.taskId;
  let taskName = req.body.taskName;
  let completed_taskName = req.body.completed_taskName;

  const errors = validationResult(req);

  if (errors.isEmpty()) {
    TaskModel.updateOne(
      { _id: id },
      {
        taskName: taskName,
        completed_taskName: completed_taskName,
      }
    )
      .populate("user")
      .exec(function (err, data) {
        if (err) {
          res.json({ msg: "err", status: -1, data: err });
        } else {
          res.json({ msg: "Task is updated..", status: 200, data: data });
        }
      });
  } else {
    res.json({ status: 401, message: errors.errors[0].msg, data: {} });
  }
};

module.exports = {
  Addtask,
  getAlltask,
  getTaskById,
  deletetask,
  updateTaskById,
};
