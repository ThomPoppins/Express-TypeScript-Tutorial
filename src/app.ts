import express, { NextFunction, Request, Response } from "express";

const app = express();

app.use(express.json());

const middleware =
  ({ name }: { name: string }) =>
  (req: Request, res: Response, next: NextFunction): any => {
    res.locals.name = name;

    next();
  };

app.use(middleware({ name: "John Doe" }));

app.get(
  "/api/books/:bookId/:authorId",
  (req: Request, res: Response, next: NextFunction) => {
    console.log(res.locals.name);

    res.send(res.locals.name);
  }
);

async function throwsError() {
  throw new Error("Something went wrong");
}

app.get("/error", async (req: Request, res: Response, next: NextFunction) => {
  try {
    await throwsError();
    res.sendStatus(200);
  } catch (error) {
    res.status(400).send("Something happened");
  }
});

app.listen(5555, () => console.log("Application listening on port 5555"));
