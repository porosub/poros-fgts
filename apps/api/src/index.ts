import express from "express";
import type { Request, Response } from "express";

const app = express();

app.get("/api/health", (req: Request, res: Response) => {
  res.json({ status: "ok" });
});

app.get("/api/hello", (req: Request, res: Response) => {
  res.json({ message: "Hello World from Back Tier" });
});

app.listen(3000, "0.0.0.0", () => {
  console.log("API running on port 3000");
});
