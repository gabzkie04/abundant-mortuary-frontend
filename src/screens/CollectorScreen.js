import React from 'react'
import CollectorList from '../components/admin/CollectorList'
import { Container, Row, Col } from 'react-bootstrap';
import CollectorForm from '../components/admin/CollectorForm';

function CollectorScreen() {
    return (
        <Row>
            <Col md={12}>
                {/* <CollectorList /> */}
                <CollectorForm />
            </Col>
        </Row>
    )
}

export default CollectorScreen
