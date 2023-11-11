import express  from "express";
import mysql  from "mysql";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

const db =  mysql.createConnection({
    host: "localhost",
    user:  "root",
    password: "element1992",
    database: "shop_db"
});

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


//json error catch
app.use((err, req, res, next) => {
    if (err instanceof SyntaxError) {
      return res.status(400).json({ error: "Invalid JSON" });
    }
    next();
  });
  

app.get("/", (req,res)=>{
    const q = "SELECT * FROM shop_db.general";
    db.query(q,(err,data)=>{
        if(err) return  res.json(err);
        return res.json(data);
    })
});

app.get("/lite", (req,res)=>{
    const q = "SELECT * FROM shop_db.lite";
    db.query(q,(err,data)=>{
        if(err) return  res.json(err);
        return res.json(data);
    })
});

app.get("/beer", (req,res)=>{
    const q = "SELECT * FROM shop_db.beer";
    db.query(q,(err,data)=>{
        if(err) return  res.json(err);
        return res.json(data);
    })
});

app.get("/beer/:id", (req,res)=>{
    const prodId = req.params.id;
    const q = "SELECT * FROM shop_db.beer WHERE id = ?";
    db.query(q, [prodId], (err,data)=>{
        if(err) return  res.json(err);
        return res.json(data);
    })
});

app.get("/energetic", (req,res)=>{
    const q = "SELECT * FROM shop_db.energetic";
    db.query(q,(err,data)=>{
        if(err) return  res.json(err);
        return res.json(data);
    })
});

app.get("/energetic/:id", (req,res)=>{
    const prodId = req.params.id;
    const q = "SELECT * FROM shop_db.energetic WHERE id = ?";
    db.query(q, [prodId], (err,data)=>{
        if(err) return  res.json(err);
        return res.json(data);
    })
});

app.get("/coctail", (req,res)=>{
    const q = "SELECT * FROM shop_db.coctail";
    db.query(q,(err,data)=>{
        if(err) return  res.json(err);
        return res.json(data);
    })
});

app.get("/coctail/:id", (req,res)=>{
    const prodId = req.params.id;
    const q = "SELECT * FROM shop_db.coctail WHERE id = ?";
    db.query(q, [prodId], (err,data)=>{
        if(err) return  res.json(err);
        return res.json(data);
    })
});

app.get("/craft", (req,res)=>{
    const q = "SELECT * FROM shop_db.craft";
    db.query(q,(err,data)=>{
        if(err) return  res.json(err);
        return res.json(data);
    })
});

app.get("/craft/:id", (req,res)=>{
    const prodId = req.params.id;
    const q = "SELECT * FROM shop_db.craft WHERE id = ?";
    db.query(q, [prodId], (err,data)=>{
        if(err) return  res.json(err);
        return res.json(data);
    })
});

app.post("/orders", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    const { client, basket } = req.body;

    console.log(req.body);

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
  
  app.get("/orders", (req,res)=>{
    const {mail} = req.query;
    const q = `SELECT * FROM orders WHERE email = '${mail}'`;
    db.query(q,(err,data)=>{
        if(err) return  res.json(err);
        return res.json(data);
    })
});


// app.post("/tasks",(req,res)=>{
//     const q  =  "INSERT INTO tasks (`name`, `title`) VALUES (?)"
//     const values = [
//         req.body.name,
//         req.body.title,
//     ];

//     db.query(q, [values], (err,data)=>{
//         if (err) return res.json(err)
//         return res.json('task has been created!');
//     });
// });

// app.delete("/tasks/:id",(req, res)=>{
//     const taskId = req.params.id;
//     const q = "DELETE FROM  tasks WHERE id = ?"

//     db.query(q,[taskId], (err,data)=>{
//         if (err)  return res.json(err);
//         return res.json("Task was deleted");
//     })
// })

// app.put("/tasks/:id",(req, res)=>{
//     const taskId = req.params.id;
//     const q = "UPDATE tasks SET `done` = ? WHERE id = ?"
//     const values = [
//         req.body.done
//     ]

//     db.query(q,[values, taskId], (err,data)=>{
//         if (err)  return res.json(err);
//         return res.json("Task was updated");
//     })
// })

app.listen(8800, ()=>{
    console.log('connected to backend!')
});

