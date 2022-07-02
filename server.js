require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const Contact = require('./model/contact');
const db = mongoose.connection;
const morgan = require('morgan');
const path = require('path')

const uri = process.env.MONGODB_URI;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

db.on('error', console.error.bind(console, "conneection error:"));
db.once('open', () => {
    console.log(`Database is connected to: ${db.name} `);
})



app.use(morgan("dev"))
app.use(cors())

let routes = require("./routes/routes");
routes(app);

const port = process.env.PORT || 8080;

app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/index.html')));

app.listen(port, () => console.log(`listening on port ${port}`))