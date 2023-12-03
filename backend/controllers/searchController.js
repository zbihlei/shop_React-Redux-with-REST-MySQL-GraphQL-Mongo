import express  from "express";
const router = express.Router();

router.get("/search", (req, res) => {
    const { db } = req;
    const searchValue = req.query.name; 

    const query = `
    SELECT id, name, image, type, subtype FROM shop_db.beer WHERE name LIKE '%${searchValue}%'
    UNION
    SELECT id, name, image, type, subtype FROM shop_db.coctail WHERE name LIKE '%${searchValue}%'
    UNION
    SELECT id, name, image, type, subtype FROM shop_db.energetic WHERE name LIKE '%${searchValue}%'
    UNION
    SELECT id, name, image, type, subtype FROM shop_db.craft WHERE name LIKE '%${searchValue}%'
    UNION
    SELECT id, name, image, type, subtype FROM shop_db.wine WHERE name LIKE '%${searchValue}%'
    UNION
    SELECT id, name, image, type, subtype FROM shop_db.whiskey WHERE name LIKE '%${searchValue}%';
    
`;

    db.query(query, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

export default router;