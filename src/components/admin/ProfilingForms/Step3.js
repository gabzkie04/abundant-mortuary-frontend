import React from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap';
import BeneficiaryList from '../BeneficiaryList'

function Step3(props, {location, history}) {

    const handleBackClick = () => {
        props.setStep(props.step - 1)
    }

    const handleFinishProfile = () =>
    {
        props.setStep(props.step + 1)
    }


    return (
        <Form>
            <h4>BENEFICIARIES</h4>
            <Row>
                <Col md={8}>
                    <Form.Group controlId='name'>
                        <Form.Label>NAME</Form.Label>
                        <Form.Control type="text" value={props.name} onChange={(e)=> props.setName(e.target.value)} />
                    </Form.Group>
                </Col>
                <Col md={4}>
                    <Form.Group controlId='beneficiary_dob'>
                        <Form.Label>BIRTHDATE</Form.Label>
                        <Form.Control type="date" value={props.beneficaryDob} onChange={(e)=> props.setBeneficiaryDob(e.target.value)} />
                    </Form.Group>
                </Col>
                <Col md={8}>
                    <Form.Group controlId='address'>
                        <Form.Label>ADDRESS</Form.Label>
                        <Form.Control type="text" value={props.address} onChange={(e)=> props.setAddress(e.target.value)} />
                    </Form.Group>
                </Col>
                <Col md={4}>
                    <Form.Group controlId='relationship'>
                        <Form.Label>RELATIONSHIP</Form.Label>
                        <Form.Control type="text" value={props.relationship} onChange={(e)=> props.setRelationship(e.target.value)} />
                    </Form.Group>
                </Col>
                <Col md={4}>
                    <Button className="mt-2">Add Beneficiary</Button>
                </Col>

            </Row>
            <Row>
                <Col md={12}>
                    <BeneficiaryList />
                </Col>
            </Row>
            <Button variant="secondary" className="me-2" onClick={()=>handleBackClick()}>Back</Button>
            <Button variant="success" onClick={()=>handleFinishProfile()}>Finish Profile</Button>
        </Form>
    )
}

export default Step3
