import express from 'express';
import type { Request, Response } from 'express';

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("OK");
});

app.listen(3000, "0.0.0.0", () => {
  console.log("Server running on port 3000");
});
