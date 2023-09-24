import express, { Request, Response } from "express";

const app = express();

app.use(express.json());

app
  .route("/")
  .get((req: Request, res: Response) => {
    return res.send("You made a GET request");
  })
  .post((req: Request, res: Response) => {
    return res.send("You made a POST request");
  })
  .put((req: Request, res: Response) => {
    return res.send("You made a PUT request");
  })
  .delete((req: Request, res: Response) => {
    return res.send("You made a DELETE request");
  });

app.listen(5555, () => console.log("Application listening on port 5555"));
