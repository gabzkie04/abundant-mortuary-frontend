import React from 'react'
import { Container } from 'react-bootstrap';
import CollectionForm from '../components/admin/CollectionForm';
import CollectionList from '../components/admin/CollectionList';

function CollectionScreen() {
    return (
            <Container className="mt-5">
                <CollectionForm />
                <CollectionList />
            </Container>
    )
}

export default CollectionScreen
