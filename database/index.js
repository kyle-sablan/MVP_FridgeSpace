const mongoose = require("mongoose");
const connection = mongoose.connect("mongodb://localhost/fridgespace");

const fridgeSchema = mongoose.Schema({
  fridgeId: Number,
  name: String,
  address: String,
  coordinates: {
    lat: Number,
    lon: Number,
  },
  active: Boolean,
  note: String,
  updatedAt: Date,
  host: String,
});

const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  username: String,
  password: String,
  email: String,
  isHost: Boolean,
  hostedFridges: Array,
  savedFridges: Array,
  activity: Array
  avatar: Number,

});

const inventorySchema = mongoose.Schema({
  fridgeId: Number,
  item: String,
  amount: String,
  needsDeletion: Boolean,
});

module.exports.fridgeSchema = fridgeSchema;
module.exports.userSchema = userSchema;
module.exports.inventorySchema = inventorySchema;
