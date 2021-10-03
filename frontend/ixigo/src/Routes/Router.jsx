import React from "react";
import Curosel from "../Components/FinalNabvar/Curosel";
import Navbar from "../Components/FinalNabvar/Navbar";
import BestFlightDeal from "../Components/FinalNabvar/BestFlightDeal";
import { Route } from "react-router-dom";
import FlightBooking from "../Components/flight/FlightBooking";
import MainPageOfPayment from "../Components/Navbar/MainPageOfPayment";
function Router() {
  return (
    <div>
      <switch>
        <Route path="/" exact>
          <Navbar />
          <Curosel />
          {/* <BestFlightDeal /> */}
          <BestFlightDeal />
        </Route>

        <Route path="/flightsBooking" exact>
          <FlightBooking />
        </Route>
        <Route path="/booknow">
          <MainPageOfPayment />
        </Route>
      </switch>
    </div>
  );
}

export default Router;
