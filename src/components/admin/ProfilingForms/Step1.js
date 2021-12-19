import React, {useState} from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap';
function Step1(props) {

    // function for changing region . .. 
    const handleChangeRegion = (value) => {
        props.setRegion(value);
    }

    // function for changing province
    const handleChangeProvince = (value) => {
        props.setProvince(value);
    }

    // function for changing city
    const handleChangeCity = (value) => {
        props.setCity(value);
    }

    // function for changing barangay
    const handleChangeBarangay = (value) => {
        props.setBarangay(value);
    }

    // function for submit form
    const handleSubmitForm = (e) =>
    {
        e.preventDefault();
        props.setStep(props.step+1)
    }

    return (
        <Form onSubmit={(e)=>handleSubmitForm(e)}>
            <h4>PERSONAL INFORMATION</h4>
            <Row>
                <Col md={2}>
                    <Form.Group controlId='pf_no'>
                        <Form.Label>PF NO.</Form.Label>
                        <Form.Control type="text" value={props.pf_no} onChange={(e)=>props.setPf_no(e.target.value)} />
                    </Form.Group>
                </Col>
                <Col md={3}>
                    <Form.Group controlId='agent_id'>
                        <Form.Label>SALES EXECUTIVE</Form.Label>
                        <Form.Select value={props.agent_id} onChange={(e)=>props.setAgent_id(e.target.value)}>
                            <option defaultValue hidden>SELECT SALES EXECUTIVE</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
            {/* TODO: NAME */}
            <Row>
                <Col md={4}>
                    <Form.Group controlId='lastName'>
                        <Form.Label>LAST NAME</Form.Label>
                        <Form.Control type="text" value={props.lastName} onChange={(e)=> props.setLastName(e.target.value)} />
                    </Form.Group>
                </Col>
                <Col md={5}>
                    <Form.Group controlId='firstName'>
                        <Form.Label>FIRST NAME</Form.Label>
                        <Form.Control type="text" value={props.firstName} onChange={(e)=>props.setFirstName(e.target.value)} />
                    </Form.Group>
                </Col>
                <Col md={3}>
                    <Form.Group controlId='middleName'>
                        <Form.Label>MIDDLE NAME</Form.Label>
                        <Form.Control type="text" value={props.middleName} onChange={(e)=> props.setMiddleName(e.target.value)} />
                    </Form.Group>
                </Col>
            </Row>
            {/* TODO: ADDRESS */}
            <Row>
                <Col md={3}>
                    <Form.Group controlId='region'>
                        <Form.Label>REGION</Form.Label>
                        <Form.Select value={props.region} onChange={(e)=> handleChangeRegion(e.target.value)}>
                            <option defaultValue hidden>SELECT REGION</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col md={3}>
                    <Form.Group controlId='province'>
                        <Form.Label>PROVINCE</Form.Label>
                        <Form.Select value={props.province} onChange={(e)=> handleChangeProvince(e.target.value)}>
                            <option defaultValue hidden>SELECT PROVINCE</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col md={3}>
                    <Form.Group controlId='city'>
                        <Form.Label>CITY</Form.Label>
                        <Form.Select value={props.city} onChange={(e)=> handleChangeCity(e.target.value)}>
                            <option defaultValue hidden>SELECT CITY</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col md={3}>
                    <Form.Group controlId='barangay'>
                        <Form.Label>BARANGAY</Form.Label>
                        <Form.Select onChange={(e)=> handleChangeBarangay(e.target.value)}>
                            <option defaultValue hidden>SELECT BARANGAY</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
            </Row>
            {/* TODO: LOT & STREETS */}
            <Row>
                <Col md={4}>
                    <Form.Group controlId='lot_block'>
                        <Form.Label>LOT/BLOCK</Form.Label>
                        <Form.Control type="text" value={props.lotBlock} onChange={(e)=>props.setLotBlock(e.target.value)} />
                    </Form.Group>
                </Col>
                <Col md={4}>
                    <Form.Group controlId='street'>
                        <Form.Label>STREET</Form.Label>
                        <Form.Control type="text" value={props.street} onChange={(e)=>props.setStreet(e.target.value)} />
                    </Form.Group>
                </Col>
            </Row>
            {/* TODO: PERSONAL INFO */}
            <Row>
                <Col md={2}>
                    <Form.Group controlId='dob'>
                        <Form.Label>BIRTHDATE</Form.Label>
                        <Form.Control type="date" value={props.dob} onChange={(e)=> props.setDob(e.target.value)} />
                    </Form.Group>
                </Col>
                <Col md={3}>
                    <Form.Group controlId='religion'>
                        <Form.Label>RELIGION</Form.Label>
                        <Form.Control type="text" value={props.religion} onChange={(e)=> props.setReligion(e.target.value)} />
                    </Form.Group>
                </Col>
                <Col md={2}>
                    <Form.Group controlId='civil_status'>
                        <Form.Label>CIVIL STATUS</Form.Label>
                        <Form.Select value={props.civilStatus} onChange={(e)=> props.setCivilStatus(e.target.value)}>
                            <option defaultValue hidden>CIVIL STATUS</option>
                            <option>Single</option>
                            <option>Married</option>
                            <option>Widowed</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col md={2}>
                    <Form.Group controlId='sex'>
                        <Form.Label>SEX</Form.Label>
                        <Form.Select value={props.sex} onChange={(e)=> props.setSex(e.target.value)}>
                            <option defaultValue hidden>SEX</option>
                            <option>MALE</option>
                            <option>FEMALE</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col md={3}>
                    <Form.Group controlId='contact'>
                        <Form.Label>CONTACT NUMBER</Form.Label>
                        <Form.Control type="text" value={props.contact} onChange={(e)=> props.setContact(e.target.value)} />
                    </Form.Group>
                </Col>
            </Row>
            <Button type="submit">SAVE INFORMATION</Button>
        </Form>
    )
}

export default Step1
