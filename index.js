import express from "express";
import mongoose from "mongoose";
import jsonwebtoken from "jsonwebtoken";
import bodyParser from "body-parser";
import route from "./src/routes/ecommerceRoute.js";

const app = express();

const PORT = 8081;

//Mongoose
mongoose.set('strictQuery', true);
mongoose.promise = global.Promise;
mongoose.connect('mongodb://localhost/ECdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//bodyParser
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

//Jsonwebtoken
app.use((req, res, next) => {
    if(req.headers.authorization && req.headers.authorization.split(' ')[0]){
        const decoded = jsonwebtoken.verify(req.headers.authorization.split(' ')[1], 'JhayCodes');
            req.user = decoded;
            next();
    }else{
        req.user = undefined;
        next();
    }
})


route(app);

app.get('/', (req, res) => {
    res.send(`Node and Express app Running on port${PORT}`);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});