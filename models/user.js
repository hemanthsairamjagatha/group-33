import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name: String,

    age: String,

    email: String
})

const User = mongoose.model('userschema',userSchema )
export default User