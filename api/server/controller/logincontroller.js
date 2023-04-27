let BackOfficeStaffdb = require('../model/backofficestaffmodel')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieparser = require('cookie-parser');



// import jwt from "jsonwebtoken";

// const bcrypt = require('bcryptjs');

exports.validateCreateRequest = (req, res, next) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  if (!req.body.name || !req.body.password || !req.body.email) {
    return res.status(400).send({
      message: "Name, password, and email are required fields."
    });
  }

  const emailRegex = /^\S+@\S+\.\S+$/;
  if (!emailRegex.test(req.body.email)) {
    return res.status(400).send({
      message: "Invalid email address."
    });
  }

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!passwordRegex.test(req.body.password)) {
    return res.status(400).send({
      message: "Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one number, and one special character."
    });
  }

  if (req.body.gender && req.body.gender !== "male" && req.body.gender !== "female") {
    return res.status(400).send({
      message: "Invalid gender value."
    });
  }

  if (req.body.imageurl) {
    const urlRegex = /^https?:\/\/\S+\.\S+$/;
    if (!urlRegex.test(req.body.imageurl)) {
      return res.status(400).send({
        message: "Invalid image URL."
      });
    }
  }


  next();
};


exports.create = (req, res) => {
  const saltRounds = 10;
  bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
    if (err) {
      return res.status(500).send({
        message: "Error occurred while hashing password."
      });
    }

    const user = new BackOfficeStaffdb({
      name: req.body.name,
      password: hash,
      email: req.body.email,
      gender: req.body.gender,
      status: req.body.status,
      imageurl: req.body.imageurl,
    });

    user.save()
      .then(data => {
        const token = jwt.sign({ userId: data._id }, 'your-secret-key');
        res.send({ user: data, token });
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || "Some error occurred while creating the user."
        });
      });
  });
};


exports.find = async (req, res) => {

  if (req.query.name && req.query.password) {
    const name = req.query.name;
    const password = req.query.password;

    // Find the user based on their name
    BackOfficeStaffdb.findOne({ name: name })
      .then(user => {
        if (!user) {
          // If the user is not found, send an error response
          return res.status(404).send({ message: 'User not found' });
        }

        // Compare the password with the hashed password in the database
        bcrypt.compare(password, user.password, (err, result) => {
          if (err) {
            // If there is an error, send an error response
            return res.status(500).send({ message: 'Error comparing passwords' });
          }

          if (result) {
            const token = jwt.sign({ userId: user._id }, 'your-secret-key');
            // Set the token as a cookie
            res.cookie('jwt', token);
            return res.send({ user, token });
          } else {
            // If the passwords do not match, send an error response
            return res.status(401).send({ message: 'Invalid credentials' });
          }
        });
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || 'Some error occurred while retrieving the user'
        });
      });
  } else {
    // If the name and password are not provided, retrieve all users
    BackOfficeStaffdb.find()
      .then(users => {
        res.send(users);
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || 'Some error occurred while retrieving users'
        });
      });
  }
};
