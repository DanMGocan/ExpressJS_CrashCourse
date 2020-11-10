const express = require("express");
const router = express.Router(); // Express router to help with routes
const members = require("../../Members.js");


router.get("/", (req, res) => res.json(members));

/* Return the object in the members array which maches with the ID === req.params.id condition */
router.get("/:id", (req, res) => {

    const found = members.some(member => {
        return member.id === parseInt(req.params.id)
    });
/** It is important to have 404 responses if information request was not found */
    if(found) {
        res.json(members.filter(member => {
            return member.id === parseInt(req.params.id);
        }))
    } else {
        console.log(found);
        res.status(400).json({msg: `No member with ID of ${req.params.id} was found!`});
    }
    
});


/* When sending data, it needs a head (content type, etc) and a body (json) */
router.post("/", (req, res) => {
    res.send(req.body);
})

module.exports = router;