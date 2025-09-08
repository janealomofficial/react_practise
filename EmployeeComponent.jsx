import React from 'react';
import { Card, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


import emp1 from '../assets/images/employee1.jpg';
import emp2 from '../assets/images/employee2.jpg';
import emp3 from '../assets/images/employee3.jpg';

const employeeList = [
  { id: 1, name: 'Kamal Ahmed', title: 'Trainer & Developer', img: emp1},
  { id: 2, name: 'Abul Hossain', title: 'Sr. Manager', img: emp2 },
  { id: 3, name: 'Jamshed Ahmed', title: 'HR Admin', img: emp3 },

];

const EmployeeComponent = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Employee Roster</h2>
      <Row className="justify-content-center">
        {employeeList.map((emp) => (
          <Col md={4} key={emp.id} className="mb-4">
            <Card>
              {/* Using a placeholder image since the original image files are not available */}
              <Card.Img variant="top" src={emp.img} />
              <Card.Body>
                <Card.Title>{emp.name}</Card.Title>
                <Card.Text>{emp.title}</Card.Text>
                <Button variant="primary">Details</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default EmployeeComponent;
