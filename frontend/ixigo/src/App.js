import logo from "./logo.svg";
// import './App.css';
import FlightBooking from "./Components/flight/FlightBooking";
import Router from "./Routes/Router";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="">
      {/* <FlightBooking/> */}

      <Router />
    </div>
  );
}

export default App;
