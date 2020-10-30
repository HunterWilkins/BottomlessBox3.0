const router = require("express").Router();

router.get("/test", (req, res) => {
    res.send("API Route Good to Go");
});

module.exports = router;
