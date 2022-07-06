
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const Contact = require('./model/contact');
const db = mongoose.connection;
const morgan = require('morgan');
const path = require('path')

const uri = 'mongodb+srv://sammy:I82uYGSd7ErQT1Rf@cluster0.n6phw.mongodb.net/sammy?retryWrites=true&w=majority';

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

db.on('error', console.error.bind(console, "conneection error:"));
db.once('open', () => {
    console.log(`Database is connected to: ${db.name} `);
})


app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(morgan("dev"))
app.use(bodyParser.json());
app.use(cors())

let routes = require("./routes/routes");
routes(app);

const port = process.env.PORT || 8080;

app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/index.html')));

app.listen(port, () => console.log(`listening on port ${port}`))