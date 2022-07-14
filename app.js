const express = require("express");

//Routes
const { registrationsRouter } = require("./routes/registrations.routes");

// Utils
const { db } = require("./utils/database.util")

// Init app
const app = express();

// Accept incoming json data
app.use(express.json())

// Endpoints 
app.use("/api/v1/registrations", registrationsRouter);

db.authenticate()
    .then(() => console.log("Db authenticated"))
    .catch(err => console.log(err));

db.sync()
    .then(() => console.log("Db synced"))
    .catch(err => console.log(err));



app.listen(4000, () => {
    console.log("Checkin-Out app running!!!!")
});
