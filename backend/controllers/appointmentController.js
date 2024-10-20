// controllers/appointmentController.js
const Appointment = require("../models/appointment");

const createAppointment = async (req, res) => {
  try {
    const { doctorId, name, email, date, message } = req.body;

    // Validate required fields
    if (!doctorId || !name || !email || !date) {
      return res
        .status(400)
        .json({ message: "All required fields must be provided." });
    }

    const newAppointment = new Appointment({
      doctorId,
      name,
      email,
      date,
      message,
    });

    await newAppointment.save();
    res.status(201).json({ message: "Appointment booked successfully" });
  } catch (error) {
    console.error("Error booking appointment:", error);
    res.status(500).json({ message: "Failed to book appointment", error });
  }
};

const getAppointmentsByDoctor = async (req, res) => {
  try {
    const { doctorId } = req.params;
    const appointments = await Appointment.find({ doctorId });
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve appointments", error });
  }
};

module.exports = { createAppointment, getAppointmentsByDoctor };