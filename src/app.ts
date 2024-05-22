import express, { Request, Response } from "express";
import cors from 'cors'
import router from "./app/config/modules/Products/product.route";
const app = express();


// parser  
app.use(cors())
app.use(express.json())


app.use('/api/v1/products' ,router)

app.get("/", (req: Request, res: Response) => {

  res.send('hlw world');
});

export default app;
