import express from "express";
const router = express.Router();

router.get("/energetic", (req,res)=>{
    const { db } = req;
    const q = "SELECT * FROM shop_db.energetic";
    db.query(q,(err,data)=>{
        if(err) return  res.json(err);
        return res.json(data);
    })
});

router.get("/energetic/:id", (req,res)=>{
    const { db } = req;
    const prodId = req.params.id;
    const q = "SELECT * FROM shop_db.energetic WHERE id = ?";
    db.query(q, [prodId], (err,data)=>{
        if(err) return  res.json(err);
        return res.json(data);
    })
});

export default router;
