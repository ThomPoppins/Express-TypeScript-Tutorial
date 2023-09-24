import express, { Request, Response } from "express";

const app = express();

app.use(express.json());

app.get("/api/books/:bookId", (req: Request, res: Response) => {
  console.log(req.params);
  const bookId = req.params.bookId;
  res.send(`Book with id ${bookId}`);
});

app.listen(5555, () => console.log("Application listening on port 5555"));
