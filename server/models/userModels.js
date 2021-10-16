const mongoose=require("mongoose"); 


const userSchema = mongoose.Schema({
    firstName: { type: String, required: true},
    lastName: { type: String, required: true},
    dateOfBirth: { type: Date, required: true},
})



const User = mongoose.model("User", userSchema);
module.exports = User;
