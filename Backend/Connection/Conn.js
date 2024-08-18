const mongoose = require("mongoose")

 const dbConn = (uri) => {
     mongoose.connect(uri).then( () => {
        console.log("Database Connected")
    }).catch(err => {
        console.log(err)
    })
     
}

exports.dbConn = dbConn;