import React, { useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import './addteacher.css';

const Addteacher = () => {
  const [data, Setdata] = useState({
    name: '',
    email: '',
    password: '',
    section: '',
    grade: '',
    phone: 0,
  });

  const OnChangeHandler = (e) => {
    Setdata((prevdata) => {
      return {
        ...prevdata,
        [e.target.name]: e.target.value,
      };
    });
    console.log(data);
  };
  const OnSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <section className="add_teacher">
      <Container fluid>
        <h2>Add Teacher</h2>
        <form action="" onSubmit={OnSubmitHandler}>
          <Row>
            <Col lg={3}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                Onchangehandler={OnChangeHandler}
              />
            </Col>
            <Col lg={3}>
              <input type="email" name="email" placeholder="Email" />
            </Col>
            <Col lg={3}>
              <input type="password" name="password" placeholder="Password" />
            </Col>
            <Col lg={3}>
              <input type="text" name="section" placeholder="Section" />
            </Col>
            <Col lg={3}>
              <input type="text" name="grade" placeholder="Grade" />
            </Col>
            <Col lg={3}>
              <input type="number" name="phone" placeholder="Number" />
            </Col>
          </Row>
          <button type="submit">Add teacher</button>
        </form>
      </Container>
    </section>
  );
};

export default Addteacher;
