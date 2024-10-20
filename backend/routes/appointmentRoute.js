// routes/appointmentRoutes.js
const express = require("express");
const {
  createAppointment,
  getAppointmentsByDoctor,
} = require("../controllers/appointmentController");

const router = express.Router();

router.post("/postappointments", createAppointment);
router.get("/getappointments/doctor/:doctorId", getAppointmentsByDoctor);

module.exports = router;