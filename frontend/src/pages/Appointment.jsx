// import React, { useContext, useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { AppContext } from "../context/AppContext";
// import { assets } from "../assets/assets";

// const Appointment = () => {
//   const { docId } = useParams();
//   const { doctors, currencysymbol } = useContext(AppContext);
//   const daysofWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

//   const [docInfo, setDocInfo] = useState(null);
//   const [docslots, setDocSlots] = useState([]);
//   const [slotIndex, setDocSlotIndex] = useState(0);
//   const [slotTime, setSlotTime] = useState('');

//   const fetchDocInfo = async () => {
//     const info = doctors.find((doc) => doc._id === docId);
//     setDocInfo(info);
//   };

//   const getAvailableSlots = async () => {
//     setDocSlots([]);
//     let today = new Date();

//     for (let i = 0; i < 7; i++) {
//       let currentDate = new Date(today);
//       currentDate.setDate(today.getDate() + i);

//       let endTime = new Date();
//       endTime.setDate(today.getDate() + i);
//       endTime.setHours(21, 0, 0, 0);

//       if (today.getDate() === currentDate.getDate()) {
//         currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10);
//         currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
//       } else {
//         currentDate.setHours(10);
//         currentDate.setMinutes(0);
//       }

//       let timeslots = [];

//       while (currentDate < endTime) {
//         let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

//         // add slot array
//         timeslots.push({
//           datetime: new Date(currentDate),
//           time: formattedTime
//         });

//         //incement current by 30 minutes
//         currentDate.setMinutes(currentDate.getMinutes() + 30);
//       }

//       setDocSlots(prev => [...prev, timeslots]);
//     }
//   };

//   useEffect(() => {
//     if (doctors) {
//       fetchDocInfo();
//     }
//   }, [doctors, docId]);

//   useEffect(() => {
//     if (docInfo) {
//       getAvailableSlots();
//     }
//   }, [docInfo]);

//   useEffect(() => {
//     console.log(docslots);
//   }, [docslots]);

//   if (!docInfo) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div>
//       {/*--------- doctor details-------*/}
//       <div className="flex flex-col sm:flex-row gap-4">
//         <div>
//           {docInfo.image ? (
//             <img className="bg-blue-500 w-full sm:max-w-72 rounded-lg" src={docInfo.image} alt={docInfo.name} />
//           ) : (
//             <p>No image available</p>
//           )}
//         </div>
//         <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
//           <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
//             {docInfo.name}
//             <img className="w-5" src={assets.verified_icon} alt="verified" />
//           </p>
//           <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
//             <p>{docInfo.degree} - {docInfo.speciality}</p>
//             <button className="py-0.5 px-2 border text-xs rounded-full">
//               {docInfo.Experience}
//             </button>
//           </div>

//         <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">
//           About <img src={assets.info_icon} alt="info" />
//         </p>
//         <p className="text-sm text-gray-500 max-w-[700px] mt-1">
//           {docInfo.about}
//         </p>
//       <p className="text-gray-500 font-medium mt-4">
//         Appointment Fee: <span>{currencysymbol}{docInfo.fees}</span>
//       </p>
//       </div>
//       </div>

//       {/*-------Booking Slots-------*/}
//       <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
//         <p >Booking Slots</p>
//         <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
//           {docslots.length && docslots.map((item, index) => (
//             <div onClick={()=> setDocSlotIndex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-blue-500 text-white':'border-gray-200'}`} key={index}>
//               <p>{item[0] && daysofWeek[item[0].datetime.getDay()]}</p>
//               <p>{item[0] && item[0].datetime.getDate()}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="flex items-center gap-3 w-full overflow-x-scroll mt">
//         {docslots.length && docslots[slotIndex].map((item, index) => (
//           <p key={index} className="text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer">
//             {item.time.toLowerCase()}
//           </p>
//         ))}
//       </div>
//       <button className="bg-blue-500 text-white text-sm font-light px-14 py-3 rounded-full my-6">
//         Book An Appointment
//       </button>

//       {/* Listing related doctors */}
//       <relatedDoctor docId={docId} speciality={docInfo.speciality} />
//     </div>
//   );
// };

// export default Appointment;

// import React, { useContext } from 'react';
// import { AppContext } from '../context/AppContext';
// import { useParams } from 'react-router-dom';

// const Appointment = () => {
//   const { doctors } = useContext(AppContext); // Get doctors from context
//   const { id } = useParams(); // Get the doctor ID from the URL

