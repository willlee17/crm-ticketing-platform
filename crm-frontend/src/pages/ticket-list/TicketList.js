import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import PageBreadcrumb from '../../components/breadcrumb/PageBreadcrumb';
import SearchForm from '../../components/search-form/SearchForm';
import TicketTable from "../../components/ticket-table/TicketTable";
import tickets from '../../assets/data/dummy-tickets.json'

const TicketList = () => {
  const [ str, setStr ] = useState("");

  useEffect(() => {

  }, [str])

  const handleOnChange = (e) => {
    const { value } = e.target;
    setStr(value)
  }

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Ticket Lists"/>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Button variant="info" > Add New Ticket </Button>
        </Col>
        <Col className="text-right">
          <SearchForm handleOnChange={handleOnChange} str={str} />
        </Col>
      </Row>
      
      <hr />

      <Row>
        <Col>
          <TicketTable tickets={tickets} />
        </Col>
      </Row>
      
    </Container>
  )
}

export default TicketList;