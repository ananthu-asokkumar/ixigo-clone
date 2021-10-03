import React from "react";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import FlightBooking from "../flight/FlightBooking";
function BestFlightDeal() {
  return (
    <div className="card " style={{ marginTop: "100px" }}>
      <div>
        <h2 className="" style={{ color: "#EC5B24", margin: "auto" }}>
          Best Flight Deals Of The Day
        </h2>
      </div>
      <div style={{ textAlign: "left", marginLeft: "40px" }} className="d-flex">
        <FormControl variant="standard">
          <TextField
            label="Flying From"
            variant="standard"
            // onChange={startHandler}
            focused
          />
        </FormControl>
        <span>
          <hr />
        </span>
      </div>
      <div className="m-auto">
        <div className="d-flex" style={{ color: " #fff" }}>
          <button
            type="button"
            className="btn  m-3"
            style={{ border: "1px solid black", borderRadius: "20px" }}
          >
            africa
          </button>
          <button
            type="button"
            className="btn  m-3"
            style={{ border: "1px solid black", borderRadius: "20px" }}
          >
            Asia
          </button>
          <button
            type="button"
            className="btn  m-3"
            style={{ border: "1px solid black", borderRadius: "20px" }}
          >
            Euorop
          </button>
          <button
            type="button"
            className="btn  m-3"
            style={{ border: "1px solid black", borderRadius: "20px" }}
          >
            America
          </button>
          <button
            type="button"
            className="btn  m-3"
            style={{ border: "1px solid black", borderRadius: "20px" }}
          >
            England
          </button>
          <button
            type="button"
            className="btn  m-3"
            style={{ border: "1px solid black", borderRadius: "20px" }}
          >
            canada
          </button>

          <button
            type="button"
            className="btn  m-3"
            style={{ border: "1px solid black", borderRadius: "20px" }}
          >
            brazil
          </button>
          <button
            type="button"
            className="btn  m-3"
            style={{ border: "1px solid black", borderRadius: "20px" }}
          >
            bangladesh
          </button>
          <button
            type="button"
            className="btn  m-3"
            style={{ border: "1px solid black", borderRadius: "20px" }}
          >
            japan
          </button>
        </div>
        <div
          className="d-flex "
          style={{ color: " #fff", marginLeft: "180px" }}
        >
          <button
            type="button"
            className="btn  m-3"
            style={{ border: "1px solid black", borderRadius: "20px" }}
          >
            africa
          </button>
          <button
            type="button"
            className="btn  m-3"
            style={{ border: "1px solid black", borderRadius: "20px" }}
          >
            Asia
          </button>
          <button
            type="button"
            className="btn  m-3"
            style={{ border: "1px solid black", borderRadius: "20px" }}
          >
            Euorop
          </button>
          <button
            type="button"
            className="btn  m-3"
            style={{ border: "1px solid black", borderRadius: "20px" }}
          >
            America
          </button>
          <button
            type="button"
            className="btn  m-3"
            style={{ border: "1px solid black", borderRadius: "20px" }}
          >
            England
          </button>
          <button
            type="button"
            className="btn  m-3"
            style={{ border: "1px solid black", borderRadius: "20px" }}
          >
            canada
          </button>
        </div>
      </div>
      <hr className="m-4" />
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="card" style={{ width: "20rem", margin: "10px" }}>
              <Link to="/flightsBooking">
                <img
                  className="card-img-top"
                  src="https://images.ixigo.com/node_image/f_auto,t_medium/entityId/503b2a8fe4b032e338f13897.jpg"
                  alt="Card image cap"
                />
              </Link>
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <div>
                    <span>chandigrah</span>
                    <br />
                    <span>DEL to IXC</span>
                  </div>
                  <div>
                    <span>from $1200</span>
                    <br />
                    <span>14 Nov 2021</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card" style={{ width: "20rem", margin: "10px" }}>
              <img
                className="card-img-top"
                src="https://images.ixigo.com/node_image/f_auto,t_medium/entityId/503b2a78e4b032e338f10051.jpg"
                alt="Card image cap"
              />
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <div>
                    <span>chandigrah</span>
                    <br />
                    <span>DEL to IXC</span>
                  </div>
                  <div>
                    <span>from $1200</span>
                    <br />
                    <span>14 Nov 2021</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card" style={{ width: "20rem", margin: "10px" }}>
              <img
                className="card-img-top"
                src="https://images.ixigo.com/node_image/f_auto,t_medium/entityId/503b2a83e4b032e338f11cc5.jpg"
                alt="Card image cap"
              />
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <div>
                    <span>chandigrah</span>
                    <br />
                    <span>DEL to IXC</span>
                  </div>
                  <div>
                    <span>from $1200</span>
                    <br />
                    <span>14 Nov 2021</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <div className="card" style={{ width: "20rem", margin: "10px" }}>
              <img
                className="card-img-top"
                src="https://images.ixigo.com/node_image/f_auto,t_medium/entityId/503b2a81e4b032e338f117c9.jpg"
                alt="Card image cap"
              />
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <div>
                    <span>chandigrah</span>
                    <br />
                    <span>DEL to IXC</span>
                  </div>
                  <div>
                    <span>from $1200</span>
                    <br />
                    <span>14 Nov 2021</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card" style={{ width: "20rem", margin: "10px" }}>
              <img
                className="card-img-top"
                src="https://images.ixigo.com/node_image/f_auto,t_medium/entityId/503b2a82e4b032e338f11a67.jpg"
                alt="Card image cap"
              />
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <div>
                    <span>chandigrah</span>
                    <br />
                    <span>DEL to IXC</span>
                  </div>
                  <div>
                    <span>from $1200</span>
                    <br />
                    <span>14 Nov 2021</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card" style={{ width: "20rem", margin: "10px" }}>
              <img
                className="card-img-top"
                src="https://images.ixigo.com/node_image/f_auto,t_medium/entityId/503b2a84e4b032e338f11d53.jpg"
                alt="Card image cap"
              />
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <div>
                    <span>chandigrah</span>
                    <br />
                    <span>DEL to IXC</span>
                  </div>
                  <div>
                    <span>from $1200</span>
                    <br />
                    <span>14 Nov 2021</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestFlightDeal;
