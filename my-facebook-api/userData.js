const mongoose = require("mongoose")

const userDetailsSchema = new mongoose.Schema(
 {
    firstname: String,
    surname: String,
    email: {
      type: String,
       unique: true
      },
    password: String,

    profilePicture: {
      type: String,
      default : ""
    },
    coverPicture:{
      type: String,
      default: ""
    },
    followers: {
      type: Array,
      default : []
    },
    following: {
      type: Array,
      default : []
    },
    isAdmin: {
      type: Boolean,
      default: false,
    }

 },
 {
    collection : "Userinfo"
 }
)

mongoose.model("UserInfo", userDetailsSchema)