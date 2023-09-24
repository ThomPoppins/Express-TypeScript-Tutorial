import express, { Request, Response } from "express";

const app = express();

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  return res.json({ success: true, name: "Thom Veldpaus", age: 32 });
});

app.post("/api/data", (req: Request, res: Response) => {
  console.log(req.body);

  return res.sendStatus(200);
});

app.all("/api/all", (req: Request, res: Response) => {
  return res.sendStatus(200);
});

app.listen(5555, () => console.log("Application listening on port 5555"));
