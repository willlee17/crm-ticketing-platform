import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

const PasswordReset = ({ handleOnChange, formSwitcher, handleOnResetSubmit, email }) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-info text-center">Reset Password </h1>
          <hr />
          <Form autoComplete="off" onSubmit={handleOnResetSubmit}>
            <Form.Group>
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                onChange={handleOnChange}
                value={email}
              />
            </Form.Group>

            <Button type="submit">Reset Password</Button>
          </Form>
          <hr />
        </Col>
      </Row>
      
      <Row>
        <Col>
          <a href="#!" onClick={() => formSwitcher("login")}>Login Now</a>
        </Col>
      </Row>
    </Container>
  )
}

export default PasswordReset;

PasswordReset.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnResetSubmit: PropTypes.func.isRequired,
  formSwitcher: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
}