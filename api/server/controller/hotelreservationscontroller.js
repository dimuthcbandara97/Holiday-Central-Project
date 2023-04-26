// let Userdb = require('../model/model')
let HotelReservationsDb = require('../model/hotelreservationsmodel')

// create and save new user

// exports.create = (req, res) => {
//     // validate the request
//     if(!req.body){
//         res.status(400).send({
//             message: "Content can not be empty!"
//         })
//         return 
//     }

//     // new user
//     const user = new HotelReservationsDb({
//         destination: req.body.destination,
//         check_in_date: req.body.check_in_date,
//         check_out_date: req.body.check_out_date,
//         star_rating: req.body.star_rating,
//         pricing: req.body.pricing,
//         room_selection: req.body.room_selection,
//         board_basis: req.body.board_basis,
//         facilities: req.body.facilities,
//     })

//     // save user in the database
//     user.save(user)
//       .then(data => {
//             // res.send(data)
//             res.send(data + "Added successfully")
//         })
//       .catch(err => {
//             res.status(500).send({
//                 message: err.message || "Some error occurred while creating the user."
//             })
//         })
// }
exports.create = (req, res) => {
    // validate the request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!",
      })
      return
    }
  
    // validate required fields
    const requiredFields = ["destination", "check_in_date", "check_out_date"]
    const missingFields = requiredFields.filter(field => !(field in req.body))
    if (missingFields.length) {
      res.status(400).send({
        message: `Missing required fields: ${missingFields.join(", ")}`,
      })
      return
    }
  
    // validate check-in and check-out dates
    const checkInDate = new Date(req.body.check_in_date)
    const checkOutDate = new Date(req.body.check_out_date)
    if (isNaN(checkInDate.getTime()) || isNaN(checkOutDate.getTime())) {
      res.status(400).send({
        message: "Invalid date format. Use YYYY-MM-DD.",
      })
      return
    }
    if (checkOutDate <= checkInDate) {
      res.status(400).send({
        message: "Check-out date must be after check-in date.",
      })
      return
    }
  
    // validate star rating
    const starRating = req.body.star_rating
    if (starRating !== undefined && (starRating < 1 || starRating > 5)) {
      res.status(400).send({
        message: "Star rating must be between 1 and 5.",
      })
      return
    }
  
    // validate pricing
    const pricing = req.body.pricing
    if (pricing !== undefined && (pricing < 0 || isNaN(pricing))) {
      res.status(400).send({
        message: "Invalid pricing.",
      })
      return
    }
  
    // new user
    const user = new HotelReservationsDb({
      destination: req.body.destination,
      check_in_date: checkInDate,
      check_out_date: checkOutDate,
      star_rating: starRating,
      pricing: pricing,
      room_selection: req.body.room_selection,
      board_basis: req.body.board_basis,
      facilities: req.body.facilities,
    })
  
    // save user in the database
    user.save(user)
      .then(data => {
        res.send(`${data} added successfully`)
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the hotel reservation.",
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