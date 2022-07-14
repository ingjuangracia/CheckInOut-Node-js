const express = require("express")

//Controllers
const { getAllRegistrations, getRegistrationById, checkIn, checkOut, cancelRegistration } = require("../controllers/registrations.controllers")

const registrationsRouter = express.Router()

registrationsRouter.get("/", getAllRegistrations)

registrationsRouter.get("/:id", getRegistrationById)

registrationsRouter.post("/", checkIn)

registrationsRouter.patch("/:id", checkOut)

registrationsRouter.delete("/:id", cancelRegistration)

module.exports = { registrationsRouter };
