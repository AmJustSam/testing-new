const express = require("express");
const cors = require("cors");
const { OpenRouter } = require("@openrouter/sdk");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const collections = [
  {
    id: 1,
    title: "T-Shirts",
    description: "Casual everyday wear",
    image:
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1672&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Shoes",
    description: "Comfortable footwear",
    image:
      "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Accessories",
    description: "Complete your look",
    image:
      "https://images.unsplash.com/photo-1624823183493-ed5832f48f18?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const products = [
  {
    id: 1,
    title: "Classic White T-Shirt Bingo",
    description: "A comfortable cotton T-shirt.",
    price: 19.99,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
    collectionId: 1,
    stock: 20,
  },
  {
    id: 2,
    title: "Black Oversized T-Shirt",
    description: "A relaxed-fit oversized T-shirt.",
    price: 24.99,
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80",
    collectionId: 1,
    stock: 15,
  },
  {
    id: 3,
    title: "Running Shoes",
    description: "Lightweight shoes for everyday use.",
    price: 59.99,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
    collectionId: 2,
    stock: 10,
  },
  {
    id: 4,
    title: "Classic Sneakers",
    description: "Minimal sneakers for casual outfits.",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80",
    collectionId: 2,
    stock: 12,
  },
  {
    id: 5,
    title: "Leather Wallet",
    description: "A compact everyday wallet.",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80",
    collectionId: 3,
    stock: 8,
  },
  {
    id: 6,
    title: "Baseball Cap",
    description: "A classic adjustable cap.",
    price: 14.99,
    image:
      "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=800&q=80",
    collectionId: 3,
    stock: 25,
  },
];

app.get("/collections", (req, res) => {
  res.json(collections);
});

app.get("/collections/:collectionId/products", (req, res) => {
  const collectionId = parseInt(req.params?.collectionId);

  const data = products?.filter(
    (product) => product.collectionId === collectionId,
  );

  console.log({ collectionId, data });

  res.json(data);
});

app.listen(PORT, () => {
  console.log(`API running at http://localhost:${PORT}`);
});
