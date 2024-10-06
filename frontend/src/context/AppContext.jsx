// import { createContext } from "react"; 
// import { doctors } from "../pages/Sessions";

// // Create a context
// export const AppContext = createContext();

// // Create a provider component
// const AppContextProvider = ({ children }) => {
//   // Define the value object that will be passed down through the context
//   const value = {
//     doctors,
//   };

//   return (
//     <AppContext.Provider value={value}>
//       {children} {/* Render children components */}
//     </AppContext.Provider>
//   );
// };

// export default AppContextProvider; // Ensure default export here





import { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [doctors, setDoctors] = useState([
    {
      _id: 'doc1',
      name: 'Dr. Richard James',
      image: 'images/doc1.jpg',
      speciality: '9822297413',
      degree: 'MBBS',
      experience: '4 Years',
      fees: 50,
      address: {
        line1: '17th Cross, Richmond',
        line2: 'Circle, Ring Road, London',
      },
    },
    {
      _id: 'doc2',
      name: 'Dr. Emily Larson',
      image: 'images/doc2.jpg',
      speciality: '9503155275',
      degree: 'MBBS',
      experience: '3 Years',
      fees: 60,
      address: {
        line1: '27th Cross, Richmond',
        line2: 'Circle, Ring Road, London',
      },
    },
    {
      _id: 'doc3',
      name: 'Dr. Sarah Patel',
      image: 'images/doc3.jpg',
      speciality: '8600654172',
      degree: 'MBBS',
      experience: '1 Year',
      fees: 30,
      address: {
        line1: '37th Cross, Richmond',
        line2: 'Circle, Ring Road, London',
      },
    },
    {
      _id: 'doc4',
      name: 'Dr. Christopher Lee',
      image: 'images/doc4.jpg',
      speciality: '8424034147',
      degree: 'MBBS',
      experience: '2 Years',
      fees: 40,
      address: {
        line1: '47th Cross, Richmond',
        line2: 'Circle, Ring Road, London',
      },
    },
    {
      _id: 'doc5',
      name: 'Dr. Jennifer Garcia',
      image: 'images/doc5.jpg',
      speciality: '9322360596',
      degree: 'MBBS',
      experience: '4 Years',
      fees: 50,
      address: {
        line1: '57th Cross, Richmond',
        line2: 'Circle, Ring Road, London',
      },
    },
    {
      _id: 'doc6',
      name: 'Dr. Andrew Williams',
      image: 'images/doc6.jpg',
      speciality: '8424034147',
      degree: 'MBBS',
      experience: '4 Years',
      fees: 50,
      address: {
        line1: '57th Cross, Richmond',
        line2: 'Circle, Ring Road, London',
      },
    },
  ]);

  return (
    <AppContext.Provider value={{ doctors }}>
      {children}
    </AppContext.Provider>
  );
};

