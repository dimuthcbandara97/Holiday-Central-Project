// let Userdb = require('../model/model')
let BackOfficeStaffdb = require('../model/backofficestaffmodel')
const bcrypt = require('bcryptjs');

exports.create = (req, res) => {
    const { name, email, gender, status, imageurl, password } = req.body;
  
    // Hash the password using bcrypt
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
  
    // Create a new BackOfficeStaffdb object with the data from the request
    const user = new BackOfficeStaffdb({
      name,
      email,
      gender,
      status,
      imageurl,
      password: hash,
    });
  
    // Save the user object to the database
    user.save()
      .then(data => {
        res.status(200).send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || "Some error occurred while creating the user."
        });
      });
  };
  
  
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