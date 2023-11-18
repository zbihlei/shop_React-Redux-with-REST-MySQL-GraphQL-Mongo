import express  from "express";
import mysql  from "mysql";
import cors from "cors";
import bodyParser from "body-parser";
import main from './controllers/mainController.js';
import lite from './controllers/liteController.js';
import strong from './controllers/strongController.js';
import beer from './controllers/beerController.js';
import energetic from './controllers/energeticController.js';
import coctail from './controllers/coctailController.js';
import craft from './controllers/craftController.js';
import wine from './controllers/wineController.js';
import whiskey from './controllers/whiskeyController.js';
import orders from './controllers/ordersController.js';


const app = express();

const db =  mysql.createConnection({
    host: "localhost",
    user:  "root",
    password: "element1992",
    database: "shop_db"
});

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

//db in req
app.use((req, res, next) => {
    req.db = db; 
    next();
});

//json error catch
app.use((err, req, res, next) => {
    if (err instanceof SyntaxError) {
      return res.status(400).json({ error: "Invalid JSON" });
    }
    next();
  });

//controllers
app.use('/', main);
app.use('/lite', lite);
app.use('/strong', strong);
app.use('/beer', beer);
app.use('/energetic', energetic);
app.use('/coctail', coctail);
app.use('/craft', craft);
app.use('/wine', wine);
app.use('/whiskey', whiskey);
app.use('/orders', orders);



app.listen(8800, ()=>{
    console.log('connected to backend!')
});

