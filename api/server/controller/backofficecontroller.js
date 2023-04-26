// let Userdb = require('../model/model')
let BackOfficeStaffdb = require('../model/backofficestaffmodel')
const bcrypt = require('bcryptjs');


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
    const user = new BackOfficeStaffdb({
      name: req.body.name,
      password: req.body.password,
      email: req.body.email,
      gender: req.body.gender,
      status: req.body.status,
      imageurl: req.body.imageurl,
    });
  
    user.save()
      .then(data => {
        res.send(data + "Added successfully");
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || "Some error occurred while creating the user."
        });
      });
  };
  // exports.create = (req, res) => {
  //   const saltRounds = 10;
  //   bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
  //     if (err) {
  //       return res.status(500).send({
  //         message: "Error occurred while hashing password."
  //       });
  //     }
      
  //     const user = new BackOfficeStaffdb({
  //       name: req.body.name,
  //       password: hash,
  //       email: req.body.email,
  //       gender: req.body.gender,
  //       status: req.body.status,
  //       imageurl: req.body.imageurl,
  //     });
    
  //     user.save()
  //       .then(data => {
  //         res.send(data + "Added successfully");
  //       })
  //       .catch(err => {
  //         res.status(500).send({
  //           message: err.message || "Some error occurred while creating the user."
  //         });
  //       });
  //   });
  // };
  
exports.find = async (req, res) => {
  if(req.query.id){
      const id = req.query.id
      BackOfficeStaffdb.findById(id)
      .then(user => {
          res.send(user)
        })
      .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving the required user."
            })
        })

  }else{
      BackOfficeStaffdb.find()
  .then(user => {
      res.send(user)
    })
  .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving users."
        })
    })
  }

}

// exports.find = (req, res) => {
//   if(req.query.id){
//       const id = req.query.id
//       BackOfficeStaffdb.findById(id)
//       .then(user => {
//           res.send(user)
//         })
//       .catch(err => {
//             res.status(500).send({
//                 message: err.message || "Some error occurred while retrieving the required user."
//             })
//         })
//   }else{
//       BackOfficeStaffdb.find()
//       .then(users => {
//           const userList = []
//           users.forEach(user => {
//               const { name, email, password, gender, status, imageurl } = user
//               const hashedPassword = password
//               userList.push({
//                   name,
//                   email,
//                   password: hashedPassword,
//                   gender,
//                   status,
//                   imageurl,
//                   isPasswordMatch: bcrypt.compareSync(req.body.password, hashedPassword)
//               })
//           })
//           res.send(userList)
//       })
//       .catch(err => {
//             res.status(500).send({
//                 message: err.message || "Some error occurred while retrieving users."
//             })
//         })
//   }
// }

// Modify above code to suit a login form

// update a new identifed user by user id
exports.update = (req, res) => {
    if(!req.body){
        return res.status(404).send({message: "Data to update can not be empty."});
    }

    const id = req.params.id
    BackOfficeStaffdb.findByIdAndUpdate(id, req.body,{useFindAndModify: false})
    .then(data => {
        if(!data){
            res.status(404).send({message: "can not find user"})
        }else{
            res.send(data)
        }
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while updating the user."
        })
    })
}

// delete a user by user id
exports.delete = (req, res) => {
    
    if(!req.body){
        return res.status(404).send({message: "Data to update can not be empty."});
    }

    const id = req.params.id
    BackOfficeStaffdb.findByIdAndDelete(id)
    .then(data => {
        if(!data){
            res.status(404).send({message: "can not find user"})
        }else{
            res.send(data)
            // can use messge if required
        }
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while deleting the user."
        })
    })
}