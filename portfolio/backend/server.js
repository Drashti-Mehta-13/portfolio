const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const FILE = "./data.json";

//this api read all portfolios

app.get("/api/portfolios", (req, res) => {
    const data = JSON.parse(fs.readFileSync(FILE));
    res.json(data);
});

//this api read one portfolio

app.get("/api/portfolios/:id", (req, res) => {
  const data = JSON.parse(fs.readFileSync(FILE)); 
  const { id } = req.params; 
  const portfolio = data.find(p => p.id == id); 

  res.json(portfolio || { message: "Not found" });
});

//this api add new portfolio

app.post("/api/portfolios", (req, res) => {
  const data = JSON.parse(fs.readFileSync(FILE, "utf-8")); 
  const newPortfolio = { id: Date.now(), ...req.body };   
  
  data.push(newPortfolio); 
  fs.writeFileSync(FILE, JSON.stringify(data, null, 2)); 
  
  res.json(newPortfolio); 
});

const port = 5000;
app.listen(port, () => console.log(`API running at ${port}`));