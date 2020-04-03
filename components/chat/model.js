// const mongoose = require('mongoose');

// const Schema = mongoose.Schema;

// const mySchema = new Schema({
//     users: [
//         {
//         type : Schema.ObjectId,
//         ref: 'User'
//         }
//     ]
// });

// const model = mongoose.model('Chat',mySchema);
// module.exports= model;


const mongoose = require('mongoose');

constSchema = mongoose.Schema;

const mySchema = constSchema({
  users: [
    {
      type: constSchema.Types.ObjectId,
      ref: "User"
    }
  ]
});

const model = mongoose.model("Chat", mySchema);

module.exports = model;