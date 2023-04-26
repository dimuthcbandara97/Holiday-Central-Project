// let Userdb = require('../model/model')
let HotelReservationsDb = require('../model/hotelreservationsmodel')

// create and save new user

exports.create = (req, res) => {
    // validate the request
    if(!req.body){
        res.status(400).send({
            message: "Content can not be empty!"
        })
        return 
    }

    // new user
    const user = new HotelReservationsDb({
        destination: req.body.destination,
        check_in_date: req.body.check_in_date,
        check_out_date: req.body.check_out_date,
        star_rating: req.body.star_rating,
        pricing: req.body.pricing,
        room_selection: req.body.room_selection,
        board_basis: req.body.board_basis,
        facilities: req.body.facilities,
    })

    // save user in the database
    user.save(user)
      .then(data => {
            // res.send(data)
            res.redirect('/add-user')
        })
      .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the user."
            })
        })
}

// retreive and return all users
exports.find = (req, res) => {
        if(req.query.id){
            const id = req.query.id
            HotelReservationsDb.findById(id)
            .then(user => {
                res.send(user)
              })
            .catch(err => {
                  res.status(500).send({
                      message: err.message || "Some error occurred while retrieving the required user."
                  })
              })
        }else{
            HotelReservationsDb.find()
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
// Modify above code to suit a login form

// update a new identifed user by user id
exports.update = (req, res) => {
    if(!req.body){
        return res.status(404).send({message: "Data to update can not be empty."});
    }

    const id = req.params.id
    HotelReservationsDb.findByIdAndUpdate(id, req.body,{useFindAndModify: false})
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
    HotelReservationsDb.findByIdAndDelete(id)
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