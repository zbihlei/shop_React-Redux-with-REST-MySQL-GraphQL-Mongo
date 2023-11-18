import express from "express";
const router = express.Router();

router.get("/strong", (req,res)=>{
    const { db } = req;
    const q = "SELECT * FROM shop_db.strong";
    db.query(q,(err,data)=>{
        if(err) return  res.json(err);
        return res.json(data);
    })
});

export default router;