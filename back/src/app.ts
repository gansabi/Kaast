import express, { Request, Response, Router } from "express";

const app = express();
const router: Router = express.Router();

app.use(express.json());

// Route test
app.get("/", (req: Request, res: Response) => {
    res.send("Hello, world!");
});

app.use("/api", router);

export default app;
