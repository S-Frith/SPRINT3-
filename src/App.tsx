import React, { Dispatch, useEffect, useState, SetStateAction } from "react";
import "./App.css";
import CalendarComponent from "./components/CalendarComponent";
// import BookingCheck from "./components/BookingCheck";
import Desks from "./components/Desks";
import UserID from "./components/userID";
import NewBookingCheck from "./components/NewBookingCheck";


let bookings: {
  bookingRef: string;
  bookingDate: string;
  computerID: string;
  userID: number;
 }[] = [
  {
    bookingRef: "Desk: 3 - Sat Oct 15 2022",
    bookingDate: "Sat Oct 15 2022",
    computerID: "Desk 3",
    userID: 10,
  },
  {
    bookingRef: "Desk: 2 - Wed Oct 12 2022",
    bookingDate: "Wed Oct 12 2022",
    computerID: "Desk 2",
    userID: 20,
  },
];




//******************************************************************************************************************* */

function App(): JSX.Element {
  const [desksApp, setDesksApp] = useState();
  const deskProps = {
    setDesksApp: setDesksApp,
  };

  const [userIDApp, setUserIDApp] = useState();
  const userIDProps = {
    setUserIDApp: setUserIDApp,
  };

  const [date, setDate]: [Date, Dispatch<SetStateAction<Date>>] = useState(
    new Date()
  );

let newDate = date.toDateString()



  

  type bookingShape = {
    bookingRef: string;
    bookingDate: any;
    computerID: any;
    userID: any;
  };

  let newBookingRef: string =  `${desksApp} - ${newDate}`;

  
  //******************************************************************************************************************* */
  const testEvent = () => {
    
    const newBooking: bookingShape[] = [
      {
        bookingRef: newBookingRef,
        bookingDate: newDate,
        computerID: desksApp,
        userID: userIDApp
      },
      ];


    const bookingAttempt: any = newBooking
    
    let errors: number = 0;
    
    for (let i = 0; i < bookings.length; i++) {
    
      if (newBooking[0].bookingRef === bookings[i].bookingRef) {
      errors = errors + 1;
    } else {
      console.log('checking...')
    }
    console.log(errors);
  }

  function seatingJudegement() {
    if (errors === 0) {
      alert("Desks successfully booked");
      console.log(bookingAttempt)
      bookings.push(bookingAttempt[0]);
    } else {
      alert("Sorry but this desk is already booked");
    }
  }
return(
  seatingJudegement()
)

}




    //******************************************************************************************************************* */
    
    
  // // update desksApp on button click
  // useEffect(() => {
  //   // console.log(desksApp);
  //   // console.log(userIDApp);
  //   // console.log(date);
  // }, [desksApp, userIDApp, date]);

  return (
    <div className="appContainer">
      <UserID {...userIDProps} />
      <div className="deskAndCalContainer">
        <Desks {...deskProps} />
        <CalendarComponent setDate={setDate} />
        {/* {<NewBookingCheck Imports={dataCollection}/> } */}
        <div className="calContainer"></div>
      </div>
      <h1>User is: {userIDApp}</h1>
      <h1>Desk is: {desksApp}</h1>
      <h1>Date selected: {newDate}</h1>
      <button onClick={testEvent}>Submit</button>
      <button onClick={()=>(console.log(bookings))}>See all bookings</button>
      


    </div>
  );
}

export default App;
