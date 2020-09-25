const mongoose = require("mongoose")

const whatsappRoomsSchema = mongoose.Schema({
  roomName: String,
  roomSeed: Number,
  messageContents: Array,
  name: String,
  timestamp: String,
  received: Boolean
})

module.exports = mongoose.model("rooms", whatsappRoomsSchema)
