const express = require("express");
const cors = require("cors");
const productsRoute = require("./routes/products");

const app = express();
const PORT = 5000;

app.use(cors());
app.use("/api/products", productsRoute);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
