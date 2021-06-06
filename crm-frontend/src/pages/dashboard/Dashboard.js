import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import TicketTable from '../../components/ticket-table/TicketTable';
import PageBreadcrumb from '../../components/breadcrumb/PageBreadcrumb';

import tickets from '../../assets/data/dummy-tickets.json'

const Dashboard = () => {
  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Dashboard" />
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-5 mb-2">
          <Button variant="info" style={{ "fontSize": "2rem", "padding": "10px 30px" }}>Add New Ticket</Button>
        </Col>
      </Row>
      <Row>
        <Col className="text-center  mb-2">
         <div>Total Tickets: 50</div>
         <div>Pending Tickets: 5</div>
        </Col>
      </Row>
      <Row>
        <Col className="text-center  mb-2">
         <div>Recently Added Tickets</div>
        </Col>
      </Row>
      <Row>
        <Col className="recent-ticket">
          <TicketTable tickets={tickets}/>
        </Col>
      </Row>
    </Container>
  )
}

export default Dashboard;