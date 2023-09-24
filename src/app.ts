import express, { NextFunction, Request, Response } from "express";

const app = express();

app.use(express.json());

function middleware(req: Request, res: Response, next: NextFunction): any {
  // @ts-ignore
  req.name = "John Doe";

  next();
}

app.get(
  "/api/books/:bookId/:authorId",
  middleware,
  (req: Request, res: Response, next: NextFunction) => {
    // @ts-ignore
    console.log(req.name);
    // @ts-ignore
    res.send(req.name);
  }
);

app.listen(5555, () => console.log("Application listening on port 5555"));
