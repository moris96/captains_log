const mongoose = require('mongoose')

// Make a Schema 
const logSchema = new mongoose.Schema({
    name: { type: String, required: true},
    color: { type: String, required: true},
    readyToEat: Boolean
})


// Make A Model From The Schema 

const Log = mongoose.model('Log', logSchema)
// Export the Model for Use in the App 

module.exports = Log 