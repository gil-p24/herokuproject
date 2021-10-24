const mongoose = require('mongoose')
const Schema = mongoose.Schema

 logSchema = new Schema(
     {
         title: {type: String},
         img:  {type: String, required: true},
         notes: {type: String},

     }, {timestamps: true}
)

const  Log = mongoose.model('Log', logSchema)

module.exports = Log