//   const doctor = doctors.find((doc) => doc._id === id);

//   if (!doctor) {
//     return <div>Doctor not found</div>;
//   }

//   return (
//     <div className="container mx-auto mt-10">
//       <h1 className="text-3xl font-bold mb-6">Appointment with {doctor.name}</h1>
//       <img src={doctor.image} alt={doctor.name} className="mb-4 h-64 w-full object-cover" />
//       <p><b>Degree:</b> {doctor.degree}</p>
//       <p><b>Experience:</b> {doctor.experience}</p>
//       <p><b>Consultation Fee:</b> ${doctor.fees}</p>
//       <p><b>Contact No:</b> {doctor.speciality}</p>
//       <p><b>Address:</b> {doctor.address.line1}, {doctor.address.line2}</p>
//       <button className="btn bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4">Confirm Appointment</button>
//     </div>
//   );
// };

// export default Appointment;

import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useParams } from "react-router-dom";

const Appointment = () => {
  const { doctors, currencysymbol } = useContext(AppContext); // Get doctors and currency symbol from context
  const { id } = useParams(); // Get the doctor ID from the URL

  const doctor = doctors.find((doc) => doc._id === id);

  if (!doctor) {
    return <div>Doctor not found</div>;
  }

  const daysofWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const [docInfo, setDocInfo] = useState(null);
  const [docslots, setDocSlots] = useState([]);
  const [slotIndex, setDocSlotIndex] = useState(0);

  const fetchDocInfo = () => {
    const info = doctors.find((doc) => doc._id === id);
    setDocInfo(info);
  };

  const getAvailableSlots = () => {
    const today = new Date();
    const slots = [];

    for (let i = 0; i < 7; i++) {
      const currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);
      const endTime = new Date(today);
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(
          currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10
        );
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeslots = [];

      while (currentDate < endTime) {
        const formattedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
        timeslots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      slots.push(timeslots);
    }

    setDocSlots(slots);
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, id]);

  useEffect(() => {
    if (docInfo) {
      getAvailableSlots();
    }
  }, [docInfo]);

  if (!docInfo) {
    return <p>Loading...</p>;
  }

  const handleBookAppointment = async () => {
    if (!selectedSlot || !name || !email) {
      alert("Please fill in all required fields and select a time slot.");
      return;
    }

    try {
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          date: selectedSlot.datetime,
          message,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Appointment booked successfully");
      } else {
        alert(data.message || "Failed to book appointment");
      }
    } catch (error) {
      console.error("Error booking appointment:", error);
      alert("An error occurred while booking the appointment");
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">
        Appointment with {doctor.name}
      </h1>
      <img
        src={doctor.image}
        alt={doctor.name}
        className="mb-4 h-64 w-full object-cover"
      />
      <p>
        <b>Degree:</b> {doctor.degree}
      </p>
      <p>
        <b>Experience:</b> {doctor.experience}
      </p>
      <p>
        <b>Consultation Fee:</b> {currencysymbol}
        {doctor.fees}
      </p>
      <p>
        <b>Contact No:</b> {doctor.speciality}
      </p>
      <p>
        <b>Address:</b> {doctor.address.line1}, {doctor.address.line2}
      </p>
      <button className="btn bg-blue-500 text-black px-4 py-2 rounded hover:bg-blue-600 mt-4">
        Confirm Appointment
      </button>

      {/*--------- Booking Slots Section ---------*/}
      <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
        <p>Booking Slots</p>
        <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
          {docslots.map((item, index) => (
            <div
              key={index}
              onClick={() => setDocSlotIndex(index)}
              className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${
                slotIndex === index ? "bg-blue-500 text-blue" : "border-red-200"
              }`}
            >
              <p>{item[0] && daysofWeek[item[0].datetime.getDay()]}</p>
              <p>{item[0] && item[0].datetime.getDate()}</p>
            </div>
          ))}
        </div>
      </div>

      {/*--------- Time Slots Display ---------*/}
      <div className="flex items-center gap-3 w-full overflow-x-scroll mt">
        {docslots.length > 0 &&
          docslots[slotIndex].map((item, index) => (
            <p
              key={index}
              className="text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer"
            >
              {item.time.toLowerCase()}
            </p>
          ))}
      </div>

      <button
        onClick={handleBookAppointment}
        className="bg-blue-500 text-black text-sm font-light px-14 py-3 rounded-full my-6"
      >
        Book An Appointment
      </button>

      {/* Listing related doctors */}
    </div>
  );
};

export default Appointment;
