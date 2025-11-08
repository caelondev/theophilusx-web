import express from "express";
import path from "path";
import config from "../config.json";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "..", "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

app.get("/invite", (req, res)=>{
  res.redirect(config.botInviteLink)
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
