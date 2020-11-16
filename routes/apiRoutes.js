const router = require("express").Router();
const connection = require("../db/connection");

router.get("/items", async(req, res) => {
    const items = await connection.query("SELECT * FROM items");
    res.send(items);
});

router.get("/pockets", async (req, res) => {
    const filteredPockets = await connection.query("SELECT DISTINCT pockets.name, items.pocket_id FROM items LEFT JOIN pockets ON items.pocket_id = pockets.id");
    const allPockets = await connection.query("SELECT * FROM pockets");
    
    res.send({
        filteredPockets,
        allPockets
    });

});


router.post("/item", async(req, res) => {
    const newItem = await connection.query("INSERT INTO items SET ?", req.body);
    console.table(newItem);
    res.status(200);
});


module.exports = router;
