import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { urlApi } from "../utils/api";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    e.preventDefault();
    const bodyFormData = { name, email, address, age };

    axios
      .post(`${urlApi}`, JSON.stringify(bodyFormData), {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md="8" className="form-add">
          <h3>Add User</h3>
          <form onSubmit={handleInputChange}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                required
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                id="address"
                placeholder="Address"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="age" className="form-label">
                Age
              </label>
              <input
                type="number"
                className="form-control"
                id="age"
                placeholder="Age"
                required
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>

            <div className="items-btn d-flex gap-2">
              <button type="submit" className="btn btn-sm text-white">
                Save
              </button>
              <Link to="/" className="btn btn-sm text-white">
                Back
              </Link>
            </div>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Create;
