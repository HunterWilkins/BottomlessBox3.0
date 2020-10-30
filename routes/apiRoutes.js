const router = require("express").Router();
const connection = require("../connection");

router.get("/items", async(req, res) => {
    const items = await connection.query("SELECT * FROM items");
    console.table(items);
    res.send(items);
})

router.get("/pockets/:filter", async (req, res) => {
    console.log("Getting the Relevant Pockets...");
    if (req.params.filter === "filtered") {
        const pockets = await connection.query("SELECT DISTINCT pockets.name, items.pocket_id FROM items LEFT JOIN pockets ON items.pocket_id = pockets.id");
    
        console.table(pockets);
        res.send(pockets);
    }

    else {
        const pockets = await connection.query("SELECT * FROM pockets");
        console.table(pockets);
        res.send(pockets);
    }

});


router.post("/item", async(req, res) => {
    const newItem = await connection.query("INSERT INTO items SET ?", req.body);
    console.table(newItem);
    res.status(200);
});


module.exports = router;
