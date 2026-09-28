const express = require("express");
const app = express();

// Route de test : GET /
app.get("/", (req, res) => {
  res.json({ message: "Mon API fonctionne" });
});

// On demarre le serveur sur le port 3000
app.listen(3000, () => {
  console.log("Serveur sur http://localhost:3000");
});

let produits = [
  { id: 1, nom: "karting", prix: 75 },
  { id: 2, nom: "visite mont fuji", prix: 80},
  { id: 3, nom: "musee solo levening", prix: 120 }
];

app.get("/produits", (req, res) => {
  res.json(produits);
});