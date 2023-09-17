"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const port = process.env.PORT || 5000;
// this is where we should connect to our database
// connectDB()
// initialize express framework
var app = (0, express_1.default)();
app.use(express_1.default.json()); // we can now parse incoming requests with JSON payloads. aka we can parse JSON requests
app.use(express_1.default.urlencoded({ extended: false })); // allows for a JSON-like experience with URL-encoded objects, so it keeps the complexity of the data we are dealing with lower
// initialize where our RESTFUL endpoints are going to be located at, and what they should respond given a request
// use our error handler middleware
// start our server listening on to a port
app.listen(port, () => console.log(`Listening on port ${port} hahahaha`));
//# sourceMappingURL=server.js.map