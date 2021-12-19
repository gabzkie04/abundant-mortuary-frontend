import React from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap';

function CollectionForm() {
    return (
        <Row>
            <Col md={2}></Col>
            <Col md={8}>
                <Form>
                    <Row>
                        <Col md={2}>
                            <Form.Group controlId='amount'>
                                <Form.Label>Amount</Form.Label>
                                <Form.Control type="text"  />
                            </Form.Group>
                        </Col>
                        <Col md={3}>
                            <Form.Group controlId='or_number'>
                                <Form.Label>OR Number</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                        </Col>
                        <Col md={3}>
                            <Form.Group controlId='date_collect'>
                                <Form.Label>Date Collected</Form.Label>
                                <Form.Control type="date" />
                            </Form.Group>
                        </Col>
                        <Col md={2}>
                            <Form.Group controlId='number_of_months_collected'>
                                <Form.Label>No. of months</Form.Label>
                                <Form.Control type="number" />
                            </Form.Group>
                        </Col>
                        <Col md={2}>
                            <Form.Label></Form.Label><br />
                            <Button className="mt-1">Submit</Button>
                        </Col>
                    </Row>
                </Form>
            </Col>
            <Col md={2}></Col>
        </Row>
    )
}

export default CollectionForm
