const basics = () => { 
    const express = require("express");
    const app = express();
    const PORT = process.env.PORT || 4001;

    const path = require("path"); // a Node module that deals with files and paths

    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
    });

    /* At this point the client will displat CANNOT GET / as no route has been yet created for the 
    / route */

    /*app.get("/", (req, res) => {
        res.send("What is love? Baby, hurt me not!"); res.send is not as used. 
        res.sendFile(path.join/*as discussed in Node tutorial(__dirname, "public", "index.html"));
    })*/

    /* We install NODEMON package so we do not have to constantly refresh the server. 
    The command is npm install -D nodemon */

    /* -D dependencies are just for developers, they do not deploy in production */

    /* We create a script called DEV and run it with npm run dev. In it we create a "nodemon main" as to
    have the server started automatically on this comand. */


    /***************************************** SETTING UP A STATIC FOLDER */

    /* .use() is a method for when we include middle ware */
    app.use(express.static(path.join(__dirname, "public")));
}

const middlewareAndRoutes = () => {

    const members = require("./Members");
    const express = require("express");
    const moment = require("moment");
    const app = express();
    const PORT = process.env.PORT || 4001;

    

    app.listen(PORT, () => {
        console.log("The server has been started at port number " + PORT);
    });

    /* Middleware function */
    const logger = (req, res, next) => {
        console.log(`${req.protocol}://${req.get("host")}${req.originalUrl}: ${moment().format()}`);
        next();
    }

    /* Initializing middleware */
    app.use(logger);

    /* When hitting the following route, we return the JSON object MEMBERS. We can "hit" this route using
    React or Vue or Angular. */
    app.get("/api/members", (req, res) => {
        //res.json(members);
        res.send(`
        <h1>${members[0].name} are the boss of: </h1>
        <p>${members[1]} and ${members[2]}`)
    })

    /** Moment is a NPM package that deals with date formating npm install moment */
}

const express = require("express");
const app = express();
const PORT = process.env.PORT || 4001;

const bodyParser = require("body-parser");

const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

/** Members API Routes */
app.use("/api/members", require("./routes/api/members")); // imports and uses the Members routes from the API folder

app.listen(PORT, () => {
    console.log(`Server started on port number: ${PORT}`)
});

/* Body parser, middleware */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); // allows us to handle URL encoded data


 