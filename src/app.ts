import express, { Request, Response } from "express";
const app = express();

app.get("/", (req: Request, res: Response) => {
  const a = 10;

  res.send(a);
});

export default app;
