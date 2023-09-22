// This is all the imports from our dependencies, including Express, dotenv for development, and our client that connects to AWS RDS
import express from 'express';
import path from 'path';
const dotenv = require("dotenv").config();
import client from './config/db'
const { errorHandler } = require("./middleware/errorMiddleware");


const port: string | number = process.env.PORT || 5000;
// connects to our AWS RBS postgres database
client.connect()

// initialize express framework
var app = express();
app.use(express.json()); // we can now parse incoming requests with JSON payloads. aka we can parse JSON requests
app.use(express.urlencoded({ extended: false })); // allows for a JSON-like experience with URL-encoded objects, so it keeps the complexity of the data we are dealing with lower

// initialize where our RESTFUL endpoints are going to be located at, and what they should respond given a request
// app.use("api/users", )

app.post('/users', (req, res) => {
    if (req.query.username && req.query.email && req.query.password) {
        console.log('Request received', new Date());
        client.connect(function(err) {
            client.query(`INSERT INTO user_info.users (username, email, password, created_on, last_login) VALUES ('${req.query.username}', '${req.query.email}', '${req.query.password}', to_timestamp(${Date.now()}), to_timestamp(${Date.now()}))`, function(err, result) {
                if (err) res.status(400).json(err.message);
                if (result) res.status(200).json({username: req.query.username, email: req.query.email, password: req.query.password});
            });
        });
    } else {
        console.log('Missing a parameter');
    }
});

app.get('/users', (req, res) => {
	client.query(`SELECT * FROM user_info.users`, (err, qRes) => {
		if (!err) {
			res.status(200).json({ "message" : qRes})
		}
	})
})

// use our error handler middleware
app.use(errorHandler)

// start our server listening on to a port
app.listen(port, () => console.log(`Listening on port ${port}`));
