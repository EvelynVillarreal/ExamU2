const port = process.env.PORT || 3017;
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const maskRoutes = require("./routes/maskRoutes");

const app = express();

mongoose.connect(
    "mongodb+srv://admin:admin@cluster0.x7strgx.mongodb.net/MasksDB_sorryAndy?appName=Cluster0"
);

const databaseConnection = mongoose.connection;

databaseConnection.on("error", (error) => console.error(error));
databaseConnection.once("open", () =>
    console.log("Database connection established successfully")
);

app.use(cors());
app.use(express.json());

app.use("/api/masks", maskRoutes);

app.listen(port,()=>{
    console.log(`Backend's server is running on port ${port}`);
})