
const axios = require('axios');



// Home Route
exports.homeRoutes = (req,res) => {
    // Make a get request top /api/users
    axios.get('http://localhost:4000/api/users')
    .then(function (response) {
        
        res.render('index',{users: response.data});
    }).catch(err=>{

    })  
}
