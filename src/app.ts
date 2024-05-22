import express, { Request, Response } from "express";
import cors from "cors";
import router from "./app/config/modules/Products/product.route";
import routers from "./app/config/modules/orders/order.route";


const app = express();

// parser
app.use(cors());
app.use(express.json());

app.use("/api/orders"  , routers)
app.use("/api/products", router);



app.get("/", (req: Request, res: Response) => {
  res.send("hlw world");
});

app.all("*" ,(req:Request,res:Response) => {
  res.status(404).json({
    success:false,
    message:'your route path problem please correction it'
  })
})
export default app;
