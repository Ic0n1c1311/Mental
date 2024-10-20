import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { useParams } from 'react-router-dom';

const Appointment = () => {
  const { doctors, currencysymbol, bookAppointment } = useContext(AppContext);
  const { id } = useParams();
  const daysofWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setDocSlotIndex] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState(null); // Store the selected time slot

  const fetchDocInfo = async () => {
    const Info = doctors.find(doc => doc._id === id);
    setDocInfo(Info);
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
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10);
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlots = [];
    
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }
      slots.push(timeSlots);
    }
    
    setDocSlots(slots);
  };

  const handleBooking = () => {
    if (selectedSlot) {
      bookAppointment(docInfo, selectedSlot.datetime, selectedSlot.time);
      alert('Appointment booked successfully!');
    } else {
      alert('Please select a time slot.');
    }
  };

  useEffect(() => {
    if (doctors.length > 0) {
      fetchDocInfo();
    }
  }, [doctors, id]);

  useEffect(() => {
    if (docInfo) {
      getAvailableSlots();
    }
  }, [docInfo]);

  if (!docInfo) {
    return <div>Loading...</div>;
  }
  const handleBookAppointment = async () => {
    if (!selectedSlot || !formData.name || !formData.email) {
      return alert(
        "Please fill in all required fields and select a time slot."
      );
    }

    try {
      const response = await fetch("http://localhost:5000/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          date: selectedSlot.datetime,
          doctorId: id,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Appointment booked successfully");
        setFormData({ name: "", email: "", message: "" });
        setSelectedSlot(null);
      } else {
        console.error("Error details:", data);
        alert(data.message || "Failed to book appointment");
      }
    } catch (error) {
      console.error("Error details:", error);
      alert("An error occurred while booking the appointment");
    }
  };

  return (
    <div>
      <div className="container mx-auto mt-10">
        <h1 className="text-3xl font-bold mb-6">Appointment with {docInfo.name}</h1>
        <p><b>Degree:</b> {docInfo.degree}</p>
        <p><b>Experience:</b> {docInfo.experience} years</p>
        <p><b>Consultation Fee:</b> {currencysymbol}{docInfo.fees}</p>
        <p><b>Speciality:</b> {docInfo.speciality}</p>
        <p><b>Address:</b> {docInfo.address.line1}, {docInfo.address.line2}</p>

        <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
          <p>Booking Slots</p>
          <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
            {docSlots.length > 0 && docSlots.map((item, index) => (
              <div 
                onClick={() => setDocSlotIndex(index)} 
                className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-blue-500 text-red-500' : 'border-gray-200'}`} 
                key={index}
              >
                <p>{item[0] && daysofWeek[item[0].datetime.getDay()]}</p>
                <p>{item[0] && item[0].datetime.getDate()}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3 w-full overflow-x-scroll mt-4">
          {docSlots.length > 0 && docSlots[slotIndex].map((item, index) => (
            <p 
              key={index} 
              className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer transition-all duration-200 ${selectedSlot === item ? 'text-red-500 border-red-500' : 'border-gray-200'} hover:text-red-500 hover:border-red-500`} 
              onClick={() => setSelectedSlot(item)} // Set selected slot
            >
              {item.time.toLowerCase()}
            </p>
          ))}
        </div>
        
        <button onClick={handleBooking} className="bg-red-500 text-black text-sm font-light px-14 py-3 rounded-full my-6">
          Book An Appointment
        </button>
      </div>
    </div>
  );
};

export default Appointment;



