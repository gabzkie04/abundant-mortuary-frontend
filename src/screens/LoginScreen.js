import React, {useState} from 'react';
import { Form, Spinner, Row, Col, Button, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {login} from '../actions/userActions';


function LoginScreen({location, history}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const userLogin = useSelector(state => state.userLogin);
    const {loading, error} = userLogin;

    const submitHandler = (e) => 
    {
        e.preventDefault();
        dispatch(login(email, password));
    }

    return (
        <Row className="mt-5">
            <Col md={4}></Col>
            <Col md={4}>
                {
                    loading ?
                    <>
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </>
                    : error ?
                        <Alert variant={'danger'}>
                            Incorrect Credentials!
                        </Alert>
                    : <>{history.push('/dashboard')}</>
                }
                <h4 className="text-center">Admin Login</h4>
                <Form onSubmit={(e) => submitHandler(e)}>
                    <Form.Group controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control value={email} type="text" onChange={(e)=>setEmail(e.target.value)} />
                    </Form.Group>

                    <Form.Group controlId="email" className="mb-2">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                    </Form.Group>
                        <div className="d-grid gap-2">
                            <Button type="submit">Login</Button>
                        </div>
                </Form>
            </Col>
            <Col md={4}></Col>
        </Row>
    )
}

export default LoginScreen
