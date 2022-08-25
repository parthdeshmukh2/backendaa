const jwt = require('jsonwebtoken');


const authentication = (req, res, next) => {
    if(!req.headers.token){
        return res.send("Please login again")
    }
    const user_token = req.headers.token.split(" ")[1]
    jwt.verify(user_token, "secret", function(err, decoded) {
        if(err){
            return res.send("Please login again")
        }
        console.log(decoded)
        req.body.Email = decoded.Email
        req.body.userId = decoded.userId
        next()
    });
}



module.exports = authentication
