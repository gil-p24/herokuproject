const mongoose = require('mongoose')
const Schema = mongoose.Schema

 logSchema = new Schema(
     {
         title: {type: String},
         entry: {type: String},

     }, {timestamps: true}
)

const  Log = mongoose.model('Log', logSchema)

module.exports = Log