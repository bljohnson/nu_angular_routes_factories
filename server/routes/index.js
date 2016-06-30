var express = require("express");
var router = express.Router();

//PRIVATE VAR
var something = 1;

//PUBLIC VAR
router.get("/cats", function(req,res){
    res.send("Meow");
});

module.exports = router;
