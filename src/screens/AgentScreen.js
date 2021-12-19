import React from 'react'
import AgentList from '../components/admin/AgentList'
import { Container, Row, Col } from 'react-bootstrap';
import AgentForm from '../components/admin/AgentForm';

function AgentScreen() {
    return (
        <Row>
            <Col md={12}>
                <AgentList />
                {/**<AgentForm /> */}
            </Col>
        </Row>
    )
}

export default AgentScreen
