// let Userdb = require('../model/model')
let FlightReservationDb = require('../model/flightreservationmodel')


exports.create = (req, res) => {
  // validate the request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // check for required fields
  const requiredFields = [
    "departure_destination",
    "arrival_destination",
    "departure_date",
    "arrival_date",
    "cabin_class",
    "duration",
    "price",
    "airline",
  ];
  const missingFields = requiredFields.filter((field) => !req.body[field]);
  if (missingFields.length) {
    res.status(400).send({
      message: `Missing required fields: ${missingFields.join(", ")}`,
    });
    return;
  }

  // validate data types
  const validDatePattern = /^\d{4}-\d{2}-\d{2}$/;
  if (
    !validDatePattern.test(req.body.departure_date) ||
    !validDatePattern.test(req.body.arrival_date)
  ) {
    res.status(400).send({
      message: "Invalid date format. Use YYYY-MM-DD.",
    });
    return;
  }
  if (req.body.departure_destination === req.body.arrival_destination) {
    res.status(400).send({
      message: "Departure and arrival destinations cannot be the same.",
    });
    return;
  }

  const departureDate = new Date(req.body.departure_date);
  const arrivalDate = new Date(req.body.arrival_date);
  if (
    departureDate >= arrivalDate ||
    departureDate < Date.now() ||
    arrivalDate < Date.now()
  ) {
    res.status(400).send({
      message: "Invalid date.",
    });
    return;
  }
  // validate field values for cabin class
  const allowedCabinClasses = ["Economy", "Business", "First"];
  if (!allowedCabinClasses.includes(req.body.cabin_class)) {
    res.status(400).send({
      message: `Invalid cabin class. Allowed values: ${allowedCabinClasses.join(
        ", "
      )}`,
    });
    return;
  }

  // validate field values for airlines
  const allowedAirlines = ["Sri Lankan", "Emirates", "Philipines","Air France"];
  if (!allowedAirlines.includes(req.body.airline)) {
    res.status(400).send({
      message: `Invalid Airline. Allowed values: ${allowedAirlines.join(
        ", "
      )}`,
    });
    return;
  }

  // Validate field values for seat_selection
  const allowedSeatSelection = ["Basic Widow", "Isle", "Middle Seat"];
  if (!allowedSeatSelection.includes(req.body.seat_selection)) {
    res.status(400).send({
      message: `Invalid Seat Selection. Allowed values: ${allowedSeatSelection.join(
        ", "
      )}`,
    });
    return;
  }

  // Validate field values for meal_preferences
  const allowedMeals = ["Sri Lankan", "Indian", "Italian"];
  if (!allowedMeals.includes(req.body.meal_preferences)) {
    res.status(400).send({
      message: `Invalid Meal. Allowed values: ${allowedMeals.join(
        ", "
      )}`,
    });
    return;
  }

  // new user
  const user = new FlightReservationDb({
    departure_destination: req.body.departure_destination,
    arrival_destination: req.body.arrival_destination,
    departure_date: req.body.departure_date,
    arrival_date: req.body.arrival_date,
    cabin_class: req.body.cabin_class,
    duration: req.body.duration,
    meal_preferences: req.body.meal_preferences,
    seat_selection: req.body.seat_selection,
    price: req.body.price,
    airline: req.body.airline,
  });
  // save user in the database
  user.save(user)
    .then((data) => {
      res.send(`${data} added successfully`);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while creating the flight reservation.",
      });
    });
};

// Display the flight reservation
exports.find = (req, res) => {
  if (req.query.id) {
    const id = req.query.id
    FlightReservationDb.findById(id)
      .then(user => {
        res.send(user)
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || "Some error occurred while retrieving the required user."
        })
      })
  } else {
    FlightReservationDb.find().limit(3)
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

// Find by credentials
exports.findBy = (req, res) => {
  const { price, duration, airline } = req.query;
  const query = {};

  if (price) {
    query.price = price;
  }
  if (duration) {
    query.duration = duration;
  }
  if (airline) {
    query.airline = airline;
  }

  FlightReservationDb.find(query)
    .then(flightReservations => {
      if (flightReservations.length === 0) {
        return res.status(404).send({
          message: "No flight reservations matching the given criteria found."
        });
      }
      res.send(flightReservations);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving flight reservations."
      });
    });
};

// exports.findBy = (req, res) => {
//   const { priceMin, priceMax, duration, airline } = req.query;
//   const query = {};

//   if (priceMin && priceMax) {
//     query.price = { $gte: priceMin, $lte: priceMax };
//   }
//   if (duration) {
//     query.duration = duration;
//   }
//   if (airline) {
//     query.airline = airline;
//   }

//   FlightReservationDb.find(query)
//     .then(flightReservations => {
//       if (flightReservations.length === 0) {
//         return res.send({
//           message: "No flight reservations matching the given criteria found."
//         });
//       }
//       res.send(flightReservations);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving flight reservations."
//       });
//     });
// };

exports.findBySearch = (req, res) => {
  const { departure_destination,
  arrival_destination,
  departure_date,
  arrival_date,
  cabin_class, } = req.query;
  const query = {};
  
  if (departure_destination) {
    query.departure_destination = departure_destination;
  }
  if (arrival_destination) {
    query.arrival_destination = arrival_destination;
  }
  if (departure_date) {
    query.departure_date = departure_date;
  }
  if (arrival_date) {
    query.arrival_date = arrival_date;
  }
  if (cabin_class) {
    query.cabin_class = cabin_class;
  }

  FlightReservationDb.find(query)
    .then(flightReservations => {
      if (flightReservations.length === 0) {
        return res.send({
          message: "No flight reservations matching the given criteria found."
        });
      }
      res.send(flightReservations);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving flight reservations."
      });
    });
};


exports.countBy = (req, res) => {
  const { price, duration, airline } = req.query;
  const query = {};

  if (price) {
    query.price = price;
  }
  if (duration) {
    query.duration = duration;
  }
  if (airline) {
    query.airline = airline;
  }

  FlightReservationDb.countDocuments(query)
    .then(count => {
      res.send({ count: count });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while retrieving the count of flight reservations."
      });
    });
};

exports.countBySearch = (req, res) => {
  const { departure_destination,
    arrival_destination,
    departure_date,
    arrival_date,
    cabin_class, } = req.query;
    const query = {};
    
    if (departure_destination) {
      query.departure_destination = departure_destination;
    }
    if (arrival_destination) {
      query.arrival_destination = arrival_destination;
    }
    if (departure_date) {
      query.departure_date = departure_date;
    }
    if (arrival_date) {
      query.arrival_date = arrival_date;
    }
    if (cabin_class) {
      query.cabin_class = cabin_class;
    }

  FlightReservationDb.countDocuments(query)
    .then(count => {
      res.send({ count: count });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while retrieving the count of flight reservations."
      });
    });
};
// update a new identifed user by user id
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(404).send({ message: "Data to update can not be empty." });
  }

  const id = req.params.id
  FlightReservationDb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({ message: "can not find user" })
      } else {
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

  if (!req.body) {
    return res.status(404).send({ message: "Data to update can not be empty." });
  }

  const id = req.params.id
  FlightReservationDb.findByIdAndDelete(id)
    .then(data => {
      if (!data) {
        res.status(404).send({ message: "can not find user" })
      } else {
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

// count by all credentials




