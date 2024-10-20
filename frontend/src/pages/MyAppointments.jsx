// MyAppointments.js

import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const MyAppointments = () => {
  const { bookedAppointments, cancelAppointment } = useContext(AppContext);

  return (
    <div>
      <p className="pb-3 mt-12 font-medium text-zinc-700 border-b">
        My appointments
      </p>
      <div>
        {bookedAppointments.length > 0 ? (
          bookedAppointments.map((appointment, index) => (
            <div
              className="grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b"
              key={index}
            >
              <div>
                <img
                  className="w-32 bg-indigo-50"
                  src={appointment.doctor.image}
                  alt={appointment.doctor.name}
                />
              </div>
              <div className="flex-1 text-sm text-zinc-600">
                <p className="text-neutral-800 font-semibold">
                  {appointment.doctor.name}
                </p>
                <p>{appointment.doctor.speciality}</p>
                <p className="text-zinc-700 font-medium mt-1">Address:</p>
                <p className="text-xs">{appointment.doctor.address.line1}</p>
                <p className="text-xs">{appointment.doctor.address.line2}</p>
                <p className="text-xs mt-1">
                  <span className="text-sm text-neutral-700 font-medium">
                    Date & Time:
                  </span>{" "}
                  {new Date(appointment.date).toLocaleString()} |{" "}
                  {appointment.time}
                </p>
              </div>

              <div className="flex flex-col gap-2 justify-end">
                <button
                  className="text-sm text-stone-500 text-center sm:min-w-48 py-2 border hover:bg-red-500 hover:text-white transition-all duration-300"
                  onClick={() => cancelAppointment(index)}
                >
                  Cancel Appointment
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No appointments booked yet.</p>
        )}
      </div>
    </div>
  );
};

export default MyAppointments;
