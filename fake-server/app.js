const express = require("express");
const cors = require("cors");
const productsMock = require("./mock.json");

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

const getItemById = (arr, id) => arr.find((item) => item.id === id);

app.get("/products", (req, res) => {
  if (productsMock) {
    res.json(productsMock);
  } else {
    res.status(404).json({ message: "No products found" });
  }
});

app.get("/products/search", (req, res) => {
  const query = req.query.q?.toLowerCase() || "";
  const results = productsMock.products.filter((product) =>
    product.title.toLowerCase().includes(query)
  );
  res.json({ products: results });
});

app.post("/products/add", (req, res) => {
  const { title, price } = req.body;

  const newProduct = {
    id: productsMock.products.length + 1,
    title,
    price,
    images: [],
  };

  productsMock.products.push(newProduct);
  res.status(201).json(newProduct);
});

app.delete("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = productsMock.products.findIndex((i) => i.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Product not found" });
  }

  const deletedProduct = productsMock.products.splice(index, 1);
  res.json({ message: "Product deleted", item: deletedProduct[0] });
});

app.listen(port, () => {
  console.log(`Fake server listening at http://localhost:${port}`);
});
