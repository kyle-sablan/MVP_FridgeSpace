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

const inventorySchema = mongoose.Schema({
  fridgeId: Number,
  item: String,
  amount: String,
  needsDeletion: Boolean,
});

module.exports = connection;
