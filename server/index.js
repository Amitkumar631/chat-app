import path from 'path';
import { dirname } from 'path';
import express from 'express';
import address_api from './address.js';
import { fileURLToPath } from 'url';
import mongoose from "mongoose";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const connectDB=async()=>{
    try{
        const conn=await mongoose.connect("mongodb+srv://admin1:admin1@cluster0.sjxvx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
            useNewUrlParser: true, useUnifiedTopology: true 
        })
    console.log(`MongoDB connected:${conn}`);
    }
    catch(error){
        console.error(`Error:${error.message}`);
    }
}
connectDB();


const userSchema = mongoose.Schema({
    firstName: { type: String, required: true},
    lastName: { type: String, required: true},
    dateOfBirth: { type: Date, required: true},
})



const User = mongoose.model("User", userSchema);
const buildPath = path.join(__dirname, '..', 'build');
app.use(express.json());
app.use(express.static(buildPath));



app.post('/send', (req, res) => {
    console.log(req.body);
    res.send(req.body);
    
    address_api()
        .then(response => {
            console.log(response);
        })
        var myData = new User(req.body);
        myData.save()
          .try(()=> {
            res.send("item saved to database");
          })
          .catch(err => {
            res.status(400).send("unable to save to database");
          });
    /*const url = "https://random-data-api.com/api/address/random_address";
    https.get(url, (response) => {
        response.on("data", (data) => {
            const address = JSON.parse(data);
            const address_dict = {
                "uid": address.uid,
                "city": address.city,
                "postcode": address.postcode,
                "country": address.country
            }
            console.log("UID : ", address_dict["uid"]);
            console.log("CITY : ", address_dict["city"]);
            console.log("POST-CODE : ", address_dict["postcode"]);
            console.log("COUNTRY : ", address_dict["country"]);
        });
    });*/
});

app.listen(3030, () => {
    console.log('server start on port 3030');
});