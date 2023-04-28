
let PackageCheckoutDb = require('../../model/checkoutmodel/packagecheckoutmodel');

// create and save new user

exports.create = (req, res) => {
    // validate the request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!",
      })
      return
    }
  
    // validate required fields
    const requiredFields = [
      "destination",
      "speciality",
      "duration",
      "number_of_travellers",
      "price",
      "agent_name",
      "user_name",
      "user_email",
      "checkout_date",
      "additional_date"
    ]
    const missingFields = requiredFields.filter(field => !(field in req.body))
    if (missingFields.length) {
      res.status(400).send({
        message: `Missing required fields: ${missingFields.join(", ")}`,
      })
      return
    }
  
    // validate duration and number_of_travellers
    const duration = req.body.duration
    const number_of_travellers = req.body.number_of_travellers
    if (duration <= 0 || isNaN(duration)) {
      res.status(400).send({
        message: "Invalid duration.",
      })
      return
    }
    if (number_of_travellers <= 0 || !Number.isInteger(number_of_travellers)) {
      res.status(400).send({
        message: "Number of travellers must be a positive integer.",
      })
      return
    }
  
    // validate price and package_rating
    const price = req.body.price
    const package_rating = req.body.package_rating
    if (price <= 0 || isNaN(price)) {
      res.status(400).send({
        message: "Invalid price.",
      })
      return
    }
    if (package_rating !== undefined && (package_rating < 1 || package_rating > 5)) {
      res.status(400).send({
        message: "Package rating must be between 1 and 5.",
      })
      return
    }
  
    // new user
    const user = new PackageCheckoutDb({
      destination: req.body.destination,
      speciality: req.body.speciality,
      duration: duration,
      number_of_travellers: number_of_travellers,
      price: price,
      package_rating: package_rating,
    })
  
    // save user in the database
    user.save(user)
      .then(data => {
        res.send(`${data} added successfully`)
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the package reservation.",
        })
      })
  }
  exports.create = (req, res) => {
    // validate the request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!",
      })
      return
    }
  
    // validate required fields
    const requiredFields = [
      "destination",
      "speciality",
      "duration",
      "number_of_travellers",
      "price",
    ]
    const missingFields = requiredFields.filter(field => !(field in req.body))
    if (missingFields.length) {
      res.status(400).send({
        message: `Missing required fields: ${missingFields.join(", ")}`,
      })
      return
    }
  
    // validate duration and number_of_travellers
    const duration = req.body.duration
    if (duration <= 0 || isNaN(duration)) {
      res.status(400).send({
        message: "Invalid duration.",
      })
      return
    }
  
  
    // validate price and package_rating
    const price = req.body.price
    const package_rating = req.body.package_rating
    if (price <= 0 || isNaN(price)) {
      res.status(400).send({
        message: "Invalid price.",
      })
      return
    }
    if (package_rating !== undefined && (package_rating < 1 || package_rating > 5)) {
      res.status(400).send({
        message: "Package rating must be between 1 and 5.",
      })
      return
    }
  
    // new user
    const user = new PackageCheckoutDb({
      destination: req.body.destination,
      speciality: {
        honeymoon: req.body.honeymoon,
        beach_holiday: req.body.beach_holiday,
        wildlife_excursion: req.body.wildlife_excursion,
        family_holiday: req.body.family_holiday
      },
      duration: duration,
      number_of_travellers: req.body.number_of_travellers,
      price: price,
      package_rating: package_rating,
      agent_name: req.body.agent_name,
      user_email: req.body.user_email,
      checkout_date: req.body.checkout_date,
      aditional_note: req.body.aditional_note,
      user_name: req.body.user_name,
    })
  
    // save user in the database
    user.save(user)
      .then(data => {
        res.send(`${data} added successfully`)
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the package reservation.",
        })
      })
  }
    
// retreive and return all users
exports.find = (req, res) => {
        if(req.query.id){
            const id = req.query.id
            PackageCheckoutDb.findById(id)
            .then(user => {
                res.send(user)
              })
            .catch(err => {
                  res.status(500).send({
                      message: err.message || "Some error occurred while retrieving the required user."
                  })
              })
        }else{
            PackageCheckoutDb.find()
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
    PackageCheckoutDb.findByIdAndUpdate(id, req.body,{useFindAndModify: false})
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
    PackageCheckoutDb.findByIdAndDelete(id)
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