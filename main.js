const express = require("express");
const app = express();
const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

/* At this point the client will displat CANNOT GET / as no route has been yet created for the 
/ route */

app.get("/", (req, res) => {
    res.send("What is love?");
})

/* We install NODEMON package so we do not have to constantly refresh the server. 
The command is npm install -D nodemon */

/* -D dependencies are just for developers, they do not deploy in production */