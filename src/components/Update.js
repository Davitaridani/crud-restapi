import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { urlApi } from "../utils/api";

const Update = () => {
  const { id } = useParams();
  const [values, setValues] = useState({
    id: id,
    name: "",
    email: "",
    address: "",
    age: "",
    phone: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${urlApi}users/${id}`)
      .then((res) => {
        setValues({
          ...values,
          name: res.data.name,
          email: res.data.email,
          address: res.data.address,
          age: res.data.age,
          phone: res.data.phone,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleFormUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`${urlApi}users/${id}`, values)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md="8" className="form-update">
          <h3 className="mb-3">Update Data</h3>
          <form onSubmit={handleFormUpdate}>
            <div className="mb-3">
              <label className="form-label">Id</label>
              <input
                type="text"
                className="form-control"
                disabled
                value={values.id}
                onChange={(e) => setValues({ ...values, id: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
                value={values.name}
                onChange={(e) => setValues({ ...values, name: e.target.value })}
                placeholder="Name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="text"
                className="form-control"
                id="email"
                required
                value={values.email}
                onChange={(e) =>
                  setValues({ ...values, email: e.target.value })
                }
                placeholder="Email"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                value={values.address}
                onChange={(e) =>
                  setValues({ ...values, address: e.target.value })
                }
                placeholder="Address"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="age" className="form-label">
                Age
              </label>
              <input
                type="number"
                className="form-control"
                value={values.age}
                onChange={(e) => setValues({ ...values, age: e.target.value })}
                placeholder="Age"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <input
                type="text"
                className="form-control"
                value={values.phone}
                onChange={(e) =>
                  setValues({ ...values, phone: e.target.value })
                }
                placeholder="Phone"
                required
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

export default Update;
