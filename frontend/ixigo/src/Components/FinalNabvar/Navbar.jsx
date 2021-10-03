import React from "react";
import "./Navbar.css";
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
function Navbar() {
  const [lgShow, setLgShow] = useState(false);

  return (
    <div>
      <div className="backroundimage">
        <div className="d-flex">
          <img
            className="m-2"
            src="https://images.ixigo.com/image/upload/f_auto/2110b68e66ac684f22adf5b0e0870798-yfwgh.png"
            alt=""
            style={{ height: "40px" }}
          />
          <Link
            to="/flight"
            className="mx-4 my-3 nav "
            style={{ color: "white", textDecoration: "none" }}
          >
            FLIGHTS
          </Link>
          <Link
            to="/trains"
            className="mx-4 my-3 nav "
            style={{ color: "white", textDecoration: "none" }}
          >
            TRAINS
          </Link>
          <Link
            to="/bussus"
            className="mx-4 my-3 nav "
            style={{ color: "white", textDecoration: "none" }}
          >
            BUSSES
          </Link>
          <Link
            to="/hotels"
            className="mx-4 my-3 nav "
            style={{ color: "white", textDecoration: "none" }}
          >
            HOTELS
          </Link>
          <Link
            to="/offers"
            className="mx-4 my-3 nav "
            style={{ color: "white", textDecoration: "none" }}
          >
            OFFERS
          </Link>
          <Link
            to="/customerservice"
            className="mx-4 my-3 nav "
            style={{
              color: "white",
              textDecoration: "none",
              // borderBottom: "solid 3px #EC5B24",
            }}
          >
            CUSTOMER SERVICE
          </Link>
          <div className="dropdown mx-2 my-2">
            <button
              className="btn  dropdown-toggle shadow-none"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ color: "white" }}
            >
              More
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a className="dropdown-item" href="#">
                  mobile apps
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="abc">
                  ixigo Money
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  travel stories
                </a>
              </li>
            </ul>
          </div>
          <div>
            <Button
              style={{
                marginLeft: "215px",
                marginTop: "13px",
                textDecoration: "none",
                border: "none",
                padding: "10px",
                backgroundColor: "white",
                color: "black",
              }}
              onClick={() => setLgShow(true)}
            >
              Login or Sign up
            </Button>

            <Modal
              size="lg"
              show={lgShow}
              onHide={() => setLgShow(false)}
              aria-labelledby="example-modal-sizes-title-lg"
            >
              <Modal.Header closeButton></Modal.Header>
              <Modal.Body>
                <div className="container-fluid ">
                  <div className="row">
                    <div
                      className="col-5"
                      style={{ backgroundColor: "#EC5C30" }}
                    >
                      safiur rahaman
                    </div>
                    <div className="col-7">{/* <AuthForm /> */}</div>
                  </div>
                </div>
              </Modal.Body>
            </Modal>
          </div>
        </div>
        <div
          className=""
          style={{ backgroundColor: "white", marginTop: "340px" }}
        >
          <SearchBar />
        </div>
        <div style={{ marginTop: "100px" }}>
          <img
            src="https://images.ixigo.com/image/upload/c_fill,w_1280,h_140/d6fa215e35faa008b943ce4b6d51da60-kimky.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
export default Navbar;
