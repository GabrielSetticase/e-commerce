const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
    res.send("Estoy en inicio de sesion")
});

module.exports = router;