import React from 'react';
import { Jumbotron, Form, Button, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './AddTicketForm.css'

const AddTicketForm = ({ handleOnChange, handleOnSubmit, formData }) => {
  return (
    <Jumbotron className="add-new-ticket mt-3 bg-light">
      <h1 className="text-info text-center">Add New Ticket</h1>
      <hr/>
      <Form autoComplete="off" onSubmit={handleOnSubmit}>
          <Form.Group as={Row}>
            <Form.Label column sm={3}>Subject</Form.Label>
            <Col sm={9}>
              <Form.Control
                  type="text"
                  name="subject"
                  required
                  placeholder="Subject"
                  onChange={handleOnChange}
                  value={formData.subject}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm={3}>Issue Found Date</Form.Label>
            <Col sm={9}>
              <Form.Control
                type="date"
                name="issueDate"
                required
                onChange={handleOnChange}
                value={formData.issueDate}
              />
            </Col>
      
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label column sm={3}>Details</Form.Label>
            <Col sm={9}>
              <Form.Control
                as="textarea"
                name="details"
                rows={5}
                required
                onChange={handleOnChange}
                value={formData.details}
              />
            </Col>
          </Form.Group>

          <Button type="submit" variant="info" block >Submit Ticket</Button>
        </Form>
    </Jumbotron>
  )
}

export default AddTicketForm;

AddTicketForm.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
}