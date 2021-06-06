import React, {useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PageBreadcrumb from '../../components/breadcrumb/PageBreadcrumb';
import AddTicketForm from '../../components/add-ticket-form/AddTicketForm';

const initialFormData = {
  subject: "",
  issueDate: "",
  details: "",
};

const AddTicket = () => {
  const [ formData, setFormData ] = useState(initialFormData);

  // useEffect(() => {

  // }, [formData])

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    console.log('hi:', name, value)
    
    setFormData({
      ...formData,
      [ name ]: value
    })
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()

    console.log('hi:', formData)
    
    // setFormData({
    //   ...initialFormData,
    //   [ name ]: value
    // })
  }

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="New Ticket"/>
        </Col>
      </Row>
      <Row>
        <Col>
          <AddTicketForm handleOnChange={handleOnChange} formData={formData} handleOnSubmit={handleOnSubmit}/>
        </Col>
      </Row>
    </Container>
  )  
}

export default AddTicket; 