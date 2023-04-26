// let Userdb = require('../model/model')
let TravelAgentDb = require('../model/travelagentmodel')

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
//     const user = new TravelAgentDb({
//         name: req.body.name,
//         password: req.body.password,
//         email: req.body.email,
//         gender: req.body.gender,
//         status: req.body.status,
//         imageurl: req.body.imageurl,
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
            message: "Content can not be empty!"
        });
        return;
    }

    // validate the inputs
    if (!req.body.name || !req.body.password || !req.body.email) {
        res.status(400).send({
            message: "Name, password, and email are required fields!"
        });
        return;
    }

    if (!isValidEmail(req.body.email)) {
        res.status(400).send({
            message: "Email is not a valid format!"
        });
        return;
    }

    if (!isValidPassword(req.body.password)) {
        res.status(400).send({
            message: "Password is not a valid format!"
        });
        return;
    }

    if (req.body.gender && req.body.gender !== "male" && req.body.gender !== "female") {
        res.status(400).send({
            message: "Gender must be 'male' or 'female'!"
        });
        return;
    }

    const validStatuses = ["active", "inactive", "suspended"];
    if (req.body.status && !validStatuses.includes(req.body.status)) {
        res.status(400).send({
            message: "Status must be one of 'active', 'inactive', or 'suspended'!"
        });
        return;
    }

    // new user
    const user = new TravelAgentDb({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status,
        imageurl: req.body.imageurl,
    });

    // save user in the database
    user.save(user)
        .then(data => {
            // res.send(data)
            res.send(data + "Added successfully");
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the user."
            });
        });
}

function isValidEmail(email) {
    // use a regular expression to validate the email format
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
}

function isValidPassword(password) {
    // check that the password is at least 8 characters long and contains both letters and numbers
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
}


// retreive and return all users
exports.find = (req, res) => {
    if (req.query.id) {
        const id = req.query.id
        TravelAgentDb.findById(id)
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred while retrieving the required user."
                })
            })
    } else {
        TravelAgentDb.find()
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
    if (!req.body) {
        return res.status(404).send({ message: "Data to update can not be empty." });
    }

    const id = req.params.id
    TravelAgentDb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
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
    TravelAgentDb.findByIdAndDelete(id)
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