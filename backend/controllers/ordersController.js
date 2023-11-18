import express from "express";
const router = express.Router();


router.post("/", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    const { db } = req;
    const { client, basket } = req.body;

    const { name, email, surname, phone } = client;

    const values = basket.map((item) => [
        item.name,
        item.type,
        item.image,
        item.price,
        item.volume,
        item.path,
        name,
        surname,
        phone,
        email,
        new Date().toISOString().slice(0, 19).replace("T", " "),
    ]);

    const q =
        "INSERT INTO orders (`name`, `type`, `image`, `price`, `volume`, `path`, `firstname`, `surname`, `phone`, `email`, `date`) VALUES ?";

    db.query(q, [values], (err, data) => {
        if (err) {
            console.error("SQL error", err);
            return res.status(500).json({ error: "order create error" });
        }
        return res.json({ message: "order created!" });
    });
});


router.get("/", (req, res) => {
    const { db } = req;
    const { mail } = req.query;
    const q = `SELECT * FROM orders WHERE email = '${mail}'`;
    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

router.get("/all", (req, res) => {
    const { db } = req;
    const q = "SELECT * FROM orders";
    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

export default router;
