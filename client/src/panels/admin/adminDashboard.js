import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './admin.css';
import Header from '../../components/common/Header/Index';
import { Link } from 'react-router-dom';


const AdminDashboard = () => {
  return (
    <Fragment>
       <Header />
      <section className="cards">
        <Container fluid>
          <Row>
            <Col lg={3}>
              <div className="specs ">
                <div className="info-icon">
                  <i class="fa-solid fa-users" style={{ color: '#78c552' }}></i>
                  <h5>Students</h5>
                </div>
                <div className="student-txt">6</div>
              </div>
            </Col>
            <Col lg={3}>
              <div className="specs">
                <div className="info-icon">
                  <i
                    class="fa-solid fa-user-group"
                    style={{ color: '#008ae5' }}
                  ></i>
                  <h5>Teachers</h5>
                </div>
                <div className="info-txt">6</div>
              </div>
            </Col>
            <Col lg={3}>
              <div className="specs">
                <div className="info-icon">
                  <i
                    class="fa-solid fa-user-plus"
                    style={{ color: '#ffcb00' }}
                  ></i>
                  <h5>Parents</h5>
                </div>
                <div className="info-txt">6</div>
              </div>
            </Col>
            <Col lg={3}>
              <div className="specs">
                <div className="info-icon">
                  <i
                    class="fa-regular fa-money-bill-1"
                    style={{ color: '#00bfd6' }}
                  ></i>
                  <h5>Total Earnings</h5>
                </div>
                <div className="info-txt">6</div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="list-section">
        <Container fluid>
          <Row>
            <Col lg={6}>
              <div className="teacher-item">
                <ul>
                  <li>Name</li>
                  <li>Subject</li>
                  <li>Gender</li>
                  <li>Grade</li>
                  <li>Section</li>
                </ul>
              </div>
              <div className="teacher-item">
                <ul>
                  <li>MR.ABC</li>
                  <li>English</li>
                  <li>Male</li>
                  <li>1</li>
                  <li>A</li>
                </ul>
              </div>
              <div className="teacher-item">
                <ul>
                  <li>MR.ABC</li>
                  <li>English</li>
                  <li>Male</li>
                  <li>1</li>
                  <li>A</li>
                </ul>
              </div>
              <div className="teacher-item">
                <ul>
                  <li>MR.ABC</li>
                  <li>English</li>
                  <li>Male</li>
                  <li>1</li>
                  <li>A</li>
                </ul>
              </div>
              <div className="teacher-item">
                <ul>
                  <li>MR.ABC</li>
                  <li>English</li>
                  <li>Male</li>
                  <li>1</li>
                  <li>A</li>
                </ul>
              </div>
              <div className="btn p-0">
                <Link to="/add_teacher">Add teacher</Link>
              </div>
            </Col>
            <Col lg={6}>
              <div className="student-item">
                <ul>
                  <li>Name</li>
                  <li>Email</li>
                  <li>Gender</li>
                  <li>Grade</li>
                  <li>Section</li>
                </ul>
              </div>
              <div className="student-item">
                <ul>
                  <li>MR.ABC</li>
                  <li>email</li>
                  <li>Male</li>
                  <li>1</li>
                  <li>A</li>
                </ul>
              </div>
              <div className="student-item">
                <ul>
                  <li>MR.ABC</li>
                  <li>email</li>
                  <li>Male</li>
                  <li>1</li>
                  <li>A</li>
                </ul>
              </div>
              <div className="student-item">
                <ul>
                  <li>MR.ABC</li>
                  <li>email</li>
                  <li>Male</li>
                  <li>1</li>
                  <li>A</li>
                </ul>
              </div>
              <div className="student-item">
                <ul>
                  <li>MR.ABC</li>
                  <li>email</li>
                  <li>Male</li>
                  <li>1</li>
                  <li>A</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default AdminDashboard;
