import express, { NextFunction, Request, Response } from "express";

const app = express();

app.use(express.json());

function handleGetBookOne(
  req: Request,
  res: Response,
  next: NextFunction
): any {
  console.log(req.params);

  next();
}

function handleGetBookTwo(
  req: Request,
  res: Response,
  next: NextFunction
): any {
  console.log("second handler");

  res.send(req.params);
}

app.get("/api/books/:bookId/:authorId", [handleGetBookOne, handleGetBookTwo]);

app.listen(5555, () => console.log("Application listening on port 5555"));
