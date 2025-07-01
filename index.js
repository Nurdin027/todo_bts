require('dotenv').config();

const express = require("express");
const userRoutes = require("./src/routes/users");
const checklistRoutes = require("./src/routes/checklist");
const itemsRoutes = require("./src/routes/items");

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger/swagger.json")

const app = express();

app.use(express.json());
app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/", userRoutes);
app.use("/", checklistRoutes);
app.use("/", itemsRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
})
