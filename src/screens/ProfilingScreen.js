import React, {useState} from 'react'
import ProfilingList from '../components/admin/ProfilingList'
import ProfilingForm from '../components/admin/ProfilingForm'
import { Row, Col } from 'react-bootstrap'

function ProfilingScreen() {

    // decides whether to show form or list . . 
    const [action, setAction] = useState();
    return (
        <Row>
            <Col md={12}>
                {
                    action === 'form'
                    ? <ProfilingForm action={action} setAction={setAction} />
                    : <ProfilingList action={action} setAction={setAction} />
                }
                
            </Col>
        </Row>
    )
}

export default ProfilingScreen
