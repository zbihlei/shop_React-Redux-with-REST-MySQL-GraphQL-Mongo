import express  from "express";
const router = express.Router();

router.get("/", (req, res) => {
    const { db } = req; 
    const q = "SELECT * FROM shop_db.general";
    db.query(q, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

export default router;
