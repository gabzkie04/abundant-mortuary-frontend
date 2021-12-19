import React from 'react'
import { Form, Col, Row, Button } from 'react-bootstrap';
function Step2(props) {

    const handleBackClick = () =>
    {
        props.setStep(props.step - 1)
    }

    const handleFormSubmit = (e) =>
    {
        e.preventDefault();
        props.setStep(props.step + 1)
    }

    return (
        <Form onSubmit={(e)=>handleFormSubmit(e)}>
            <h4>DATA</h4>
            <Row>
                <Col md={4}>
                    <Form.Group controlId='total_contract_price'>
                        <Form.Label>Total Contract Price</Form.Label>
                        <Form.Control type="text" value={props.totalContractPrice} onChange={(e)=>props.setTotalContractPrice(e.target.value) } />
                    </Form.Group>
                </Col>
                <Col md={4}>
                    <Form.Group controlId='installment_due'>
                        <Form.Label>Installment Due</Form.Label>
                        <Form.Control type="text" value={props.installmentDue} onChange={(e)=>props.setInstallmentDue(e.target.value)} />
                    </Form.Group>
                </Col>
                <Col md={4}>
                    <Form.Group controlId='effective_date'>
                        <Form.Label>Effective Date</Form.Label>
                        <Form.Control type="date" value={props.effectiveDate} onChange={(e)=>props.setEffectiveDate(e.target.value)} />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col md={5}>
                    <Form.Label>Mode of Premium</Form.Label> <br />
                    <Form.Check inline type='radio' name="mode_of_premium" label="Monthly" /> 
                    <Form.Check inline type='radio' name="mode_of_premium" label="Quarter" /> 
                    <Form.Check inline type='radio' name="mode_of_premium" label="Semi-Annual" /> 
                    <Form.Check inline type='radio' name="mode_of_premium" label="Spot-Cash" /> 
                </Col>
                <Col md={2}>
                        <Form.Group controlId='terms'>
                        <Form.Label>Terms</Form.Label>
                        <Form.Control type="number" min="1" value={props.terms} onChange={(e)=>props.setTerms(e.target.value)} />
                    </Form.Group>
                </Col>
                <Col md={3}>
                    <Form.Label>Insurable/Non-Insurable</Form.Label> <br />
                    <Form.Check inline type='radio' name="insurable" label="Monthly" /> 
                    <Form.Check inline type='radio' name="insurable" label="Quarter" /> 
                </Col>
                <Col md={2}>
                        <Form.Group controlId='no_insurable'>
                        <Form.Label>No. Insurable</Form.Label>
                        <Form.Control type="number" min="1" value={props.insurable} onChange={(e)=>props.setInsurable(e.target.value)} />
                    </Form.Group>
                </Col>
            </Row>
            <Button variant="secondary" onClick={()=>handleBackClick()}>Back</Button>
            <Button type="submit">SAVE DATA</Button>
        </Form>
    )
}

export default Step2
