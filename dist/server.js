import express from 'express';
const port = process.env.PORT || 5000;
// this is where we should connect to our database
// connectDB()
// initialize express framework
var app = express();
app.use(express.json()); // we can now parse incoming requests with JSON payloads. aka we can parse JSON requests
app.use(express.urlencoded({ extended: false })); // allows for a JSON-like experience with URL-encoded objects, so it keeps the complexity of the data we are dealing with lower
// initialize where our RESTFUL endpoints are going to be located at, and what they should respond given a request
// use our error handler middleware
// start our server listening on to a port
app.listen(port, () => console.log(`Listening on port ${port}!`));
//# sourceMappingURL=server.js.map