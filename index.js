const express = require('express');

const app = express();
const port = process.env.PORT;

app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));

app.set("view engine", "ejs");

const items = [];

app.get('/', (req, res) => {
  res.render("index",{itemName: items})
});

app.get('/contact', (req, res) => {
  res.render("contact",{})
});

app.post('/', (req, res) => {
    const item = req.body.item;
    items.push(item);
    res.redirect("/")
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});